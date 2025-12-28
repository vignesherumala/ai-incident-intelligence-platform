import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

export default function TrendLineChart({ data }) {
  return (
    <LineChart width={500} height={300} data={data}>
      <XAxis dataKey="_id" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="count" stroke="#ff7300" />
    </LineChart>
  );
}
