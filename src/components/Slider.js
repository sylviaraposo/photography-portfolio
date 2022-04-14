import React, { useRef } from "react"
import useSlider from "../hooks/useSlider"

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
                <button className="feature__btn"><a href="#intro"><i className="fa-solid fa-arrow-down-long"></i></a></button>
                <button onClick={goToNextSlide} className="slider__btn-right">
                    <i className="fas fa-angle-right"></i>
                </button>
            </div>
        </div>
    )
}

export default Slider