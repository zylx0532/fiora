import reactotron from 'reactotron-react-native';

reactotron.configure().connect();
console.log = function (...values) {
    for (const value of values) {
        reactotron.log(value.toString());
    }
};
console.logState = (preview, value) => {
    reactotron.display({
        name: 'STATE',
        preview,
        value,
    });
};
