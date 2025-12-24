import { useState, useEffect } from "react";

export default function Schedule() {
  const [activities, setActivities] = useState(() => {
    const saved = localStorage.getItem("activities");
    return saved ? JSON.parse(saved) : [];
  });
  const [name, setName] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    localStorage.setItem("activities", JSON.stringify(activities));
  }, [activities]);

  const addActivity = (e) => {
    e.preventDefault();
    if (!name || !time) return;
    setActivities([...activities, { id: Date.now(), name, time }]);
    setName("");
    setTime("");
  };

  return (
    <div className="p-4 min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Schedule</h1>

      <form
        className="flex flex-col md:flex-row gap-2 mb-6"
        onSubmit={addActivity}
      >
        <input
          type="text"
          placeholder="Activity"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2 rounded shadow flex-1"
        />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="p-2 rounded shadow"
        />
        <button
          type="submit"
          className="p-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700"
        >
          Add
        </button>
      </form>

      <div className="grid gap-4">
        {activities.map((a) => (
          <div
            key={a.id}
            className="p-4 rounded shadow bg-white hover:shadow-lg hover:scale-105 transition-transform duration-300 flex justify-between"
          >
            <h2 className="font-bold">{a.name}</h2>
            <p className="text-gray-600">{a.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
