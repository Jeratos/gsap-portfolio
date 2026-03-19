export default function Video() {
  return (
    <>
      <div className="h-full w-full">
        <video
          className="h-full w-full object-cover"
          src="/videos/10438249-uhd_3840_2160_25fps.mp4"
          autoPlay
          muted
          loop
        ></video>
      </div>
    </>
  );
}
