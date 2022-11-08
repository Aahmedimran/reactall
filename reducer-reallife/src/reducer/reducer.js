

const reducer = (state,action) => {
    switch (action.type) {
        case "updateText": {
          return { ...state, name: state.name+" programming"}
        }

        case "updateCount": {
          return { ...state, count: state.count+1}
        }

        case "updateOnly": {
          return { ...state, updateOnly: state.updateOnly+' updated'}
        

        }
       default: {
          return state
       }
}
}
export default reducer;