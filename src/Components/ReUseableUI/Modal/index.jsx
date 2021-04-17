import { Button, Modal } from 'react-bootstrap';

const NewModal = (props) => {
  return (
    <Modal size={props.size} show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{props.modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.children}</Modal.Body>
      <Modal.Footer>
        {props.showServiceDetailsModal && (
          <Button variant="primary" onClick={props.handleClose}>
            Save Changes
          </Button>
        )}
        {(props.addServiceButton || props.update) && (
          <Button variant="primary" onClick={props.onClick}>
            Save Changes
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default NewModal;
