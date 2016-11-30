export default function filterCrMessage(message) {
    // 58315b1afa89d96833f2dfe4 -> fiora数据库中cr群id
    if (typeof message.to === 'object' && message.to._id === '58315b1afa89d96833f2dfe4') {
        message.playSound = false;
    }
    return message;
}
