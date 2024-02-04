"use client"
import greenDot from '@/public/Ellipse 1.png'
import Image from 'next/image';
import { TbArrowRampRight3 } from "react-icons/tb";
import { useState } from "react";
import Duas from './Duas';

const SubCat = ({ item, id }) => {
    const [showSubMenu, setShowSubMenu] = useState([]);
    const handleSubCat = (subCatId) => {
        setShowSubMenu((prev) => ({
            ...prev,
            [subCatId]: !prev[subCatId]
        }))
    }
    return (
        <div onClick={(e) => handleSubCat(id)} className='border-dotted border-l-2 border-green mx-6 cursor-pointer'>
            <div className='flex items-center gap-5 py-2 text-md font-medium '>
                <Image src={greenDot} width={6} />
                <div>{item.name}</div>
            </div>

            <div>
                {
                    showSubMenu[id] && (
                        <div>{item.subcats_of_subcats.map(i => (
                            <div className='mx-8 flex  gap-3 py-2 text-md font-medium'>
                                <TbArrowRampRight3 className='text-green text-3xl font-bold' />
                                <h1>{i.dua_name_en}</h1>
                                <div className='hidden'>
                                    <Duas duas={i} />
                                </div>
                            </div>
                        ))}</div>
                    )
                }
            </div>
        </div>
    );
};

export default SubCat;