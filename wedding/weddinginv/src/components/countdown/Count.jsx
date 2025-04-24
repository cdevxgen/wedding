import React from 'react'
import Countdown from './CountDown'

const Count = () => {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col bg-gray-100 items-center justify-center gap-6 bg-neutral-variant-90/75 p-6 text-neutral-variant-30">
      <Countdown />
    </div>
  )
}

export default Count
