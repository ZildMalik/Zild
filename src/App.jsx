import { useState } from "react"

export default function Zild() {
  const [isHovered, setIsHovered] = useState(false)

  const skills = ["Dribbling, Shooting and Scoring"]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex items-center justify-center p-4">
      <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg p-8 rounded-2xl shadow-2xl max-w-md w-full text-center transform transition-all duration-500 ease-in-out hover:scale-105">
        <div className="relative w-32 h-32 mx-auto mb-6 rounded-full border-4 border-white shadow-lg overflow-hidden">
          <img
            src= "/Zild.jpg"
            alt="Zild John Lloyd M. Abule"
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
          />
        </div>
        <h1 className="text-3xl font-bold text-white mb-2">Zild John Lloyd M. Abule</h1>
        <p className="text-xl text-purple-200 mb-4">BSIT 4-B</p>

        <p className="text-white mb-6">I love Playing Basketball </p>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-white mb-3">Skills</h2>
          <div className="flex flex-wrap justify-center gap-2">
            {skills.map((skill, index) => (
              <span key={index} className="bg-white bg-opacity-30 text-white px-3 py-1 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <button
          className="bg-white text-purple-600 font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:bg-purple-600 hover:text-white hover:scale-105 active:scale-95"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {isHovered ? "Let's Connect!" : "Get Started"}
        </button>

    
      </div>
    </div>
  )
}

