import OnlyCat from "@/model/onlyCatModel";
import { NextResponse } from "next/server";




export async function POST(req) {
    try {
        const body = await req.json();
        const categoryData = body;

        await OnlyCat.create(categoryData);

        return NextResponse.json({ categoryData }, { status: 201 });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Error", err }, { status: 500 });
    }
}

export async function GET() {
    try {
        const onlyCategories = await OnlyCat.find({})
        // console.log(onlyCategories);
        return NextResponse.json({ onlyCategories }, { status: 200 })
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Error", error }, { status: 500 });
    }
}