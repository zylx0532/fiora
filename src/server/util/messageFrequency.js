let count = { };
const MaxMessageLimit = 10; // every mimute

(
    function clear() {
        count = { };
        setTimeout(clear, 1000 * 60);
    }()
);

module.exports = function (userId) {
    // 5835984b5fe025750e972349 -> fiora数据库中robot10的id
    // 去掉机器人的消息频率限制
    if (userId === '5835984b5fe025750e972349') {
        return true;
    }
    if (count[userId] === undefined) {
        count[userId] = 1;
        return true;
    }
    else if (count[userId] < MaxMessageLimit) {
        count[userId]++;
        return true;
    }
    return false;
};
