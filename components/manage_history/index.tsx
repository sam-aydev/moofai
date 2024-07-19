export default function History() {
  return (
    <div className="lg:w-2/3 md:mx-auto">
      <h2 className="text-center py-2 bg-slate-50 rounded-full text-xl font-semibold font-sans">
        Manage History
      </h2>
      <div className="mt-8">
        <div className="flex space-x-3">
          <button className="bg-slate-50 p-2 rounded hover:bg-slate-200">
            Sort By Descending
          </button>
          <button className="bg-slate-50 p-2 rounded hover:bg-slate-200">
            Sort By Ascending
          </button>
        </div>
        <div className="flex justify-between items-center mt-3 bg-slate-50 py-2 px-4">
          <div>
            <p className="font-semibold">I am going somewhere...</p>
            <p className="text-xs">10hrs ago</p>
          </div>
          <div className="flex space-x-2">
            <button className="bg-white p-2 rounded-xl transition-all duration-200  hover:bg-slate-500 hover:text-white">
              View
            </button>
            <button className="bg-slate-200 p-2 rounded-xl transition-all duration-200  hover:bg-slate-500 hover:text-white">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
