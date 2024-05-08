import {
    SliderContainer,
} from "./SliderStyled"
import {motion} from 'framer-motion'
import { useState, useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"

const Slider = (props) => {
    const carousel = useRef();
    const [width, setWidth] = useState(0)
    const song = props.song;

    const navigate = useNavigate();
    
    function goSong(songId) {
        navigate(`/song/${songId}`)
    }
    

    useEffect(() => {
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    }, [song])

    
    return (
        <SliderContainer>
            <motion.div ref={carousel} className="carousel" whileTap={{cursor: "grabbing"}}>
                <motion.div className="inner"
                drag="x"
                dragConstraints={{ right: 0, left: -width}}
                initial={{x:100}}
                animate={{x:0}}
                transition={{duration: 0.8}}
                >
                    {song.map(thisSong => (
                        <motion.div className="item" key={thisSong.id} onDoubleClick={() => goSong(thisSong.id)}>
                            <img src={thisSong.image}/>
                            <h3>{thisSong.name}</h3>
                            <h4>{thisSong.authorName}</h4>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </SliderContainer>
    )
}

export default Slider