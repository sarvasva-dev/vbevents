const fs = require('fs');
const files = fs.readdirSync('public/gallery');
const target = files.find(f => f.includes('Nnnn'));
console.log("Found file:", target);
if(target) {
  fs.renameSync('public/gallery/' + target, 'public/gallery/birthday_Nnnnnnn.mp4');
}
const targetJpg = files.find(f => f.includes('Nnnn') && f.endsWith('.jpg'));
console.log("Found jpg file:", targetJpg);
if(targetJpg) {
  fs.renameSync('public/gallery/' + targetJpg, 'public/gallery/birthday_Nnnnnnn.mp4.jpg');
}
