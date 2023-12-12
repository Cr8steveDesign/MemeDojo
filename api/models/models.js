import mongoose from "mongoose";

// Define a UserSchema for creating new Users
const imgStr = [
  "https://img.freepik.com/premium-vector/cartoon-funny-monkey-face-avatar_6996-1144.jpg",
  "https://img.freepik.com/premium-vector/12face_6996-1538.jpg?size=626&ext=jpg",
  "https://img.freepik.com/premium-vector/monkey-funny-cute-smile_54743-16.jpg",
  "https://img.freepik.com/premium-vector/monkey-pirates-cute-with-cigar_54743-18.jpg?size=626&ext=jpg",
  "https://img.freepik.com/premium-vector/modern-flat-illustration-player-monkey_67813-4216.jpg?size=338&ext=jpg&ga=GA1.1.1880011253.1699488000&semt=ais",
  "https://img.freepik.com/premium-vector/ape-monkey-with-glasses-logo-cool-logo-design_443642-81.jpg",
  "https://img.freepik.com/premium-vector/cartoon-funny-monkey-isolated-solid-background_625492-25480.jpg?w=360",
  "https://img.freepik.com/premium-vector/monkey-with-glasses-mascot-isolated-blue_268458-260.jpg?size=338&ext=jpg&ga=GA1.1.1826414947.1699747200&semt=ais",
];

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      default: function getrand() {
        return imgStr[Math.floor(Math.random() * 8)];
      },
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

// Create Post Schema

const postSchema = mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    content: String,
    imgUrl: String,
    author: String,
    likes: [],
    replies: [
      {
        content: String,
        likes: [],
        userPic: String,
        userName: String,
      },
    ],
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

export { User, Post };
