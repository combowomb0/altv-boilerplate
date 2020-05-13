# alt:V boilerplate with TypeScript and React
> ⚠️ Please refer to the [Lerna](https://github.com/lerna/lerna) for documentation

---

## Quick start
1. Clone repository
2. Install [yarn](https://classic.yarnpkg.com/en/docs/install), open cmd/bash and type `yarn global add lerna`
3. Download alt:V server files [here](https://altv.mp/#/downloads) and extract them into boilerplate folder
4. Open cmd/bash in boilerplate directory and type:
    - `yarn`
    - `lerna run build`
5. Add `main` to resources in `server.cfg`

## Commands
- `lerna run main:start` - watch client and server files
- `lerna run view:start` - watch webView files
- `lerna run build` - build client, server and webView files
- `lerna run lint` - ESLint
- `lerna run storybook` - Storybook

## Node scripts
- `yarn watch` - watch resources folder and restart server
- `yarn update:release` - update server files from the release branch
