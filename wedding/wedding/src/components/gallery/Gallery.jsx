import React from "react";

const Gallery = () => {
  return (
    <>
      <div class="container py-10 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="flex flex-col gap-4">
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="/wedding/1.png"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="/wedding/1w.png"
              alt=""
            />
          </div>
          
        </div>
        <div class="flex flex-col gap-4">
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="/wedding/4w.png"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="/wedding/3.png"
              alt=""
            />
          </div>
          
        </div>
        <div class="flex flex-col gap-4">
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="/wedding/2.png"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="/wedding/2w.png"
              alt=""
            />
          </div>
          
        </div>
        <div class="flex flex-col gap-4">
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="/wedding/3w.png"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="/wedding/4.png"
              alt=""
            />
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Gallery;
