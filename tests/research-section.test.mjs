import { readFile } from 'node:fs/promises';
import test from 'node:test';
import assert from 'node:assert/strict';

const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');

test('research positioning gives AI and human-AI interaction visible weight', () => {
  assert.match(html, /생물심리학 · 뇌신경생물학 · Human-AI Interaction/);
  assert.match(html, /생성형 AI/);
  assert.match(html, /인간-AI 상호작용/);
  assert.match(html, /인지적 인간요인/);
  assert.match(html, /AI 시대의 인간 판단/);

  const aiCardIndex = html.indexOf('<h4>생성형 AI 지각과 판별</h4>');
  const animalCardIndex = html.indexOf('<h4>동물행동실험</h4>');

  assert.notEqual(aiCardIndex, -1);
  assert.notEqual(animalCardIndex, -1);
  assert.ok(aiCardIndex < animalCardIndex);
});
