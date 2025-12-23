"use client";
import { useState, useEffect, useRef } from "react";

export default function HowItWorksSteps() {
  const [visibleSteps, setVisibleSteps] = useState([]);
  const stepRefs = useRef([]);

  const steps = [
    {
      number: "01",
      title: "Select Theme Preset",
      description:
        "Choose the theme you want to customize from our growing library.",
    },
    {
      number: "02",
      title: "Customize Visually",
      description:
        "Use our intuitive interface to adjust colors, dimensions, typography, and other properties.",
    },
    {
      number: "03",
      title: "Copy Code",
      description:
        "Copy the generated Tailwind CSS code directly into your project.",
    },
    {
      number: "04",
      title: "Deploy and Enjoy",
      description:
        "Integrate seamlessly into your workflow and watch your design come to life instantly.",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleSteps((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.3 }
    );

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen relative  py-16">
      {/*   Dots end*/}

      {/*   GRID LINES begin*/}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: `
              radial-gradient(
                circle at center,
                rgba(215, 244, 72, 0.12) 0%,
                rgba(215, 244, 72, 0.06) 20%,
                rgba(0, 0, 0, 0) 60%
              )
            `,
        }}
      />

      {/*   GRID LINES end*/}

      <div className=" mx-auto">
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 shadow-sm border border-[#d7f448]">
            <span className="text-2xl" style={{ color: "#c3e13f" }}></span>
            <span className="grotesk bg-gradient-to-r from-[#45ae89] to-[#d7f448] bg-clip-text text-transparent">How It Works</span>
          </div>
        </div>

        <div className="text-center   mb-6">
        
            <h1 className="text-4xl grotesk md:text-6xl font-medium text-neutral-300  ">
              Simple Process,
            </h1>
            <span className="text-[#d7f448] text-4xl md:text-6xl grotesk font-medium grotesk bg-gradient-to-r from-[#45ae89] to-[#d7f448] bg-clip-text text-transparent ">
              Beautiful Results
            </span>
     
          <p className="text-gray-400 text-lg p-12 md:text-xl max-w-3xl mx-auto">
            Customize your shadcn/ui components in just a few simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {steps.map((step, index) => (
            <div
              key={index}
              ref={(el) => (stepRefs.current[index] = el)}
              data-index={index}
              className={`p-6 flex flex-col items-center text-center transition-all duration-700 rounded-4xl border-neutral-900 border  bg-neutral-950 ${
                visibleSteps.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative py-28  px-32 rounded-4xl w-32 h-32 flex items-center justify-center mb-6">
                <div
                  className="absolute rounded-3xl  inset-0 z-0 pointer-events-none" //rounded important
                  style={{
                    backgroundColor: "#0a0a0a",
                    backgroundImage: `
                radial-gradient(circle at 25% 25%, #222222 0.5px, transparent 1px),
                radial-gradient(circle at 75% 75%, #111111 0.5px, transparent 1px)
              `,
                    backgroundSize: "10px 10px",
                    imageRendering: "pixelated",
                  }}
                />
                {/* Outer Layer  */}
                <div
                  className={`absolute rounded-full transition-all duration-1000 blur-xs ${
                    visibleSteps.includes(index)
                      ? "scale-100 opacity-30"
                      : "scale-50 opacity-0"
                  }`}
                  style={{
                    backgroundColor: "#c3e13f",
                    width: "8px",
                    height: "28px",
                    transitionDelay: `${index * 150}ms`,
                  }}
                ></div>

                {/* Middle Layer  */}
                <div
                  className={`absolute rounded-full transition-all duration-1000 blur-sm ${
                    visibleSteps.includes(index)
                      ? "scale-100 opacity-50"
                      : "scale-50 opacity-0"
                  }`}
                  style={{
                    backgroundColor: "#c3e13f",
                    width: "96px",
                    height: "96px",
                    transitionDelay: `${index * 150 + 100}ms`,
                  }}
                ></div>

                {/* Inner Layer */}
                <div
                  className={`absolute rounded-full  shadow-lg flex items-center justify-center transition-all duration-1000 ${
                    visibleSteps.includes(index)
                      ? "scale-100 opacity-100"
                      : "scale-0 opacity-0"
                  }`}
                  style={{
                    backgroundColor: "#c3e13f",
                    width: "64px",
                    height: "64px",
                    transitionDelay: `${index * 150 + 200}ms`,
                  }}
                >
                  <span className="text-neutral-950 text-2xl font-bold relative z-10">
                    {step.number}
                  </span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-neutral-100 mb-3 ">
                {step.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
