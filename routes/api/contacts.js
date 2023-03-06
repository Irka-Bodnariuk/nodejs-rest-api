const express = require("express");

const {
  ctrlContacts: {
    getAll,
    getById,
    add,
    deleteByID,
    updateByID,
    updateStatusContact,
  },
} = require("../../controllers");

const { validateBody, isValidId, authenticate } = require("../../middlewares");

const { schemas } = require("../../models/contact");

const router = express.Router();

router.get("/", authenticate, getAll);

router.get("/:contactId", authenticate, isValidId, getById);

router.post("/", authenticate, validateBody(schemas.addSchema), add);

router.delete("/:contactId", authenticate, isValidId, deleteByID);

router.put(
  "/:contactId",
  authenticate,
  isValidId,
  validateBody(schemas.addSchema),
  updateByID
);

router.patch(
  "/:contactId/favorite",
  authenticate,
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  updateStatusContact
);

module.exports = router;
