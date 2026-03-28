"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function ProfilePhoto() {
  const [yOffset, setYOffset] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setYOffset((prev) => (prev === 0 ? 20 : 0))
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-52 h-52 md:w-80 md:h-80 mx-auto">
      <motion.div
        animate={{ y: yOffset }}
        transition={{ duration: 2, ease: "easeInOut" }}
        whileHover={{ scale: 1.1 }}
        className="w-full h-full rounded-full overflow-hidden border-4 border-blue-500 shadow-xl shadow-blue-500/40"
      >
        <Image
          src="/Rohit_Chowdhury.jpg"
          alt="Profile"
          width={320}
          height={320}
          className="w-full h-full object-cover object-center"
        />
      </motion.div>
    </div>
  )
}
