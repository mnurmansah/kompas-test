import React from 'react';
import { Accordion, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './QuickHistory.scss';

const QuickHistory = ({ history: { jam, tanggal, nama, pengeluaraan }, index }) => {
  console.log(index);

  return (
    <Card className="mb-2 quick-history-card">
      <Accordion.Item as={Card.Header} eventKey={index} className="py-1 px-2" defaultActiveKey="0">
        <Row>
          <Col xs={6}>
            <p className="mb-0 text-truncate fs-12">{ nama }</p>
            <p className="mb-0 fs-8">{ tanggal }, { jam }</p>
          </Col>
          <Col xs={6} className="d-flex justify-content-end align-items-center">
            <img src={`icons/expense.svg`} alt={`expense-icon`}></img>
            <p className="mb-0 ml-2 font-weight-bold fs-12">
              Rp { pengeluaraan }
            </p>
          </Col>
        </Row>
      </Accordion.Item>
      <Accordion.Item eventKey={index}>
        <Card.Body className="d-flex justify-content-end p-2">
          <Link to="/" className="mr-2 quick-history create"><img src="icons/create.svg" alt="create-icon"></img></Link>
          <Link to="/" className="quick-history delete"><img src="icons/close.svg" alt="delete-icon"></img></Link>
        </Card.Body>
      </Accordion.Item>
    </Card>
  )
}

export default QuickHistory;