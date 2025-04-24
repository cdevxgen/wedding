"use client"

import Image from 'next/image';
import Link from 'next/link';
import styles from './HomeP.module.css'; // Import a separate CSS module for styling

export default function New() {
  return (
    <div className="mx-auto w-full max-w-0xl md:px-0">
      <div className="relative flex h-[768px] w-full justify-center overflow-clip sm:h-[1024px] md:justify-start lg:h-[825px]">
        <Image
          src="/weddingp.svg"
          alt="new"
          layout="fill"
            objectFit="cover"
          placeholder="blur"
          blurDataURL="/weddingp.svg"
          loading="eager"
          className="min-h-full w-full object-cover object-center"
        />
        <div className="absolute left-0 right-0 top-0 flex h-fit w-full flex-1 flex-col items-center justify-center gap-6 bg-neutral-99/50 p-6 text-center backdrop-blur-md md:left-8 md:top-8 md:max-w-xs md:rounded-xl md:p-8">
          <div className="flex w-full flex-col items-center justify-center gap-4">
            <h1 className="text-4xl text-white tracking-[0.5rem] md:text-5xl">Kai</h1>
            <div className="flex w-full flex-row items-center justify-center gap-8 font-serif text-2xl md:text-3xl">
              <span className="w-full border-t border-t-neutral-10/80" />
              &
              <span className="w-full border-t border-t-neutral-10/80" />
            </div>
            <h1 className="text-4xl text-white tracking-[0.5rem] md:text-5xl">Dakota</h1>
          </div>
          <p>date: 20/2/2024</p>
        </div>
        <div className={styles.content}>
        <Link href="/mainpage" className={styles.button}>Welcome</Link>
      </div>
      </div>
      
    </div>
  );
}
