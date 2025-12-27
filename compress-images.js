import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const assetsDir = './src/assets';
const files = fs.readdirSync(assetsDir);

const processImages = async () => {
    for (const file of files) {
        if (file.match(/\.(jpg|jpeg|png)$/i)) {
            const inputPath = path.join(assetsDir, file);
            const outputPath = path.join(assetsDir, file.replace(/\.(jpg|jpeg|png)$/i, '.webp'));

            console.log(`Processing ${file}...`);
            await sharp(inputPath)
                .resize(800) // Reasonable width for web
                .webp({ quality: 80 })
                .toFile(outputPath);
            console.log(`Saved to ${outputPath}`);
        }
    }
};

processImages().catch(console.error);
