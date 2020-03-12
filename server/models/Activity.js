const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const activitySchema = new Schema(
  {
    title: String,
    description: String,
    dates: [{ type: Date }],
    time: String,
    location: String,
    coord: {
      lat: Number,
      lng: Number
    },
    imgName: { type: String, default: "imagename" },
    imgPath: {
      type: String,
      default:
        "https://res.cloudinary.com/yelpcampagb/image/upload/v1583187522/ironhack-project3/ciyeheb3hdeetj1fmddn.png"
    },
    category: {
      name: String,
      description: String,
      imgPath: String
    },
    minParticipants: Number,
    maxParticipants: Number,
    requirements: String,
    organization: {
      type: Schema.Types.ObjectId,
      ref: "Organization"
    },
    participants: [
      {
        type: Schema.Types.ObjectId,
        ref: "User"
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

const Activity = mongoose.model("Activity", activitySchema);
module.exports = Activity;
