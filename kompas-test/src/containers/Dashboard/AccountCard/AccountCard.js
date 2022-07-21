import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import './AccountCard.scss';

const AccountCard = ({ detail: { jam, tanggal, nama, pengeluaraan } }) => (
  <Card 
    className="mgb-8 account-card" 
  >
    <Card.Body className="pd-8">
      <Card.Title className="font-weight-normal fs-12">
        <Row>
          <Col>{ tanggal }</Col>
        </Row>
        <br/>
        <Row>
          <Col>Jam : { jam }</Col>
          <Col>{ nama }</Col>
          <Col>{ `Rp. ${pengeluaraan}` }</Col>
        </Row>
      </Card.Title>
      <Card.Text className="text-right font-weight-bold fs-14">
        {/* { `Rp ${tanggal}` } */}
      </Card.Text>
    </Card.Body>
  </Card>
)

export default AccountCard;