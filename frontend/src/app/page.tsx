import QueryForm from "@/components/QueryForm";

export default function Home() {
  return (
    <main className="min-h-screen p-6 bg-white">
      <h1 className="text-4xl font-bold mb-4 text-blue-600">NextStop.AI</h1>
      <QueryForm />
    </main>
  );
}
