import createstore from 'redux';


const store= createstore ();
const reducer = combinedreducer({
    producerlist: producerListReducer,
})reducer

const store =createStore{reducer, iintialState};
export start store;