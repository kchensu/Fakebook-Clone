import Image from "next/image";
import { EmojiHappyIcon } from "@heroicons/react/outline";

import { VideoCameraIcon, PhotographIcon } from "@heroicons/react/solid";

function InputBox() {
  function sendPost(e) {
    e.preventDefault();
  }

  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
      <div className="flex space-x-4 p-4 items-center">
        {/*profile*/}
        <Image
          className="rounded-full"
          src="/kevin-profile.jpg"
          width={40}
          height={40}
          layout="fixed"
        />
        <form className="flex flex-1">
          <input
            type="text"
            placeholder="What's on your mind, Kevin?"
            className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
          ></input>
          <buttom hidden type="submit" onClick={sendPost}></buttom>
        </form>
      </div>

      <div className="flex justify justify-evenly p-3 border-t">
        <div className="flex space-x-2 items-center hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>
        <div className="flex space-x-2 items-center hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer">
          <PhotographIcon className="h-7 text-green-500" />
          <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
        </div>
        <div className="flex space-x-2 items-center hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer">
          <EmojiHappyIcon className="h-7 text-yellow-400" />
          <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
