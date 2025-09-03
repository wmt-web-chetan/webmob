"use client"

import { useState, useRef } from "react"
import defaultThumbnail from "../../../assets/images/image.png"

export default function VideoSection(props) {
  console.log(props, "video props")
  
  // Always show video section, use defaults if no props
  const title = props?.title || "Watch Our Demo Video"
  const subtitle = props?.subtitle || "See how our solutions can transform your business"
  const shouldShow = props?.videoImage || !props // Show if videoImage exists or no props at all
  
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasPlayed, setHasPlayed] = useState(false)
  const videoRef = useRef(null)

  const handlePlayVideo = async () => {
    if (videoRef.current) {
      try {
        if (isPlaying) {
          videoRef.current.pause()
          setIsPlaying(false)
        } else {
          await videoRef.current.play()
          setIsPlaying(true)
          setHasPlayed(true)
        }
      } catch (error) {
        console.error("Video playback failed:", error)
        setIsPlaying(false)
      }
    }
  }

  const formatTitle = (titleText) => {
    if (!titleText) return null
    const words = titleText.split(" ")
    if (words.length < 2) return titleText
    
    return words.map((word, index) => {
      if (index < 2) {
        return (
          <span key={index} className="text-gradient-primary">
            {word}
          </span>
        )
      }
      return word
    }).reduce((prev, curr, index) => {
      return index === 0 ? [curr] : [...prev, " ", curr]
    }, [])
  }

  console.log(props?.videoImage?.node?.mediaItemUrl)

  return (
    <div className="bg-white section-padding-y px-wrapper">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-14 2xl:mb-16 3xl:mb-18">
          <h2 className="h2-heading text-gradient-primary font-bold mb-2 sm:mb-3 md:mb-4 lg:mb-5 xl:mb-6 2xl:mb-7 3xl:mb-8">
            {formatTitle(title)}
          </h2>
          <p className="h2-description text-text-secondary">
            {subtitle}
          </p>
        </div>
        {/* Video Container */}
        {shouldShow && (
          <div className="mx-auto px-wrapper">
            <div className="bg-[#f0f4ff] rounded-3xl p-2 sm:p-3 md:p-3 lg:p-3 xl:p-4 2xl:p-4">
              <div className="relative rounded-3xl overflow-hidden group aspect-video">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                poster={props?.videoImage?.node?.mediaItemUrl || defaultThumbnail}
                controls={hasPlayed}
                onPlay={() => {
                  setIsPlaying(true)
                  setHasPlayed(true)
                }}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
                onLoadedMetadata={() => {
                  if (videoRef.current) {
                    videoRef.current.currentTime = 0
                  }
                }}
                playsInline
              >
                <source
                  src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              
              {/* Play Button Overlay - only show when not playing */}
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <button
                    onClick={handlePlayVideo}
                    className={`bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center pointer-events-auto ${
                      hasPlayed ? 'p-4' : 'px-6 py-3'
                    }`}
                  >
                    <svg className={`fill-current ${hasPlayed ? 'w-8 h-8' : 'w-6 h-6 mr-2'}`} viewBox="0 0 24 24">
                      <polygon points="5,3 19,12 5,21" />
                    </svg>
                    {!hasPlayed && <span>{props?.videourl?.title || "Play Video"}</span>}
                  </button>
                </div>
              )}

              {/* Pause Button Overlay - only show on hover when playing */}
              {isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <button
                    onClick={handlePlayVideo}
                    className="bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 pointer-events-auto"
                  >
                    <svg className="w-8 h-8 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                      <rect x="6" y="4" width="4" height="16" />
                      <rect x="14" y="4" width="4" height="16" />
                    </svg>
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