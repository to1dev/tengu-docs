import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {mkdir, readFile, writeFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import fontverter from 'fontverter';
import * as fontkit from 'fontkit';

// The same complete v1.522 font as zhipan. No glyphs are subsetted.
const root = fileURLToPath(new URL('../', import.meta.url));
const sourceUrl = 'https://github.com/lxgw/LxgwWenKai-Screen/releases/download/v1.522/LXGWWenKaiScreen.ttf';
const sourceSha256 = 'cd1a6fa39c4ea42fd8f4e289945789b0e510cf7016435640f8893cdad9b220f3';
const hash = bytes => createHash('sha256').update(bytes).digest('hex');
const cachePath = `${root}.cache/fonts/LXGWWenKaiScreen.ttf`;
await mkdir(`${root}.cache/fonts`, {recursive: true});
await mkdir(`${root}static/fonts`, {recursive: true});
let source;
try {
  source = await readFile(cachePath);
} catch (error) {
  if (error.code !== 'ENOENT') throw error;
  const response = await fetch(sourceUrl);
  assert.ok(response.ok, `Font download failed: ${response.status}`);
  source = Buffer.from(await response.arrayBuffer());
  assert.equal(hash(source), sourceSha256, 'Unexpected upstream font contents');
  await writeFile(cachePath, source);
}
assert.equal(hash(source), sourceSha256, 'Source font checksum mismatch');
const woff2 = await fontverter.convert(source, 'woff2');
assert.equal(woff2.subarray(0, 4).toString(), 'wOF2');
const original = fontkit.create(source);
const converted = fontkit.create(woff2);
assert.deepEqual(converted.characterSet, original.characterSet);
for (const key of ['numGlyphs', 'unitsPerEm', 'ascent', 'descent', 'lineGap', 'postscriptName', 'fullName']) {
  assert.equal(converted[key], original[key], `Font property changed: ${key}`);
}
// Verify every glyph outline and advance, including unencoded glyphs.
for (let id = 0; id < original.numGlyphs; id++) {
  const before = original.getGlyph(id);
  const after = converted.getGlyph(id);
  assert.equal(after.advanceWidth, before.advanceWidth, `Advance changed: ${id}`);
  assert.equal(after.path.toSVG(), before.path.toSVG(), `Outline changed: ${id}`);
}
const sha256 = hash(woff2);
const filename = `LXGWWenKaiScreen-${sha256.slice(0, 12)}.woff2`;
await writeFile(`${root}static/fonts/${filename}`, woff2);
await writeFile(`${root}src/fonts.json`, JSON.stringify({
  version: '1.522', filename, sha256, sourceUrl, sourceSha256,
  bytes: woff2.length, glyphs: original.numGlyphs, characters: original.characterSet.length,
}, null, 2) + '\n');
console.log(`Verified ${original.numGlyphs} glyphs / ${original.characterSet.length} characters: ${source.length} -> ${woff2.length} bytes (${filename})`);
