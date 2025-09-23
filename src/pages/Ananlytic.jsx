import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { category: "Water Supply", resolved: 30, unresolved: 20 },
  { category: "Infrastructure", resolved: 20, unresolved: 15 },
  { category: "Drainage", resolved: 30, unresolved: 19 },
  { category: "Road Maintenance", resolved: 45, unresolved: 20 },
  { category: "Sanitation", resolved: 29, unresolved: 18 },
  { category: "Traffic", resolved: 19, unresolved: 13 },
  { category: "Electricity", resolved: 32, unresolved: 11 },
    { category: "Others", resolved:15 , unresolved: 6 },

];

// Assign unique colors per sector
const COLORS = [
  "#ef4444", // red
  "#3b82f6", // blue
  "#22c55e", // green
  "#f59e0b", // amber
  "#8b5cf6", // violet
  "#ec4899", // pink
  "#14b8a6", // teal
];

export default function Analytics() {
  return (
    <div className="max-w-6xl mx-auto mt-8 space-y-8">
      <h1 className="text-2xl font-bold">Analytics</h1>

      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data} barGap={8}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" angle={0} textAnchor="end" interval={0} />
          <YAxis />
          <Tooltip />
          <Legend />

          {/* Double bars: Resolved & Unresolved */}
          <Bar dataKey="resolved" stackId="a" fill="#22c55e" name="Resolved" />
          <Bar dataKey="unresolved" stackId="b" fill="#ef4444" name="Unresolved" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
