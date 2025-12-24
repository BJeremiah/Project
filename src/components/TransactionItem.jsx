export default function TransactionItem({ transaction, index, handleDelete, handleEdit }) {
  return (
    <div
      className={`flex justify-between items-center p-3 rounded shadow ${
        transaction.amount < 0 ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"
      }`}
    >
      <span>{transaction.description}</span>
      <span>${Math.abs(transaction.amount).toFixed(2)}</span>
      <div className="flex space-x-2">
        <button
          className="bg-yellow-500 px-2 rounded hover:bg-yellow-600 text-white"
          onClick={() => handleEdit(index)}
        >
          Edit
        </button>
        <button
          className="bg-red-600 px-2 rounded hover:bg-red-700 text-white"
          onClick={() => handleDelete(index)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
