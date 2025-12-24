import { useState, useEffect } from "react";
import img1 from "../assets/img1.jpg"; // Income icon
import img2 from "../assets/img2.jpg"; // Expenses icon
import img3 from "../assets/img3.jpg"; // Balance icon
import img4 from "../assets/img4.jpg"; // Schedule icon

export default function Dashboard() {
  const [expenses, setExpenses] = useState([]);
  const [income, setIncome] = useState(2000); // Default income
  const [schedule, setSchedule] = useState([
    { id: 1, task: "Meeting with team", time: "10:00 AM" },
    { id: 2, task: "Study React", time: "2:00 PM" },
  ]);

  // Load expenses from localStorage
  useEffect(() => {
    const storedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
    setExpenses(storedExpenses);
  }, []);

  // Save expenses to localStorage
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const totalExpenses = expenses.reduce((acc, e) => acc + Number(e.amount), 0);
  const balance = income - totalExpenses;

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Income Card */}
      <div className="bg-green-200 p-4 rounded flex items-center gap-4">
        <img src={img1} alt="Income" className="w-8 h-8" />
        <div>
          <h2 className="font-bold text-lg">Income</h2>
          <p className="text-xl">${income}</p>
        </div>
      </div>

      {/* Expenses Card */}
      <div className="bg-red-200 p-4 rounded flex items-center gap-4">
        <img src={img2} alt="Expenses" className="w-8 h-8" />
        <div>
          <h2 className="font-bold text-lg">Expenses</h2>
          <p className="text-xl">${totalExpenses}</p>
        </div>
      </div>

      {/* Balance Card */}
      <div className="bg-blue-200 p-4 rounded flex items-center gap-4">
        <img src={img3} alt="Balance" className="w-8 h-8" />
        <div>
          <h2 className="font-bold text-lg">Balance</h2>
          <p className="text-xl">${balance}</p>
        </div>
      </div>

      {/* Schedule Preview */}
      <div className="col-span-1 md:col-span-3 bg-yellow-100 p-4 rounded mt-4">
        <div className="flex items-center gap-2 mb-2">
          <img src={img4} alt="Schedule" className="w-6 h-6" />
          <h2 className="font-bold text-lg">Today's Schedule</h2>
        </div>
        <ul className="list-disc pl-6">
          {schedule.map((s) => (
            <li key={s.id}>
              {s.time} - {s.task}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
