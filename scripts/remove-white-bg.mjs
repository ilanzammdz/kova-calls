import sharp from 'sharp';
import { readdir } from 'fs/promises';
import { join } from 'path';

const dir = 'C:\\Users\\bound\\.claude\\kovacalls\\Kova Calls\\public\\clients';

const files = (await readdir(dir)).filter(f => f.endsWith('.png'));
console.log(`Processing ${files.length} files...`);

for (const file of files) {
  const input = join(dir, file);
  const { data, info } = await sharp(input)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;

  for (let i = 0; i < data.length; i += channels) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    // Near-white tolerance: remove backgrounds that are essentially white
    if (r > 235 && g > 235 && b > 235) {
      data[i + 3] = 0;
    }
  }

  await sharp(data, { raw: { width, height, channels } })
    .png({ compressionLevel: 9 })
    .toFile(input);

  console.log(`  ✓ ${file}`);
}

console.log('Done.');
