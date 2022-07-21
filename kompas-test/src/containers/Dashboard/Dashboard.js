import React, { useEffect, useState } from 'react';
import { Accordion, Col, Card, Row, Button, Modal, Form } from 'react-bootstrap';
// import "./Loading.css";
import AccountCard from './AccountCard/AccountCard';
import QuickHistory from './QuickHistoryCard/QuickHistory';
import './Dashboard.scss'


export const details = [ 
    {
        "jam": "03:15",
        "tanggal":"18 Februari 2021",
        "nama":"Ayam Tangkap",
        "pengeluaraan":77249
    },
    {
        "jam": "03:15",
        "tanggal":"18 Februari 2021",
        "nama":"Mie Rebus",
        "pengeluaraan":32154
    },
    {
        "jam": "00:20",
        "tanggal":"17 Februari 2021",
        "nama":"Soto Kuning",
        "pengeluaraan":34992
    },
    {
        "jam": "05:59",
        "tanggal":"17 Februari 2021",
        "nama":"Ayam Geprek",
        "pengeluaraan":37674
    },
    {
        "jam": "05:45",
        "tanggal":"16 Februari 2021",
        "nama":"Otak-otak",
        "pengeluaraan":11971
    }
]

export const historys = [ 
    {
        "jam": "03:15",
        "tanggal":"18 Februari 2021",
        "nama":"Ayam Tangkap",
        "pengeluaraan":77249
    },
    {
        "jam": "03:15",
        "tanggal":"18 Februari 2021",
        "nama":"Mie Rebus",
        "pengeluaraan":32154
    },
    {
        "jam": "00:20",
        "tanggal":"17 Februari 2021",
        "nama":"Soto Kuning",
        "pengeluaraan":34992
    },
    {
        "jam": "05:59",
        "tanggal":"17 Februari 2021",
        "nama":"Ayam Geprek",
        "pengeluaraan":37674
    },
    {
        "jam": "05:45",
        "tanggal":"16 Februari 2021",
        "nama":"Otak-otak",
        "pengeluaraan":11971
    }
]


function Dashboard(props) {

    // const [counts, setCounts] = useState([]);
    // const countTotalPrice = (details.reduce((a,v) =>  a = a + v.prix , 0 ));

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const totalCounts = details.reduce((total, detail) => total + detail.pengeluaraan, 0);
    useEffect(() => {
        console.log(totalCounts);
    }, []);

    return (
        <>
            <Card className="mb-0 pd-16 header-jumbotron">
                <div className="d-flex justify-content-between text-center pdb-24">
                    <img src="/icons/sort.svg" alt="sort-icon"></img>
                    <p className="mb-0 fs-14">Kompas Test</p>
                    <img src="/icons/mood.svg" alt="mood-icon"></img>
                </div>
                <Row>
                  <Col>
                  <p className="mb-1 fs-12">Total Pengeluaran Bulan Ini :</p>
                  <p className="mb-0 font-weight-bold total-balance fs-28">Rp. {totalCounts}</p>
                  </Col>
                <Col>
                <div style={{ display: "flex" }}>
                <Button variant="primary" onClick={handleShow} style={{ marginLeft: "auto" }}>
                  Tambah Catatan
                </Button>
                </div>
                </Col>
                </Row>
                {/* <p className="mb-1 fs-12">Total Pengeluaran :</p>
                <p className="mb-0 font-weight-bold total-balance fs-28">Rp. {totalCounts}</p> */}
            </Card>
            <div className="pdx-16">
          <Row>
            <Col className="d-flex justify-content-between my-2">
              <p className="mb-0 fs-12">Catatan Pengeluaran :</p>
              <img src="/icons/add.svg" alt="add-icon"></img>
            </Col>
          </Row>
          <Row>
            {
              details.map((detail, index) => (
                <Col xs={6} className={index % 2 === 0 ? 'pr-1' : 'pl-1'} key={index}>
                  <AccountCard
                    detail={detail}
                  />
                </Col>
              ))
            }
          </Row>
          <Row>
            <Col>
              <div className="d-flex justify-content-between fs-12 pdt-20">
                <p className="mb-0">Riwayat Pengeluaran</p>
                <div className="d-flex justify-content-center font-weight-bold">
                  <p className="mb-0 mr-2 load-more">Muat Lebih </p>
                  <img src="icons/chevron_right.svg" alt="chevron-right-icon"></img>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <Accordion className="pdt-16">
                {
                  historys.map((history, index) => (
                    <QuickHistory history={history} index={index + 1} key={index} />
                  ))
                }
              </Accordion>
            </Col>
          </Row>
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Tambah Entri</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form.Group >
              <Form.Label>Nama : </Form.Label>
              <Form.Control type="text" value="" placeholder="Nama"/>           
          </Form.Group>
          <Form.Group >
              <Form.Label>Harga : </Form.Label>
              <Form.Control type="number" value="" placeholder="Harga"/>           
          </Form.Group>
        </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Batal
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Kirim
            </Button>
          </Modal.Footer>
        </Modal>
        </>
    );
}

export default Dashboard;
