const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const activitySchema = new Schema(
  {
    title: String,
    description: String,
    date: [{ type: Date }],
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
      type: String,
      enum: [
        "ambiental",
        "comunitario",
        "cultural",
        "deportivo",
        "educativo",
        "ocio y tiempo libre",
        "protección civil",
        "socio-sanitario",
        "social",
        "otro"
      ]
    },
    minParticipants: Number,
    maxParticipants: Number,
    requirements: String,
    organization: {
      type: Schema.Types.ObjectId,
      ref: "Organization"
    },
    participants: {
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

const Activity = mongoose.model("Activity", activitySchema);
module.exports = Activity;
