/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './SRRegistration.css';

const SRRegistration = () => {
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
                <h2>Sales Person Registration</h2>
                <br />
                <input
                    type="text"
                    placeholder="First name"
                    {...register('First name', { required: true, maxLength: 80 })}
                />
                <input
                    type="text"
                    placeholder="Last name"
                    {...register('Last name', { required: true, maxLength: 100 })}
                />
                <input
                    type="text"
                    placeholder="Email"
                    {...register('Email', { required: true, pattern: /^\S+@\S+$/i })}
                />
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

export default SRRegistration;
