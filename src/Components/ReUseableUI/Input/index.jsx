/* eslint-disable react/destructuring-assignment */
import { Form } from 'react-bootstrap';

const Input = (props) => {
    return (
        <Form.Group>
            {props.label && <Form.Label>{props.label}</Form.Label>}
            <Form.Control
                name={props.name}
                type={props.type}
                placeholder={props.placeholder}
                value={props.value}
                defaultValue={props.defaultValue}
                onChange={props.onChange}
            />
            <Form.Text className="text-muted">{props.errorMessage}</Form.Text>
        </Form.Group>
    );
};

export default Input;
