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
import { Link } from "@tanstack/react-router";
import { Clock, TrendingUp, Activity, ChevronRight } from "lucide-react";

const data = [
  {
    category: "Water Supply",
    resolved: 30,
    unresolved: 20,
    avgTime: "2.5 days",
    totalProblems: 50,
    color: "#3b82f6",
  },
  {
    category: "Infrastructure",
    resolved: 20,
    unresolved: 15,
    avgTime: "4.2 days",
    totalProblems: 35,
    color: "#22c55e",
  },
  {
    category: "Drainage",
    resolved: 30,
    unresolved: 19,
    avgTime: "1.8 days",
    totalProblems: 49,
    color: "#f59e0b",
  },
  {
    category: "Road Maintenance",
    resolved: 45,
    unresolved: 20,
    avgTime: "3.1 days",
    totalProblems: 65,
    color: "#8b5cf6",
  },
  {
    category: "Sanitation",
    resolved: 29,
    unresolved: 18,
    avgTime: "1.2 days",
    totalProblems: 47,
    color: "#ec4899",
  },
  {
    category: "Traffic",
    resolved: 19,
    unresolved: 13,
    avgTime: "2.8 days",
    totalProblems: 32,
    color: "#14b8a6",
  },
  {
    category: "Electricity",
    resolved: 32,
    unresolved: 11,
    avgTime: "0.8 days",
    totalProblems: 43,
    color: "#ef4444",
  },
  {
    category: "Others",
    resolved: 15,
    unresolved: 6,
    avgTime: "3.5 days",
    totalProblems: 21,
    color: "#6b7280",
  },
];

export default function Analytics() {
  const totalProblems = data.reduce((sum, item) => sum + item.totalProblems, 0);
  const totalResolved = data.reduce((sum, item) => sum + item.resolved, 0);
  const totalUnresolved = data.reduce((sum, item) => sum + item.unresolved, 0);
  const overallResolutionRate = ((totalResolved / totalProblems) * 100).toFixed(
    1
  );

  return (
    <div className="max-w-6xl mx-auto mt-8 space-y-8 p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">
          Analytics Dashboard
        </h1>
        <div className="flex items-center space-x-4 text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <Activity className="w-4 h-4" />
            <span>Last updated: {new Date().toLocaleDateString()}</span>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">
                Total Problems
              </p>
              <p className="text-2xl font-bold text-gray-900">
                {totalProblems}
              </p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Activity className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Resolved</p>
              <p className="text-2xl font-bold text-green-600">
                {totalResolved}
              </p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Unresolved</p>
              <p className="text-2xl font-bold text-red-600">
                {totalUnresolved}
              </p>
            </div>
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
              <Clock className="w-6 h-6 text-red-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">
                Resolution Rate
              </p>
              <p className="text-2xl font-bold text-blue-600">
                {overallResolutionRate}%
              </p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Bar Chart */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Problems by Category
          </h2>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={data} barGap={8}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="category"
                angle={-45}
                textAnchor="end"
                interval={0}
                height={100}
                fontSize={12}
              />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="resolved"
                stackId="a"
                fill="#22c55e"
                name="Resolved"
              />
              <Bar
                dataKey="unresolved"
                stackId="b"
                fill="#ef4444"
                name="Unresolved"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Category Timeline Cards */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Category Timeline Overview
          </h2>
          <div className="space-y-3 max-h-[400px] overflow-y-auto">
            {data.map((item) => (
              <Link
                key={item.category}
                to={`/analytics/category/${encodeURIComponent(item.category)}`}
                className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200 hover:border-gray-300"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <h3 className="font-medium text-gray-800">
                        {item.category}
                      </h3>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                      <div>
                        <span className="text-gray-500">Avg Resolution:</span>
                        <span className="ml-1 font-medium">{item.avgTime}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Total:</span>
                        <span className="ml-1 font-medium">
                          {item.totalProblems}
                        </span>
                      </div>
                    </div>
                    <div className="mt-2">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-green-500 h-2 rounded-full"
                          style={{
                            width: `${
                              (item.resolved / item.totalProblems) * 100
                            }%`,
                          }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>{item.resolved} resolved</span>
                        <span>{item.unresolved} pending</span>
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Responsive Timeline Section */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          Resolution Timeline by Category
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {data.map((item) => (
            <Link
              key={item.category}
              to={`/analytics/category/${encodeURIComponent(item.category)}`}
              className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-all hover:border-yellow-300 group"
            >
              <div className="flex items-center space-x-3 mb-3">
                <div
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: item.color }}
                ></div>
                <h3 className="font-medium text-gray-800 group-hover:text-yellow-600 transition-colors">
                  {item.category}
                </h3>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Avg Time:</span>
                  <span className="font-medium text-gray-800">
                    {item.avgTime}
                  </span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Success Rate:</span>
                  <span className="font-medium text-green-600">
                    {((item.resolved / item.totalProblems) * 100).toFixed(0)}%
                  </span>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-1.5 mt-3">
                  <div
                    className="bg-gradient-to-r from-green-400 to-green-600 h-1.5 rounded-full transition-all duration-300"
                    style={{
                      width: `${(item.resolved / item.totalProblems) * 100}%`,
                    }}
                  ></div>
                </div>

                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>{item.resolved} done</span>
                  <span>{item.unresolved} pending</span>
                </div>
              </div>

              <div className="mt-3 text-xs text-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity">
                Click to view details →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
