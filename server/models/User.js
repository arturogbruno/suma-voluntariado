const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    role: {
      type: String,
      enum: ["volunteer", "organization"],
      default: "volunteer"
    },
    imgName: { type: String, default: "imagename" },
    imgPath: {
      type: String,
      default:
        "https://res.cloudinary.com/yelpcampagb/image/upload/v1583187522/ironhack-project3/lckqeh3lvrn5z1yw3k6z.png"
    },
    favOrganizations: [
      {
        type: Schema.Types.ObjectId,
        ref: "Organization"
      }
    ],
    favActivities: [
      {
        type: Schema.Types.ObjectId,
        ref: "Activity"
      }
    ]
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
