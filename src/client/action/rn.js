import Store from '../store';

const dispatch = Store.dispatch;

const actions = {
    navigator: (router, routerParams = {}) => dispatch({ type: 'Navigator', router, routerParams }),
};

export default actions;
