

function getProducts(searchQuery) {
    //get state 현재 정보 을 받아옴.
    return async(dispatch,getState) => {

    let url = `http://localhost:5000/products?q=${searchQuery}` //자동으로 검색해줌
    let response = await fetch(url)
    let data =await response.json()
    console.log(data)
    dispatch({type:"GET_PRODUCT_SUCCESS",payload:{data}});

    };

};





export const productAction={getProducts }