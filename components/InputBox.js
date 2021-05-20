import { useSession } from "next-auth/client";
import Image from "next/image";
import {
  VideoCameraIcon,
  CameraIcon,
  EmojiHappyIcon,
} from "@heroicons/react/solid";
import { useRef, useState } from "react";
import { db, storage } from "../firebase";
import firebase from "firebase";

function InputBox() {
  const [session] = useSession();
  const inputRef = useRef(null);
  const filePickerRef = useRef(null);
  const [imageToPost, setImageToPost] = useState(null);

  const sendPost = (e) => {
    e.preventDefault();

    if (!inputRef.current.value) return;

    db.collection("posts")
      .add({
        message: inputRef.current.value,
        name: session.user.name,
        email: session.user.email,
        image: session.user.image,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then((doc) => {
        if (imageToPost) {
          // Post Upload Images
          const uploadTask = storage
            .ref(`posts/${doc.id}`)
            .putString(imageToPost, "data_url");

          removeImage();

          uploadTask.on(
            "state_change",
            null,
            (error) => console.error(error),
            () => {
              //When the UPLOAD COMPLETES

              storage
                .ref("posts")
                .child(doc.id)
                .getDownloadURL()
                .then((url) => {
                  db.collection("posts").doc(doc.id).set(
                    {
                      postImage: url,
                    },
                    { merge: true }
                  );
                });
              // UPDATE RULES on FIRESTORE
            }
          );
        }
      });

    inputRef.current.value = "";
  };

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      // READ that File as a DATA URL
      reader.readAsDataURL(e.target.files[0]);
    }
    // READ that FILE
    reader.onload = (readerEvent) => {
      setImageToPost(readerEvent.target.result);
    };
    // NOW Image is LOADED in STORE
  };

  const removeImage = () => {
    setImageToPost(null);
  };

  return (
    <div
      className="bg-white p-2 rounded-2xl shadow-md 
    text-gray-500 font-medium mt-6"
    >
      <div className="flex space-x-4 p-4 items-center">
        <Image
          className="rounded-full"
          src={session.user.image}
          width={40}
          height={40}
          layout="fixed"
        />
        <form className="flex flex-1">
          <input
            ref={inputRef}
            className="rounded-full h-12 bg-gray-100 
          flex-grow px-5 focus:outline-none"
            type="text"
            placeholder={`What's on your mind, ${session.user.name}?`}
          />
          <button hidden type="submit" onClick={sendPost}>
            {" "}
            Submit
          </button>
        </form>

        {imageToPost && (
          <div
            onClick={removeImage}
            className="flex flex-col filter 
            hover: brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer"
          >
            <img className="h-10 object-contain" src={imageToPost} alt="" />
            <p className="text-xs text-red-600 text-center">Remove</p>
          </div>
        )}
      </div>

      <div className="flex justify-evenly p-3 border-t">
        <div
          className="flex items-center space-x-1 hover: bg-gray-100 flex-grow 
        justify-center p-2 rounded-xl cursor-pointer"
        >
          <VideoCameraIcon className="h-7 text-red-600" />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>

        <div
          onClick={() => filePickerRef.current.click()}
          className="flex items-center space-x-1 hover: bg-gray-100 flex-grow 
        justify-center p-2 rounded-xl cursor-pointer"
        >
          <CameraIcon className="h-7 text-green-600" />
          <p className="text-xs sm:text-sm xl:text-base">Photo/ Video</p>
          <input
            ref={filePickerRef}
            onChange={addImageToPost}
            type="file"
            hidden
          />
        </div>

        <div
          className="flex items-center space-x-1 hover: bg-gray-100 flex-grow 
        justify-center p-2 rounded-xl cursor-pointer"
        >
          <EmojiHappyIcon className="h-7 text-yellow-600" />
          <p className="text-xs sm:text-sm xl:text-base">Feeling/ Activity</p>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
