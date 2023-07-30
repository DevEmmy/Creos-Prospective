import React from "react";
import Image from "next/image";

const CourseCard = ({background, image, text}) =>{
    return(
        <>
            <div className="cflexss gap-[2em] w-[14em] h-[14em] p-[2.5em] rounded-[2em] cursor-pointer" style={{background}}>
                <div className="flexmm w-[3em]">
                    <Image src={`${image}.svg`} width={100} height={100} alt={`${image}`}/>
                </div>
                <p className="font-[700] text-[1rem] text-primary2">{text}</p>
            </div>
        </>
    )
}

export default CourseCard;