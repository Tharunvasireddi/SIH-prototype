import { useState } from "react";
import { Camera, MapPin } from "lucide-react";

export default function Report() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    priority: "Low",
    location: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000); // auto clear
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md mt-8">
      <h1 className="text-2xl font-bold mb-4">Report a Problem</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Problem Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="w-full border p-2 rounded"
          required
        />
        <textarea
          placeholder="Problem Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="w-full border p-2 rounded"
          rows="3"
        ></textarea>
        <input
          type="text"
          placeholder="Location"
          value={form.location}
          onChange={(e) => setForm({ ...form, location: e.target.value })}
          className="w-full border p-2 rounded"
          required
        />
        <select
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
          className="w-full border p-2 rounded"
        >
          <option value="">Select Category</option>
          <option>Road Maintenance</option>
          <option>Infrastructure</option>
          <option>Sanitation</option>
          <option>Water Supply</option>
          <option>Traffic</option>
          <option>Drainage</option>
        </select>
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded hover:bg-gray-200"
          >
            <Camera size={18} /> Upload Photo
          </button>
          <button
            type="button"
            className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded hover:bg-gray-200"
          >
            <MapPin size={18} /> Auto Location
          </button>
        </div>
        <button
          type="submit"
          className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600"
        >
          Submit Report
        </button>
      </form>

      {submitted && (
        <div className="mt-4 p-3 bg-green-100 text-green-700 rounded">
          ✅ Problem submitted successfully! You can track it in "Track Reports".
        </div>
      )}
    </div>
  );
}
