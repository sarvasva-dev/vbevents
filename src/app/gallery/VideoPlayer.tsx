"use client";

export default function VideoPlayer({ file }: { file: string }) {
  const togglePlay = (e: React.MouseEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    if (video.paused) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Ignore AbortError caused by rapid clicking or native control conflicts
        });
      }
    } else {
      video.pause();
    }
  };

  const handlePlay = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    const currentVideo = e.currentTarget;
    const allVideos = document.querySelectorAll('video');
    allVideos.forEach(v => {
      if (v !== currentVideo && !v.paused) {
        v.pause();
      }
    });
  };

  return (
    <video 
      src={`/gallery/${file}`} 
      controls 
      controlsList="nodownload"
      preload="none"
      poster={`/gallery/${file}.jpg`}
      className="w-full h-auto cursor-pointer"
      onClick={togglePlay}
      onPlay={handlePlay}
    >
      <track kind="captions" srcLang="en" label="English captions" />
    </video>
  );
}
