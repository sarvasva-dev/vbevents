const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { execFile } = require('child_process');
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;

const sourceDirs = ['birthday', 'marriages', 'haldi', 'dandiya', 'house warming', 'baby ceremony house warming'];
const outDir = path.join(__dirname, 'public', 'gallery');

if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
}

const hashes = {};
const largeVideos = [];

async function compressVideo(inputFile, outputFile) {
    return new Promise((resolve, reject) => {
        const args = [
            '-i', inputFile,
            '-vf', 'scale=-2:1080,fps=60',
            '-vcodec', 'libx264',
            '-crf', '30', // high compression, should keep it small
            '-preset', 'fast',
            '-acodec', 'aac',
            '-b:a', '128k',
            '-y',
            outputFile
        ];
        console.log(`Compressing: ${path.basename(inputFile)}`);
        execFile(ffmpegPath, args, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error compressing ${inputFile}:`, error);
                resolve(); // resolve anyway to continue
            } else {
                console.log(`Finished compressing: ${path.basename(inputFile)}`);
                resolve();
            }
        });
    });
}

async function processAll() {
    for (const dir of sourceDirs) {
        const fullPath = path.join('d:', 'Projects', 'VBEVENTS', dir);
        if (!fs.existsSync(fullPath)) continue;

        const files = fs.readdirSync(fullPath);
        for (const file of files) {
            const filePath = path.join(fullPath, file);
            const stat = fs.statSync(filePath);
            if (!stat.isFile()) continue;

            const ext = path.extname(file).toLowerCase();
            if (!['.mp4', '.jpeg', '.jpg', '.png'].includes(ext)) continue;

            const hash = crypto.createHash('sha256').update(fs.readFileSync(filePath)).digest('hex');
            if (hashes[hash]) {
                console.log(`Skipping duplicate: ${file}`);
                continue;
            }
            hashes[hash] = true;

            const outPath = path.join(outDir, `${dir.replace(/ /g, '_')}_${file}`);
            
            if (ext === '.mp4' && stat.size > 40 * 1024 * 1024) {
                largeVideos.push({ in: filePath, out: outPath });
            } else {
                // Copy directly
                fs.copyFileSync(filePath, outPath);
                console.log(`Copied unique file: ${file}`);
            }
        }
    }

    console.log(`\nFound ${largeVideos.length} large videos to compress.`);
    for (const video of largeVideos) {
        await compressVideo(video.in, video.out);
    }
    console.log('All media processing complete!');
}

processAll();
