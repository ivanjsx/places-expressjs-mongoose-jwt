// libraries
import { celebrate, Joi, Segments } from "celebrate";



const userIdValidator = celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    userId: Joi.string().required().alphanum().length(24)
  })
});

export default userIdValidator;
