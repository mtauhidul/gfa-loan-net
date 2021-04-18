import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import dataofUS from '../../assets/data';

const BeAnAgent = () => {
    // styles
    const beAnAgentHead = {
        lineHeight: '21px',
        paddingTop: '40px',
        paddingBottom: '60px',
        borderRadius: '15px',
        fontSize: '38px',
        fontWeight: '700',
        background: '#f3f5f0',
    };
    const formSectionSTyles = {
        marginTop: '6rem',
        marginLeft: 'auto !important',
        padding: '2rem',
        boxShadow: '1px 1px 9px gray',
    };
    // render form
    const { register, handleSubmit, errors, reset } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        reset();
    };
    const renderHookForm = () => (
        <Col style={formSectionSTyles} className="ml-auto" md={{ span: 8, offset: 2 }}>
            <h2 style={beAnAgentHead} className="text-center">
                Be An Agent
            </h2>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group controlId="name">
                    <Form.Label>ENTER YOUR NAME *</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        placeholder="name"
                        ref={register({ required: true })}
                    />
                    {errors.name && (
                        <small className="text-danger form-text">Please enter name</small>
                    )}
                </Form.Group>

                <Form.Group controlId="email">
                    <Form.Label>ENTER YOUR EMAIL*</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        placeholder="eg: example@example.com"
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
                    <Form.Label>ENTER PHONE NUMBER *</Form.Label>
                    <Form.Control
                        type="phone"
                        name="phoneNumber"
                        placeholder="eg: +976-000000"
                        ref={register({ required: true })}
                    />
                    {errors.phoneNumber && (
                        <small className="text-danger form-text">
                            Please enter a valid Phone Number
                        </small>
                    )}
                </Form.Group>
                <Row>
                    <Col md={6}>
                        {' '}
                        <Form.Group controlId="address">
                            <Form.Label>ENTER YOUR ADDRESS *</Form.Label>
                            <Form.Control
                                type="address"
                                name="address"
                                placeholder="address"
                                ref={register({ required: true })}
                            />
                            {errors.address && (
                                <small className="text-danger form-text">
                                    Please enter a valid address
                                </small>
                            )}
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        {' '}
                        <Form.Group controlId="state">
                            <Form.Label>SELECT YOUR STATE</Form.Label>
                            <Form.Control
                                as="select"
                                name="state"
                                placeholder="STATE*"
                                ref={register({ required: true })}
                            >
                                {dataofUS &&
                                    dataofUS.map((country) => (
                                        <option key={country.abbreviation}>
                                            {country.abbreviation}
                                        </option>
                                    ))}
                            </Form.Control>
                            {errors.state && (
                                <small className="text-danger form-text">
                                    Please enter your state
                                </small>
                            )}
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        {' '}
                        <Form.Group controlId="zipcode">
                            <Form.Label>ENTER YOUR ZIP-CODE *</Form.Label>
                            <Form.Control
                                type="text"
                                name="zipcode"
                                placeholder="ZIP CODE *"
                                ref={register({ required: true })}
                            />
                            {errors.zipcode && (
                                <small className="text-danger form-text">
                                    Please enter your ZIpcode
                                </small>
                            )}
                        </Form.Group>
                    </Col>
                </Row>

                <Form.Group controlId="message">
                    <Form.Label>ENTER YOUR MESSAGE(optional)</Form.Label>
                    <Form.Control
                        as="textarea"
                        name="message"
                        placeholder="Add your Message"
                        ref={register({ required: false })}
                    />
                </Form.Group>
                <small className="text-muted">*Required Info</small>

                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Terms & Conditions " />
                </Form.Group>

                <Button className="bd-dark" block type="submit">
                    Register
                </Button>
            </Form>
        </Col>
    );
    return (
        <Container>
            <Row className="mt-5 text-center ">{renderHookForm()}</Row>
        </Container>
    );
};

export default BeAnAgent;
