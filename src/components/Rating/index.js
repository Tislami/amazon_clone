import {AiFillStar} from "react-icons/ai";
import React from "react";


const Rating = ({rate}) => {
    return <div className={"flex h-5"} >
        {
            Array(parseInt(rate)).fill().map((_, i) => (
                <AiFillStar className={"text-yellow-500"} key={i} />
            ))
        }
    </div >
}

export default Rating