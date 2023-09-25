# legacy-eggjs-ts-boilerplate

[legacy-eggjs-ts-boilerplate](https://github.com/IndexXuan/legacy-eggjs-ts-boilerplate) showcase using TypeScript && Egg.js 2.x

## QuickStart

### Development

```bash
$ pnpm i
$ pnpm run dev
$ open http://localhost:7001/
```

Don't tsc compile at development mode, if you had run `tsc` then you need to `npm run clean` before `npm run dev`.

### Deploy

```bash
$ pnpm run tsc
$ pnpm start
```

### Npm Scripts

- Use `pnpm run lint` to check code style
- Use `pnpm test` to run unit test
- se `pnpm run clean` to clean compiled js at development mode once

### Requirement

- Node.js 18.x
- Typescript 5+

### Why

- 使用 Egg.js 2.x 而非 3.x，因为 3.x 配合 tegg 完全就是新的框架，暂时不学
- 升级所有依赖到最新并测试，锁定小版本，以后 Egg.js 相关依赖就不动了
- 仅使用 config.default.ts + 环境变量，不再使用 local/prod 这些
- 使用 Prettier + eslint + typescript-eslint
- 更多演示，例如 extend Context
- 暂时不加入工程化工具，例如 husky / commitlint 这些

## 备忘

- power-assert 已经被废弃
