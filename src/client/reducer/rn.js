import immutable from 'immutable';

const initialState = immutable.fromJS({
    router: 'login',
    routerParams: {
        status: 'login',
    },
});

function reducer(state = initialState, action) {
    switch (action.type) {
    case 'Initialize': { return initialState; }

    case 'Navigator': {
        return state.set('router', action.router).set('routerParams', immutable.fromJS(action.routerParams));
    }

    default:
        return state;
    }
}

export default reducer;
