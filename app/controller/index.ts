import { Controller } from 'egg';

/**
 * Index Controller
 */
export default class IndexController extends Controller {
  public async root() {
    const { ctx } = this;
    const { lang } = ctx.getRequestPayload();
    ctx.body = await ctx.service.hello.sayHi(lang ? `egg.${lang}` : 'egg');
  }
}
