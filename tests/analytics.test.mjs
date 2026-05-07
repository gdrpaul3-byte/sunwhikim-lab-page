import { readFile } from 'node:fs/promises';
import test from 'node:test';
import assert from 'node:assert/strict';

const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');

test('homepage includes the GA4 Google tag in the document head', () => {
  const head = html.match(/<head>[\s\S]*?<\/head>/)?.[0] ?? '';
  const styleIndex = head.indexOf('<style>');
  const googleTagIndex = head.indexOf('https://www.googletagmanager.com/gtag/js?id=G-57MLLNRF0L');

  assert.notEqual(googleTagIndex, -1);
  assert.ok(googleTagIndex < styleIndex);
  assert.match(head, /window\.dataLayer = window\.dataLayer \|\| \[\];/);
  assert.match(head, /function gtag\(\)\{dataLayer\.push\(arguments\);\}/);
  assert.match(head, /gtag\('js', new Date\(\)\);/);
  assert.match(head, /gtag\('config', 'G-57MLLNRF0L'\);/);
});
