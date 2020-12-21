const setName = ()=>{
    return (dispatch)=>{
        dispatch({type : 'SetName', newName : 'Saadullah Aslam' })
    }
}

export {
    setName
}