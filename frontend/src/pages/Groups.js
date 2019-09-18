import React from 'react';
import Tree from '../components/FileExplorer'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './css/Groups.css'
import Main from './Main'


export default function Grupos(){
    return (
        <div>
            <Main />
            <Container>
                <Row className="dist_top col">
                    <Col>
                        <Tree />
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Header>Quote</Card.Header>
                            <Card.Body>
                                <blockquote className="blockquote mb-0">
                                <p>
                                    Hello World!!
                                </p>
                                <footer className="blockquote-footer">
                                    Someone famous in <cite title="Source Title">Source Title</cite>
                                </footer>
                                </blockquote>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}