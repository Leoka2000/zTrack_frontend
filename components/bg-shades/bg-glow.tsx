'use client'
export default function BackgroundGlow() {
  const clipPathStyle = {
    clipPath: `polygon(
      74.1% 44.1%,
      100% 61.6%,
      97.5% 26.9%,
      85.5% 0.1%,
      80.7% 2%,
      72.5% 32.5%,
      60.2% 62.4%,
      52.4% 68.1%,
      47.5% 58.3%,
      45.2% 34.5%,
      27.5% 76.7%,
      0.1% 64.9%,
      17.9% 100%,
      27.6% 76.8%,
      76.1% 97.7%,
      74.1% 44.1%
    )`,
  }

  return (
    <>
      {/* Blur 1 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={clipPathStyle}
          className="relative left-1/2 aspect-[1155/678] w-[36rem] 
          -translate-x-1/2 rotate-[30deg] 
          bg-gradient-to-tr from-[#f1ff8a] via-[#d7f448] to-[#9dbb1e] 
          opacity-30 sm:w-[60rem]"
        />
      </div>

      {/* Blur 2 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 left-[-95rem] transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={clipPathStyle}
          className="relative left-1/2 aspect-[1155/678] w-[36rem] 
          -translate-x-1/2 rotate-[30deg] 
          bg-gradient-to-tr from-[#f1ff8a] via-[#d7f448] to-[#9dbb1e] 
          opacity-25 sm:w-[60rem]"
        />
      </div>

      {/* Blur 3 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 right-[-95rem] transform-gpu overflow-hidden blur-3xl sm:-top-52"
      >
        <div
          style={clipPathStyle}
          className="relative left-1/2 aspect-[1155/678] w-[36rem] 
          -translate-x-1/2 rotate-[30deg] 
          bg-gradient-to-tr from-[#f1ff8a] via-[#d7f448] to-[#9dbb1e] 
          opacity-20 sm:w-[60rem]"
        />
      </div>
    </>
  )
}
