import { app } from 'egg-mock/bootstrap';
import assert from 'assert';

describe('safeParse()', () => {
  it('should works', () => {
    const ctx = app.mockContext({
      // 模拟 ctx 的 headers
      headers: {
        'X-Powered-By': 'unittest',
      },
    });
    const parsed = ctx.helper.safeParse('{"a":1}') as any;
    assert(parsed.a === 1);
  });

  it('should error', () => {
    const ctx = app.mockContext({
      // 模拟 ctx 的 headers
      headers: {
        'X-Powered-By': 'unittest',
      },
    });
    const parsed = ctx.helper.safeParse(`{'key":1}`) as any;
    assert(Object.keys(parsed).length === 0);
  });
});
