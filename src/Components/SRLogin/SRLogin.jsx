/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import '../SRRegistration/SRRegistration.css';

const SRLogin = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);
    console.log(errors);

    return (
        <Container fluid id="sr-registration">
            <form id="sr-registration-form" onSubmit={handleSubmit(onSubmit)}>
                <h2>Sales Person Login</h2>
                <br />
                <input type="text" placeholder="ID" {...register('ID', { required: true })} />
                <input
                    type="text"
                    placeholder="Password"
                    {...register('Password', {
                        required: true,
                        pattern: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/i,
                    })}
                />

                <input type="submit" />
            </form>
        </Container>
    );
};

export default SRLogin;
