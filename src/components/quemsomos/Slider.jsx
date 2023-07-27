import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

import imagem1 from "../../assets/1.png";
import imagem2 from "../../assets/2.png";
import imagem3 from "../../assets/3.png";
import imagem4 from "../../assets/4.png";

const images = [imagem1, imagem2, imagem3, imagem4]

export function Slider (){
    const carousel = useRef();
    const [width, setWidth] = useState(0)

    useEffect(() => {
        console.log(carousel.current)
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    }, [])
    
    return(
        <div className="w-full max-h-96 mx-auto m-0 flex items-center justify-center"> 
            <motion.div ref={carousel} className="bg-re cursor-grab overflow-hidden" whileTap={{ cursor: 'grabbing'}}>
                <motion.div className="flex bg-blue-500" drag='x' dragConstraints={{ right:0, left: -width}} initial={{ x: 100}} animate={{ x:0 }} transition={{ duration: 0.8 }}>
                {images.map(image => (
                    <motion.div key={image}>
                        <img className="rounded p-4 pointer-events-none" src={image} alt="" />
                    </motion.div>
                ))}
                </motion.div>
            </motion.div>
        </div>
    );
}