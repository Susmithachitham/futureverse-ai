function VideoBackground({ src }) {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="
        w-full
        h-full
        object-cover
        opacity-45
        scale-110
        "
      >
        <source src={src} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/55" />

      <div
        className="
        absolute
        inset-0
        bg-gradient-to-b
        from-black/10
        via-black/20
        to-black
        "
      />
    </div>
  );
}

export default VideoBackground;