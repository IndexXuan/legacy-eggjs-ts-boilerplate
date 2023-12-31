import type { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.index.root);
};
