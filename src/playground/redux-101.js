import { createStore } from "redux";

//Reducers
// 1. Reducer are pure functions
// 2. Never change the state or action (only return)
const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case "INCREMENT":
            const incrementBy = typeof action.incrementBy === "number" ? action.incrementBy : 1
            return { count: state.count + incrementBy }
        case "DECREMENT":
            const decrementBy = typeof action.decrementBy === "number" ? action.decrementBy : 1
            return { count: state.count - decrementBy }
        case "RESET":
            return { count: 0 }
        case "SET": 
            return {count: action.count}
        default:
            break;
    }
    return state;
}

const store = createStore(countReducer)



// Called when store is changed any time
const unsubscribe = store.subscribe(()=> {
    console.log(store.getState())
})


//Increment the count 

// store.dispatch({
//     type: "INCREMENT"
// })

// unsubscribe()
// if called unsubscribe to above subscribe. 
// Action generators 
const increment = ({incrementBy = 1} = {}) => (
    {
        type: "INCREMENT",
        incrementBy
    }
)

const decrement = ({decrementBy = 1} = {}) => (
    {
        type: "INCREMENT",
        decrementBy
    }
)
const reset = () => (
    {
        type: "RESET"
    }
)

const set = ({count}) => (
    {
        type:"SET",
        count
    }
)


store.dispatch(increment())
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(decrement())
store.dispatch(reset())


//Dynamic payload in actiom

store.dispatch(increment({incrementBy : 5}))

store.dispatch(decrement({decrementBy : 5}))


store.dispatch(set({count:100}))
