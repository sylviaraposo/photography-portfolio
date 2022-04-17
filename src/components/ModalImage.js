import { useState, useLayoutEffect } from "react";


function FullScreenImage({ src, alt, handleExit }) { 
    useLockBodyScroll();
    return(
        <div className="background-overlay">
            <div className="exit-fullscreen" onClick={handleExit}>
                <p className="exit"><i class="fa-solid fa-rectangle-xmark"></i></p>
            </div>
            <div className="fullscreen-image">
                <img src={src} alt={alt} />
            </div>
        </div>
    ) 

    function useLockBodyScroll() {
        useLayoutEffect(() => {
            // Get original body overflow
            const originalStyle = window.getComputedStyle(document.body).overflow;
            // Prevent scrolling on mount
            document.body.style.overflow = "hidden";
            // Re-enable scrolling when component unmounts
            return () => (document.body.style.overflow = originalStyle);
        }, []); // Empty array ensures effect is only run on mount and unmount
    }
}

function ModalImage ({src, alt}) {

    const [fullScreen, setFullScreen] = useState(false);
    // ImageResource.read(src);

    
    const handleClick = () => {
        setFullScreen(true)
    }

    const handleExit = () => {
        setFullScreen(false)
    }

    
    return (
        fullScreen ? 
            <FullScreenImage src={src} alt={alt} handleExit={() => handleExit()} />
            :
            <div className="image-container" onClick={handleClick}>
                <img src={src} alt={alt} />
            </div>
        
    )


}

export default ModalImage;