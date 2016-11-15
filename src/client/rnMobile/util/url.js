export default function (url) {
    return url
        // 线上仓库地址
        .replace(/(http:\/\/cdn.suisuijiang.com)|(http:\/\/od8duqpjt.bkt.clouddn.com)/, 'https://ogb59u526.qnssl.com')
        // 测试仓库地址
        .replace(/http:\/\/ocvcaqr26.bkt.clouddn.com/, 'https://ognz68v5s.qnssl.com');
}
