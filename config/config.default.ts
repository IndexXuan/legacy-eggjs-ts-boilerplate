import type { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo): PowerPartial<EggAppConfig> => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_{{keys}}';

  config.middleware = ['errorHandler'];

  config.bodyParser = {
    jsonLimit: '5mb',
    formLimit: '5mb',
  };

  config.cors = {
    credentials: true,
  };

  config.security = {
    domainWhiteList: ['http://localhost*', 'https://demo-test.yourdomain.com*', 'https://demo.yourdomain.com*'],
    csrf: {
      enable: false,
    },
  };

  config.httpclient = {
    enableDNSCache: false,
    dnsCacheLookupInterval: 10000,
    dnsCacheMaxLength: 1000,
    request: {
      /** 10s 超时 */
      timeout: 10000,
    },
  };

  // add your special config in here
  const bizConfig = {
    hello: 'world',
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
