export const Video: React.FC = () => (
  <video
    autoPlay
    loop
    playsInline
    muted
    className="w-full h-full object-cover absolute brightness-[.35]"
  >
    <source src="/videos/masthead_video.mp4" type="video/mp4" />
    {/* <source src="/videos/masthead_video_2.mp4" type="video/mp4" /> */}
  </video>
);
