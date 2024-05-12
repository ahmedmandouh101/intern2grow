const Article = require("../models/articleModel");
const factory = require("./handlerFactory");
const catchAsync = require("../utils/catchAsync");

exports.createArticle = factory.createOne(Article);
exports.getAllArticle = factory.getAll(Article);
exports.getArticle = factory.getOne(Article);
exports.updateArticle = factory.updateOne(Article);
exports.deleteArticle = factory.deleteOne(Article);
