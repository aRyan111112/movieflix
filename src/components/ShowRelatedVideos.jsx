import React from 'react'
import useVideos from "../hooks/useVideos";
import { useSelector } from "react-redux";

const ShowRelatedVideos = ({id}) => {
  if(!id) return <Loading/>

  useVideos(id);
  const videos = useSelector((store) => store.movies?.movieVideos);
  if(!videos || videos.length == 0) return null

  return (
    <>
     <div className="text-white text-3xl my-2 ml-4">Related videos</div>
        <div className="ml-5">
          <div
            className="flex overflow-x-auto scrollbar-hide gap-5"
            style={{ scrollbarWidth: "none" }}
          >
            {videos?.map((video) => (
              <div key={video?.id}>
                <iframe
                  className="aspect-video md:w-[560px] md:h-[315px]"
                  src={
                    "https://www.youtube.com/embed/" +
                    video?.key +
                    "?&autoplay=0&mute=1"
                  }
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                allowfullscreen
                  loading="lazy"
                ></iframe>
              </div>
            ))}
          </div>
        </div>
    </>
  )
}

export default ShowRelatedVideos