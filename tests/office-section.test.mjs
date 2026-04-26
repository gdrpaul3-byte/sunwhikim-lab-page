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

test('office panorama viewer loads pannellum and both office scenes', () => {
  assert.match(html, /pannellum\.css/);
  assert.match(html, /pannellum\.js/);
  assert.match(html, /office-panorama-viewer/);
  assert.match(html, /office-panorama-error/);
  assert.match(html, /viewer\.on\('load'/);
  assert.match(html, /viewer\.on\('error'/);
  assert.match(html, /Office view 01/);
  assert.match(html, /Office view 02/);

  for (const asset of expectedAssets) {
    assert.match(html, new RegExp(asset.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
    assert.equal(existsSync(new URL(`../${asset}`, import.meta.url)), true);
  }
});
