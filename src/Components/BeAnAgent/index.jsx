import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const BeAnAgent = () => {
    // render form

    const { register, handleSubmit, errors, reset } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        // setRequest(true);
        // setOrderData(data);
        reset();
    };
    const renderHookForm = () => (
        <Col md={{ span: 6, offset: 1 }}>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group controlId="name">
                    <Form.Control
                        type="text"
                        name="name"
                        placeholder="*Name"
                        ref={register({ required: true })}
                    />
                    {errors.name && (
                        <small className="text-danger form-text">Please enter name</small>
                    )}
                </Form.Group>

                <Form.Group controlId="email">
                    <Form.Control
                        type="text"
                        name="email"
                        placeholder="*Email Address"
                        ref={register({
                            required: true,
                            pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                        })}
                    />
                    {errors.email && (
                        <small className="text-danger form-text">
                            Please enter a valid Email-ID
                        </small>
                    )}
                </Form.Group>
                <Form.Group controlId="phoneNumber">
                    <Form.Control
                        type="phone"
                        name="phoneNumber"
                        placeholder="*Phone Number"
                        ref={register({ required: true })}
                    />
                    {errors.phoneNumber && (
                        <small className="text-danger form-text">
                            Please enter a valid Phone Number
                        </small>
                    )}
                </Form.Group>
                <Row>
                    <Col>
                        {' '}
                        <Form.Group controlId="street">
                            <Form.Control
                                type="text"
                                name="street"
                                placeholder="*Street"
                                ref={register({ required: true })}
                            />
                            {errors.street && (
                                <small className="text-danger form-text">
                                    Please enter a valid street
                                </small>
                            )}
                        </Form.Group>
                    </Col>
                    <Col>
                        {' '}
                        <Form.Group controlId="phoneNumber">
                            <Form.Control
                                type="text"
                                name="floor"
                                placeholder="Apt/Floor No."
                                ref={register({ required: false })}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {' '}
                        <Form.Group controlId="city">
                            <Form.Control
                                type="text"
                                name="city"
                                placeholder="*City"
                                ref={register({ required: true })}
                            />
                            {errors.city && (
                                <small className="text-danger form-text">
                                    Please enter your city
                                </small>
                            )}
                        </Form.Group>
                    </Col>
                    <Col>
                        {' '}
                        <Form.Group controlId="state">
                            <Form.Control
                                type="text"
                                name="state"
                                placeholder="State"
                                ref={register({ required: false })}
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Form.Group controlId="message">
                    <Form.Control
                        as="textarea"
                        name="message"
                        placeholder="Add your Message"
                        ref={register({ required: false })}
                    />
                </Form.Group>
                <small className="text-muted">*Required Info</small>
                <Button className="bd-dark" block type="submit">
                    Register
                </Button>
            </Form>
        </Col>
    );
    return (
        <Container>
            <Row className="mt-5">
                <Col className="mt-5">{renderHookForm()}</Col>
            </Row>
        </Container>
    );
};

export default BeAnAgent;
