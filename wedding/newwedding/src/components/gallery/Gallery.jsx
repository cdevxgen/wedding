import React from "react";

const Gallery = () => {
  return (
    <>
      <div className=" py-10 bg-white grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="flex flex-col gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/assets/gallery/2h.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/assets/gallery/2w.jpg"
              alt=""
            />
          </div>
          
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/assets/gallery/4w.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/assets/gallery/1h.jpg"
              alt=""
            />
          </div>
          
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/assets/gallery/3h.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/assets/gallery/3w.jpg"
              alt=""
            />
          </div>
          
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/assets/gallery/1w.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/assets/gallery/4h.jpg"
              alt=""
            />
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Gallery;
