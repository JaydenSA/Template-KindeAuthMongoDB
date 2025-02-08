import  mongoose, { Schema, model } from  "mongoose";
import { UserDocument } from "@/interface/User";

const UserSchema = new Schema<UserDocument>({
    email: {
      type: String,
      unique: true,
      required: [true, "Email is required"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Email is invalid",
      ],
    },
    username: {
      type: String,
      required: [true, "Username is required"]
    },
    image: {
      type: String,
      required: [true, "Image is required"],
    },
    name: {
      type: String,
    },
    surname: {
      type: String,
    }
  },
  {
    timestamps: true,
  }
);

const  User  =  mongoose.models?.User  ||  model<UserDocument>('User', UserSchema);
export  default  User;