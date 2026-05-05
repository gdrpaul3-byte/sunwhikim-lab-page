import { readFile } from 'node:fs/promises';
import test from 'node:test';
import assert from 'node:assert/strict';

const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');

test('homepage includes the Makers student outreach section before contact', () => {
  assert.match(html, /id="outreach"/);
  assert.match(html, /student_maker_community/);
  assert.match(html, /메이커스\(Makers\)/);
  assert.match(html, /AI 코딩/);
  assert.match(html, /생성형 미디어/);
  assert.match(html, /3D 프린팅/);
  assert.match(html, /아두이노/);
  assert.match(html, /프로토타입 제작 문화/);
  assert.match(html, /https:\/\/gdrpaul3-byte\.github\.io\/hsmu_makers_page\//);
  assert.match(html, /\.\/open_makers_page/);

  assert.ok(html.indexOf('id="patents"') < html.indexOf('id="outreach"'));
  assert.ok(html.indexOf('id="outreach"') < html.indexOf('id="contact"'));
});
