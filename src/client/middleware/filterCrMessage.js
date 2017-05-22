export default function filterCrMessage(message) {
    // 591e6e006fbd010c9f187bee -> fiora数据库中cr群id
    if (typeof message.to === 'object' && message.to._id === '591e6e006fbd010c9f187bee') {
        message.playSound = false;
    }
    return message;
}
