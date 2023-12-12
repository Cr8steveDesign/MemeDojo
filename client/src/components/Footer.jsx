// Footer Component for Use

const Footer = () => {
  return (
    <div
      role="footer-mobile"
      className="w-full lg:hidden h-24 overflow-hidden bg-white bottom-0 absolute flex p-6 justify-between"
    >
      <img src="../../public/home.gif" alt="Home Icon" title="Home" />
      <img src="../../public/search.gif" alt="Search Icon" title="Search" />
      <img
        src="../../public/create.png"
        alt="Create Post Icon"
        title="Create Post"
      />
      <img
        src="../../public/like.png"
        alt="Favourite Memes"
        title="Favourites"
      />
      <img
        src="../../public/profile.jpeg"
        alt="Profile Picture"
        title="Profile"
        className=" object-cover rounded-full outline-8 h-full bg-slate-500 w-12"
      />
    </div>
  );
};

export default Footer;
