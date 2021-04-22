import React, { Component } from 'react'
import { Form, Button, Alert, Container, Table, Pagination, Card, Row, Col} from 'react-bootstrap';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import If from '../template/If'
import Modal from '../template/Modal'
import { search, setIsbn, setStatus, checkbook, closeModal } from './booksActions'

class Books extends Component {

    constructor(props) {
        super(props)
        this.renderRows = this.renderRows.bind(this)
        this.renderPagination = this.renderPagination.bind(this)
    }

    componentWillMount(){
        this.props.search()
    }

    renderPagination(){
        let items = [];
        for (let number = 1; number <= this.props.books.last_page; number++) {
          items.push(
            <Pagination.Item key={number} onClick={() => this.props.search(number)}>{number}</Pagination.Item>,
          );
        }
        return items
    }

    renderRows(){
        const list = this.props.books.data || []
        return list.map(book => (
            <tr key={book.id}>
                <td>{book.title}</td>
                <td>{book.publication_date}</td>
                <td>{book.isbn}</td>
                <td>{book.status}</td>
            </tr>
        ))
    }

    render(){
        return(
            <div className="vh-100 d-flex justify-content-center pt-5">
                <Container className="shadow-lg p-5">
                    <h1>
                        Books 
                    </h1>
                    <hr />
                    <div>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th>Name</th>
                            <th>Publication Date</th>
                            <th>Action</th>
                            <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                           {this.renderRows()}
                        </tbody>
                        </Table>
                        <Pagination>
                           {this.renderPagination()}
                        </Pagination>
                        <hr />
                        <Card className="mt-5">
                            <Card.Header as="h5">Checkin / Checkout</Card.Header>
                            <Card.Body>
                                <If test={this.props.error.status && !this.props.error.openModal}>
                                    <Alert variant={this.props.error.status=='error'?'danger':'success'}>
                                        {this.props.error.message}
                                    </Alert>
                                </If>
                                
                            <Modal message={this.props.error.message}
                                        show={this.props.error.openModal}
                                        closeModal={() => this.props.closeModal()}/>
                                            
                                <Card.Text>
                                    <Form>
                                        <Row>
                                            <Col className="col-lg-6">
                                                <Form.Control
                                                    onChange={this.props.setIsbn}
                                                    value={this.props.isbn} placeholder="ISBN number" />
                                            </Col>
                                            <Col className="col-lg-4">
                                                <Form.Group>
                                                    <Form.Control 
                                                    onChange={this.props.setStatus}
                                                    value={this.props.status} as="select">
                                                        <option>Select</option>
                                                        <option value="CHECKED_OUT">Checkin</option>
                                                        <option value="AVAILABLE">Checkout</option>
                                                    </Form.Control>
                                                </Form.Group>
                                            </Col>
                                            <Col className="col-lg-2">
                                                <Button variant="primary" onClick={() => this.props.checkbook(this.props.isbn, this.props.status)} type="button">
                                                    Submit
                                                </Button>
                                            </Col>
                                        </Row>
                                    </Form>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </div>
                </Container>
            </div>
        )
    }
}
const mapStateToProps = state => ({books: state.books.list , isbn: state.books.isbn , status: state.books.status , error: state.books.error })
const mapDispatchToProps = dispatch => 
    bindActionCreators({ search, setIsbn, setStatus, checkbook, closeModal }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Books)