import React from 'react'
import Countdown from './CountDown'

const Count = () => {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col bg-silver items-center justify-center gap-6 rounded-3xl bg-neutral-variant-90/75 p-6 text-neutral-variant-30">
      <Countdown />
    </div>
  )
}

export default Count
