/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * baseImgPath: 图片存放地址
 *
 */
let baseUrl = 'http://tao.cc';
let routerMode = 'hash';
let baseImgPath;

if (process.env.NODE_ENV == 'development') {
  baseUrl = 'http://tao.cc';
  baseImgPath = 'http://tao.cc';
} else {
  baseUrl = 'https://utils.nofile.cc';
  baseImgPath = 'https://image.nofile.cc/';
}

export { baseUrl, routerMode, baseImgPath }