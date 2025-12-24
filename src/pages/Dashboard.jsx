import { useState, useEffect } from "react";
import img1 from "../assets/img1.jpg"; // income
import img2 from "../assets/img2.jpg"; // expenses
import img3 from "../assets/img3.jpg"; // balance
import img4 from "../assets/img4.jpg"; // schedule

export default function Dashboard() {
  const [expenses, setExpenses] = useState([]);
  const [schedules, setSchedules] = useState([]);
  const [income, setIncome] = useState(2000);

  useEffect(() => {
    setExpenses(JSON.parse(localStorage.getItem("expenses")) || []);
    setSchedules(JSON.parse(localStorage.getItem("schedules")) || []);
  }, []);

  const totalExpenses = expenses.reduce(
    (sum, e) => sum + Number(e.amount),
    0
  );

  const balance = income - totalExpenses;

  return (
    <div className="p-6 grid gap-4 md:grid-cols-3">
      {/* Income */}
      <div className="bg-green-200 p-4 rounded flex gap-3 items-center">
        <img src={img1} className="w-8 h-8" />
        <div>
          <h2 className="font-bold">Income</h2>
          <p>${income}</p>
        </div>
      </div>

      {/* Expenses */}
      <div className="bg-red-200 p-4 rounded flex gap-3 items-center">
        <img src={img2} className="w-8 h-8" />
        <div>
          <h2 className="font-bold">Expenses</h2>
          <p>${totalExpenses}</p>
        </div>
      </div>

      {/* Balance */}
      <div className="bg-blue-200 p-4 rounded flex gap-3 items-center">
        <img src={img3} className="w-8 h-8" />
        <div>
          <h2 className="font-bold">Balance</h2>
          <p>${balance}</p>
        </div>
      </div>

      {/* Schedule Preview */}
      <div className="md:col-span-3 bg-yellow-100 p-4 rounded">
        <div className="flex items-center gap-2 mb-2">
          <img src={img4} className="w-6 h-6" />
          <h2 className="font-bold">Today's Schedule</h2>
        </div>

        {schedules.length === 0 ? (
          <p>No schedules added.</p>
        ) : (
          <ul className="list-disc pl-6">
            {schedules.map((s) => (
              <li key={s.id}>
                {s.time} — {s.task}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
