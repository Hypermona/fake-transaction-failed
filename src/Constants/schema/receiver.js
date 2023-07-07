import Joi from "joi";

const receiver = Joi.object({
  fullName: Joi.string().min(3).max(30).required(),
  photo: Joi.any(),
  mobile: Joi.string().pattern(new RegExp("^([0|+[0-9]{1,5})?([7-9][0-9]{9})$")),

  upi: Joi.string().pattern(new RegExp("[a-zA-Z0-9\\.\\-]{2,256}\\@[a-zA-Z][a-zA-Z]{2,64}")),
});
export default receiver;
