import { GoCopy } from "react-icons/go";

export default function HistoryPageId() {
  return (
    <div>
      <div className="bg-slate-50 p-4 rounded-lg lg:w-5/6 lg:mx-auto">
        <h2 className="text-2xl font-bold font-sans text-center">
          Inputed Text
        </h2>
        <p className="mt-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et magnam
          facere maiores vitae atque doloremque non aliquid vel optio,
          voluptatem repellendus dolorum excepturi magni iste debitis unde
          neque, distinctio eum? Omnis deleniti nam, commodi nulla numquam
        </p>
        <button className="flex items-center space-x-2 mt-4 p-4 text-center w-1/3 mx-auto bg-white rounded-xl transition-all duration-200 hover:bg-slate-400">
          <GoCopy />
          <span>Copy Text</span>
        </button>
      </div>
      <div className="text-center">
        <div>|</div>
        <div>|</div>
        <div>|</div>
      </div>
      <div className="bg-slate-50 p-4 rounded-lg lg:w-5/6 lg:mx-auto">
        <h2 className="text-2xl font-bold font-sans text-center">
          Translated Text
        </h2>
        <p className="mt-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et magnam
          facere maiores vitae atque doloremque non aliquid vel optio,
          voluptatem repellendus dolorum excepturi magni iste debitis unde
          neque, distinctio eum? Omnis deleniti nam, commodi nulla numquam
        </p>
        <button className="flex items-center space-x-2 mt-4 p-4 text-center w-1/3 mx-auto bg-white rounded-xl transition-all duration-200 hover:bg-slate-400">
          <GoCopy />
          <span>Copy Text</span>
        </button>
      </div>
    </div>
  );
}
