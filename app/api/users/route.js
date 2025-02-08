import { NextResponse } from 'next/server';
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";

export async function POST(request) {
    const { email, username, image, name, surname } = await request.json();
    await connectDB();
    await User.create({ email, username, image, name, surname });
    return NextResponse.json({ message: "User Created"}, { status: 201 });
}

export async function GET() {
    await connectDB();
    const users = await User.find({});
    return NextResponse.json({ users });
}

export async function DELETE(request) {
    const { email } = await request.json();
    await connectDB();
    await User.deleteOne({ email });
    return NextResponse.json({ message: "User Deleted"}, { status: 200 });
}

export async function PUT(request) {
    const { email, username, image, name, surname } = await request.json();
    await connectDB();
    await User.updateOne({ email, username, image, name, surname });
    return NextResponse.json({ message: "User Updated"}, { status: 200 });
}