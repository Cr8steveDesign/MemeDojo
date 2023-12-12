const MobileHeader = () => {
  return (
    <div
      role="header-container"
      className="w-full h-24 bg-white flex justify-center p-3 items-center"
    >
      <h1 className="text-5xl font-bold cursor-pointer text-indigo-800">
        MemeDojo{" "}
      </h1>
      {/* <div className=" h-full flex gap-4 cursor-pointer item-center p-3">
        <img
          className="h-full scale-90 hover:scale-110 transition ease-out duration-500"
          src="../../public/create.png"
          alt="create meme post"
        />
        <img
          className="h-full hover:scale-110 transition ease-out duration-500"
          src="../../public/like.png"
          alt="create meme post"
        />
      </div> */}
    </div>
  );
};

export default MobileHeader;
