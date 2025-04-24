"use client"

import Image from 'next/image';
import Link from 'next/link';
import { MdOutlineDoubleArrow } from "react-icons/md";
import styles from './HomeP.module.css'; // Import a separate CSS module for styling

export default function New() {
  return (
    <div className="mx-auto w-full max-w-0xl md:px-0">
      <div className="relative flex h-[768px] w-full justify-center overflow-clip sm:h-[1024px] md:justify-start lg:h-[825px]">
        <Image
          src="/assets/main/weddingmain.svg"
          alt="new"
          layout="fill"
            objectFit="cover"
          placeholder="blur"
          blurDataURL="/weddingp.svg"
          loading="eager"
          className="min-h-full w-full object-cover object-center"
        />
        <div className="absolute left-0 right-0 top-0 flex h-fit w-full flex-1 flex-col items-center justify-center gap-3 bg-neutral-99/50 p-6 text-center backdrop-blur-md md:left-8 md:top-8 md:max-w-xs md:rounded-xl md:p-8">
        <div className="flex w-full flex-col items-center justify-center gap-6">
            <h1 className="text-2xl font-serif text-black tracking-[0.3rem] md:text-3xl">
              Mahesh & ShreeRaksha
            </h1>
            <div className="flex w-full items-center justify-center gap-4 font-serif text-base md:text-xl">
              <span className="w-full border-t border-t-black" />
              <div className='font-semibold text-gray-600'>
              Invites You
              </div>
              <span className="w-full border-t border-t-black" />
            </div>
            <h2 className="text-2xl font-serif text-black tracking-[0.3rem] md:text-3xl">
              To Celebrate our Wedding
            </h2>
          </div>
          <p className="text-lg font-semibold text-gray-600">
            Date: 23/11/2024 & 24/11/2024
          </p>
        </div>
        <div className={styles.content}>
        <Link href="/mainpage" className={styles.button}>
            Join the Celebration
            <MdOutlineDoubleArrow className={styles.buttonIcon} />
          </Link>
      </div>
      </div>
      
    </div>
  );
}
