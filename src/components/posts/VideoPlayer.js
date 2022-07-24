import React from "react";

const VideoPlayer = ({ data, title }) => {
  const src = data["fallback_url"];
  return (
    <video width="100%" controls>
      <source src={src} type="video/mp4" />
      <source src={data["scrubber_media_url"]} type="video/mp4" />d
      <source src={data["hls_media_url"]} type="video/mpd" />
    </video>
  );
};

export default VideoPlayer;
