import React, { useState } from 'react'
import { useEffect } from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import {detailAction} from '../redux/actions/detailAction'
import { useSelector } from 'react-redux';

const ProductDetail = () => {
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.detail.detail)
  let {id} = useParams();
  const getProductDetail = async () => {
    // let url = `https://my-json-server.typicode.com/gihyeok10/React/products/${id}` 배포주소
    dispatch(detailAction.getProductDetail(id))
  }

  useEffect(() => {
    getProductDetail()
  },[]);

  return (
    <Container>
      <Row>
        <Col className='product-img'>
          <img src={detail?.img}/>
        </Col>
        <Col>
          <div>{detail?.title}</div>
          <div>{detail?.price}</div>
        </Col>
      </Row>
    </Container>      
  )
}

export default ProductDetail