import React, { useEffect, useState } from 'react'
import { Container ,Row,Col} from 'react-bootstrap';
import ProductCard from '../component/ProductCard';
import { useSearchParams } from 'react-router-dom';
import { productAction} from "../redux/actions/productAction"
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
const ProductAll = () => {
  // const [productList,setProductList] = useState([]); // 뽑을게 어레이니까 빈 어레이로
  // const productList = useSelector((state) => state.productList)
  
  const productList = useSelector((state) => state.product.productList)  //combine으로 합치면 객체 이름 써줘야함~

  const [query,setQuery] = useSearchParams();
  const dispatch = useDispatch();
  const getProducts = () => {
    let searchQuery = query.get('q') || "";  //자동으로 검색해줌
    console.log("search queey:", searchQuery)
    dispatch( productAction.getProducts(searchQuery))
    
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