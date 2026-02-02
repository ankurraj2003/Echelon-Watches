import React, { useState } from "react";

/**
 * LazyImage - Optimized image component with lazy loading and smooth transitions
 * 
 * Features:
 * - Native lazy loading (deferred for offscreen images)
 * - Priority loading for above-the-fold images
 * - Skeleton placeholder with shimmer animation
 * - Smooth fade-in transition on load
 * - Error handling with fallback
 */
const LazyImage = ({
    src,
    alt,
    className = "",
    containerClassName = "",
    placeholderColor = "#1a1a1a",
    priority = false,
    ...props
}) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);

    const handleLoad = () => {
        setIsLoaded(true);
    };

    const handleError = () => {
        setHasError(true);
        setIsLoaded(true);
    };

    return (
        <div
            className={`lazy-image-container ${containerClassName}`}
            style={{ position: "relative", overflow: "hidden" }}
        >
            {/* Skeleton placeholder with shimmer effect */}
            {!isLoaded && (
                <div
                    className="lazy-image-skeleton"
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: `linear-gradient(90deg, ${placeholderColor} 25%, #2a2a2a 50%, ${placeholderColor} 75%)`,
                        backgroundSize: "200% 100%",
                        animation: "shimmer 1.5s infinite",
                        borderRadius: "inherit",
                        zIndex: 1
                    }}
                />
            )}

            {/* Actual image with optimized loading */}
            {!hasError && (
                <img
                    src={src}
                    alt={alt}
                    className={`${className} lazy-image ${isLoaded ? "loaded" : ""}`}
                    onLoad={handleLoad}
                    onError={handleError}
                    loading={priority ? "eager" : "lazy"}
                    decoding="async"
                    fetchpriority={priority ? "high" : "auto"}
                    style={{
                        opacity: isLoaded ? 1 : 0,
                        transition: "opacity 0.3s ease-in-out",
                        position: "relative",
                        zIndex: 2
                    }}
                    {...props}
                />
            )}

            {/* Error fallback */}
            {hasError && (
                <div
                    className="lazy-image-error"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%",
                        height: "100%",
                        background: placeholderColor,
                        color: "#666"
                    }}
                >
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <polyline points="21,15 16,10 5,21" />
                    </svg>
                </div>
            )}
        </div>
    );
};

export default LazyImage;
