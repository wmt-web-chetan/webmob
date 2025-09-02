"use client"

import { useState, useRef } from "react"

export default function VideoSection(props) {
  console.log(props, "video props")
  
  if (!props?.title && !props?.subtitle && !props?.videoImage) {
    return null;
  }
  
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef(null)

  const handlePlayVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
        setIsPlaying(false)
      } else {
        videoRef.current.play().catch((error) => {
          console.error("Video playback failed:", error)
        })
        setIsPlaying(true)
      }
    }
  }

  const formatTitle = (title) => {
    if (!title) return null;
    const words = title.split(" ");
    if (words.length < 2) return title;
    
    return words.map((word, index) => {
      if (index < 2) {
        return (
          <span key={index} className="text-gradient-primary">
            {word}
          </span>
        );
      }
      return word;
    }).reduce((prev, curr, index) => {
      return index === 0 ? [curr] : [...prev, " ", curr];
    }, []);
  };

  return (
    <div className="bg-gray-50 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-28 3xl:py-32">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 3xl:px-24">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-14 2xl:mb-16 3xl:mb-18">
          {props?.title && (
            <h2 className="h2-heading font-bold mb-2 sm:mb-3 md:mb-4 lg:mb-5 xl:mb-6 2xl:mb-7 3xl:mb-8">
              {formatTitle(props.title)}
            </h2>
          )}
          {props?.subtitle && (
            <p className="h2-description text-gray-600">
              {props.subtitle}
            </p>
          )}
        </div>

        {/* Video Container */}
        {props?.videoImage && (
          <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-6xl 3xl:max-w-6xl mx-auto">
            <div className="relative group cursor-pointer rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Video/Image */}
              <div className="aspect-video relative">
                {props?.videourl?.url && props.videourl.url !== "#" ? (
                  <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    poster={props.videoImage.node.mediaItemUrl}
                    controls
                    preload="metadata"
                  >
                    <source
                      src={props.videourl.url}
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    src={props.videoImage.node.mediaItemUrl}
                    alt="Video thumbnail"
                    className="w-full h-full object-cover"
                  />
                )}

                {/* Play Button Overlay */}
                {!isPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors duration-300">
                    <button
                      onClick={props?.videourl?.url && props.videourl.url !== "#" ? handlePlayVideo : undefined}
                      className="bg-white hover:bg-gray-100 text-gray-800 rounded-full px-4 sm:px-5 md:px-6 lg:px-7 xl:px-8 2xl:px-9 3xl:px-10 py-2 sm:py-2.5 md:py-3 lg:py-3.5 xl:py-4 2xl:py-4.5 3xl:py-5 shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:scale-105 flex items-center"
                    >
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 3xl:w-9 3xl:h-9 mr-1.5 sm:mr-2 md:mr-2.5 lg:mr-3 xl:mr-3.5 2xl:mr-4 3xl:mr-4.5 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <polygon points="5,3 19,12 5,21" />
                      </svg>
                      <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl font-medium">
                        {props?.videourl?.title || "Play Video"}
                      </span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}