const { Contact } = require("../models/contact");

const { HttpError, ctrlWrapper } = require("../helpers");

const getAll = async (req, res) => {
  const allContacts = await Contact.find();
  res.json(allContacts);
};

const getById = async (req, res) => {
  const { contactId } = req.params;
  const oneContact = await Contact.findById(contactId);

  if (!oneContact) {
    throw HttpError(404, "Not found");
  }

  res.json(oneContact);
};

const add = async (req, res) => {
  const newContact = await Contact.create(req.body);
  res.status(201).json(newContact);
};

const deleteByID = async (req, res) => {
  const { contactId } = req.params;
  const removeContact = await Contact.findByIdAndRemove(contactId);
  if (!removeContact) {
    throw HttpError(404, "Not found");
  }
  res.json({ message: "contact deleted" });
};

const updateByID = async (req, res) => {
  const { contactId } = req.params;

  const editContact = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!editContact) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json(editContact);
};

const updateStatusContact = async (req, res) => {
  const { contactId } = req.params;

  const updateStatus = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });

  if (!updateStatus) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json(updateStatus);
};

module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  add: ctrlWrapper(add),
  deleteByID: ctrlWrapper(deleteByID),
  updateByID: ctrlWrapper(updateByID),
  updateStatusContact: ctrlWrapper(updateStatusContact),
};
