export default function StatCard({ title, value }) {
  return (
    <div className="bg-white p-4 rounded shadow flex flex-col items-center justify-center">
      <p className="text-gray-500">{title}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}
