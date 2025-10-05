import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (!task.trim()) return;
    setTodos([...todos, { text: task, completed: false }]);
    setTask("");
  };

  const toggleTodo = (index) => {
    setTodos(
      todos.map((t, i) => (i === index ? { ...t, completed: !t.completed } : t))
    );
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
   <div className="min-h-screen flex items-center justify-center bg-blue-700">
  <div className="w-full max-w-xl bg-white rounded-3xl shadow-lg p-8 h-[550px] overflow-hidden flex flex-col">
    {/* Header and Input same as before */}
    <h1 className="text-center text-5xl font-bold mb-8 text-gray-900 tracking-tight">TaskZ</h1>
    <div className="flex mb-5">
      <input
        className="flex-1 py-3 px-4 rounded-l-2xl bg-blue-100 outline-none border-t border-l border-b border-blue-200 text-gray-800 text-lg"
        type="text"
        value={task}
        placeholder="Add a task"
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && addTodo()}
      />
      <button
        className="bg-blue-600 hover:bg-blue-700 text-white rounded-r-2xl px-7 text-lg font-semibold transition-all"
        onClick={addTodo}
      >
        Add
      </button>
    </div>
    <hr className="mb-7 border-blue-200" />
    {/* Todo list container */}
    <div className="space-y-5 flex-1 overflow-y-auto over pr-2 max-h-[360px]">
      {todos.map((t, i) => (
        <div
          key={i}
          className="flex items-center bg-blue-100 rounded-2xl px-5 py-4 shadow-sm"
        >
          <input
            className="mr-3 scale-125 focus:ring-0"
            type="checkbox"
            checked={t.completed}
            onChange={() => toggleTodo(i)}
          />
          <span
            className={
              "flex-1 text-lg " +
              (t.completed ? "line-through text-gray-400" : "text-gray-800")
            }
          >
            {t.text}
          </span>
          <button
            onClick={() => deleteTodo(i)}
            className="ml-4 text-red-600 text-xl hover:scale-110 transition"
            title="Delete"
          >
            <img width={20} src="/dustbin.png" alt="" />
          </button>
        </div>
      ))}
    </div>
  </div>
</div>

  );
}

export default App;
