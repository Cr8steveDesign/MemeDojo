// Post Component
/**
 * 
 { profilePic, userName, comment, postId: 12345, userId: 54321 },
 */

import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Post = ({ picture, userName, text, postId, userPicture }) => {
  //Post Id to be used to delete post and retrieve comments and likes
  const [like, setLike] = useState(false);

  // Handler Functions
  const handleLike = () => setLike(!like);

  postId;
  return (
    <div className="w-full max-w-xl p-5 box-border">
      {/* Post Header */}
      <div className="bg-white rounded-md p-4">
        <div className="h-20  w-full  overflow-x-hidden flex justify-between items-center overflow-hidden ">
          {" "}
          <div className="h-full w-full flex  item-center gap-3 mb-2">
            <img className="h-full" src={userPicture} alt="Profil Picture" />
            <div className="flex flex-col justify-center">
              <p className="text-2xl font-semibold text-indigo-900 cursor-pointer">
                {userName}
              </p>
            </div>
          </div>
          <img
            src="/delete.png"
            alt="delete post"
            title="Delete this post!"
            className="h-1/2 cursor-pointer"
          />
        </div>
        {/* Post Text */}
        <div className="cursor-pointer" id="post-text">
          {text}
        </div>
        {/* Image container */}
        <div>
          <img src={picture} alt="MemePosted by Username" />
        </div>
        {/* Post Reaction and Reply */}
        <div className="h-20  w-full bg-slate-200 p-3 overflow-x-hidden flex justify-between items-center overflow-hidden ">
          <div className="h-full flex gap-3 items-center">
            <img
              className="max-h-full cursor-pointer"
              src={like ? "/like-active.png" : "/like.png"}
              alt="Like Post"
              onClick={handleLike}
            />
            <p className=" text-lg font-semibold">
              {like ? "1 Like" : "0 Likes"}{" "}
            </p>
          </div>
          <img
            src="comment.gif"
            alt="Comment on Post"
            className="mix-blend-multiply cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Post;
