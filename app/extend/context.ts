import type { Context } from 'egg';

// @see - https://www.eggjs.org/basics/extend
export default {
  getRequestPayload(this: Context): Record<string, any> {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const ctx = this;
    return { ...ctx.query, ...ctx.params, ...ctx.request.body };
  },
};
