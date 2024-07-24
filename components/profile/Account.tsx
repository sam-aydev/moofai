import Image from "next/image";
import Avatar from "@/public/avatar.png";

export default function Account() {
  return (
    <div>
      <div className="bg-slate-50 w-3/4 mx-auto py-10 rounded">
        <div className="flex justify-center items-center flex-col">
          <Image
            src={Avatar}
            width={500}
            height={500}
            alt="avatar"
            className="rounded-full size-28"
          />
          <h2 className="mt-4 text-xl font-bold">Hi, Samuel</h2>
          <p className="text-sm ">
            Your profile is <span className="font-semibold">80% complete.</span>
          </p>
        </div>

        <div className="mt-10">
          <h2 className="text-center py-3 rounded-xl bg-white w-1/2 mx-auto">
            Your Details
          </h2>
          <form action="" className="px-3 mt-5">
            <div>
              <label htmlFor="">Username:</label>
              <input
                type="text"
                name=""
                id=""
                defaultValue="samuel"
                className="w-full py-2 bg-transparent px-3 border-white border-2 rounded-full mt-1"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="">Email:</label>
              <input
                type="email"
                name=""
                id=""
                defaultValue="abc@gmail.com"
                className="w-full py-2 bg-transparent px-3 border-white border-2 rounded-full mt-1"
              />
            </div>
          </form>
        </div>

        <div className="px-5 mt-4">
          <p className="text-sm text-slate-500">
            Note: You can change your username by changing your initial username
            in the input field
          </p>
        </div>
      </div>
    </div>
  );
}
