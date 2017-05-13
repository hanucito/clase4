const models = require("../model");
const createError = require('../modules/create-error');

exports.list = (req, res, next) => {
  models.category
    .getAll()
    .then(categories => res.json(categories))
    .catch(err => next(createError(500, 'Interval server error', err.message)));
};

exports.get = (req, res, next) => {
  models.category
    .getById(req.params.id)
    .then(category => res.json(category))
    .catch(err => next(createError(500, 'Interval server error', err.message)));
};

exports.create = (req, res, next) => {
  models.category
    .add(req.body)
    .then(category => res.status(201).json(category))
    .catch(err => next(createError(500, 'Interval server error', err.message)));
};

exports.update = (req, res, next) => {
  models.category
    .update(req.body)
    .then(category => res.json(category))
    .catch(err => next(createError(500, 'Interval server error', err.message)));
};

exports.remove = (req, res, next) => {
  models.category
    .remove(req.params.id)
    .then(() => res.sendStatus(200))
    .catch(err => next(createError(500, 'Interval server error', err.message)));
};
