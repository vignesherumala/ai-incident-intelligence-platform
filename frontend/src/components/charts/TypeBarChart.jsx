import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

export default function TypeBarChart({ data }) {
  return (
    <BarChart width={400} height={300} data={data}>
      <XAxis dataKey="_id" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="count" fill="#82ca9d" />
    </BarChart>
  );
}
