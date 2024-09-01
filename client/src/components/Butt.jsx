import React from 'react'

const Butt = () => {
  return (
    <button className="relative inline-flex items-center justify-center p-2.5 border border-transparent rounded-lg bg-gradient-to-r from-purple-400 to-red-500 text-white text-sm font-medium hover:bg-transparent hover:border-white focus:outline-none">
      <span className="absolute inset-0 rounded-lg border border-white animate-border-light bg-gradient-to-r from-blue-400 to-green-400" />
      <span className="relative z-10">Click Me</span>
    </button>
  )
}

export default Butt