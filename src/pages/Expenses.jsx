import { useState, useEffect } from "react";
import img7 from "../assets/img7.jpg"; // Example expense icon
import img8 from "../assets/img8.jpg"; // Another icon

export default function Expenses() {
  const [expenses, setExpenses] = useState([]);
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("expenses")) || [];
    setExpenses(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = () => {
    if (!desc || !amount) return;
    const newExpense = { id: Date.now(), desc, amount: Number(amount) };
    setExpenses([...expenses, newExpense]);
    setDesc("");
    setAmount("");
  };

  const removeExpense = (id) => {
    setExpenses(expenses.filter((e) => e.id !== id));
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="font-bold text-xl mb-4">Add Expense</h2>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className="border p-2 rounded flex-1"
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border p-2 rounded w-24"
        />
        <button
          onClick={addExpense}
          className="bg-green-500 text-white px-3 rounded"
        >
          Add
        </button>
      </div>

      <ul>
        {expenses.map((e) => (
          <li key={e.id} className="flex justify-between items-center border-b py-2">
            <div className="flex items-center gap-2">
              <img src={img7} alt="Expense" className="w-6 h-6" />
              <span>{e.desc}</span>
            </div>
            <div className="flex gap-2">
              <span>${e.amount}</span>
              <button
                className="bg-red-500 px-2 py-1 rounded text-white flex items-center gap-1"
                onClick={() => removeExpense(e.id)}
              >
                <img src={img8} alt="Remove" className="w-4 h-4" />
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
