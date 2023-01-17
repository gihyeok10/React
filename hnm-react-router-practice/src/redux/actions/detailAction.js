function getProductDetail(id) {
    return async(dispatch,getState) => {
        console.log("login액션이가라")
        let url = `http://localhost:5000/products/${id}`
        let response = await fetch(url)
        let data = await response.json();
        console.log(data)
        dispatch({type:"DETAIL_SUCCESS",payload: {data}})
    }
}

export const detailAction = {getProductDetail};