import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap';

class ModalTemplate extends Component {

    constructor(props) {
        super(props)
    }

    render(){

        return(
            <Modal show={this.props.show}>
                <Modal.Header closeButton>
                    <Modal.Title>Success</Modal.Title>
                </Modal.Header>
                <Modal.Body>{this.props.message}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.closeModal}>
                    Close
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default ModalTemplate