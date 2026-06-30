const fs = require('fs');
const { execSync } = require('child_process');
const ffmpeg = require('ffmpeg-static');

const inputFile = 'D:/Projects/VBEVENTS/haldi/lv_0_20251216123632.mp4';
const outputFile = 'D:/Projects/VBEVENTS/website/public/gallery/haldi_lv_0_20251216123632.mp4';
const thumbFile = 'D:/Projects/VBEVENTS/website/public/gallery/haldi_lv_0_20251216123632.mp4.jpg';

try {
    console.log("Compressing video...");
    execSync(`"${ffmpeg}" -y -i "${inputFile}" -vcodec libx264 -crf 28 -preset fast -acodec aac "${outputFile}"`, { stdio: 'inherit' });
    console.log("Compression done.");

    console.log("Extracting thumbnail...");
    execSync(`"${ffmpeg}" -y -ss 00:00:01 -i "${outputFile}" -vframes 1 -q:v 2 "${thumbFile}"`, { stdio: 'inherit' });
    console.log("Thumbnail generated.");
} catch (e) {
    console.error("Error:", e);
}
