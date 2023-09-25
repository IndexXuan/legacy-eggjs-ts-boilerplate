import { app } from 'egg-mock/bootstrap';
import assert from 'assert';

describe('getRequestPayload', () => {
  it('should works', () => {
    const ctx = app.mockContext({
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
      },
      query: {
        lang: 'ts',
      },
    });
    const { lang } = ctx.getRequestPayload();
    assert(lang, 'ts');
  });
});
