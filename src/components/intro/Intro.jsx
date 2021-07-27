import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"

const Intro = () => {

    const textRef = useRef()

    useEffect(()=>{
       init(textRef.current, {
           showCursor: false,
           backDelay: 1500,
           backSpeed: 60,
           showCursor: true,
           strings: ["Developer", "Designer", "Content Creator"]
       })
    },[])

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/man.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>hi there , i'm</h2>
                    <h1>John Smith</h1>
                    <h3>Freelance <span ref={textRef}></span></h3>
                </div>
                <a href="#portofolio">
                    <img src="assets/down.png" alt="" />
                </a>
            </div>
        </div>
    )
}

export default Intro
