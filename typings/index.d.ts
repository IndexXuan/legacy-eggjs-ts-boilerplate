import 'egg';
import { Context } from 'egg';

declare module 'egg' {
  interface Context {
    /**
     * Run async function in the background
     * @see - https://eggjs.github.io/zh/guide/context.html#ctx-runinbackground
     * 有实现，无类型，这里补充上
     */
    runInBackground(scope: () => void): void;
  }
}
