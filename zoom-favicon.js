import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'fs';

async function zoomFavicon() {
  try {
    // Read the 32x32 favicon
    const inputImage = await sharp('public/favicon-32x32.png')
      .metadata();

    console.log('Original image:', inputImage);

    // Zoom in by extracting the center portion and scaling up
    // This creates a 2x zoom effect by taking the center 16x16 and scaling to 32x32
    const zoomed32 = await sharp('public/favicon-32x32.png')
      .extract({
        left: Math.floor(inputImage.width / 4),
        top: Math.floor(inputImage.height / 4),
        width: Math.floor(inputImage.width / 2),
        height: Math.floor(inputImage.height / 2)
      })
      .resize(32, 32, {
        kernel: 'nearest',
        fit: 'fill'
      })
      .toBuffer();

    // Create 16x16 version from the zoomed 32x32
    const zoomed16 = await sharp(zoomed32)
      .resize(16, 16, {
        kernel: 'nearest',
        fit: 'fill'
      })
      .toBuffer();

    // Save the zoomed versions
    await sharp(zoomed32)
      .toFile('public/favicon-32x32-zoomed.png');

    await sharp(zoomed16)
      .toFile('public/favicon-16x16-zoomed.png');

    // Also create a standard favicon.ico (32x32)
    await sharp(zoomed32)
      .toFile('public/favicon-zoomed.ico');

    console.log('✓ Created zoomed favicons successfully!');
    console.log('  - favicon-32x32-zoomed.png');
    console.log('  - favicon-16x16-zoomed.png');
    console.log('  - favicon-zoomed.ico');

  } catch (error) {
    console.error('Error processing favicon:', error);
  }
}

zoomFavicon();
