/* eslint-disable react/button-has-type */
/* eslint-disable import/extensions */
/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import SignaturePad from 'react-signature-canvas';
import dataofUS from '../../assets/data';
import { applyingData, monthlyRevenue } from '../../assets/data/LoanData';
import File1 from '../SixUploads/File1/File1';
import File2 from '../SixUploads/File2/File2';
import File3 from '../SixUploads/File3/File3';
import File4 from '../SixUploads/File4/File4';
import File5 from '../SixUploads/File5/File5';
import File6 from '../SixUploads/File6/File6';
import File7 from '../SixUploads/File7/File7';
import File8 from '../SixUploads/File8/File8';
import './style.css';
import styles from './Styles.module.css';

//*
// componentName: BusinessForm.jsx
//     author: #
// purpose:
//*

const BusinessForm = () => {
    // form main State
    const [finalData, setFinalData] = useState({});
    // dropzone files
    const [file1, setFile1] = useState(null);
    const [file2, setFile2] = useState(null);
    const [file3, setFile3] = useState(null);
    const [file4, setFile4] = useState(null);
    const [file5, setFile5] = useState(null);
    const [file6, setFile6] = useState(null);
    const [file7, setFile7] = useState(null);
    const [file8, setFile8] = useState(null);

    console.log('File1:', file1);
    console.log('File2:', file2);
    console.log('File3:', file3);
    console.log('File4:', file4);
    console.log('File5:', file5);
    console.log('File6:', file6);
    const AllFiles = [file1, file2, file3, file4, file5, file6];
    finalData.AllFiles = [...AllFiles];
    // canvas
    const [trimmedState, setTrimmedState] = useState({
        trimmedDataURL: null,
    });
    let sigPad = {};

    const swap = () => {
        sigPad.clear();
    };

    const trim = () => {
        setTrimmedState({ trimmedDataURL: sigPad.getTrimmedCanvas().toDataURL('image/png') });
    };
    // binding with main state
    finalData.trimmedState = trimmedState;
    // render form
    const { register, handleSubmit, errors, reset } = useForm();
    const onSubmit = (data) => {
        setFinalData(data);
        // reset();
    };
    console.log(finalData);
    return (
        <>
            <Form
                id="sba-form"
                style={{ textAlign: 'left', margin: '0 auto', padding: '10px' }}
                onSubmit={handleSubmit(onSubmit)}
            >
                <Form.Group as={Row} controlId="applyingAs">
                    <Form.Label as="legend" column sm={2}>
                        Applying as <span className="text-danger">*</span>
                    </Form.Label>
                    <Col sm={10}>
                        <Row>
                            {applyingData &&
                                applyingData.map((apply) => (
                                    <Col key={apply.name} sm={6}>
                                        <Form.Check
                                            ref={register({ required: 'This is required' })}
                                            type="radio"
                                            value={apply.name}
                                            label={apply.name}
                                            name="applyingAs"
                                        />
                                    </Col>
                                ))}
                        </Row>
                    </Col>
                    {errors.applyingAs && (
                        <small className="text-danger form-text">
                            Please enter your applyingAs Type
                        </small>
                    )}
                </Form.Group>
                {/* Business Legal Name * */}
                <Form.Group controlId="name">
                    <Form.Label as="legend" column sm={2}>
                        Business Legal Name *
                    </Form.Label>
                    <Col>
                        <Form.Control
                            type="text"
                            name="businessName"
                            placeholder=""
                            ref={register({ required: true })}
                        />
                        {errors.name && (
                            <small className="text-danger form-text">
                                Please enter your business Legal name
                            </small>
                        )}
                    </Col>
                </Form.Group>

                <Form.Group controlId="email">
                    <Form.Label>E-mail Address *</Form.Label>
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
                <Form.Group controlId="federalTaxId">
                    <Form.Label>Federal Tax ID *</Form.Label>
                    <Form.Control
                        type="number"
                        name="federalTaxId"
                        placeholder=""
                        ref={register({ required: true })}
                    />
                    {errors.federalTaxId && (
                        <small className="text-danger form-text">
                            Please enter a valid Federal Tax ID
                        </small>
                    )}
                </Form.Group>
                <Form.Group controlId="DBA">
                    <Form.Label>DBA</Form.Label>
                    <Form.Control
                        type="text"
                        name="DBA"
                        placeholder=""
                        ref={register({ required: false })}
                    />
                    <Form.Text className="text-muted">Doing Business As</Form.Text>
                </Form.Group>
                <Form.Group controlId="businessPhone">
                    <Form.Label>Business Phone*</Form.Label>
                    <Form.Control
                        type="tel"
                        name="businessPhoneNo"
                        placeholder="eg: (000)-000-0000"
                        ref={register({ required: true })}
                    />
                    {errors.businessPhone && (
                        <small className="text-danger form-text">
                            Please enter a valid phone Number
                        </small>
                    )}
                </Form.Group>
                <Form.Group controlId="startDate">
                    <Form.Label>Business Start date under current ownership: *</Form.Label>
                    <Form.Control
                        type="date"
                        name="businessStartedDate"
                        placeholder="MM_DD_YYYY"
                        ref={register({ required: true })}
                    />
                    {errors.startDate && (
                        <small className="text-danger form-text">Please enter a valid Date</small>
                    )}
                </Form.Group>
                {/* <Form.Group controlId="FederalTaxID ">
                    <Form.Label>Federal Tax ID *</Form.Label>
                    <Form.Control
                        type="text"
                        name="federalTaxID"
                        placeholder=""
                        ref={register({ required: true })}
                    />
                    {errors.FederalTaxID && (
                        <small className="text-danger form-text">
                            Please enter a valid Federal Tax ID
                        </small>
                    )}
                </Form.Group> */}

                {/* <Form.Group controlId="address">
                    <Form.Label>ENTER YOUR ADDRESS *</Form.Label>
                    <Form.Control
                        type="text"
                        name="address"
                        placeholder="address"
                        ref={register({ required: true })}
                    />

                    {errors.address && (
                        <small className="text-danger form-text">
                            Please enter a valid address
                        </small>
                    )}
                </Form.Group> */}

                <Form.Group controlId="address">
                    <Form.Label as="legend" column sm={2}>
                        Business Address *
                    </Form.Label>
                    <Form.Group controlId="street">
                        <Form.Control
                            type="text"
                            name="street"
                            placeholder=""
                            ref={register({ required: true })}
                        />
                        <Form.Text className="text-muted">Street Address</Form.Text>
                        {errors.street && (
                            <small className="text-danger form-text">
                                Please enter your street address
                            </small>
                        )}
                    </Form.Group>
                    <Form.Group controlId="addressTwo">
                        <Form.Control
                            type="text"
                            name="addressTwo"
                            placeholder=""
                            ref={register({ required: true })}
                        />
                        <Form.Text className="text-muted">Street Address Line-2</Form.Text>
                        {errors.addressTwo && (
                            <small className="text-danger form-text">
                                Please enter your street address Line 2
                            </small>
                        )}
                    </Form.Group>
                    <Form.Group controlId="City">
                        <Form.Control
                            type="text"
                            name="city"
                            placeholder=""
                            ref={register({ required: true })}
                        />
                        <Form.Text className="text-muted">City</Form.Text>
                        {errors.City && (
                            <small className="text-danger form-text">Please enter your City</small>
                        )}
                    </Form.Group>
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
                            <small className="text-danger form-text">Please enter your state</small>
                        )}
                    </Form.Group>
                    <Form.Group controlId="zipCode">
                        <Form.Control
                            type="number"
                            name="zipCode"
                            placeholder=""
                            ref={register({ required: true })}
                        />
                        <Form.Text className="text-muted">Postal/Zip Code</Form.Text>
                        {errors.zipCode && (
                            <small className="text-danger form-text">
                                Please enter your street zip Code
                            </small>
                        )}
                    </Form.Group>
                </Form.Group>
                {/* After Address */}
                <Form.Group controlId="monthlyRevenue">
                    <Form.Label> Average Monthly Revenue *</Form.Label>
                    <Form.Control
                        as="select"
                        name="monthlyRevenue"
                        placeholder="Please Select"
                        ref={register({ required: true })}
                    >
                        {monthlyRevenue &&
                            monthlyRevenue.map((data) => (
                                <option key={data.option}>{data.option}</option>
                            ))}
                    </Form.Control>
                    {errors.monthlyRevenue && (
                        <small className="text-danger form-text">
                            Please select your Monthly Revenue
                        </small>
                    )}
                </Form.Group>

                {/* 5 Radio start  form here */}
                {/* merchantCash Advance */}
                <Form.Group as={Row}>
                    <Form.Label id="businessLoanAccount" as="legend" column sm={2}>
                        Do you have any open Merchant Cash Advance or business loan accounts? *
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Check
                            type="radio"
                            ref={register({ required: 'This is required' })}
                            value="yes"
                            label="Yes"
                            name="MerchantBusinessLoanAccount"
                        />
                        <Form.Check
                            type="radio"
                            ref={register({ required: 'This is required' })}
                            label="No"
                            value="no"
                            name="MerchantBusinessLoanAccount"
                        />
                    </Col>
                    {errors.businessLoanAccount && (
                        <small className="text-danger form-text">Please Select your one</small>
                    )}
                </Form.Group>
                {/* involved Bankruptcy */}
                <Form.Group as={Row}>
                    <Form.Label id="involvedBankruptcy" as="legend" column sm={2}>
                        Is the Applicant or any owner presently involved in any bankruptcy? *
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Check
                            type="radio"
                            ref={register({ required: 'This is required' })}
                            value="yes"
                            label="Yes"
                            name="involvedBankruptcy"
                        />
                        <Form.Check
                            type="radio"
                            ref={register({ required: 'This is required' })}
                            label="No"
                            value="no"
                            name="involvedBankruptcy"
                        />
                    </Col>
                    {errors.involvedBankruptcy && (
                        <small className="text-danger form-text">Please Select your one</small>
                    )}
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label id="hasBusinessOfOwner" as="legend" column sm={2}>
                        Is the Applicant or any owner of the Applicant an owner of any other
                        business? *
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Check
                            type="radio"
                            ref={register({ required: 'This is required' })}
                            value="yes"
                            label="Yes"
                            name="hasBusinessOfOwner"
                        />
                        <Form.Check
                            type="radio"
                            ref={register({ required: 'This is required' })}
                            label="No"
                            value="no"
                            name="hasBusinessOfOwner"
                        />
                    </Col>
                    {errors.hasBusinessOfOwner && (
                        <small className="text-danger form-text">Please Select your one</small>
                    )}
                </Form.Group>

                <Form.Text className="text-success">Merchant/ Owner Information</Form.Text>

                {/* Merchant/ Owner Information */}

                <Form.Group controlId="OwnerFullName">
                    <Col sm={2}>
                        <Form.Label as="legend">Applicant Full Name *</Form.Label>
                    </Col>
                    <Col sm={5}>
                        <Form.Control
                            type="text"
                            name="OwnerFirstName"
                            placeholder=""
                            ref={register({ required: true })}
                        />
                    </Col>
                    <Col sm={5}>
                        {' '}
                        <Form.Control
                            type="text"
                            name="OwnerLastName"
                            placeholder=""
                            ref={register({ required: true })}
                        />
                    </Col>
                    {errors.OwnerName && (
                        <small className="text-danger form-text">
                            Please enter Owner FirstName and Last name
                        </small>
                    )}
                </Form.Group>
                <Form.Group controlId="ownerPhoneNumber">
                    <Form.Label as="legend" column sm={2}>
                        Owner Phone Number *
                    </Form.Label>
                    <Form.Control
                        type="tel"
                        name="ownerPhoneNumber"
                        placeholder="(000) 000-0000"
                        ref={register({ required: true })}
                    />
                    {errors.ownerPhoneNumber && (
                        <small className="text-danger form-text">
                            Please enter a Valid Owner Phone number
                        </small>
                    )}
                </Form.Group>
                <Form.Group controlId="Ownership">
                    <Form.Label as="legend" column sm={2}>
                        Ownership%
                    </Form.Label>
                    <Form.Control
                        type="text"
                        name="Ownership"
                        placeholder=""
                        ref={register({ required: true })}
                    />
                    {errors.Ownership && (
                        <small className="text-danger form-text">Please enter your OwnerShip</small>
                    )}
                </Form.Group>
                <Form.Group controlId="SSN">
                    <Form.Label as="legend" column sm={2}>
                        SSN *
                    </Form.Label>
                    <Form.Control
                        type="text"
                        name="SSN"
                        placeholder=""
                        ref={register({ required: true })}
                    />
                    {errors.SSN && (
                        <small className="text-danger form-text">Please enter your SSN</small>
                    )}
                </Form.Group>
                <Form.Group controlId="FICO">
                    <Form.Label as="legend" column sm={2}>
                        FICO *
                    </Form.Label>
                    <Form.Control
                        type="text"
                        name="FICO"
                        placeholder=""
                        ref={register({ required: true })}
                    />
                    {errors.FICO && (
                        <small className="text-danger form-text">
                            Please enter your FICO Number
                        </small>
                    )}
                </Form.Group>
                <Form.Group controlId="DateOBApplicant">
                    <Form.Label as="legend" column sm={2}>
                        Date of Birth of Applicant *
                    </Form.Label>
                    <Form.Control
                        type="date"
                        name="DateOBApplicant"
                        placeholder=""
                        ref={register({ required: true })}
                    />
                    {errors.DateOBApplicant && (
                        <small className="text-danger form-text">
                            Please enter your Date of Birth
                        </small>
                    )}
                </Form.Group>

                <section className="App">
                    <div className="area-container">
                        <File1 file1={file1} setFile1={setFile1} />
                        <hr />
                        <File2 file2={file2} setFile2={setFile2} />
                        <hr />
                        <File3 file3={file3} setFile3={setFile3} />
                        <hr />
                        <File4 file4={file4} setFile4={setFile4} />
                        <hr />
                        <File5 file5={file5} setFile5={setFile5} />
                        <hr />
                        <File6 file6={file6} setFile6={setFile6} />
                        <hr />
                        <File7 file6={file7} setFile6={setFile7} />
                        <hr />
                        <File8 file8={file8} setFile8={setFile8} />
                    </div>
                </section>

                <Form.Group controlId="formBasicCheckbox">
                    <Form.Label>
                        I agree to <Link to="/">Terms and Conditions *</Link>
                    </Form.Label>
                    <Form.Check
                        ref={register({ required: 'This is required' })}
                        type="checkbox"
                        value="TermsAndConditionsTrue"
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Signature* (sign here, then press trim)</Form.Label>
                    <div className={styles.container}>
                        <div className={styles.sigContainer}>
                            <SignaturePad
                                canvasProps={{ className: styles.sigPad }}
                                ref={(ref) => {
                                    sigPad = ref;
                                }}
                            />
                        </div>
                        <div>
                            <button className={styles.buttons} onClick={() => swap()}>
                                Clear
                            </button>
                            <button className={styles.buttons} onClick={() => trim()}>
                                Save
                            </button>
                        </div>
                        {trimmedState.trimmedDataURL ? (
                            <img
                                className={styles.sigImage}
                                alt="canvas"
                                src={trimmedState.trimmedDataURL}
                            />
                        ) : null}
                    </div>
                </Form.Group>

                <Button style={{ marginTop: '100px' }} className="bd-dark" block type="submit">
                    Register
                </Button>
            </Form>
        </>
    );
};

export default BusinessForm;
