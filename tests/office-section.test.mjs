import { readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import test from 'node:test';
import assert from 'node:assert/strict';

const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');
const expectedAssets = [
  'pics/office-panorama-01.jpg',
  'pics/office-panorama-02.jpg',
];

test('office panorama section is reachable from navigation', () => {
  assert.match(html, /href="#office"/);
  assert.match(html, /id="office"/);
  assert.match(html, /A look inside the Office/);
});

test('office panorama viewer exposes both office scans without WebGL dependencies', () => {
  assert.doesNotMatch(html, /pannellum/);
  assert.match(html, /office-panorama-track/);
  assert.match(html, /office-panorama-image/);
  assert.match(html, /scrollTo/);
  assert.match(html, /pointerdown/);
  assert.match(html, /data-office-pan="left"/);
  assert.match(html, /data-office-pan="right"/);
  assert.match(html, /office-panorama-pan/);
  assert.match(html, /pointerType !== 'mouse'/);
  assert.match(html, /touch-action: pan-y/);
  assert.match(html, /scrollBy/);
  assert.match(html, /Office view 01/);
  assert.match(html, /Office view 02/);

  for (const asset of expectedAssets) {
    assert.match(html, new RegExp(asset.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
    assert.equal(existsSync(new URL(`../${asset}`, import.meta.url)), true);
  }
});
