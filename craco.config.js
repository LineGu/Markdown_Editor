// eslint-disable-next-line @typescript-eslint/no-var-requires
const CracoAlias = require('craco-alias');

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        baseUrl: '.', // tsconfig.paths.json에 있는 baseUrl 경로값과 맞춰줍니다.
        tsConfigPath: 'base-tsconfig.json',
        debug: false, // 에러가 날 경우 true로 바꾸고 디버깅 하면 대부분의의 문제해결!
      },
    },
  ],
};
