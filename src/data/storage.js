// src/data/storage.js

// Load data from localStorage or use default
export const getExpenses = () => {
  const stored = localStorage.getItem("expenses");
  return stored ? JSON.parse(stored) : [];
};

export const saveExpenses = (expenses) => {
  localStorage.setItem("expenses", JSON.stringify(expenses));
};

export const getIncome = () => {
  const stored = localStorage.getItem("income");
  return stored ? Number(stored) : 0;
};

export const saveIncome = (income) => {
  localStorage.setItem("income", JSON.stringify(income));
};
