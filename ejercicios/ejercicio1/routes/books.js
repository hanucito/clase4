const models = require("../model");

const router = require('express').Router();

const list = (req, res) => {
  models.book
    .getAll(req.query.q)
    .then(books => res.json(books))
    .catch(err => res.status(500).json({ err }));
};

const get = (req, res) => {
  models.book
    .getById(req.params.id)
    .then(book => res.json(book))
    .catch(err => res.status(500).json({ err }));
};

const create = (req, res) => {
  models.book
    .add(req.body)
    .then(book => res.status(201).json(book))
    .catch(err => res.status(500).json({ err }));
};

const update = (req, res) => {
  models.book
    .update(req.body)
    .then(book => res.json(book))
    .catch(err => res.status(500).json({ err }));
};

const remove = (req, res) => {
  models.book
    .remove(req.params.id)
    .then(() => res.sendStatus(200))
    .catch(err => res.status(500).json({ err }));
};

router.get("/", list);
router.post("/", create);
router.get("/:id", get);

router.put("/:id", update);
router.patch("/:id", update);
router.delete("/:id", remove);

module.exports = router;