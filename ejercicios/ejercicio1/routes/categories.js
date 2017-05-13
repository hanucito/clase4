const models = require("../model");
const createError = require('../modules/create-error');
const express = require('express');

const router = express.Router();

const list = (req, res, next) => {
  models.category
    .getAll()
    .then(categories => res.json(categories))
    .catch(err => next(createError(500, 'Interval server error', err.message)));
};

const get = (req, res, next) => {
  models.category
    .getById(req.params.id)
    .then(category => res.json(category))
    .catch(err => next(createError(500, 'Interval server error', err.message)));
};

const create = (req, res, next) => {
  models.category
    .add(req.body)
    .then(category => res.status(201).json(category))
    .catch(err => next(createError(500, 'Interval server error', err.message)));
};

const update = (req, res, next) => {
  models.category
    .update(req.body)
    .then(category => res.json(category))
    .catch(err => next(createError(500, 'Interval server error', err.message)));
};

const remove = (req, res, next) => {
  models.category
    .remove(req.params.id)
    .then(() => res.sendStatus(200))
    .catch(err => next(createError(500, 'Interval server error', err.message)));
};

router.get("/", list);
router.post("/", create);
router.get("/:id", get);
// Por el momento vamos a usar el mismo método
router.put("/:id", update);
router.patch("/:id", update);
router.delete("/:id", remove);

module.exports = router;