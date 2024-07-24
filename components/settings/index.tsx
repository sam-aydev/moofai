export default function Settings() {
  return (
    <div>
      <h2 className="text-center py-2 bg-slate-50 rounded-full text-xl font-semibold font-sans lg:w-2/3 lg:mx-auto">
        Settings
      </h2>
      <form className="lg:w-2/3 mx-auto flex  items-center w-full h-full bg-slate-50 py-3 mt-20">
        <div className="w-full px-5">
          <div className="flex justify-between items-center w-full">
            <label htmlFor="">Default Language Input:</label>
            <select name="" id="" className="w-1/2 py-2 rounded px-2">
              <option value="">English</option>
              <option value="">Hindi</option>
              <option value="">Mandarin</option>
              <option value="">French</option>
              <option value="">Germany</option>
            </select>
          </div>
          <div className="flex justify-between items-center w-full mt-4">
            <label htmlFor="">Default Expected Output:</label>
            <select name="" id="" className="w-1/2 py-2 rounded px-2">
              <option value="">English</option>
              <option value="">Hindi</option>
              <option value="">Mandarin</option>
              <option value="">French</option>
              <option value="">Germany</option>
            </select>
          </div>
          <div className="flex justify-between items-center w-full mt-4">
            <label htmlFor="">Number Of Histories:</label>
            <input
              type="number"
              name=""
              id=""
              className="w-1/2 py-2 rounded px-2"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
