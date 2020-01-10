import React from 'react';
import { Content } from '../../common/template';
import { Row } from '../../common/layout';
import { CardInfo } from '../../common/card';
import './main';

export default () => (
  <Content titlePage="Dashboard" homePage="Home">
    <Row center="true">
      <CardInfo cols="6 2" value="1.000" indicador="Chamadas Recebidas" />
      <CardInfo cols="6 2" value="1.000" indicador="Chamadas Atendidas" />
      <CardInfo cols="6 2" value="1.000" indicador="Nivel De Serviço" />
      <CardInfo cols="6 2" value="1.000" indicador="TMO" />
      <CardInfo cols="6 2" value="1.000" indicador="NPS" />
    </Row>
    <Row>

      <section className="col-lg-7 connectedSortable">

        <div className="card">
          <div className="card-header">
            <h3 className="card-title">
              <i className="fas fa-chart-pie mr-1" />
                Sales
            </h3>
            <div className="card-tools">
              <ul className="nav nav-pills ml-auto">
                <li className="nav-item">
                  <a className="nav-link active" href="revenue-chart" data-toggle="tab">Area</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="sales-chart" data-toggle="tab">Donut</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="card-body">
            <div className="tab-content p-0">

              <div className="chart tab-pane active" id="revenue-chart">
                <canvas id="revenue-chart-canvas" />
              </div>
              <div className="chart tab-pane" id="sales-chart">
                <canvas id="sales-chart-canvas" />
              </div>
            </div>
          </div>
        </div>

      </section>
    </Row>
  </Content>
);
