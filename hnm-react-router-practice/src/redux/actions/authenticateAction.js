function login (id,password) {
    return (dispatch,getState) => {
        console.log("action가라")
        dispatch({type:"LOGIN_SUCCESS",payload: {id,password}})
    }
}

export const authenticateAction = {login};