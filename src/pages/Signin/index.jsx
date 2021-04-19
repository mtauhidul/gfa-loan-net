import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const Signin = () => {
    // styles
    const agentDashboardLogin = {
        padding: '15px',
        borderRadius: '16px',
        marginBottom: '15px',
    };
    const beAnAgentHead = {
        lineHeight: '21px',
        paddingBottom: '20px',
        fontSize: '38px',
        fontWeight: '700',
    };
    const formSectionStyles = {
        marginTop: '9rem',
        marginLeft: `0 auto !important`,
        padding: '3rem',
        boxShadow: '1px 1px 9px gray',
        marginBottom: '80px',
        width: '95%',
        maxWidth: 'calc(800px*3/4)',
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
                    Agent Login
                </h2>
                <p style={{ fontWeight: '700' }} className="text-danger text-center">
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
                    <Form.Label>ENTER PHONE NUMBER*</Form.Label>
                    <Form.Control
                        type="phone"
                        name="phoneNumber"
                        placeholder="eg: +976-000000"
                        ref={register({ required: true })}
                    />
                    {errors.phoneNumber && (
                        <small className="text-danger form-text">Enter a valid Phone Number</small>
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
                <Button style={{ marginTop: '15px' }} className="bd-dark" block type="submit">
                    Register
                </Button>
            </Form>
        </Col>
    );
    return (
        <Container>
            <Row
                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                className="mt-5 "
            >
                {renderHookForm()}
            </Row>
        </Container>
    );
};

export default Signin;
