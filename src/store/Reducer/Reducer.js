const Initial_State = {
    name : 'Saad',
}

function Reducer(state=Initial_State,action) {
    switch (action.type) {
        case 'SetName':
            
        return ({
            name : action.newName
        })
    
        default:
        return state;
    }
}
export default Reducer;