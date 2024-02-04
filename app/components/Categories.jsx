"use client"

import { useState } from "react";
import Image from "next/image";
import fever from '@/public/005-fever.png'
import SubCat from "./SubCat";
const Categories = ({ result, id }) => {
    console.log(result, 'from Categories 8');
    const [showCat, setShowCat] = useState([]);
    const handleCat = (catId) => {
        setShowCat((prev) => ({
            ...prev,
            [catId]: !prev[catId]
        }))
    }
    return (
        <div>
            <div key={result._id} className="flex items-center gap-3 bg-ash py-3 px-4 rounded-xl" onClick={(e) => handleCat(id)}>
                <Image src={fever} alt={result.cat_icon} />
                <div className="flex flex-col">
                    <div className="text-lg">{result.cat_name_en}</div>
                    <div className="text-xs">Subcategory: {result.no_of_subcat}</div>
                </div>

            </div>
            {
                showCat[id] && (
                    <div>{result.subcats.map(item => (
                        <SubCat item={item} id={item.id} />
                    ))}</div>
                )
            }
        </div>
    );
};

export default Categories;