const express = require("express");
const router = express.Router();

const autherSchema = new Schema({
  name: String,
  posts: [
    {
      types: Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
});

module.exports = model("Auther", autherSchema);
