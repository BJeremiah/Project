export default function ScheduleItem({ item, index, handleDelete, handleEdit }) {
  return (
    <div className="flex justify-between items-center p-3 rounded shadow bg-blue-100 text-blue-800">
      <span>{item.time} - {item.activity}</span>
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
