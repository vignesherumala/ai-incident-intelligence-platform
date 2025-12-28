import { PieChart, Pie, Tooltip, Legend } from "recharts";

export default function SeverityPieChart({ data }) {
  return (
    <PieChart width={300} height={300}>
      <Pie
        data={data}
        dataKey="count"
        nameKey="_id"
        cx="50%"
        cy="50%"
        outerRadius={100}
        fill="#8884d8"
        label
      />
      <Tooltip />
      <Legend />
    </PieChart>
  );
}
