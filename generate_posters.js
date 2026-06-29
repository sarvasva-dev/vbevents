const fs = require('fs');
const path = require('path');
const { execFile } = require('child_process');
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;

const galleryDir = path.join(__dirname, 'public', 'gallery');

if (!fs.existsSync(galleryDir)) {
    console.error("Gallery directory not found.");
    process.exit(1);
}

const files = fs.readdirSync(galleryDir);

async function extractPoster(file) {
    return new Promise((resolve) => {
        const input = path.join(galleryDir, file);
        const output = path.join(galleryDir, file + '.jpg');
        
        if (fs.existsSync(output)) {
            return resolve(); // already exists
        }

        const args = [
            '-i', input,
            '-ss', '00:00:01.000', // capture at 1 second
            '-vframes', '1',
            '-q:v', '2',
            '-y',
            output
        ];
        
        execFile(ffmpegPath, args, (err) => {
            if (err) {
                // If 1 sec fails (maybe video is shorter), try 0 sec
                const args0 = ['-i', input, '-vframes', '1', '-q:v', '2', '-y', output];
                execFile(ffmpegPath, args0, () => resolve());
            } else {
                resolve();
            }
        });
    });
}

async function main() {
    for (const file of files) {
        if (file.toLowerCase().endsWith('.mp4')) {
            await extractPoster(file);
        }
    }
    console.log('Posters generated!');
}

main();
