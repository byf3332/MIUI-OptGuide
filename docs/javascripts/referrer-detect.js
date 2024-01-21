;'use strict';

(() =>
{
    const referrer = document.referrer.toLowerCase();
    const searchEngineReg = /^https?:\/\/(.*)\.?(sogou|soso|baidu|google|youdao|yahoo|bing|118114|biso|gougou|ifeng|ivc|sooule|niuhu|biso|so|haosou|sm)\.(.{2,})/;
    const originReg = /https:\/\/(.*)\.?github\.com/;

    if (!referrer || referrer == '') return;
    if (referrer.indexOf('http://localhost') === 0) return;
    if (referrer.indexOf('https://github.com/MIUI-OptGuide') === 0) return;
    if (searchEngineReg.test(referrer)) return;
    if (originReg.test(referrer)) return;

    return new Promise((res) =>
    {
        alert('我也不知道你从哪搜来的这个东西\r\n\r\n本人理论上暂时没有将该文档发布到其它地方\r\n\r\n无论如何，祝你搞机愉快');
        res(true);
    });
})();