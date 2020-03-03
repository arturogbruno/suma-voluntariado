const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const organizationSchema = new Schema(
  {
    name: String,
    address: String,
    email: String,
    phone: String,
    webpage: String,
    description: String,
    imgName: { type: String, default: "imagename" },
    imgPath: {
      type: String,
      default:
        "https://res.cloudinary.com/yelpcampagb/image/upload/v1583187522/ironhack-project3/ooupp2ez9quvgooe3biz.png"
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Organization = mongoose.model("Organization", organizationSchema);
module.exports = Organization;