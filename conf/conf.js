const webpack = require('webpack');

function getStaticUrl() {
  const ps = '//static-h5.nfangbian.com/daojia/assets';//非st1环境
  const ss = '//st1-static.nfangbian.com/daojia/assets';//st1环境
  const sd = '/static'; //dev环境
  const staticDomainUrl = process.env.ST ? ss : ps;

  return process.env.NODE_ENV == 'dev' ? sd : staticDomainUrl;
}

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      SERVICE_URL: JSON.stringify(''),
      // 配合开发环境是否启用用户权限配置
      'process.env': {
        AUTH: JSON.stringify(process.env.AUTH),
        STATIC_URL: JSON.stringify(getStaticUrl()),
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ],
};
