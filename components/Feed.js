import InputBox from "./InputBox";
import Posts from "./Posts";
import Stories from "./Stories";

function Feed() {
  return (
    <div
      className="flex-grow h-screen pb-44 pt-6 mr-4 
    cl:mr-40 overflow-y-auto scrollbar-hide"
    >
      <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl">
        {/** STORIES */}
        <Stories />
        {/** INPUT BOX */}
        <InputBox />
        {/** POSTS */}
        <Posts />
      </div>
    </div>
  );
}

export default Feed;
// 1:48:33
