"use client"

import React from 'react'
import Hero from '../../components/Hero'
import Story from '../../components/Story'
import { SliderData } from '../constants/index'
import SubHero from '@/components/SubHero'
import Included from '@/components/cards/Included'
import Map from '@/components/Map'
import Slider from '@/components/Slider'

const Extracheck = () => {
  return (
    <div className='overflow-hidden'>
      <div className='bg-[#595D48]'>
        <Hero heading='Discover Eventful Charm' message='Our tranquil space is where memories are made and laughter echoes.'/>
        <Story />
        <Slider slides={SliderData} />
      </div>
      <div id='/#features' className='bg-[#D5BA91]'>
        <SubHero heading='Railyard Features' img='custom-img3' />
        <Map />
        <Included />
      </div>
    </div>
  )
}

export default Extracheck
