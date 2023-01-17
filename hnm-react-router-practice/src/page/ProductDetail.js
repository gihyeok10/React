import React, { useState } from 'react'
import { useEffect } from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
const ProductDetail = () => {
  let {id} = useParams();
  const [product,setProduct] = useState(null)
  const getProductDetail = async () => {
    // let url = `https://my-json-server.typicode.com/gihyeok10/React/products/${id}` 배포주소
    let url = `http://localhost:5000/products?q=${id}`
    let response = await fetch(url)
    let data = await response.json();
    console.log(data)
    setProduct(data);
  }

  useEffect(() => {
    getProductDetail()
  },[]);

  return (
    <Container>
      <Row>
        <Col className='product-img'>
          <img src={product?.img}/>
        </Col>
        <Col>
          <div>{product?.title}</div>
          <div>{product?.price}</div>
        </Col>
      </Row>
    </Container>      
  )
}

export default ProductDetail