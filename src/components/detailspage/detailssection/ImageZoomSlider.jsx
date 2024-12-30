import { useState } from "react";


export default function ImageZoomSlider({
    src,
    width,
    height,
    magnifierHeight = 240,
    magnifierWidth = 240,
    zoomLevel = 2.5
}) {
    const [[x, y], setXY] = useState([0, 0]);
    const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
    const [showMagnifier, setShowMagnifier] = useState(false);



    return (
        <>
        <img
            src={src}
            style={{ height: height, width: width }}
            onMouseEnter={(e) => {
                const elem = e.currentTarget;
                const { width, height } = elem.getBoundingClientRect();
                setSize([width, height]);
                setShowMagnifier(true);
            }}
            onMouseMove={(e) => {
                const elem = e.currentTarget;
                const { top, left } = elem.getBoundingClientRect();
                const x = e.pageX - left - window.pageXOffset;
                const y = e.pageY - top - window.pageYOffset;
                setXY([x, y]);
            }}
            onMouseLeave={() => {
                setShowMagnifier(false);
            }}
            alt={"img"}
        />


            <div
                style={{
                    display: showMagnifier ? "" : "none",
                    position: "absolute",
                    pointerEvents: "none",
                    height: `${magnifierHeight}px`,
                    width: `${magnifierWidth}px`,
                    top: `${y - magnifierHeight / 2}px`,
                    left: `${x - magnifierWidth / 2}px`,
                    opacity: "1",
                    border: "1px solid lightgray",
                    backgroundColor: "white",
                    backgroundImage: `url('${src}')`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: `${imgWidth * zoomLevel}px ${imgHeight * zoomLevel}px`,
                    backgroundPositionX: `${-x * zoomLevel + magnifierWidth / 2}px`,
                    backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`
                }}
            ></div>
        </>

    );
}