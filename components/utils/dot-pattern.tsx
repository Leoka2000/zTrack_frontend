"use client"
import React from "react"

const DotPatternBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none">
      {/* Dots */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "#fafafa",
          backgroundImage: `
            radial-gradient(circle at 25% 25%, #d4d4d4 0.5px, transparent 1px),
            radial-gradient(circle at 75% 75%, #e5e5e5 0.5px, transparent 1px)
          `,
          backgroundSize: "10px 10px",
        }}
      />

      {/* Vertical grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)",
          backgroundSize: "100px 100px",
        }}
      />

      {/* Horizontal grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(0deg, rgba(0,0,0,0.04) 1px, transparent 1px)",
          backgroundSize: "100px 100px",
        }}
      />
    </div>
  )
}

export default DotPatternBackground
