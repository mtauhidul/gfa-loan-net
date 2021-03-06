/* eslint-disable react/no-unescaped-entities */
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useDropzone } from 'react-dropzone';
import { useForm } from 'react-hook-form';
import dataofUS from '../../assets/data';
import {
    applyingData,
    funding,
    monthlyRevenue,
    // eslint-disable-next-line prettier/prettier
    purposeOfLoanData
} from '../../assets/data/LoanData';

//*
// componentName: SBAForm.jsx
//     author: #
// purpose:
//*

const SBAForm = () => {
    // render form

    const { register, handleSubmit, errors, reset } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        // reset();
    };
    // dropzone files
    const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

    const files = acceptedFiles.map((file) => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));
    console.log(files[0]);
    return (
        <>
            <Form onSubmit={handleSubmit(onSubmit)}>
                {/* Applying as * */}

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
                {/* Purpose of the Loan */}
                <Form.Group as={Row} controlId="purposeOfLoan">
                    <Form.Label as="legend" column sm={2}>
                        Purpose of the Loan *<span className="text-danger">*</span>
                    </Form.Label>
                    <Col sm={10}>
                        <Row>
                            {purposeOfLoanData &&
                                purposeOfLoanData.map((loan) => (
                                    <Col key={loan.name} sm={6}>
                                        <Form.Check
                                            ref={register({ required: 'This is required' })}
                                            type="checkbox"
                                            label={loan.name}
                                            value={loan.name}
                                            name="purposeOfLoan"
                                        />
                                    </Col>
                                ))}
                        </Row>
                    </Col>
                    {errors.purposeOfLoan && (
                        <small className="text-danger form-text">
                            Please enter your PurposeOfLoan options
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

                <Form.Group controlId="address">
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
                                <option key={country.abbreviation}>{country.abbreviation}</option>
                            ))}
                    </Form.Control>
                    {errors.state && (
                        <small className="text-danger form-text">Please enter your state</small>
                    )}
                </Form.Group>

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
                        <Form.Control
                            type="text"
                            name="state"
                            placeholder=""
                            ref={register({ required: true })}
                        />
                        <Form.Text className="text-muted">State/Province</Form.Text>
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
                <Form.Group controlId="receivedFundingPPP">
                    <Form.Label> How much funding did you receive from PPP Round 1 *</Form.Label>
                    <Form.Control
                        as="select"
                        name="receivedFunding"
                        placeholder="Please Select"
                        ref={register({ required: true })}
                    >
                        {funding &&
                            funding.map((data) => (
                                <option key={data.fundingOption}>{data.fundingOption}</option>
                            ))}
                    </Form.Control>
                    {errors.receivedFundingPPP && (
                        <small className="text-danger form-text">
                            Please select How much funding did you receive from PPP.
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
                    <Form.Label id="ownerDefaultedLoss" as="legend" column sm={2}>
                        Has the Applicant or any owner defaulted in the last 7 years and caused a
                        loss to the government? *
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Check
                            type="radio"
                            ref={register({ required: 'This is required' })}
                            value="yes"
                            label="Yes"
                            name="ownerDefaultedLoss"
                        />
                        <Form.Check
                            type="radio"
                            ref={register({ required: 'This is required' })}
                            label="No"
                            value="no"
                            name="ownerDefaultedLoss"
                        />
                    </Col>
                    {errors.ownerDefaultedLoss && (
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
                <Form.Group as={Row}>
                    <Form.Label id="gotDisasterLoan" as="legend" column sm={2}>
                        Has the Applicant received an SBA Economic Injury Disaster Loan between Jan.
                        31,2020 and Apr. 31, 2020?
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Check
                            type="radio"
                            ref={register({ required: 'This is required' })}
                            value="yes"
                            label="Yes"
                            name="gotDisasterLoan"
                        />
                        <Form.Check
                            type="radio"
                            ref={register({ required: 'This is required' })}
                            label="No"
                            value="no"
                            name="gotDisasterLoan"
                        />
                    </Col>
                    {errors.gotDisasterLoan && (
                        <small className="text-danger form-text">Please Select your one</small>
                    )}
                </Form.Group>

                <Form.Text className="text-success">Merchant/ Owner Information</Form.Text>

                {/* Merchant/ Owner Information */}

                <Form.Group controlId="OwnerName">
                    <Form.Label as="legend" column sm={2}>
                        Owner Name *
                    </Form.Label>
                    <Form.Control
                        type="text"
                        name="OwnerName"
                        placeholder=""
                        ref={register({ required: true })}
                    />
                    {errors.OwnerName && (
                        <small className="text-danger form-text">Please enter Owner name</small>
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
                {/* Partner Information */}

                <Form.Text className="text-success">Partner Information</Form.Text>

                <Form.Group controlId="PartnerName">
                    <Form.Label as="legend" column sm={2}>
                        Partner Name *
                    </Form.Label>
                    <Form.Control
                        type="text"
                        name="PartnerName"
                        placeholder=""
                        ref={register({ required: true })}
                    />
                    {errors.PartnerName && (
                        <small className="text-danger form-text">Please enter Partner name</small>
                    )}
                </Form.Group>
                <Form.Group controlId="POwnership">
                    <Form.Label as="legend" column sm={2}>
                        Ownership%
                    </Form.Label>
                    <Form.Control
                        type="text"
                        name="POwnership"
                        placeholder=""
                        ref={register({ required: true })}
                    />
                    {errors.POwnership && (
                        <small className="text-danger form-text">
                            Please enter your partner OwnerShip
                        </small>
                    )}
                </Form.Group>
                <Form.Group controlId="PartnerSSN">
                    <Form.Label as="legend" column sm={2}>
                        SSN *
                    </Form.Label>
                    <Form.Control
                        type="text"
                        name="PartnerSSN"
                        placeholder=""
                        ref={register({ required: true })}
                    />
                    {errors.PartnerSSN && (
                        <small className="text-danger form-text">
                            Please enter your partner SSN
                        </small>
                    )}
                </Form.Group>
                <Form.Group controlId="partnerFICO">
                    <Form.Label as="legend" column sm={2}>
                        FICO *
                    </Form.Label>
                    <Form.Control
                        type="text"
                        name="partnerFICO"
                        placeholder=""
                        ref={register({ required: true })}
                    />
                    {errors.partnerFICO && (
                        <small className="text-danger form-text">
                            Please enter your partner FICO Number
                        </small>
                    )}
                </Form.Group>
                <Form.Group controlId="partnerPhoneNumber">
                    <Form.Label as="legend" column sm={2}>
                        Owner Phone Number *
                    </Form.Label>
                    <Form.Control
                        type="tel"
                        name="partnerPhoneNumber"
                        placeholder="(000) 000-0000"
                        ref={register({ required: true })}
                    />
                    {errors.partnerPhoneNumber && (
                        <small className="text-danger form-text">
                            Please enter a Valid partner Phone number
                        </small>
                    )}
                </Form.Group>
                <Form.Group controlId="PartnerDateOB">
                    <Form.Label as="legend" column sm={2}>
                        Date of Birth of Applicant *
                    </Form.Label>
                    <Form.Control
                        type="date"
                        name="PartnerDateOB"
                        placeholder=""
                        ref={register({ required: true })}
                    />
                    {errors.PartnerDateOB && (
                        <small className="text-danger form-text">
                            Please enter your partner Date of Birth
                        </small>
                    )}
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label id="agreeWithLoanAcc" as="legend" column sm={2}>
                        Do you also want to process business loan with Loan Acc Network? *
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Check
                            type="radio"
                            ref={register({ required: 'This is required' })}
                            value="yes"
                            label="Yes"
                            name="agreeWithLoanAcc"
                        />
                        <Form.Check
                            type="radio"
                            ref={register({ required: 'This is required' })}
                            label="No"
                            value="no"
                            name="agreeWithLoanAcc"
                        />
                    </Col>
                    {errors.agreeWithLoanAcc && (
                        <small className="text-danger form-text">Please Select your one</small>
                    )}
                </Form.Group>

                {/* Upload your last six months bank statements and photo ID below */}

                <Form.Text className="text-success">
                    Upload your last six months bank statements and photo ID below
                </Form.Text>

                <Form.Group controlId="Promotioncode">
                    <Form.Label as="legend" column sm={2}>
                        Promotion Code *
                    </Form.Label>
                    <Form.Control
                        type="text"
                        name="PromotionCode"
                        placeholder=""
                        ref={register({ required: false })}
                    />
                    <Form.Text>Put the Promotion Code if you have one</Form.Text>
                </Form.Group>
                <Form.Group controlId="HowKnowUs">
                    <Form.Label as="legend" column sm={2}>
                        How do you know us? *
                    </Form.Label>
                    <Form.Control
                        type="text"
                        name="KnowUs"
                        placeholder=""
                        ref={register({ required: true })}
                    />
                    {errors.HowKnowUs && (
                        <small className="text-danger form-text">
                            Please enter your partner FICO Number
                        </small>
                    )}
                </Form.Group>

                <section className="container">
                    <div {...getRootProps({ className: 'dropzone' })}>
                        <input {...getInputProps()} />
                        <Button>Upload your files</Button>
                    </div>
                    <aside>
                        <h4>Files</h4>
                        <ul>{files}</ul>
                    </aside>
                </section>
                <section className="container">
                    <div {...getRootProps({ className: 'dropzone' })}>
                        <input {...getInputProps()} />
                        <Button>Drag 'n' drop some files here, or click to select files</Button>
                    </div>
                    <aside>
                        <h4>Files</h4>
                        <ul>{files}</ul>
                    </aside>
                </section>
                <section className="container">
                    <div {...getRootProps({ className: 'dropzone' })}>
                        <input {...getInputProps()} />
                        <Button>Drag 'n' drop some files here, or click to select files</Button>
                    </div>
                    <aside>
                        <h4>Files</h4>
                        <ul>{files}</ul>
                    </aside>
                </section>
                <section className="container">
                    <div {...getRootProps({ className: 'dropzone' })}>
                        <input {...getInputProps()} />
                        <Button>Drag 'n' drop some files here, or click to select files</Button>
                    </div>
                    <aside>
                        <h4>Files</h4>
                        <ul>{files}</ul>
                    </aside>
                </section>

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
        </>
    );
};

export default SBAForm;
