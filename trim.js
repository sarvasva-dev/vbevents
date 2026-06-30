const fs = require('fs');
const { execSync } = require('child_process');

try {
  require.resolve('ffmpeg-static');
} catch (e) {
  console.log('Installing ffmpeg-static...');
  execSync('npm install ffmpeg-static', { stdio: 'inherit', cwd: __dirname });
}

const ffmpeg = require('ffmpeg-static');
const videoFile = 'd:/Projects/VBEVENTS/website/public/gallery/birthday_lv_0_20251225132712.mp4';
const tempVideo = 'd:/Projects/VBEVENTS/website/public/gallery/temp.mp4';
const thumbFile = 'd:/Projects/VBEVENTS/website/public/gallery/birthday_lv_0_20251225132712.mp4.jpg';

try {
    console.log("Trimming video...");
    execSync(`"${ffmpeg}" -y -ss 00:00:04.100 -i "${videoFile}" -c copy "${tempVideo}"`, { stdio: 'inherit' });
    
    fs.renameSync(tempVideo, videoFile);
    console.log("Video trimmed.");

    console.log("Extracting new thumbnail...");
    execSync(`"${ffmpeg}" -y -ss 00:00:01 -i "${videoFile}" -vframes 1 -q:v 2 "${thumbFile}"`, { stdio: 'inherit' });
    console.log("Thumbnail updated.");
} catch (e) {
    console.error("Error:", e);
}
