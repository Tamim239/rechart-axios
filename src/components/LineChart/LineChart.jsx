import { LineChart as LChart, Line, Tooltip, XAxis, YAxis } from "recharts";

export const LineChart = () => {
  const salesAndActivityData = [
    { name: "Jan", sales: 4000, steps: 5000 },
    { name: "Feb", sales: 3000, steps: 6000 },
    { name: "Mar", sales: 5000, steps: 7000 },
    { name: "Apr", sales: 6000, steps: 8000 },
    { name: "May", sales: 3000, steps: 9000 },
    { name: "Jun", sales: 7000, steps: 10000 },
    { name: "Jul", sales: 9000, steps: 11000 },
    { name: "Aug", sales: 10000, steps: 12000 },
    { name: "Sep", sales: 12000, steps: 13000 },
    { name: "Oct", sales: 9000, steps: 14000 },
    { name: "Nov", sales: 13000, steps: 15000 },
    { name: "Dec", sales: 15000, steps: 16000 },
  ];

  return (
    <div>
      <LChart width={800} height={400} data={salesAndActivityData}>
        <XAxis dataKey={'name'}></XAxis>
        <Line dataKey="sales" stroke="red"></Line>
        <Line dataKey="steps" stroke="red"></Line>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
      </LChart>
    </div>
  );
};
