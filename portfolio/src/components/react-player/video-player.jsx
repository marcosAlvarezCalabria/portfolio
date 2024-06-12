import ReactPlayer from "react-player";


function VideoPlayer({ url, width, height }) {
  
  return (
    <ReactPlayer
      className="col-md-10"
      url={url}
      width={width}
      height={height}
      light
     
      playsinline
    />
  );
}

export default VideoPlayer;