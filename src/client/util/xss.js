import xss from 'xss';

const myXss = new xss.FilterXSS({
    whiteList: {
    },
});

export default function (value) {
    return myXss.process(value);
}
