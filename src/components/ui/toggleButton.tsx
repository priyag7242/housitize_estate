"use client"

import { useState } from "react"

interface ToggleButtonProps {
  leftOption: string
  rightOption: string
  initialState?: "left" | "right"
  onChange?: (state: "left" | "right") => void
}

export default function ToggleButton({ leftOption, rightOption, initialState = "right", onChange }: ToggleButtonProps) {
  const [state, setState] = useState<"left" | "right">(initialState)

  const handleToggle = () => {
    const newState = state === "left" ? "right" : "left"
    setState(newState)
    if (onChange) onChange(newState)
  }

  return (
    <div
      className="bg-white/90 rounded-full p-1 w-64 h-14 flex items-center cursor-pointer shadow-lg"
      onClick={handleToggle}
      style={{ boxShadow: "0 0 15px rgba(0,0,0,0.3)" }}
    >
      <div className="relative w-full h-12 flex items-center">
        {/* Toggle Knob */}
        <div
          className={`absolute h-12 w-1/2 bg-white rounded-full shadow-md transition-all duration-300 ease-in-out ${
            state === "left" ? "left-0" : "left-1/2"
          }`}
          style={{ boxShadow: "0 2px 5px rgba(0,0,0,0.2)" }}
        ></div>

        {/* Labels */}
        <div className="flex w-full">
          <div className={`w-1/2 text-center z-10 font-bold ${state === "left" ? "text-red-700" : "text-black"}`}>
            {leftOption}
          </div>
          <div className={`w-1/2 text-center z-10 font-bold ${state === "right" ? "text-red-700" : "text-black"}`}>
            {rightOption}
          </div>
        </div>
      </div>
    </div>
  )
}

