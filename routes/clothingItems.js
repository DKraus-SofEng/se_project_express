const router = require("express").Router();
const {
  createClothingItem,
  getClothingItems,
  updateClothingItem,
  deleteClothingItem,
  likeClothingItem,
  dislikeClothingItem,
} = require("../controllers/clothingItems");
const auth = require("../middlewares/auth");

// CRUD

// CREATE
router.post("/", auth, createClothingItem);

// READ
router.get("/", getClothingItems);

// UPDATE
router.put("/:itemId", updateClothingItem);
router.put("/:itemId/likes", auth, likeClothingItem);

// Dislike (remove like from) a clothing item
router.delete("/:itemId/likes", auth, dislikeClothingItem);

// DELETE
router.delete("/:itemId", auth, deleteClothingItem);

module.exports = router;
