import { dummyIssues } from "../data";
import { CheckCircle, Clock, AlertCircle } from "lucide-react";

export default function Track() {
  return (
    <div className="max-w-4xl mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Track Your Reports</h1>
      <ul className="space-y-4">
        {dummyIssues.map((issue) => (
          <li
            key={issue.id}
            className="bg-white p-4 shadow rounded flex justify-between items-center"
          >
            <div>
              <h3 className="font-semibold">{issue.title}</h3>
              <p className="text-sm text-gray-600">{issue.description}</p>
              <p className="text-xs text-gray-400">{issue.location}</p>
            </div>
            <div className="flex items-center gap-2">
              {issue.status === "resolved" && (
                <CheckCircle className="text-green-600" />
              )}
              {issue.status === "in_progress" && (
                <Clock className="text-blue-600" />
              )}
              {issue.status === "pending" && (
                <AlertCircle className="text-yellow-600" />
              )}
              <span className="capitalize">{issue.status}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
