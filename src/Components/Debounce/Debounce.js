import React from 'react'
import { Card, CardBody, CardHeader, CardText, CardTitle, Col, Container, Row } from 'react-bootstrap'

const Debounce=()=>{
    return(
      <section className='my-5'>
          <Container>
            <Row>
                <Col lg={12}>
                    <div>
                        <h1>Welcome to Debounce Component</h1>
                    </div>
                </Col>
                <Col>
                    <Card>
                        <CardHeader>
                            <CardTitle>Card Title</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <CardText>
                                <p>Runs the app in the development mode.</p>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
      </section>
    )
}

export default Debounce