// Footer Component for Use
import { signOut } from "../redux/user/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  console.log(currentUser);

  const handleSignOut = async () => {
    try {
      await fetch("/api/auth/signout");
      dispatch(signOut());
      navigate("/signin");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      role="footer-mobile"
      className="w-full lg:hidden h-24 overflow-hidden bg-white bottom-0 absolute flex p-6  justify-between"
    >
      <img src="/home.gif" alt="Home Icon" title="Home" />
      <img src="/search.gif" alt="Search Icon" title="Search" />
      <img src="/create.png" alt="Create Post Icon" title="Create Post" />
      <img src="/like.png" alt="Favourite Memes" title="Favourites" />
      <img
        src={currentUser ? currentUser.profilePicture : "/profile.jpeg"}
        alt="Profile Picture"
        title="Profile"
        className=" object-cover rounded-full outline-8 h-full bg-slate-500 w-12 scale-150"
      />
      <img
        src="/signout.png"
        alt="Sign Out"
        title="Sign Out"
        onClick={handleSignOut}
      />
    </div>
  );
};

export default Footer;
