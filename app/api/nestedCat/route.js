import NestedCat from '@/model/nestedCatModel'
import { NextResponse } from "next/server";




export async function POST(req) {
    try {
        const body = await req.json();
        const nestedCategory = body;

        await NestedCat.create(nestedCategory);

        return NextResponse.json({ nestedCategory }, { status: 201 });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Error", err }, { status: 500 });
    }
}

export async function GET() {
    try {
        const nestedCategories = await NestedCat.find({})
        console.log(nestedCategories, 'from route.js 24');
        return NextResponse.json({ nestedCategories }, { status: 200 })
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Error", error }, { status: 500 });
    }
}
