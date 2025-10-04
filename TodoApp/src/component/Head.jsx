const Head = () => {
  return (
    <nav className="bg-white text-grey px-1 py-4 rounded-2xl mx-20 flex flex-col items-center text-center w-75">
      <div className="max-w-7xl mx-auto ">
        <h1 className="text-4xl font-bold">TaskZ</h1>
      </div>
      <div className="flex bg-blue-100 rounded-xl mt-3">
        <input  className="bg-blue-100 rounded-xl p-2" type="text" placeholder="Add a task"/>
        <button  className="bg-blue-600 hover:bg-blue-700  rounded-xl px-6 py-2 right-0 text-white transition-all" >Add</button>
      </div>
    </nav>
  );
};

export default Head;
