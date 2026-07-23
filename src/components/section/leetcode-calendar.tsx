"use client";

import { useEffect, useState } from "react";
import { ActivityCalendar, ThemeInput } from "react-activity-calendar";

interface Activity {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

export default function LeetCodeCalendar({
  username,
  theme,
}: {
  username: string;
  theme: "light" | "dark";
}) {
  const [data, setData] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/leetcode?username=${username}`);
        const result = await response.json();
        
        if (result.data) {
          setData(result.data);
        }
      } catch (error) {
        console.error("Failed to fetch LeetCode data", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [username]);

  const colorTheme: ThemeInput = {
    light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
    dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
  };

  if (loading) {
    return <div className="h-[120px] w-full bg-muted/20 rounded-md animate-pulse"></div>;
  }

  if (!data || data.length === 0) {
    return <div className="text-sm text-muted-foreground">No data available</div>;
  }

  const today = new Date();
  const sixMonthsAgo = new Date();
  sixMonthsAgo.setMonth(today.getMonth() - 6);

  const filteredData = data.filter((activity) => {
    const date = new Date(activity.date);
    return date >= sixMonthsAgo;
  });

  return (
    <ActivityCalendar 
      data={filteredData} 
      theme={colorTheme}
      colorScheme={theme}
      fontSize={12}
      blockSize={12}
      blockMargin={4}
      labels={{
        totalCount: '{{count}} submissions in the last 6 months',
      }}
    />
  );
}
