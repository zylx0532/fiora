import reactotron from 'reactotron-react-native';

reactotron.configure().connect();
console.rnLog = reactotron.log;
