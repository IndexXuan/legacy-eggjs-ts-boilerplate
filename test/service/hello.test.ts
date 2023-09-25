import type { Context } from 'egg';
import assert from 'assert';
import { app } from 'egg-mock/bootstrap';

describe('test/service/hello', () => {
  let ctx: Context;

  before(async () => {
    ctx = app.mockContext();
  });

  it('sayHi', async () => {
    const result = await ctx.service.hello.sayHi('egg');
    assert(result === 'hi, egg');
  });
});
