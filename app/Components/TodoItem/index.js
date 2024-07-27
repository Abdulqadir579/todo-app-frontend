const TodoItem = ({ text, onUpdate, onDelete }) => {
  return (
    <>
      <ul role="list" className="divide-y divide-gray-100">
        <li className="drop-shadow-lg flex justify-between items-center gap-x-6 py-3 px-5 my-5 bg-orange-500 text-white">
          <div className="flex min-w-0 gap-x-4">
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6">{text}</p>
            </div>
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <div>
              <button
                type="button"
                onClick={onUpdate}
                className="bg-gray-900 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded me-5"
              >
                Edit
              </button>
              <button
                type="button"
                onClick={onDelete}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        </li>
      </ul>
    </>
  );
};

export default TodoItem;
