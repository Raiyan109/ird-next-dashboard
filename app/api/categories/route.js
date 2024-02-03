import Category from "@/model/categoryModel";
import { NextResponse } from "next/server";


export async function GET() {
    try {
        const categories = await Category.find({})

        return NextResponse.json({ categories }, { status: 200 })
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Error", error }, { status: 500 });
    }
}

export async function POST(req) {
    try {
        const body = await req.json();
        const categoryData = body;

        await Category.create(categoryData);

        return NextResponse.json({ message: "Category Created" }, { status: 201 });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Error", err }, { status: 500 });
    }
}