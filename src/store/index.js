import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createWrapper } from 'next-redux-wrapper';
import reducer from './reducers';

// create a makeStore function
const makeStore = context => createStore(reducer, composeWithDevTools());

// export an assembled wrapper
export const wrapper = createWrapper(makeStore, { debug: true });

