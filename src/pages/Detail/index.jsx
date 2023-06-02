import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { productThunk } from 'redux/thunks/productThunk';
import { Col, Divider, Row } from 'antd';

import styles from './styles.module.scss';
import Info from './components/Info';
import Slider from 'components/Slider';
import SliderDetail from './components/SliderDetail';
import Container from 'components/Container';
import Breadcrumb from 'components/Breadcrumb';

const Detail = () => {
  const param = useParams();
  const dispatch = useDispatch();
  const productById = useSelector((state) => state.product.productById);
  const breadCrumbList = [{ href: '/', title: 'Home' }, { title: productById?.name }];

  console.log('Detail ~ productById:', productById);

  useEffect(() => {
    dispatch(productThunk.getProductById(param.id));
  }, [dispatch, param]);

  return (
    <div className={styles.wrapper}>
      <Container>
        <Breadcrumb breadCrumbList={breadCrumbList} />
        <Row gutter={16}>
          <Col span={12}>
            <SliderDetail product={productById} />
          </Col>
          <Col span={12}>
            <Info product={productById} />
          </Col>
        </Row>

        <Divider />

        <Slider productList={productById.relatedProducts} title='You May Also Like' />
      </Container>
    </div>
  );
};

export default Detail;
