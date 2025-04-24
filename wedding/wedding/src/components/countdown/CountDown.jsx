'use client';

import React, { useEffect, useState } from 'react';

// import { Icon } from '@/lib/components/Icon';
import { FaHeartbeat } from "react-icons/fa";

const ZEROS = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
};

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(constructTimeLeft(ZEROS));
  const [allZeros, setAllZeros] = useState(false);

  function calculateTimeLeft() {
    const difference = +new Date('2024-07-26T18:30:00.000+02:00') - +new Date();
    let time = {};

    if (difference > 0) {
      time = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      setAllZeros(true);
      time = ZEROS;
    }

    return constructTimeLeft(time);
  }

  function constructTimeLeft(time) {
    return Object.keys(time).map((interval, i) => (
      <section key={i} className="flex flex-col items-center justify-center gap-1">
        <p className="text-xl text-neutral-variant-30">{time[interval] ?? 0}</p>
        <p className="text-xs text-neutral-variant-30/80">
          {(time[interval] ?? 0) === 1 ? interval.slice(0, -1) : interval}
        </p>
      </section>
    ));
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      {/* <Icon name={allZeros ? 'hourglass_bottom' : 'hourglass_top'}  /> */}
      <div className="text-3xl text-neutral-variant-30 text-red">
        < FaHeartbeat />
      </div>
      <div className="grid grid-cols-4 items-center justify-center gap-4">{timeLeft}</div>
    </div>
  );
}
