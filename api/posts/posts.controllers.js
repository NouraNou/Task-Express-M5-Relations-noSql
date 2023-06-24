const Post = require("../../models/Post");
const Tag = require ("..//../models/Tag")

exports.fetchPost = async (postId, next) => {
  try {
    const post = await Post.findById(postId);
    return post;
  } catch (error) {
    next(error);
  }
};

// exports.postsCreate = async (req, res) => {
//   try {
//     const newPost = await Post.create(req.body);
//     res.status(201).json(newPost);
//   } catch (error) {
//     next(error);
//   }
// };

exports.postsDelete = async (req, res) => {
  try {
    await Post.findByIdAndRemove({ _id: req.post.id });
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.postsUpdate = async (req, res) => {
  try {
    await Post.findByIdAndUpdate(req.post.id, req.body);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};



exports.postsGet = async (req, res) => {
  try {
    const posts = await Post.find().populate("tags");
    res.json(posts);
  } catch (error) {
    next(error);
  }
};

exports.tagsGet = async (req, res) => {
  try {
    const tags = await Tag.find().populate("tags");
    res.json(tags);
  } catch (error) {
    next(error);
  }
};

exports.creatTag = async (req,res,next) => {
  try {
    const tag = await Tag.create(req.body);
    return res.status(201).json(tag);
  }catch(error){
    next(error)
  }
}
 
exports.tagAdd = async (req , res , next ) => {
  try {
    const {tagId} = req.params;
    const tag = await Tag.findById(tagId)

     await Post.findByIdAndUpdate(req.post._id , {$push: {tags :tag._id}});
     await Tag.findByIdAndUpdate(TagId, {$push : {posts: req.post._id}});

     res.status(204),
  }catch (error){
      next(error);
    }
  }

  exports.tagAdd = async (req, res, next){
    try {
      const{tagId}= req.params;
      const tag = await Tag.findById (tagId);

      await Post.findByIdAndUpdate(req.post._id,{$push: {tags:tag_id}});
      await Tag.findByIdAndUpdate(tagId, {$push: {posts:req.post._id}});
      res.status(204).end();
    }catch (error){
      next (error);
    }
  }