"use client"

import { useState, useRef } from "react"
import "./index.css"

export default function MarqueeVideoSection() {
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

  return (
    <div className="w-full">
      {/* Marquee Section */}
      <div className="blue-marquee-section bg-blue-600 text-white py-3 sm:py-4 md:py-5 lg:py-6 overflow-hidden">
        <div className="marquee-container">
          <div className="marquee-content">
            <span className="marquee-text">
              Innovating Ideas ✦ Building Impact ✦ Delivering Excellence ✦ Innovating Ideas ✦&nbsp;
            </span>
            {/* Duplicate text for seamless looping */}
            <span className="marquee-text">
              Innovating Ideas ✦ Building Impact ✦ Delivering Excellence ✦ Innovating Ideas ✦&nbsp;
            </span>
            <span className="marquee-text">
              Innovating Ideas ✦ Building Impact ✦ Delivering Excellence ✦ Innovating Ideas ✦&nbsp;
            </span>
          </div>
        </div>
      </div>

      {/* Client Tales Video Section */}
      <div className="bg-gray-50 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-28 3xl:py-32">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 3xl:px-24">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-14 2xl:mb-16 3xl:mb-18">
            <h2 className="text-gradient-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl font-bold mb-2 sm:mb-3 md:mb-4 lg:mb-5 xl:mb-6 2xl:mb-7 3xl:mb-8">
              Client-Tales
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-gray-600">
              Hear What clients say about us
            </p>
          </div>

          {/* Video Container */}
          <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-6xl 3xl:max-w-6xl mx-auto">
            <div className="relative group cursor-pointer rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Video */}
              <div className="aspect-video relative">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  poster="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20from%202025-08-28%2019-55-54-VYyT5Dne709QRdL62dF7IH3EO6jeFL.png"
                  controls
                  preload="metadata"
                >
                  <source
                    src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>

                {/* Play Button Overlay */}
                {!isPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors duration-300">
                    <button
                      onClick={handlePlayVideo}
                      className="bg-white hover:bg-gray-100 text-gray-800 rounded-full px-4 sm:px-5 md:px-6 lg:px-7 xl:px-8 2xl:px-9 3xl:px-10 py-2 sm:py-2.5 md:py-3 lg:py-3.5 xl:py-4 2xl:py-4.5 3xl:py-5 shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:scale-105 flex items-center"
                    >
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 3xl:w-9 3xl:h-9 mr-1.5 sm:mr-2 md:mr-2.5 lg:mr-3 xl:mr-3.5 2xl:mr-4 3xl:mr-4.5 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <polygon points="5,3 19,12 5,21" />
                      </svg>
                      <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl font-medium">
                        Play Video
                      </span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}