import type { Context } from 'egg';

export default () => {
  return async (ctx: Context, next: () => Promise<void>) => {
    try {
      await next();
    } catch (err: any) {
      ctx.app.emit('error', err, ctx);
      const status = err.status || 500;
      /* istanbul ignore next */
      const error =
        status === 500 && ctx.app.config.env === 'prod'
          ? 'Internal Server Error'
          : { from: 'middleware', msg: `${err.message}`, stack: `${err.stack}` };
      ctx.body = { error };
      // 422 Unprocessable Entity
      if (status === 422) {
        ctx.body.detail = err.errors;
      }
      ctx.status = status;
      ctx.logger.info('========== middleware catched error ==========');
    } // /.catch
  }; // /.async function
}; // /.exports
