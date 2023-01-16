import React, { useEffect, useState } from 'react'
import { Container ,Row,Col} from 'react-bootstrap';
import ProductCard from '../component/ProductCard';
import { useSearchParams } from 'react-router-dom';
const ProductAll = () => {
  const [productList,setProductList] = useState([]); // 뽑을게 어레이니까 빈 어레이로
  const [query,setQuery] = useSearchParams();
  const getProducts = async() => {
    let searchQuery = query.get('q') || "";  //자동으로 검색해줌
    console.log("search queey:", searchQuery)
    let url = `https://my-json-server.typicode.com/gihyeok10/React/products?q=${searchQuery}` //자동으로 검색해줌
    let response = await fetch(url)
    let data =await response.json()
    console.log(data)
    setProductList(data)
  }
  useEffect(() => {
    getProducts()
  },[query])  //안하면 안댐
  return (
    <div>
      <Container>
        <Row>
        {productList.map((item) => 
          <Col lg={3} key={item.id}>
            <ProductCard item={item}/>
          </Col>
        )}
          
        </Row>
      </Container>
    </div>
  )
}

export default ProductAll
//container ==> 적당히 중앙에 보이게 해줌..