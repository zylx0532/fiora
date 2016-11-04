import jQuery from 'jquery';
import api from '../api.js';

const shitImg = require('../assets/image/shit.gif');

window.jQuery = jQuery;
window.$ = jQuery;

const $ = window.$;

const width = 40;
const $shitTpl = $(`<img style="width:${width}px;" src=${shitImg}>`);


const name = 'shit';
const showBase = true;

function process(message) {
    const match = message.content.trim().match(/^([a-zA-Z0-9_-]+)\s*\(([\s\S]*)\)\s*;?\s*$/);
    return {
        from: message.from.username,
        content: match[2],
    };
}

function render(info, isNew) {
    const $bomb = $shitTpl.clone();

    if (!isNew) {
        return $bomb;
    }

    let argStr = info.get('content');
    const from = info.get('from');

    argStr = argStr.replace(/&quot;/g, '"');

    let userName;
    let radius;
    if (argStr === '，') {
        userName = '，';
    } else {
        argStr = argStr.split('，').join(',');
        const args = argStr.split(/(?=[^\\]),/);
        userName = args[0];
        radius = args[1];
    }
    if (!radius) {
        radius = 1;
    }
    if (radius > 50) {
        radius = 50;
    }

    setTimeout(() => {
        const $source = api.findUserMessage(from);


        let $target = api.findUserMessage(userName);
        let $targetAvatar;
        if (!$target) {
            console.warn(`目标${userName}不存在, 即将自扔`);
            $target = $source;
            $targetAvatar = $source.find('.avatar-image,.avatar-text');
        } else {
            $targetAvatar = $target.find('.avatar-image,.avatar-text');
        }


        if (!$targetAvatar.length) {
            console.warn(`目标${userName}头像不存在, 即将自扔`);
            $target = $source;
            $targetAvatar = $source.find('.avatar-image,.avatar-text');
        }


        $source.find('.text').replaceWith($bomb);
        const pos1 = $targetAvatar.offset();
        pos1.top -= $targetAvatar.height();
        pos1.top += 13;
        const pos2 = $bomb.offset();
        let finalDeg;
        if ($target[0] === $source[0]) {
            finalDeg = -10;
            pos1.left -= 10;
        } else {
            finalDeg = 10;
            pos1.left += 10;
        }


        if ($source.css('flex-direction') === 'row') {
            $bomb.css('left', '-20px')
                .css('bottom', '-20px')
                .css('transform', 'translate(50%,-50%)');
        } else {
            $bomb.css('left', `${width / 2}px`)
                .css('bottom', `-${width / 2}px`)
                .css('transform', 'translate(-50%,-50%)');
        }

        const G = 0.0007;
        const time = 1000;

//      x=vt+at2; v=(x-at2)/t 贴心小公式 helpful-little-format
        const v = (pos1.top - pos2.top - G * time * time) / time;

        $bomb.css('opacity', '0')
            .css('position', 'relative')
            .animate({
                opacity: '1',
            }, {
                duration: 500,
                easing: 'easeOutBack',
                done: function () {
                    $(this).css('left', '')
                        .css('bottom', '')
                        .css('transform', '');
                },
            })
            .delay(200)
            .animate({
                left: pos1.left - pos2.left,
                borderSpacing: 1000,
            }, {
                duration: 1000,
                easing: 'linear',
                step: function (now, fx) {
                    if (fx.prop === 'borderSpacing') {
                        $bomb.css({
                            transform: `rotate(${now / 1000 * 360 + finalDeg}deg)`,
                            top: v * now + G * now * now,
                        });
                    }
                },
                done: function () {
                    $(this).css('transform', '')
                        .css('borderSpacing', '1000')
                        .css('left', pos1.left - pos2.left - width / 2)
                        .css('top', (pos1.top - pos2.top) + width / 2)
                        .css('transform', `translate(50%,-50%) rotate(${finalDeg}deg)`);
                },
            });
    });
    $bomb.css('opacity', '0');
    return $bomb;
}
api.registerMessage({
    name,
    showBase,
    process,
    render,
});
