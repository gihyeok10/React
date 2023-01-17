let initialState = {

    detail:null,
}

function detailReducer(state=initialState,action) {

    let {type,payload} = action
    switch(type) {

        case "DETAIL_SUCCESS":
            return{...state,detail: payload.data}

            default: return {...state}
    }

}

export default detailReducer