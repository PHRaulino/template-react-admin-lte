import React from 'react';
import { Content } from '../../common/template';
import { Row } from '../../common/layout';
import { Card } from '../../common/elements/card';

export default () => {
  return (
    <Content titlePage='Dashboard' homePage='Home'>
      <Row center='true'>
        <Card cols='6 2' value='5.000' indicator='Chamadas Recebidas' link='./' color='bg-info' textLink='Saiba Mais' />
        <Card cols='6 2' value='4.900' indicator='Chamadas Atendidas' link='./' color='bg-warning' textLink='Saiba Mais' />
        <Card cols='6 2' value='300' indicator='TMO' link='./' color='bg-danger' textLink='Saiba Mais' />
        <Card cols='6 2' value='99%' indicator='Nivel de Serviço' link='./' color='bg-primary' textLink='Saiba Mais' />
        <Card cols='6 2' value='72' indicator='NPS' link='./' color='bg-green ' textLink='Saiba Mais' />
      </Row>
    </Content>
  )
}