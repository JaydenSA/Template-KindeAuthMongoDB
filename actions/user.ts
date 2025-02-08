"use server"
import { UserDetails } from "@/interface/User";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";

export const register = async (values: UserDetails) => {
    const { email, username, image, name, surname } = values;

    try {
        await connectDB();
        const userFound = await User.findOne({ email });
        if(userFound){
            return {
                error: 'Email already exists!'
            }
        }
        const user = new User({
            email,
            username,
            image,
            name,
            surname
        });
        
        await user.save();
    } catch(e){
        console.log(e);
    }
}

export const update = async (values: UserDetails) => {
    const { email, username, image, name, surname } = values;

    try {
        await connectDB();
        const userUpdate = await User.findOne({ email });
        
        userUpdate.username = username || userUpdate.username;
        userUpdate.image = image || userUpdate.image;
        userUpdate.name = name || userUpdate.name;
        userUpdate.surname = surname || userUpdate.surname;
        
        await userUpdate.save();
    } catch(e){
        console.log(e);
    }
}

export const getUsers = async (email: string) => {
    try {
        await connectDB();
        const user = await User.findOne({ email });
              
        return user;
    } catch(e){
        console.log(e);
    }
}