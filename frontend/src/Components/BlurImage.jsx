import React, { useState, useRef, useEffect } from "react";
const BlurImage = ({
  src,
  alt = "",
  className = "",
  containerClassName = "",
  width,
  height,
  style,
  ...rest
}) => {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef(null);

  // If the image is already cached by the browser the `onLoad` may fire
  // before React attaches the handler — handle that via `.complete`.
  useEffect(() => {
    if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth > 0) {
      setLoaded(true);
    }
  }, [src]);

  // Reset loaded state when src changes
  useEffect(() => {
    setLoaded(false);
  }, [src]);

  return (
    <div
      className={`blur-image-wrapper ${containerClassName}`}
      style={{ position: "relative", overflow: "hidden", ...style }}
    >
      {/* Shimmer placeholder — visible until the real image loads */}
      {!loaded && (
        <div
          className="blur-image-placeholder"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
          }}
        />
      )}

      {/* Actual image — starts invisible, fades in on load */}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`blur-image-actual ${loaded ? "blur-image-loaded" : ""} ${className}`}
        onLoad={() => setLoaded(true)}
        {...rest}
      />
    </div>
  );
};

export default BlurImage;
