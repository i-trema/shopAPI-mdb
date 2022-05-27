const express = require("express");
const router = express.Router();
const Article = require("../models/articleModel");

// route pour lister les articles
router.get("/", async (request, response) => {
  try {
    const article = await Article.find();
    response.json(article);
  } catch (error) {
    console.log(error);
  }
});

// route pour creer un article
router.post("/article", async (request, response) => {
  console.log(request.body);
  const article = new Article({
    titre: request.body.titre,
    description: request.body.description,
    prix: request.body.prix,
    disponibilite: request.body.disponibilite,
  });
  try {
    const Article = await article.save();
    response.status("200").json(Article);
  } catch (error) {
    console.log(error);
  }
});

// route pour avoir les informations d'un article
router.get("/:id", async (request, response) => {
  const article = await Article.findById(request.params.id);
  response.json(article);
});

// route pour modifier un article
router.patch("/:id", async (request, response) => {
  try {
    const article = await Article.findById(request.params.id);
    (article.titre = request.body.titre),
      (article.description = request.body.description),
      (article.prix = request.body.prix),
      (article.disponibilite = request.body.disponibilite);

    try {
      const updateArticle = await article.save();
      response.status("200").json(updateArticle);
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    console.log(error);
  }
});

// route pour supprimer un article
router.delete("/:id", async (request, response) => {
  try {
    const article = await Article.findById(request.params.id);
    console.log(article);
    article.remove();
    response.json({ message: "Article supprimé" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
