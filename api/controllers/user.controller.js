// import User from '../models/user.model.js';
// import bcryptjs from 'bcryptjs';
// import { errorHandler } from '../utils/error.js';
// import jwt from 'jsonwebtoken';
import { ObjectId } from "mongoose";
import { Post, User } from "../models/models.js";

//@access Public
const getAllMemes = async (req, res, next) => {
  try {
    const allMemes = await Post.find();
    res.status(200).json(allMemes);
  } catch (error) {
    next(error);
  }
};

//@access Private
const createMemes = async (req, res, next) => {
  try {
    // data expected from the user in the req.body
    const { content, imgUrl } = req.body;

    // Remove this after creating frontend to store userData
    const userData = await User.findOne({ _id: req.user.id });

    // Create a new Post Object from the data provided by user
    const newPost = await new Post({
      content,
      imgUrl,
      userId: req.user.id,
      author: userData.username,
      likes: [],
      replies: [],
    });

    // Save the Post to the database and respond success to the client

    await newPost.save();
    return res
      .status(200)
      .json({ success: true, message: "Post created successfully!" });
  } catch (error) {
    next(error);
  }
};

//@access Private
const deleteMemes = async (req, res, next) => {
  try {
    // On the frontend, only show the delete button on a meme if
    // the post.userId === currentUser.id
    // the params that should be sent is the postId itself
    ////////////////////////

    await Post.findByIdAndDelete(req.query._id);
    res.status(200).json({ success: true, message: "Post deleted!" });
  } catch (error) {
    next(error);
  }
};

//@access Private
const likeMemes = async (req, res, next) => {
  // Attach the post id to the request.param
  // retrieve the object from the database, update it and save

  // On the front end: If a user's name is included in the post's like array,
  // they won't see the like button, just the number of likes and an option to dislike
  // From the front end sent the post ID and the current user's name

  try {
    const post = await Post.findOne({ _id: req.params.id });
    post.likes = [...post.likes, req.body.username];
    await post.save();

    // const updatePost = await Post.findByIdAndUpdate(req.params.id, {
    //   $set: { likes: post.likes.push(req.body.username) },
    // });

    // Using the set has its usecase...will learn about it.
    return res.status(200).json({ success: true });
  } catch (error) {
    next(error);
  }
};

//@access Private
const replyMemes = async (req, res, next) => {
  //To add a reply to a post, send the post id, the username and the user's profilepicUrl;
  // Retrieve the post, modify the field and save it.

  try {
    const post = await Post.findOne({ _id: req.body.id });

    post.replies = [
      ...post.replies,
      {
        content: req.body.content,
        userPic: req.body.userPic,
        likes: [],
        userName: req.body.userName,
      },
    ];
    await post.save();

    return res.status(200).json({ message: "Reply added!" });
  } catch (error) {
    next(error);
  }
};

export { getAllMemes, createMemes, likeMemes, deleteMemes, replyMemes };

/**
 * content: String,
        likes: [],
        userPic: String,
 */
