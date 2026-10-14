import test from 'node:test';
import assert from 'node:assert/strict';
import { privacyCopy } from './privacy-content.js';

test('Chinese and English publish the same privacy topics with unique anchors', () => {
  const ids = language => privacyCopy[language].sections.map(section => section.id);
  assert.deepEqual(ids('zh'), ids('en'));
  assert.equal(new Set(ids('zh')).size, ids('zh').length);
  for (const id of ['accounts', 'account-deletion', 'analytics', 'contact']) {
    assert.ok(ids('zh').includes(id));
  }
});

test('both languages disclose providers, optional identity, and deletion without promising sync', () => {
  for (const language of ['zh', 'en']) {
    const copy = privacyCopy[language];
    const account = copy.sections.find(section => section.id === 'accounts').paragraphs.join(' ');
    for (const term of ['Google', 'Apple', 'Supabase', 'Resend', 'login@gearwall.app']) {
      assert.ok(account.includes(term), `${language}: ${term}`);
    }
    for (const section of copy.sections) {
      assert.ok(section.title && section.paragraphs.length);
      for (const link of section.links ?? []) {
        assert.ok(['https:', 'mailto:'].includes(new URL(link.href).protocol));
      }
    }
  }
  assert.ok(privacyCopy.zh.sections.find(s => s.id === 'local-data').paragraphs.join('').includes('尚未接入'));
  assert.ok(privacyCopy.en.sections.find(s => s.id === 'local-data').paragraphs.join('').includes('does not implement'));
});
