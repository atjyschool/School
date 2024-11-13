"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface CustomTooltipProps {
  active?: boolean;
  payload?: { name: string; value: number; fill: string }[];
  label?: string;
  t: (key: string) => string;
}

const CustomTooltip = ({ active, payload = [], label, t }: CustomTooltipProps) => {
  if (active && payload.length) {
    return (
      <div className="bg-white p-2 rounded shadow-md border border-gray-200">
        <p className="font-semibold">{label}</p>
        {payload.map((entry, index) => (
          <p key={`item-${index}`} style={{ color: entry.fill }}>
            {t(entry.name)}: {entry.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const AttendanceChart = () => {
  const t = useTranslations("Charts");

  const data = [
    {
      name: t("Mon"),
      present: 60,
      absent: 40,
    },
    {
      name: t("Tue"),
      present: 70,
      absent: 60,
    },
    {
      name: t("Wed"),
      present: 90,
      absent: 75,
    },
    {
      name: t("Thu"),
      present: 90,
      absent: 75,
    },
    {
      name: t("Fri"),
      present: 65,
      absent: 55,
    },
  ];

  return (
    <div className="bg-white rounded-lg p-4 h-full">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">{t("Attendance")}</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart width={500} height={300} data={data} barSize={20}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
          />
          <YAxis axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} />
          <Tooltip
            content={<CustomTooltip t={t} />}
            contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }}
          />
          <Legend
            align="left"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
            formatter={(value) => t(value)}
          />
          <Bar
            dataKey="present"
            name="present"
            fill="grey"
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="absent"
            name="absent"
            fill="#C3EBFA"
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;
