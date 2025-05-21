"use client";

import { useState } from "react";
import api from "@/lib/api";

export default function QueryForm() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await api.get("/status"); // Replace with dynamic intent route later
      setResponse(res.data);
    } catch (err) {
      setResponse({ error: "Something went wrong" });
    }
  };

  return (
    <div className="p-4">
      {response && (
        <pre className="mt-4 bg-black p-3 rounded">
          {JSON.stringify(response, null, 2)}
        </pre>
      )}
      <form onSubmit={handleSubmit} className="space-x-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border px-4 py-2 rounded"
          placeholder="Ask about the tube..."
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Ask
        </button>
      </form>
    </div>
  );
}
