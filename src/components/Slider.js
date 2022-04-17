import React, { useRef } from "react"
import useSlider from "../hooks/useSlider"
import { Link } from "react-router-dom"

const Slider = ({ images }) => {
    const slideImage = useRef(null)
    const slideText = useRef(null)
    const { goToPreviousSlide, goToNextSlide } = useSlider(
        slideImage,
        slideText,
        images
    )


    return (
        <div className="slider" ref={slideImage}>
            <div className="slider--content">
                <button onClick={goToPreviousSlide} className="slider__btn-left">
                    <i className="fas fa-angle-left"></i>
                </button>
                <div className="slider--feature">
                    <h1 className="feature--title">Picket Fence Photography</h1>
                    <h2 ref={slideText} className="feature--text"></h2>
                </div>
                <button onClick={goToNextSlide} className="slider__btn-right">
                    <i className="fas fa-angle-right"></i>
                </button>

                <Link to="#intro"><button className="feature__btn"><i className="fa-solid fa-arrow-down-long"></i></button></Link>
            </div>
        </div>
    )
}

export default Slider