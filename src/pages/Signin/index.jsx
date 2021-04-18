import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const Signin = () => {
    // styles
    const agentDashboardLogin = {
        padding: '15px',
        background: '#36ad99',
        borderRadius: '16px',
        marginBottom: '15px',
    };
    const beAnAgentHead = {
        lineHeight: '21px',
        paddingBottom: '30px',
        fontSize: '38px',
        fontWeight: '700',
    };
    const formSectionStyles = {
        marginTop: '6rem',
        marginLeft: `auto`,
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
        <Col style={formSectionStyles} className="ml-auto" md={{ span: 8, offset: 2 }}>
            <div style={agentDashboardLogin}>
                <h2 style={beAnAgentHead} className="text-center">
                    Agent Dashboard Login
                </h2>
                <p style={{ fontWeight: '700' }} className="text-danger">
                    *any unauthorized login strongly prohibited
                </p>
            </div>
            <Form onSubmit={handleSubmit(onSubmit)}>
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
                    <Form.Label>ENTER YOUR PHONE NUMBER*</Form.Label>
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
                    <Col md={12}>
                        {' '}
                        <Form.Group controlId="address">
                            <Form.Label>ENTER YOUR PASSWORD*</Form.Label>
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
                </Row>
                <small className="text-muted">*Required Info</small>
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

export default Signin;
