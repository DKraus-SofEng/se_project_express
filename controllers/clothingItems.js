const ClothingItem = require("../models/clothingItem");
const handleError = require("../utils/handleError");

// POST CLOTHING ITEM

const createClothingItem = (req, res) => {
  const { name, weather, imageUrl } = req.body;
  const owner = req.user._id;

  return ClothingItem.create({ name, weather, imageUrl, owner })
    .then((item) => res.status(201).send({ data: item }))
    .catch((err) => handleError(res, err, "createClothingItem"));
};

// GET CLOTHING ITEMS

const getClothingItems = (req, res) => {
  return ClothingItem.find({})
    .then((clothingItems) => res.status(200).send(clothingItems))
    .catch((err) => handleError(res, err, "getClothingItems"));
};

// UPDATE CLOTHING ITEMS

const updateClothingItem = (req, res) => {
  const { itemId } = req.params;
  const { imageUrl } = req.body;
  ClothingItem.findByIdAndUpdate(itemId, { $set: { imageUrl } }, { new: true })
    .orFail()
    .then((clothingItem) => res.status(200).send({ data: clothingItem }))
    .catch((err) => handleError(res, err, "updateClothingItem"));
};

// DELETE CLOTHING ITEMS

const deleteClothingItem = (req, res) => {
  const { itemId } = req.params;
  ClothingItem.findByIdAndDelete(itemId)
    .orFail()
    .then(() => res.status(200).send({ message: "Clothing item deleted" }))
    .catch((err) => handleError(res, err, "deleteClothingItem"));
};

// LIKE CLOTHING ITEM

const likeClothingItem = (req, res) => {
  const { itemId } = req.params;
  const userId = req.user._id;
  ClothingItem.findByIdAndUpdate(
    itemId,
    { $addToSet: { likes: userId } }, // add userId to likes array if not present
    { new: true }
  )
    .orFail()
    .then((item) => res.status(200).send({ data: item }))
    .catch((err) => handleError(res, err, "likeClothingItem"));
};

const dislikeClothingItem = (req, res) => {
  const { itemId } = req.params;
  const userId = req.user._id;
  ClothingItem.findByIdAndUpdate(
    itemId,
    { $pull: { likes: userId } }, // remove userId from likes array
    { new: true }
  )
    .orFail()
    .then((item) => res.status(200).send({ data: item }))
    .catch((err) => handleError(res, err, "dislikeClothingItem"));
};

module.exports = {
  createClothingItem,
  getClothingItems,
  updateClothingItem,
  deleteClothingItem,
  likeClothingItem,
  dislikeClothingItem,
};
