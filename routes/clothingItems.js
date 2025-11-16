const router = require("express").Router();
const {
  createClothingItem,
  getClothingItems,
  updateClothingItem,
  deleteClothingItem,
  likeClothingItem,
  dislikeClothingItem,
} = require("../controllers/clothingItems");

// CRUD

// CREATE
router.post("/", createClothingItem);

// READ
router.get("/", getClothingItems);

// UPDATE
router.put("/:itemId", updateClothingItem);
router.put("/:itemId/likes", likeClothingItem);

// Dislike (remove like from) a clothing item
router.delete("/:itemId/likes", dislikeClothingItem);

// DELETE
router.delete("/:itemId", deleteClothingItem);

module.exports = router;
