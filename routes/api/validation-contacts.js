const Joi = require("joi");

const postSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
}).required();

const putSchema = Joi.object({
  name: Joi.string(),
  email: Joi.string().email(),
  phone: Joi.string(),
}).or('name', 'email', 'phone').required();

const favoriteShema = Joi.object({
  favorite: Joi.boolean().required(),
});


module.exports = {
  postSchema,
  putSchema,
  favoriteShema,
};