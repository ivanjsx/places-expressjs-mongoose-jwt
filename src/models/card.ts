// libraries
import { model, Schema } from "mongoose";

// validators
import urlValidator from "../validators/url";

// constants
import { MAX_NAME_LENGTH, MIN_NAME_LENGTH } from "utils/constants";



interface CardInterface {
  name: string;
  link: string;
  createdAt: Date;
  owner: Schema.Types.ObjectId;
  likes: Array<Schema.Types.ObjectId>;
};

const CardSchema = new Schema<CardInterface>({
  name: {
    type: String,
    required: true,
    minlength: MIN_NAME_LENGTH,
    maxlength: MAX_NAME_LENGTH
  },
  link: {
    type: String,
    required: true,
    validate: urlValidator
  },
  owner: {
    ref: "user",
    required: true,
    type: Schema.Types.ObjectId
  },
  likes: {
    default: [],
    type: [
      {
        type: Schema.Types.ObjectId,
        ref: "user"
      }
    ],
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const CardModel = model<CardInterface>("card", CardSchema);

export default CardModel;
