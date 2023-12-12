// Component for the Home Page Feed for all Memes
import Post from "./Post";

const profilePic = "../../public/profile.jpeg";
const userName = "Steven200";
const text =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex non possimus perspiciatis cupiditate qui error? Dolorem tenetur officiis voluptas ut libero porro quis iste corrupti? Iusto sed sint magni, dolorum, atque molestiae deserunt odit minus totam, adipisci consectetur laborum quidem!";

const HomeContent = () => {
  // Retrieve and update the post Array
  const postArray = [{ profilePic, userName, text, postId: 12345 }];
  return (
    <>
      <div
        role="content-container"
        className="w-full h-full overflow-scroll scroll no-scrollbar"
      >
        {/* The Content Container Component goes here */}
        {postArray.map((post, indx) => (
          <Post
            key={indx}
            profilePic={post.profilePic}
            userName={post.userName}
            text={post.text}
            postId={post.postId}
          />
        ))}

        {/* Div to ensure scroll up to the bottom footer */}
        <div className="h-[200px]"></div>
      </div>
    </>
  );
};

export default HomeContent;
