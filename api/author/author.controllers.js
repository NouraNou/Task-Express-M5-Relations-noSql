const author = require("../../models/auther");
const Post = require("../../models/Post");

exports.postsCreate = async (req, res) => {
  try {
    const { authorId } = req.params;
    const newPost = await Post.create({ ...req.body, author: authorId });
    await author.findByIdAndUpdate(authorId, { $push: { posts: newPost._id } });

    res.status(201).json(newPost);
  } catch (error) {
    next(error);
  }
};

exports.getAuthor = async (req, res) => {
  try {
    const authors = await authors.find().populate("posts");
    res.status(200).json(newPost);
  } catch (error) {
    next(error);
  }
};

exports.createAuthor = async (req, res, next) => {
  try {
    const newAuthor = await author.create(req.body);
    res.status(201).json(newAuthor);
  } catch (error) {
    next(error);
  }
};
