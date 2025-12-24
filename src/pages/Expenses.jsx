import { useState, useEffect } from "react";
import img7 from "../assets/img7.jpg"; // expense icon
import img8 from "../assets/img8.jpg"; // delete icon

export default function Expenses() {
  const [expenses, setExpenses] = useState([]);
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");

  // Load expenses
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("expenses")) || [];
    setExpenses(stored);
  }, []);

  // Save expenses
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = () => {
    if (!desc || !amount) return;

    const newExpense = {
      id: Date.now(),
      desc,
      amount: Number(amount),
    };

    setExpenses([...expenses, newExpense]);
    setDesc("");
    setAmount("");
  };

  const removeExpense = (id) => {
    setExpenses(expenses.filter((e) => e.id !== id));
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Expenses</h1>

      {/* Add Expense */}
      <div className="flex gap-2 mb-4">
        <input
          className="border p-2 flex-1 rounded"
          placeholder="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <input
          className="border p-2 w-24 rounded"
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button
          onClick={addExpense}
          className="bg-green-600 text-white px-4 rounded"
        >
          Add
        </button>
      </div>

      {/* Expense List */}
      <ul>
        {expenses.map((e) => (
          <li
            key={e.id}
            className="flex justify-between items-center border-b py-2"
          >
            <div className="flex items-center gap-2">
              <img src={img7} className="w-6 h-6" />
              <span>{e.desc}</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="font-semibold">${e.amount}</span>
              <button
                onClick={() => removeExpense(e.id)}
                className="bg-red-600 text-white px-2 py-1 rounded flex items-center gap-1"
              >
                <img src={img8} className="w-4 h-4" />
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
