// Footer Component for Use

const Footer = () => {
  return (
    <div
      role="footer-mobile"
      className="w-full lg:hidden h-24 overflow-hidden bg-white bottom-0 absolute flex p-7  justify-between"
    >
      <img src="/home.gif" alt="Home Icon" title="Home" />
      <img src="/search.gif" alt="Search Icon" title="Search" />
      <img src="/create.png" alt="Create Post Icon" title="Create Post" />
      <img src="/like.png" alt="Favourite Memes" title="Favourites" />
      <img
        src="/profile.jpeg"
        alt="Profile Picture"
        title="Profile"
        className=" object-cover rounded-full outline-8 h-full bg-slate-500 w-12"
      />
    </div>
  );
};

export default Footer;
