import Reactotron from 'reactotron-react-native';

Reactotron.configure().connect();
console.log = Reactotron.log;
