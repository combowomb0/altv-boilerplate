# alt:V boilerplate with TypeScript and React
> ⚠️ Please refer to the [Lerna](https://github.com/lerna/lerna) for documentation

---

## Quick start
1. Clone repository
2. Install [yarn](https://classic.yarnpkg.com/en/docs/install), open cmd/bash and type `yarn global add lerna`
3. Download alt:V server files [here](https://altv.mp/#/downloads) and extract them into boilerplate folder
4. Open cmd/bash in boilerplate directory and type:
    - `yarn`
    - `yarn build`
5. Add `core` and `core-assets-view` to resources in `server.cfg`

```
resources: [
  core,
  core-assets-view,
]
```

## Commands
- `yarn start` - watch client, server and webView files
- `yarn build` - build client, server and webView files
- `yarn lint` - [ESLint](https://eslint.org/)
- `yarn lint:fix` - [ESLint](https://eslint.org/) with `--fix` option
- `yarn prettier` - [Prettier](https://prettier.io/)
- `lerna run storybook` - [Storybook](https://storybook.js.org/)
- `lerna run storybook:build` - build storybook

## Node scripts
- `yarn watch` - watch resources folder and restart server
