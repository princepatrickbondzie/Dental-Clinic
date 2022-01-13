const Article = require("../models/Article");

const getArticles = async (req, res) => {
  const articles = await Article.find();
  res.status(200).json({ articles });
};

const getArticle = async (req, res) => {
  const id = req.params;
  const article = await Article.findById(id);
  res.status(200).json({ article });
};

const createArticle = async (req, res) => {
  console.log(req.body);
  try {
    const article = await Article.create({ ...req.body, image: req.file.path });
    res.status(201).json({ article });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateArticle = async (req, res) => {
  const id = req.params;
  const article = await Article.findByIdAndUpdate(id, req.body, { new: true });
  res.status(200).json({ article });
};

const deleteArticle = async (req, res) => {
  const id = req.params;
  await Article.findByIdAndDelete(id);
  res.status(200).json({ message: "Doctor deleted Successfully!" });
};

module.exports = {
  getArticle,
  getArticles,
  createArticle,
  updateArticle,
  deleteArticle,
};
