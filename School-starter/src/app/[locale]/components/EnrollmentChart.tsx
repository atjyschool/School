"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const EnrollmentChart = () => {
  const t = useTranslations("Charts");

  const data = [
    {
      name: t("Jan"),
      _2023: 2314,
      _2024: 2500,
    },
    {
      name: t("Feb"),
      _2023: 2450,
      _2024: 2600,
    },
    {
      name: t("Mar"),
      _2023: 2150,
      _2024: 2700,
    },
    {
      name: t("Apr"),
      _2023: 2780,
      _2024: 2800,
    },
    {
      name: t("May"),
      _2023: 1890,
      _2024: 2900,
    },
    {
      name: t("Jun"),
      _2023: 2390,
      _2024: 3100,
    },
    {
      name: t("Jul"),
      _2023: 3490,
      _2024: 3300,
    },
    {
      name: t("Aug"),
      _2023: 3490,
      _2024: 3400,
    },
    {
      name: t("Sep"),
      _2023: 3490,
      _2024: 3500,
    },
    {
      name: t("Oct"),
      _2023: 3490,
      _2024: 3600,
    },
    {
      name: t("Nov"),
      _2023: 3490,
      _2024: 3700,
    },
    {
      name: t("Dec"),
      _2023: 3490,
      _2024: 3800,
    },
  ];

  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">{t("Enrollment")}</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
            tickMargin={10}
          />
          <YAxis
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
            tickMargin={20}
          />
          <Tooltip />
          <Legend
            align="center"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px" }}
          />
          <Line
            type="monotone"
            dataKey="_2023"
            stroke="#C3EBFA"
            strokeWidth={5}
          />
          <Line
            type="monotone"
            dataKey="_2024"
            stroke="#CFCEFF"
            strokeWidth={5}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EnrollmentChart;
