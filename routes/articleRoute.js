const express = require("express");
const router = express.Router();
const Article = require("../models/articleModel");

// route pour lister les articles
router.get("/", async (req, res) => {
  try {
    const article = await Article.find();
    res.json(article);
  } catch (error) {
    console.log(error);
  }
});

// route pour creer un article
router.post("/article", async (req, res) => {
  console.log(req.body);
  const article = new Article({
    titre: req.body.titre,
    description: req.body.description,
    prix: req.body.prix,
    disponibilite: req.body.disponibilite,
  });
  try {
    const Article = await article.save();
    res.status("200").json(Article);
  } catch (error) {
    console.log(error);
  }
});

// route pour avoir les informations d'un article
router.get("/:id", async (req, res) => {
  const article = await Article.findById(req.params.id);
  res.json(article);
});

// route pour modifier un article
router.patch("/:id", async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    (article.titre = req.body.titre),
      (article.description = req.body.description),
      (article.prix = req.body.prix),
      (article.disponibilite = req.body.disponibilite);

    try {
      const updateArticle = await article.save();
      res.status("200").json(updateArticle);
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    console.log(error);
  }
});

// route pour supprimer un article
router.delete("/:id", async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    console.log(article);
    article.remove();
    res.json({ message: "Article supprimé" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
