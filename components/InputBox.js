import Image from "next/image";
import { useRef, useState } from "react";
import { EmojiHappyIcon } from "@heroicons/react/outline";

import { VideoCameraIcon, PhotographIcon } from "@heroicons/react/solid";
import { db } from "../firebase";
import firebase from "firebase";

function InputBox() {
  const inputRef = useRef(null);
  const filepickerRef = useRef(null);
  const [imageToPost, setImageToPost] = useState(null);

  const sendPost = (e) => {
    e.preventDefault();
    if (!inputRef.current.value) {
      return;
    }
    db.collection("posts").add({
      message: inputRef.current.value,
    });
    inputRef.current.value = "";
  };
  // const sendPost = (e) => {
  //   e.preventDefault();
  // };

  const addImageToPost = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setImageToPost(readerEvent.target.result);
    };
  };

  const removeImage = (e) => {
    setImageToPost(null);
  };

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
            ref={inputRef}
            className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
          />
          <buttom hidden type="submit" onClick={sendPost}></buttom>
        </form>

        {imageToPost && (
          <div
            onClick={removeImage}
            className="flex flex-col filter hover:brightnes-110 transition duration-150 transform hover:scale-105 cursor-pointer"
          >
            <img className="h-1" src={imageToPost} alt="" />
            <p className="text-xs text-red-500 text-center">Remove</p>
          </div>
        )}
      </div>

      <div className="flex justify justify-evenly p-3 border-t">
        <div className="flex space-x-2 items-center hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>

        <div
          onClick={() => filepickerRef.current.click()}
          className="flex space-x-2 items-center hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer"
        >
          <PhotographIcon className="h-7 text-green-500" />
          <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
          <input
            onChange={addImageToPost}
            ref={filepickerRef}
            type="file"
            hidden
          />
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
