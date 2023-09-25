import type { IHelper } from 'egg';

// @see - https://www.eggjs.org/basics/extend
export default {
  safeParse(this: IHelper, maybeJson: any): unknown {
    try {
      return JSON.parse(maybeJson);
    } catch (e) {
      this.ctx.logger.error('maybeJson:', maybeJson);
      return {};
    }
  },
  prettyJson(json: any) {
    return JSON.stringify(json, null, 2);
  },
};
