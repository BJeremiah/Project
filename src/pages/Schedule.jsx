import { useState, useEffect } from "react";
import img4 from "../assets/img4.jpg"; // schedule icon
import img8 from "../assets/img8.jpg"; // delete icon

export default function Schedule() {
  const [schedules, setSchedules] = useState([]);
  const [task, setTask] = useState("");
  const [time, setTime] = useState("");

  // Load schedules from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("schedules")) || [];
    setSchedules(stored);
  }, []);

  // Save schedules to localStorage
  useEffect(() => {
    localStorage.setItem("schedules", JSON.stringify(schedules));
  }, [schedules]);

  const addSchedule = () => {
    if (!task || !time) return;

    const newSchedule = {
      id: Date.now(),
      task,
      time,
    };

    setSchedules([...schedules, newSchedule]);
    setTask("");
    setTime("");
  };

  const removeSchedule = (id) => {
    setSchedules(schedules.filter((s) => s.id !== id));
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Schedule</h1>

      {/* Add Schedule */}
      <div className="flex gap-2 mb-4">
        <input
          className="border p-2 flex-1 rounded"
          placeholder="Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        {/* ✅ TIME PICKER (RESTORED FEATURE) */}
        <input
          type="time"
          className="border p-2 w-32 rounded"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />

        <button
          onClick={addSchedule}
          className="bg-blue-600 text-white px-4 rounded"
        >
          Add
        </button>
      </div>

      {/* Schedule List */}
      <ul>
        {schedules.map((s) => (
          <li
            key={s.id}
            className="flex justify-between items-center border-b py-2"
          >
            <div className="flex items-center gap-2">
              <img src={img4} className="w-6 h-6" />
              <span>
                {s.time} — {s.task}
              </span>
            </div>

            <button
              onClick={() => removeSchedule(s.id)}
              className="bg-red-600 text-white px-2 py-1 rounded flex items-center gap-1"
            >
              <img src={img8} className="w-4 h-4" />
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
