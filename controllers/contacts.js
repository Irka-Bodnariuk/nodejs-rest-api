const contacts = require("../models/contacts");

const { HttpError, ctrlWrapper } = require("../helpers");

const getAll = async (req, res) => {
  const allContacts = await contacts.listContacts();
  res.json(allContacts);
};
const getById = async (req, res) => {
  const { contactId } = req.params;
  const oneContact = await contacts.getContactById(contactId);

  if (!oneContact) {
    throw HttpError(404, "Not found");
  }

  res.json(oneContact);
};
const add = async (req, res) => {
  const newContact = await contacts.addContact(req.body);
  res.status(201).json(newContact);
};

const deleteByID = async (req, res) => {
  const { contactId } = req.params;
  const removeContact = await contacts.removeContact(contactId);
  if (!removeContact) {
    throw HttpError(404, "Not found");
  }
  res.json({ message: "contact deleted" });
};

const updateByID = async (req, res) => {
  const { contactId } = req.params;

  const editContact = await contacts.updateContact(contactId, req.body);
  res.status(200).json(editContact);
};
module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  add: ctrlWrapper(add),
  deleteByID: ctrlWrapper(deleteByID),
  updateByID: ctrlWrapper(updateByID),
};
