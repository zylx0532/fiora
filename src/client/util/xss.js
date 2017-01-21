import xss from 'xss';

const myXss = new xss.FilterXSS({
    whiteList: {
        img: [],
    },
});

export default function (value) {
    return myXss.process(value);
}
