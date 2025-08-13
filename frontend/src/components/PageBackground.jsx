const PageBackground = () => (
  <video
    autoPlay
    muted
    preload="auto"
    alt="Samurai"
    className="absolute inset-0 w-full h-full object-cover opacity-[.5]"
    loop
  >
    <source src="video/samurai.mp4" />
  </video>
);

export default PageBackground;
