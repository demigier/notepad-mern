import React from 'react'
import '../ErrorPage/ErrorPage.css'
import gif from '../assets/error.gif';
import { Container, Row, Col } from 'react-bootstrap';

export const ErrorPage = () => {
    return (
        <div>           
            <Container className="ErrorPage">
                <Row>
                    <Col><h1>ERROR 404 NOT FOUND</h1></Col>
                </Row>
                <Row>
                    <Col><img width='400' alt='logo' src={String(gif)}/></Col>
                </Row>
            </Container>
        </div>
    )
}