import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get('username');

  if (!username) {
    return NextResponse.json({ error: 'Username is required' }, { status: 400 });
  }

  try {
    const response = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          query userProfileCalendar($username: String!, $year: Int) {
            matchedUser(username: $username) {
              userCalendar(year: $year) {
                submissionCalendar
              }
            }
          }
        `,
        variables: {
          username: username,
        },
      }),
      next: { revalidate: 3600 },
    });

    const data = await response.json();
    const calendarStr = data?.data?.matchedUser?.userCalendar?.submissionCalendar;
    
    if (!calendarStr) {
      return NextResponse.json({ data: [] });
    }
    
    const calendarData = JSON.parse(calendarStr);
    
    // Create an array of Activity
    const dates = [];
    const today = new Date();
    const oneYearAgo = new Date(today);
    oneYearAgo.setDate(today.getDate() - 365);
    
    const timeMap = new Map();
    for (const [timestamp, count] of Object.entries(calendarData)) {
      const date = new Date(parseInt(timestamp) * 1000);
      const dateStr = date.toISOString().split("T")[0];
      timeMap.set(dateStr, count);
    }
    
    let current = new Date(oneYearAgo);
    while (current <= today) {
      const dateStr = current.toISOString().split("T")[0];
      const count = (timeMap.get(dateStr) || 0) as number;
      
      let level = 0;
      if (count > 0) level = 1;
      if (count > 2) level = 2;
      if (count > 4) level = 3;
      if (count > 6) level = 4;
      
      dates.push({
        date: dateStr,
        count,
        level,
      });
      
      current.setDate(current.getDate() + 1);
    }
    
    return NextResponse.json({ data: dates });
  } catch (error) {
    console.error("Error fetching LeetCode data:", error);
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}
