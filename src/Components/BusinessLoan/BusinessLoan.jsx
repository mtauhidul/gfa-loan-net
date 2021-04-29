/* eslint-disable no-alert */
/* eslint-disable no-plusplus */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-undef */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import SignaturePad from 'react-signature-canvas';
import firebase from '../../firebase';
import './BusinessLoan.css';
import styles from './styles.module.css';

const BusinessLoan = () => {
    const [formData, updateFormData] = useState([]);
    const [sig, setSig] = useState({ trimmedDataURL: null });
    const [fileUrl, setFileUrl] = useState(null);
    const [files, setFiles] = useState([]);
    const [documents, setDocuments] = useState([]);

    const db = firebase.firestore();

    // Form data management
    const handleChange = (event) => {
        updateFormData({
            ...formData,
            [event.target.name]: event.target.value.trim(),
        });
    };

    // For file management
    const onFileChange = (e) => {
        for (let i = 0; i < e.target.files.length; i++) {
            const newFile = e.target.files[i];
            newFile.id = Math.random();
            // add an "id" property to each File object
            setFiles((prevState) => [...prevState, newFile]);
        }
    };

    const onUploadSubmission = (e) => {
        e.preventDefault(); // prevent page refreshing
        if (files.length === 0) {
            alert('No files selected');
        } else {
            const promises = [];
            files.forEach((file) => {
                const uploadTask = firebase
                    .storage()
                    .ref()
                    .child(`your/file/path/${file.name}`)
                    .put(file);
                promises.push(uploadTask);
                uploadTask.on(
                    firebase.storage.TaskEvent.STATE_CHANGED,
                    (snapshot) => {
                        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                        if (snapshot.state === firebase.storage.TaskState.RUNNING) {
                            console.log(`Progress: ${progress}%`);
                        }
                    },
                    (error) => console.log(error.code),
                    async () => {
                        const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();
                        documents.push(downloadURL);
                    }
                );
            });
            Promise.all(promises)
                .then(() => alert('All files uploaded'))
                .catch((err) => console.log(err.code));
        }
    };

    // For signature canvas
    let sigPad = {};
    const clear = () => {
        sigPad.clear();
    };
    const trim = () => {
        setSig({ trimmedDataURL: sigPad.getTrimmedCanvas().toDataURL('image/png') });
        updateFormData({
            ...formData,
            signature: sigPad.getTrimmedCanvas().toDataURL('image/png'),
        });
    };

    // Store data to Database
    const handleSubmit = async (e) => {
        e.preventDefault();
        setSig({ trimmedDataURL: null });
        sigPad.clear();
        await db
            .collection('business-applications')
            .add({
                formData,
                documents,
            })
            .then((res) => {
                alert('Application Successfully Submitted');
            })
            .catch((err) => {
                alert('Not Submitted !!! Try Again');
            });
        document.getElementById('sba-form').reset();
    };

    return (
        <Container
            fluid
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '100px 0px',
                background: '#ECECEC',
                width: '100%',
            }}
        >
            <div style={{ maxWidth: '100%' }}>
                <form
                    style={{ maxWidth: '100% !important' }}
                    className="jotform-form"
                    onSubmit={(e) => handleSubmit(e)}
                    encType="multipart/form-data"
                    name="form_210189014380145"
                    id="sba-form"
                    acceptCharset="utf-8"
                    autoComplete="on"
                >
                    <input
                        onChange={handleChange}
                        type="hidden"
                        name="formID"
                        defaultValue={210189014380145}
                    />
                    <input onChange={handleChange} type="hidden" id="JWTContainer" />
                    <input onChange={handleChange} type="hidden" id="cardinalOrderNumber" />
                    <div role="main" className="form-all">
                        <link
                            type="text/css"
                            rel="stylesheet"
                            media="all"
                            href="https://cdn.jotfor.ms/wizards/languageWizard/custom-dropdown/css/lang-dd.css?3.3.24787"
                        />
                        <div className="cont">
                            <input
                                onChange={handleChange}
                                type="text"
                                id="input_language"
                                name="input_language"
                                style={{ display: 'none' }}
                            />
                            <div className="language-dd" id="langDd" style={{ display: 'none' }}>
                                <div className="dd-placeholder lang-emp">Language</div>
                                <ul className="lang-list dn" id="langList">
                                    <li data-lang="en" className="en">
                                        English (US)
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <ul className="form-section page-section">
                            <li id="cid_1" className="form-input-wide" data-type="control_head">
                                <div className="form-header-group header-large">
                                    <div className="header-text httal htvam">
                                        <h1
                                            id="header_1"
                                            className="form-header"
                                            data-component="header"
                                        >
                                            Business Funding Application
                                        </h1>
                                        <div id="subHeader_1" className="form-subHeader">
                                            Fill out the application below | Upload your last 6
                                            months business bank statements | Sign and submit the
                                            form
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="form-line" data-type="control_text" id="id_71">
                                <div id="cid_71" className="form-input-wide" data-layout="full">
                                    <div id="text_71" className="form-html" data-component="text">
                                        <p>Business Information</p>
                                    </div>
                                </div>
                            </li>
                            <li
                                className="form-line jf-required"
                                data-type="control_radio"
                                id="id_3"
                            >
                                <label
                                    className="form-label form-label-left form-label-auto"
                                    id="label_3"
                                    htmlFor="input_3"
                                >
                                    Applying
                                </label>
                                <div
                                    id="cid_3"
                                    className="form-input jf-required"
                                    data-layout="full"
                                >
                                    <div
                                        className="form-multiple-column"
                                        data-columncount={2}
                                        role="group"
                                        aria-labelledby="label_3"
                                        data-component="radio"
                                    >
                                        <span className="form-radio-item">
                                            <span className="dragger-item"> </span>
                                            <input
                                                onChange={handleChange}
                                                type="radio"
                                                className="form-radio validate[required]"
                                                id="input_3_0"
                                                name="Applying as"
                                                defaultValue="Sole Proprietor"
                                                required
                                            />
                                            <label id="label_input_3_0" htmlFor="input_3_0">
                                                Sole Proprietor
                                            </label>
                                        </span>
                                        <span className="form-radio-item">
                                            <span className="dragger-item"> </span>
                                            <input
                                                onChange={handleChange}
                                                type="radio"
                                                className="form-radio validate[required]"
                                                id="input_3_1"
                                                name="Applying as"
                                                defaultValue="Partnership"
                                                required
                                            />
                                            <label id="label_input_3_1" htmlFor="input_3_1">
                                                Partnership
                                            </label>
                                        </span>
                                        <span className="form-radio-item" style={{ clear: 'left' }}>
                                            <span className="dragger-item"> </span>
                                            <input
                                                onChange={handleChange}
                                                type="radio"
                                                className="form-radio validate[required]"
                                                id="input_3_2"
                                                name="Applying as"
                                                defaultValue="C-Corp"
                                                required
                                            />
                                            <label id="label_input_3_2" htmlFor="input_3_2">
                                                {' '}
                                                C-Corp{' '}
                                            </label>
                                        </span>
                                        <span className="form-radio-item">
                                            <span className="dragger-item"> </span>
                                            <input
                                                onChange={handleChange}
                                                type="radio"
                                                className="form-radio validate[required]"
                                                id="input_3_3"
                                                name="Applying as"
                                                defaultValue="S-Corp"
                                                required
                                            />
                                            <label id="label_input_3_3" htmlFor="input_3_3">
                                                {' '}
                                                S-Corp{' '}
                                            </label>
                                        </span>
                                        <span className="form-radio-item" style={{ clear: 'left' }}>
                                            <span className="dragger-item"> </span>
                                            <input
                                                onChange={handleChange}
                                                type="radio"
                                                className="form-radio validate[required]"
                                                id="input_3_4"
                                                name="Applying as"
                                                defaultValue="LLC"
                                                required
                                            />
                                            <label id="label_input_3_4" htmlFor="input_3_4">
                                                {' '}
                                                LLC{' '}
                                            </label>
                                        </span>
                                        <span className="form-radio-item">
                                            <span className="dragger-item"> </span>
                                            <input
                                                onChange={handleChange}
                                                type="radio"
                                                className="form-radio validate[required]"
                                                id="input_3_5"
                                                name="Applying as"
                                                defaultValue="Independent Contractor"
                                                required
                                            />
                                            <label id="label_input_3_5" htmlFor="input_3_5">
                                                Independent Contractor
                                            </label>
                                        </span>
                                        <span className="form-radio-item" style={{ clear: 'left' }}>
                                            <span className="dragger-item"> </span>
                                            <input
                                                onChange={handleChange}
                                                type="radio"
                                                className="form-radio validate[required]"
                                                id="input_3_6"
                                                name="Applying as"
                                                defaultValue="Eligible Self-employed Individual"
                                                required
                                            />
                                            <label id="label_input_3_6" htmlFor="input_3_6">
                                                Eligible Self-employed Individual
                                            </label>
                                        </span>
                                        <span className="form-radio-item">
                                            <span className="dragger-item"> </span>
                                            <input
                                                onChange={handleChange}
                                                type="radio"
                                                className="form-radio validate[required]"
                                                id="input_3_7"
                                                name="Applying as"
                                                defaultValue="501(c)(3) Nonprofit"
                                                required
                                            />
                                            <label id="label_input_3_7" htmlFor="input_3_7">
                                                501(c)(3) Nonprofit
                                            </label>
                                        </span>
                                        <span className="form-radio-item" style={{ clear: 'left' }}>
                                            <span className="dragger-item"> </span>
                                            <input
                                                onChange={handleChange}
                                                type="radio"
                                                className="form-radio validate[required]"
                                                id="input_3_8"
                                                name="Applying as"
                                                defaultValue="501(c)(19) Veterans Organization"
                                                required
                                            />
                                            <label id="label_input_3_8" htmlFor="input_3_8">
                                                501(c)(19) Veterans Organization
                                            </label>
                                        </span>
                                        <span className="form-radio-item">
                                            <span className="dragger-item"> </span>
                                            <input
                                                onChange={handleChange}
                                                type="radio"
                                                className="form-radio validate[required]"
                                                id="input_3_9"
                                                name="Applying as"
                                                defaultValue="Tribal Business"
                                                required
                                            />
                                            <label id="label_input_3_9" htmlFor="input_3_9">
                                                Tribal Business
                                            </label>
                                        </span>
                                        <span className="form-radio-item" style={{ clear: 'left' }}>
                                            <span className="dragger-item"> </span>
                                            <input
                                                onChange={handleChange}
                                                type="radio"
                                                className="form-radio validate[required]"
                                                id="input_3_10"
                                                name="Applying as"
                                                defaultValue="Other"
                                                required
                                            />
                                            <label id="label_input_3_10" htmlFor="input_3_10">
                                                {' '}
                                                Other{' '}
                                            </label>
                                        </span>
                                    </div>
                                </div>
                            </li>
                            <li
                                className="form-line fixed-width jf-required"
                                data-type="control_textbox"
                                id="id_80"
                            >
                                <label
                                    className="form-label form-label-left form-label-auto"
                                    id="label_80"
                                    htmlFor="input_80"
                                >
                                    Business Legal Name
                                </label>
                                <div
                                    id="cid_80"
                                    className="form-input jf-required"
                                    data-layout="half"
                                >
                                    <input
                                        onChange={handleChange}
                                        type="text"
                                        id="input_80"
                                        name="Business legal name"
                                        data-type="input-textbox"
                                        className="form-textbox validate[required]"
                                        style={{ width: 322 }}
                                        size={322}
                                        data-component="textbox"
                                        aria-labelledby="label_80"
                                        required
                                    />
                                </div>
                            </li>
                            <li
                                className="form-line jf-required"
                                data-type="control_email"
                                id="id_5"
                            >
                                <label
                                    className="form-label form-label-left form-label-auto"
                                    id="label_5"
                                    htmlFor="input_5"
                                >
                                    Business E-mail Address{' '}
                                </label>
                                <div
                                    id="cid_5"
                                    className="form-input jf-required"
                                    data-layout="half"
                                >
                                    <span
                                        className="form-sub-label-container"
                                        style={{ verticalAlign: 'top' }}
                                    >
                                        <input
                                            onChange={handleChange}
                                            type="email"
                                            id="input_5"
                                            name="Email"
                                            className="form-textbox validate[required, Email]"
                                            style={{ width: 310 }}
                                            size={310}
                                            placeholder="ex: myname@example.com"
                                            data-component="email"
                                            aria-labelledby="label_5 sublabel_input_5"
                                            required
                                        />
                                        <label
                                            className="form-sub-label"
                                            htmlFor="input_5"
                                            id="sublabel_input_5"
                                            style={{ minHeight: 13 }}
                                            aria-hidden="false"
                                        >
                                            example@example.com
                                        </label>
                                    </span>
                                </div>
                            </li>
                            <li
                                className="form-line jf-required"
                                data-type="control_textbox"
                                id="id_82"
                            >
                                <label
                                    className="form-label form-label-left form-label-auto"
                                    id="label_82"
                                    htmlFor="input_82"
                                >
                                    Federal Tax ID
                                </label>
                                <div
                                    id="cid_82"
                                    className="form-input jf-required"
                                    data-layout="half"
                                >
                                    <input
                                        onChange={handleChange}
                                        type="text"
                                        id="input_82"
                                        name="Federal Tax ID"
                                        data-type="input-textbox"
                                        className="form-textbox validate[required]"
                                        style={{ width: 310 }}
                                        size={310}
                                        data-component="textbox"
                                        aria-labelledby="label_82"
                                        required
                                    />
                                </div>
                            </li>
                            <li className="form-line" data-type="control_textbox" id="id_81">
                                <label
                                    className="form-label form-label-left form-label-auto"
                                    id="label_81"
                                    htmlFor="input_81"
                                >
                                    DBA
                                </label>
                                <div id="cid_81" className="form-input" data-layout="half">
                                    <span
                                        className="form-sub-label-container"
                                        style={{ verticalAlign: 'top' }}
                                    >
                                        <input
                                            onChange={handleChange}
                                            type="text"
                                            id="input_81"
                                            name="DBA"
                                            data-type="input-textbox"
                                            className="form-textbox"
                                            style={{ width: 310 }}
                                            size={310}
                                            data-component="textbox"
                                            aria-labelledby="label_81 sublabel_input_81"
                                        />
                                        <label
                                            className="form-sub-label"
                                            htmlFor="input_81"
                                            id="sublabel_input_81"
                                            style={{ minHeight: 13 }}
                                            aria-hidden="false"
                                        >
                                            Doing Business As
                                        </label>
                                    </span>
                                </div>
                            </li>
                            <li
                                className="form-line jf-required"
                                data-type="control_phone"
                                id="id_8"
                            >
                                <label
                                    className="form-label form-label-left form-label-auto"
                                    id="label_8"
                                    htmlFor="input_8_full"
                                >
                                    Business Phone
                                </label>
                                <div
                                    id="cid_8"
                                    className="form-input jf-required"
                                    data-layout="half"
                                >
                                    <span
                                        className="form-sub-label-container"
                                        style={{ verticalAlign: 'top' }}
                                    >
                                        <input
                                            onChange={handleChange}
                                            type="tel"
                                            id="input_8_full"
                                            name="Business Phone"
                                            data-type="mask-number"
                                            className="mask-phone-number form-textbox validate[required, Fill Mask]"
                                            style={{ width: 310 }}
                                            data-masked="true"
                                            placeholder="(000) 000-0000"
                                            data-component="phone"
                                            aria-labelledby="label_8"
                                            required
                                        />
                                        <label
                                            className="form-sub-label is-empty"
                                            htmlFor="input_8_full"
                                            id="sublabel_8_masked"
                                            style={{ minHeight: 13 }}
                                            aria-hidden="false"
                                        />
                                    </span>
                                </div>
                            </li>
                            <li className="form-line jf-required" data-type="control_datetime">
                                <label
                                    className="form-label form-label-left form-label-auto"
                                    id="label_73"
                                    htmlFor="lite_mode_73"
                                >
                                    Business Start date
                                </label>
                                <div
                                    id="cid_73"
                                    className="form-input jf-required"
                                    data-layout="half"
                                >
                                    <div data-wrapper-react="true">
                                        <span
                                            className="form-sub-label-container"
                                            style={{ verticalAlign: 'top' }}
                                        >
                                            <input
                                                onChange={handleChange}
                                                type="date"
                                                name="Business start date"
                                                className="form-textbox validate[required, limitDate, validateLiteDate]"
                                                id="lite_mode_73"
                                                size={12}
                                                data-maxlength={12}
                                                maxLength={12}
                                                data-age
                                                required
                                                data-format="mmddyyyy"
                                                data-seperator="-"
                                                placeholder="MM-DD-YYYY"
                                                autoComplete="off"
                                                aria-labelledby="label_73 sublabel_73_litemode"
                                            />
                                            <label
                                                className="form-sub-label"
                                                htmlFor="lite_mode_73"
                                                id="sublabel_73_litemode"
                                                style={{ minHeight: 13 }}
                                                aria-hidden="false"
                                            >
                                                Date
                                            </label>
                                        </span>
                                    </div>
                                </div>
                            </li>
                            <li
                                className="form-line jf-required"
                                data-type="control_address"
                                id="id_9"
                            >
                                <label
                                    className="form-label form-label-left form-label-auto"
                                    id="label_9"
                                    htmlFor="input_9_addr_line1"
                                >
                                    Business Address
                                </label>
                                <div
                                    id="cid_9"
                                    className="form-input jf-required"
                                    data-layout="full"
                                >
                                    <div summary className="form-address-table jsTest-addressField">
                                        <div className="form-address-line-wrapper jsTest-address-line-wrapperField">
                                            <span className="form-address-line form-address-street-line jsTest-address-lineField">
                                                <span
                                                    className="form-sub-label-container"
                                                    style={{ verticalAlign: 'top' }}
                                                >
                                                    <input
                                                        onChange={handleChange}
                                                        type="text"
                                                        id="input_9_addr_line1"
                                                        name="Business address"
                                                        className="form-textbox validate[required] form-address-line"
                                                        data-component="address_line_1"
                                                        aria-labelledby="label_9 sublabel_9_addr_line1"
                                                        required
                                                    />
                                                    <label
                                                        className="form-sub-label"
                                                        htmlFor="input_9_addr_line1"
                                                        id="sublabel_9_addr_line1"
                                                        style={{ minHeight: 13 }}
                                                        aria-hidden="false"
                                                    >
                                                        Street Address
                                                    </label>
                                                </span>
                                            </span>
                                        </div>
                                        <div className="form-address-line-wrapper jsTest-address-line-wrapperField">
                                            <span className="form-address-line form-address-street-line jsTest-address-lineField">
                                                <span
                                                    className="form-sub-label-container"
                                                    style={{ verticalAlign: 'top' }}
                                                >
                                                    <input
                                                        onChange={handleChange}
                                                        type="text"
                                                        id="input_9_addr_line2"
                                                        name="Business address [line2]"
                                                        className="form-textbox form-address-line"
                                                        data-component="address_line_2"
                                                        aria-labelledby="label_9 sublabel_9_addr_line2"
                                                    />
                                                    <label
                                                        className="form-sub-label"
                                                        htmlFor="input_9_addr_line2"
                                                        id="sublabel_9_addr_line2"
                                                        style={{ minHeight: 13 }}
                                                        aria-hidden="false"
                                                    >
                                                        Street Address Line 2
                                                    </label>
                                                </span>
                                            </span>
                                        </div>
                                        <div className="form-address-line-wrapper jsTest-address-line-wrapperField">
                                            <span className="form-address-line form-address-city-line jsTest-address-lineField">
                                                <span
                                                    className="form-sub-label-container"
                                                    style={{ verticalAlign: 'top' }}
                                                >
                                                    <input
                                                        onChange={handleChange}
                                                        type="text"
                                                        id="input_9_city"
                                                        name="City"
                                                        className="form-textbox validate[required] form-address-city"
                                                        data-component="city"
                                                        aria-labelledby="label_9 sublabel_9_city"
                                                        required
                                                    />
                                                    <label
                                                        className="form-sub-label"
                                                        htmlFor="input_9_city"
                                                        id="sublabel_9_city"
                                                        style={{ minHeight: 13 }}
                                                        aria-hidden="false"
                                                    >
                                                        City
                                                    </label>
                                                </span>
                                            </span>
                                            <span className="form-address-line form-address-state-line jsTest-address-lineField">
                                                <span
                                                    className="form-sub-label-container"
                                                    style={{ verticalAlign: 'top' }}
                                                >
                                                    <input
                                                        onChange={handleChange}
                                                        type="text"
                                                        id="input_9_state"
                                                        name="State"
                                                        className="form-textbox validate[required] form-address-state"
                                                        data-component="state"
                                                        aria-labelledby="label_9 sublabel_9_state"
                                                        required
                                                    />
                                                    <label
                                                        className="form-sub-label"
                                                        htmlFor="input_9_state"
                                                        id="sublabel_9_state"
                                                        style={{ minHeight: 13 }}
                                                        aria-hidden="false"
                                                    >
                                                        State / Province
                                                    </label>
                                                </span>
                                            </span>
                                        </div>
                                        <div className="form-address-line-wrapper jsTest-address-line-wrapperField">
                                            <span className="form-address-line form-address-zip-line jsTest-address-lineField">
                                                <span
                                                    className="form-sub-label-container"
                                                    style={{ verticalAlign: 'top' }}
                                                >
                                                    <input
                                                        onChange={handleChange}
                                                        type="text"
                                                        id="input_9_postal"
                                                        name="Postal code"
                                                        className="form-textbox validate[required] form-address-postal"
                                                        data-component="zip"
                                                        aria-labelledby="label_9 sublabel_9_postal"
                                                        required
                                                    />
                                                    <label
                                                        className="form-sub-label"
                                                        htmlFor="input_9_postal"
                                                        id="sublabel_9_postal"
                                                        style={{ minHeight: 13 }}
                                                        aria-hidden="false"
                                                    >
                                                        Postal / Zip Code
                                                    </label>
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li
                                className="form-line jf-required"
                                data-type="control_dropdown"
                                id="id_45"
                            >
                                <label
                                    className="form-label form-label-left form-label-auto"
                                    id="label_45"
                                    htmlFor="input_45"
                                >
                                    Average Monthly Revenue{' '}
                                </label>
                                <div
                                    id="cid_45"
                                    className="form-input jf-required"
                                    data-layout="half"
                                >
                                    <select
                                        onBlur={handleChange}
                                        className="form-dropdown validate[required]"
                                        id="input_45"
                                        name="Average monthly revenue"
                                        style={{ width: 310 }}
                                        data-component="dropdown"
                                        required
                                        aria-labelledby="label_45"
                                    >
                                        <option onBlur={handleChange} value>
                                            Please Select
                                        </option>
                                        <option onBlur={handleChange} value="$0-$10,000">
                                            $0-$10,000
                                        </option>
                                        <option onBlur={handleChange} value="$10,000-$50,000">
                                            $10,000-$50,000
                                        </option>
                                        <option onBlur={handleChange} value="$50,000-$100,000">
                                            $50,000-$100,000
                                        </option>
                                        <option onBlur={handleChange} value="$100,000-$250,000">
                                            $100,000-$250,000
                                        </option>
                                        <option onBlur={handleChange} value="$250,000-$500,000">
                                            $250,000-$500,000
                                        </option>
                                        <option onBlur={handleChange} value="$500,000-$1M">
                                            $500,000-$1M
                                        </option>
                                        <option onBlur={handleChange} value="$1M+">
                                            $1M+
                                        </option>
                                    </select>
                                </div>
                            </li>
                            <li
                                className="form-line jf-required"
                                data-type="control_radio"
                                id="id_59"
                            >
                                <label
                                    className="form-label form-label-left form-label-auto"
                                    id="label_59"
                                    htmlFor="input_59"
                                >
                                    Do you have any open Merchant Cash Advance or business loan
                                    accounts?
                                </label>
                                <div
                                    id="cid_59"
                                    className="form-input jf-required"
                                    data-layout="full"
                                >
                                    <div
                                        className="form-multiple-column"
                                        data-columncount={2}
                                        role="group"
                                        aria-labelledby="label_59"
                                        data-component="radio"
                                    >
                                        <span className="form-radio-item">
                                            <span className="dragger-item"> </span>
                                            <input
                                                onChange={handleChange}
                                                type="radio"
                                                className="form-radio validate[required]"
                                                id="input_59_0"
                                                name="Any loan account or merchant cash"
                                                defaultValue="Yes"
                                                required
                                            />
                                            <label id="label_input_59_0" htmlFor="input_59_0">
                                                {' '}
                                                Yes{' '}
                                            </label>
                                        </span>
                                        <span className="form-radio-item">
                                            <span className="dragger-item"> </span>
                                            <input
                                                onChange={handleChange}
                                                type="radio"
                                                className="form-radio validate[required]"
                                                id="input_59_1"
                                                name="Any loan account or merchant cash"
                                                defaultValue="No"
                                                required
                                            />
                                            <label id="label_input_59_1" htmlFor="input_59_1">
                                                {' '}
                                                No{' '}
                                            </label>
                                        </span>
                                    </div>
                                </div>
                            </li>
                            <li
                                className="form-line jf-required"
                                data-type="control_radio"
                                id="id_47"
                            >
                                <label
                                    className="form-label form-label-left form-label-auto"
                                    id="label_47"
                                    htmlFor="input_47"
                                >
                                    Is the Applicant or any owner presently involved in any
                                    bankruptcy?
                                </label>
                                <div
                                    id="cid_47"
                                    className="form-input jf-required"
                                    data-layout="full"
                                >
                                    <div
                                        className="form-multiple-column"
                                        data-columncount={2}
                                        role="group"
                                        aria-labelledby="label_47"
                                        data-component="radio"
                                    >
                                        <span className="form-radio-item">
                                            <span className="dragger-item"> </span>
                                            <input
                                                onChange={handleChange}
                                                type="radio"
                                                className="form-radio validate[required]"
                                                id="input_47_0"
                                                name="Any bankruptcy"
                                                defaultValue="Yes"
                                                required
                                            />
                                            <label id="label_input_47_0" htmlFor="input_47_0">
                                                {' '}
                                                Yes{' '}
                                            </label>
                                        </span>
                                        <span className="form-radio-item">
                                            <span className="dragger-item"> </span>
                                            <input
                                                onChange={handleChange}
                                                type="radio"
                                                className="form-radio validate[required]"
                                                id="input_47_1"
                                                name="Any bankruptcy"
                                                defaultValue="No"
                                                required
                                            />
                                            <label id="label_input_47_1" htmlFor="input_47_1">
                                                {' '}
                                                No{' '}
                                            </label>
                                        </span>
                                    </div>
                                </div>
                            </li>
                            <li
                                className="form-line jf-required"
                                data-type="control_radio"
                                id="id_49"
                            >
                                <label
                                    className="form-label form-label-left form-label-auto"
                                    id="label_49"
                                    htmlFor="input_49"
                                >
                                    Do you own any other business?
                                </label>
                                <div
                                    id="cid_49"
                                    className="form-input jf-required"
                                    data-layout="full"
                                >
                                    <div
                                        className="form-multiple-column"
                                        data-columncount={2}
                                        role="group"
                                        aria-labelledby="label_49"
                                        data-component="radio"
                                    >
                                        <span className="form-radio-item">
                                            <span className="dragger-item"> </span>
                                            <input
                                                onChange={handleChange}
                                                type="radio"
                                                className="form-radio validate[required]"
                                                id="input_49_0"
                                                name="Other business"
                                                defaultValue="Yes"
                                                required
                                            />
                                            <label id="label_input_49_0" htmlFor="input_49_0">
                                                {' '}
                                                Yes{' '}
                                            </label>
                                        </span>
                                        <span className="form-radio-item">
                                            <span className="dragger-item"> </span>
                                            <input
                                                onChange={handleChange}
                                                type="radio"
                                                className="form-radio validate[required]"
                                                id="input_49_1"
                                                name="Other business"
                                                defaultValue="No"
                                                required
                                            />
                                            <label id="label_input_49_1" htmlFor="input_49_1">
                                                {' '}
                                                No{' '}
                                            </label>
                                        </span>
                                    </div>
                                </div>
                            </li>
                            <li className="form-line" data-type="control_text" id="id_72">
                                <div id="cid_72" className="form-input-wide" data-layout="full">
                                    <div id="text_72" className="form-html" data-component="text">
                                        <p>Merchant/ Owner Information</p>
                                    </div>
                                </div>
                            </li>
                            <li
                                className="form-line jf-required"
                                data-type="control_fullname"
                                id="id_4"
                            >
                                <label
                                    className="form-label form-label-left form-label-auto"
                                    id="label_4"
                                    htmlFor="first_4"
                                >
                                    Applicant Name
                                </label>
                                <div
                                    id="cid_4"
                                    className="form-input jf-required"
                                    data-layout="full"
                                >
                                    <div data-wrapper-react="true">
                                        <span
                                            className="form-sub-label-container"
                                            style={{ verticalAlign: 'top' }}
                                            data-input-type="first"
                                        >
                                            <input
                                                onChange={handleChange}
                                                type="text"
                                                id="first_4"
                                                name="Owner_First_Name"
                                                className="form-textbox validate[required]"
                                                size={10}
                                                data-component="first"
                                                aria-labelledby="label_4 sublabel_4_first"
                                                required
                                            />
                                            <label
                                                className="form-sub-label"
                                                htmlFor="first_4"
                                                id="sublabel_4_first"
                                                style={{ minHeight: 13 }}
                                                aria-hidden="false"
                                            >
                                                First Name
                                            </label>
                                        </span>
                                        <span
                                            className="form-sub-label-container"
                                            style={{ verticalAlign: 'top' }}
                                            data-input-type="last"
                                        >
                                            <input
                                                onChange={handleChange}
                                                type="text"
                                                id="last_4"
                                                name="Owner Last Name"
                                                className="form-textbox validate[required]"
                                                size={15}
                                                data-component="last"
                                                aria-labelledby="label_4 sublabel_4_last"
                                                required
                                            />
                                            <label
                                                className="form-sub-label"
                                                htmlFor="last_4"
                                                id="sublabel_4_last"
                                                style={{ minHeight: 13 }}
                                                aria-hidden="false"
                                            >
                                                Last Name
                                            </label>
                                        </span>
                                    </div>
                                </div>
                            </li>
                            <>
                                <li className="form-line" data-type="control_address" id="id_123">
                                    <label
                                        className="form-label form-label-left form-label-auto"
                                        id="label_123"
                                        htmlFor="input_123_addr_line1"
                                    >
                                        {' '}
                                        Home Address{' '}
                                    </label>
                                    <div id="cid_123" className="form-input" data-layout="full">
                                        <div
                                            summary
                                            className="form-address-table jsTest-addressField"
                                        >
                                            <div className="form-address-line-wrapper jsTest-address-line-wrapperField">
                                                <span className="form-address-line form-address-street-line jsTest-address-lineField">
                                                    <span
                                                        className="form-sub-label-container"
                                                        style={{ verticalAlign: 'top' }}
                                                    >
                                                        <input
                                                            onChange={handleChange}
                                                            type="text"
                                                            id="input_123_addr_line1"
                                                            name="Home Address"
                                                            className="form-textbox form-address-line"
                                                            data-component="address_line_1"
                                                            aria-labelledby="label_123 sublabel_123_addr_line1"
                                                            required
                                                            placeholder
                                                        />
                                                        <label
                                                            className="form-sub-label"
                                                            htmlFor="input_123_addr_line1"
                                                            id="sublabel_123_addr_line1"
                                                            style={{ minHeight: 13 }}
                                                            aria-hidden="false"
                                                        >
                                                            {' '}
                                                            Street Address{' '}
                                                        </label>
                                                    </span>
                                                </span>
                                            </div>
                                            <div className="form-address-line-wrapper jsTest-address-line-wrapperField">
                                                <span className="form-address-line form-address-street-line jsTest-address-lineField">
                                                    <span
                                                        className="form-sub-label-container"
                                                        style={{ verticalAlign: 'top' }}
                                                    >
                                                        <input
                                                            type="text"
                                                            onChange={handleChange}
                                                            id="input_123_addr_line2"
                                                            name="Home Address [Line2}"
                                                            className="form-textbox form-address-line"
                                                            data-component="address_line_2"
                                                            aria-labelledby="label_123 sublabel_123_addr_line2"
                                                            placeholder
                                                        />
                                                        <label
                                                            className="form-sub-label"
                                                            htmlFor="input_123_addr_line2"
                                                            id="sublabel_123_addr_line2"
                                                            style={{ minHeight: 13 }}
                                                            aria-hidden="false"
                                                        >
                                                            {' '}
                                                            Street Address Line 2{' '}
                                                        </label>
                                                    </span>
                                                </span>
                                            </div>
                                            <div className="form-address-line-wrapper jsTest-address-line-wrapperField">
                                                <span className="form-address-line form-address-city-line jsTest-address-lineField ">
                                                    <span
                                                        className="form-sub-label-container"
                                                        style={{ verticalAlign: 'top' }}
                                                    >
                                                        <input
                                                            onChange={handleChange}
                                                            type="text"
                                                            id="input_123_city"
                                                            name="City"
                                                            className="form-textbox form-address-city"
                                                            data-component="city"
                                                            aria-labelledby="label_123 sublabel_123_city"
                                                            required
                                                            placeholder
                                                        />
                                                        <label
                                                            className="form-sub-label"
                                                            htmlFor="input_123_city"
                                                            id="sublabel_123_city"
                                                            style={{ minHeight: 13 }}
                                                            aria-hidden="false"
                                                        >
                                                            {' '}
                                                            City{' '}
                                                        </label>
                                                    </span>
                                                </span>
                                                <span className="form-address-line form-address-state-line jsTest-address-lineField ">
                                                    <span
                                                        className="form-sub-label-container"
                                                        style={{ verticalAlign: 'top' }}
                                                    >
                                                        <input
                                                            onChange={handleChange}
                                                            type="text"
                                                            id="input_123_state"
                                                            name="State"
                                                            className="form-textbox form-address-state"
                                                            data-component="state"
                                                            aria-labelledby="label_123 sublabel_123_state"
                                                            required
                                                            placeholder
                                                        />
                                                        <label
                                                            className="form-sub-label"
                                                            htmlFor="input_123_state"
                                                            id="sublabel_123_state"
                                                            style={{ minHeight: 13 }}
                                                            aria-hidden="false"
                                                        >
                                                            {' '}
                                                            State / Province{' '}
                                                        </label>
                                                    </span>
                                                </span>
                                            </div>
                                            <div className="form-address-line-wrapper jsTest-address-line-wrapperField">
                                                <span className="form-address-line form-address-zip-line jsTest-address-lineField ">
                                                    <span
                                                        className="form-sub-label-container"
                                                        style={{ verticalAlign: 'top' }}
                                                    >
                                                        <input
                                                            onChange={handleChange}
                                                            type="text"
                                                            id="input_123_postal"
                                                            name="Postal Code"
                                                            className="form-textbox form-address-postal"
                                                            data-component="zip"
                                                            aria-labelledby="label_123 sublabel_123_postal"
                                                            required
                                                            placeholder
                                                        />
                                                        <label
                                                            className="form-sub-label"
                                                            htmlFor="input_123_postal"
                                                            id="sublabel_123_postal"
                                                            style={{ minHeight: 13 }}
                                                            aria-hidden="false"
                                                        >
                                                            {' '}
                                                            Postal / Zip Code{' '}
                                                        </label>
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="form-line" data-type="control_email" id="id_115">
                                    <label
                                        className="form-label form-label-left form-label-auto"
                                        id="label_115"
                                        htmlFor="input_115"
                                    >
                                        {' '}
                                        Email{' '}
                                    </label>
                                    <div id="cid_115" className="form-input" data-layout="half">
                                        <span
                                            className="form-sub-label-container"
                                            style={{ verticalAlign: 'top' }}
                                        >
                                            <input
                                                onChange={handleChange}
                                                type="email"
                                                id="input_115"
                                                name="Email"
                                                className="form-textbox validate[Email]"
                                                style={{ width: 310 }}
                                                size={310}
                                                data-component="email"
                                                aria-labelledby="label_115 sublabel_input_115"
                                                placeholder
                                            />
                                            <label
                                                className="form-sub-label"
                                                htmlFor="input_115"
                                                id="sublabel_input_115"
                                                style={{ minHeight: 13 }}
                                                aria-hidden="false"
                                            >
                                                {' '}
                                                example@example.com{' '}
                                            </label>
                                        </span>
                                    </div>
                                </li>
                            </>

                            <li
                                className="form-line jf-required"
                                data-type="control_textbox"
                                id="id_83"
                            >
                                <label
                                    className="form-label form-label-left form-label-auto"
                                    id="label_83"
                                    htmlFor="input_83"
                                >
                                    Ownership%
                                </label>
                                <div
                                    id="cid_83"
                                    className="form-input jf-required"
                                    data-layout="half"
                                >
                                    <input
                                        onChange={handleChange}
                                        type="text"
                                        id="input_83"
                                        name="Ownership%"
                                        data-type="input-textbox"
                                        className="form-textbox validate[required]"
                                        style={{ width: 310 }}
                                        size={310}
                                        data-component="textbox"
                                        aria-labelledby="label_83"
                                        required
                                    />
                                </div>
                            </li>
                            <li
                                className="form-line jf-required"
                                data-type="control_number"
                                id="id_86"
                            >
                                <label
                                    className="form-label form-label-left"
                                    id="label_86"
                                    htmlFor="input_86"
                                >
                                    SSN
                                </label>
                                <div
                                    id="cid_86"
                                    className="form-input jf-required"
                                    data-layout="half"
                                >
                                    <input
                                        onChange={handleChange}
                                        type="number"
                                        id="input_86"
                                        name="SSN"
                                        data-type="input-number"
                                        className="form-number-input form-textbox validate[required]"
                                        style={{ width: 310 }}
                                        size={310}
                                        data-component="number"
                                        aria-labelledby="label_86"
                                        required
                                        step="any"
                                    />
                                </div>
                            </li>
                            <li
                                className="form-line jf-required"
                                data-type="control_number"
                                id="id_87"
                            >
                                <label
                                    className="form-label form-label-left form-label-auto"
                                    id="label_87"
                                    htmlFor="input_87"
                                >
                                    FICO
                                </label>
                                <div
                                    id="cid_87"
                                    className="form-input jf-required"
                                    data-layout="half"
                                >
                                    <input
                                        onChange={handleChange}
                                        type="number"
                                        id="input_87"
                                        name="FICO"
                                        data-type="input-number"
                                        className="form-number-input form-textbox validate[required]"
                                        style={{ width: 310 }}
                                        size={310}
                                        data-component="number"
                                        aria-labelledby="label_87"
                                        required
                                        step="any"
                                    />
                                </div>
                            </li>
                            <li
                                className="form-line jf-required"
                                data-type="control_datetime"
                                id="id_74"
                            >
                                <label
                                    className="form-label form-label-left form-label-auto"
                                    id="label_74"
                                    htmlFor="lite_mode_74"
                                >
                                    Date of Birth of Applicant:{' '}
                                </label>
                                <div
                                    id="cid_74"
                                    className="form-input jf-required"
                                    data-layout="half"
                                >
                                    <div data-wrapper-react="true">
                                        <span
                                            className="form-sub-label-container"
                                            style={{ verticalAlign: 'top' }}
                                        >
                                            <input
                                                onChange={handleChange}
                                                type="date"
                                                className="form-textbox validate[required, limitDate, validateLiteDate]"
                                                id="lite_mode_74"
                                                size={12}
                                                name="Applicant birth"
                                                data-maxlength={12}
                                                maxLength={12}
                                                data-age
                                                required
                                                data-format="mmddyyyy"
                                                data-seperator="-"
                                                placeholder="MM-DD-YYYY"
                                                autoComplete="off"
                                                aria-labelledby="label_74 sublabel_74_litemode"
                                            />

                                            <label
                                                className="form-sub-label"
                                                htmlFor="lite_mode_74"
                                                id="sublabel_74_litemode"
                                                style={{ minHeight: 13 }}
                                                aria-hidden="false"
                                            >
                                                Date
                                            </label>
                                        </span>
                                    </div>
                                </div>
                            </li>
                            <li
                                className="form-line jf-required"
                                data-type="control_phone"
                                id="id_104"
                            >
                                <label
                                    className="form-label form-label-left form-label-auto"
                                    id="label_104"
                                    htmlFor="input_104_full"
                                >
                                    Owner Phone Number
                                </label>
                                <div
                                    id="cid_104"
                                    className="form-input jf-required"
                                    data-layout="half"
                                >
                                    <span
                                        className="form-sub-label-container"
                                        style={{ verticalAlign: 'top' }}
                                    >
                                        <input
                                            onChange={handleChange}
                                            type="tel"
                                            id="input_104_full"
                                            name="Owner Phone Number"
                                            data-type="mask-number"
                                            className="mask-phone-number form-textbox validate[required, Fill Mask]"
                                            style={{ width: 310 }}
                                            data-masked="true"
                                            placeholder="(000) 000-0000"
                                            data-component="phone"
                                            aria-labelledby="label_104 sublabel_104_masked"
                                            required
                                        />
                                        <label
                                            className="form-sub-label"
                                            htmlFor="input_104_full"
                                            id="sublabel_104_masked"
                                            style={{ minHeight: 13 }}
                                            aria-hidden="false"
                                        >
                                            Please enter a valid phone number.
                                        </label>
                                    </span>
                                </div>
                            </li>
                            <li className="form-line" data-type="control_text" id="id_75">
                                <div id="cid_75" className="form-input-wide" data-layout="full">
                                    <div id="text_75" className="form-html" data-component="text">
                                        <p>
                                            Upload your ID, VOID Check, and last six months bank
                                            statements below
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li
                                className="form-line jf-required"
                                data-type="control_textbox"
                                id="id_90"
                            >
                                <label
                                    className="form-label form-label-left form-label-auto"
                                    id="label_90"
                                    htmlFor="input_90"
                                >
                                    How do you know us?
                                </label>
                                <div
                                    id="cid_90"
                                    className="form-input jf-required"
                                    data-layout="half"
                                >
                                    <span
                                        className="form-sub-label-container"
                                        style={{ verticalAlign: 'top' }}
                                    >
                                        <input
                                            onChange={handleChange}
                                            type="text"
                                            id="input_90"
                                            name="How know us"
                                            data-type="input-textbox"
                                            className="form-textbox validate[required]"
                                            style={{ width: 310 }}
                                            size={310}
                                            data-component="textbox"
                                            aria-labelledby="label_90 sublabel_input_90"
                                            required
                                        />
                                        <label
                                            className="form-sub-label"
                                            htmlFor="input_90"
                                            id="sublabel_input_90"
                                            style={{ minHeight: 13 }}
                                            aria-hidden="false"
                                        >
                                            Enter how do you know Loan-Acc Network online, or
                                            Funding Manager\'s name.
                                        </label>
                                    </span>
                                </div>
                            </li>
                            <li className="form-line" data-type="control_fileupload" id="id_57">
                                <label
                                    className="form-label form-label-left form-label-auto"
                                    id="label_57"
                                    htmlFor="input_57"
                                >
                                    Tax Return:
                                </label>
                                <div id="cid_57" className="form-input" data-layout="full">
                                    <div className="jfQuestion-fields" data-wrapper-react="true">
                                        <div className="jfField isFilled">
                                            <div className="jfUpload-wrapper">
                                                <div className="jfUpload-container">
                                                    <div className="jfUpload-text-container">
                                                        <div className="jfUpload-icon forDesktop">
                                                            <span className="iconSvg dhtupload">
                                                                <svg
                                                                    viewBox="0 0 54 47"
                                                                    version="1.1"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <g
                                                                        stroke="none"
                                                                        strokewidth={1}
                                                                        fill="none"
                                                                    >
                                                                        <g transform="translate(-1506.000000, -2713.000000)">
                                                                            <g transform="translate(1421.000000, 2713.000000)">
                                                                                <path d="M125.212886,10.1718048 C127.110227,10.3826204 128.89335,10.9096517 130.562307,11.7529143 C132.231264,12.596177 133.689384,13.676591 134.93671,14.9941889 C136.184036,16.3117868 137.167828,17.8226097 137.888114,19.5267029 C138.608401,21.2307962 138.968539,23.049054 138.968539,24.9815309 C138.968539,26.8086 138.687456,28.6356416 138.125281,30.4627107 C137.563106,32.2897797 136.746207,33.9323605 135.674561,35.3905021 C134.602915,36.8486438 133.267769,38.0520318 131.669084,39.0007022 C130.070398,39.9493727 128.217005,40.4588363 126.108848,40.5291081 L122.261482,40.5291081 C121.804714,40.5291081 121.409441,40.3622149 121.07565,40.0284235 C120.741858,39.694632 120.574965,39.2993586 120.574965,38.8425913 C120.574965,38.385824 120.741858,37.9905506 121.07565,37.6567591 C121.409441,37.3229677 121.804714,37.1560744 122.261482,37.1560744 L126.108848,37.1560744 C127.549422,37.1560744 128.858216,36.7871526 130.03527,36.0492978 C131.212324,35.3114429 132.222468,34.3627867 133.06573,33.2033006 C133.908993,32.0438144 134.558998,30.743804 135.015765,29.3032303 C135.472533,27.8626567 135.700913,26.4221046 135.700913,24.9815309 C135.700913,23.4004134 135.384694,21.9159421 134.752247,20.5280723 C134.1198,19.1402026 133.258983,17.9280307 132.169768,16.8915204 C131.080554,15.85501 129.833247,15.0293277 128.427809,14.4144487 C127.022371,13.7995697 125.529116,13.4921348 123.947999,13.4921348 L122.735815,13.4394312 L122.366889,12.2799508 C121.48849,9.46907537 120.07429,7.28189569 118.124245,5.71834621 C116.1742,4.15479672 113.53026,3.37303371 110.192346,3.37303371 C108.084189,3.37303371 106.186876,3.73317173 104.500351,4.45345857 C102.813826,5.17374541 101.36449,6.17510478 100.1523,7.45756671 C98.9401098,8.74002865 98.0090213,10.2684193 97.3590063,12.0427844 C96.7089914,13.8171496 96.3839888,15.7232459 96.3839888,17.7611306 L96.4366924,17.7611306 L96.5420997,19.3422402 L95.0136938,19.6057584 C93.1514888,19.9219819 91.5703951,20.9233413 90.2703652,22.6098666 C88.9703353,24.2963919 88.3203301,26.1937043 88.3203301,28.301861 C88.3203301,30.6911051 89.1196608,32.7640947 90.7183462,34.5208919 C92.3170316,36.277689 94.2055603,37.1560744 96.3839888,37.1560744 L101.232725,37.1560744 C101.724628,37.1560744 102.128685,37.3229677 102.444909,37.6567591 C102.761132,37.9905506 102.919242,38.385824 102.919242,38.8425913 C102.919242,39.2993586 102.761132,39.694632 102.444909,40.0284235 C102.128685,40.3622149 101.724628,40.5291081 101.232725,40.5291081 L96.3839888,40.5291081 C94.8380073,40.5291081 93.3798875,40.2041055 92.0095857,39.5540906 C90.6392839,38.9040756 89.4358959,38.0169064 88.3993855,36.8925562 C87.3628752,35.768206 86.5371929,34.4681956 85.9223139,32.992486 C85.3074349,31.5167763 85,29.9532503 85,28.301861 C85,25.5963933 85.7554115,23.1544819 87.266257,20.9760534 C88.7771026,18.7976249 90.7095505,17.3395051 93.0636587,16.6016503 C93.2042025,14.2475421 93.7224499,12.0603624 94.6184164,10.0400456 C95.514383,8.0197289 96.7089871,6.26295807 98.2022647,4.76968048 C99.6955423,3.27640288 101.452313,2.10815028 103.47263,1.26488764 C105.492947,0.421624997 107.732829,0 110.192346,0 C112.089686,0 113.82889,0.237164061 115.410007,0.711499298 C116.991124,1.18583453 118.414109,1.8621913 119.679003,2.74058989 C120.943897,3.61898847 122.033095,4.69061868 122.946629,5.95551264 C123.860164,7.22040661 124.615575,8.62582326 125.212886,10.1718048 Z M113.249157,23.611236 L119.468188,30.4627107 C119.71414,30.7086623 119.837114,30.9985295 119.837114,31.3323209 C119.837114,31.6661124 119.71414,31.9735473 119.468188,32.2546348 L119.046559,32.5181531 C118.835743,32.7641047 118.563444,32.8607271 118.229652,32.8080232 C117.895861,32.7553193 117.605994,32.6059937 117.360042,32.3600421 L113.670787,28.2491573 L113.670787,45.2197331 C113.670787,45.7116364 113.503893,46.1156936 113.170102,46.4319171 C112.83631,46.7481406 112.441037,46.90625 111.98427,46.90625 C111.492366,46.90625 111.088309,46.7481406 110.772086,46.4319171 C110.455862,46.1156936 110.297753,45.7116364 110.297753,45.2197331 L110.297753,28.2491573 L106.713904,32.2546348 C106.467953,32.5005864 106.178086,32.649912 105.844294,32.7026159 C105.510503,32.7553198 105.220636,32.6586974 104.974684,32.4127458 L104.553055,32.1492275 C104.307103,31.86814 104.184129,31.5607051 104.184129,31.2269136 C104.184129,30.8931222 104.307103,30.603255 104.553055,30.3573034 L110.666678,23.611236 L110.666678,23.5585323 L111.088308,23.1369031 C111.193715,22.9963593 111.325473,22.8997369 111.483585,22.847033 C111.641697,22.7943291 111.791022,22.7679775 111.931566,22.7679775 C112.107246,22.7679775 112.265355,22.7943291 112.405899,22.847033 C112.546443,22.8997369 112.686984,22.9963593 112.827528,23.1369031 L113.249157,23.5585323 L113.249157,23.611236 Z" />
                                                                            </g>
                                                                        </g>
                                                                    </g>
                                                                </svg>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="jfUpload-button-container">
                                                        <div
                                                            className="jfUpload-button"
                                                            aria-hidden="true"
                                                            tabIndex={0}
                                                            style={{ display: 'none' }}
                                                            data-version="v2"
                                                        >
                                                            Upload a File
                                                            <div className="jfUpload-heading forDesktop">
                                                                Drag and drop files here
                                                            </div>
                                                            <div className="jfUpload-heading forMobile">
                                                                Choose or Drag and Drop a File
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="jfUpload-files-container">
                                                    <input
                                                        onChange={onFileChange}
                                                        type="file"
                                                        id="input_57"
                                                        name="Tax return"
                                                        multiple
                                                        className="form-upload-multiple"
                                                        data-imagevalidate="yes"
                                                        data-file-accept="pdf, doc, docx, xls, csv, txt, rtf, html, zip, mp3, wma, mpg, flv, avi, jpg, jpeg, png, gif"
                                                        data-file-maxsize={0}
                                                        data-file-minsize={0}
                                                        data-file-limit
                                                        data-component="fileupload"
                                                        aria-label="Upload a File"
                                                    />
                                                    <small>or Drag & Drop Files</small>
                                                </div>
                                            </div>
                                            <div data-wrapper-react="true" />
                                        </div>
                                        <span style={{ display: 'none' }} className="cancelText">
                                            {' '}
                                            Cancel{' '}
                                        </span>
                                        <span style={{ display: 'none' }} className="ofText">
                                            {' '}
                                            of{' '}
                                        </span>
                                    </div>
                                </div>
                            </li>
                            <li className="form-line" data-type="control_fileupload" id="id_78">
                                <label
                                    className="form-label form-label-left form-label-auto"
                                    id="label_78"
                                    htmlFor="input_78"
                                >
                                    ID:
                                </label>
                                <div id="cid_78" className="form-input" data-layout="full">
                                    <div className="jfQuestion-fields" data-wrapper-react="true">
                                        <div className="jfField isFilled">
                                            <div className="jfUpload-wrapper">
                                                <div className="jfUpload-container">
                                                    <div className="jfUpload-text-container">
                                                        <div className="jfUpload-icon forDesktop">
                                                            <span className="iconSvg dhtupload">
                                                                <svg
                                                                    viewBox="0 0 54 47"
                                                                    version="1.1"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <g
                                                                        stroke="none"
                                                                        strokewidth={1}
                                                                        fill="none"
                                                                    >
                                                                        <g transform="translate(-1506.000000, -2713.000000)">
                                                                            <g transform="translate(1421.000000, 2713.000000)">
                                                                                <path d="M125.212886,10.1718048 C127.110227,10.3826204 128.89335,10.9096517 130.562307,11.7529143 C132.231264,12.596177 133.689384,13.676591 134.93671,14.9941889 C136.184036,16.3117868 137.167828,17.8226097 137.888114,19.5267029 C138.608401,21.2307962 138.968539,23.049054 138.968539,24.9815309 C138.968539,26.8086 138.687456,28.6356416 138.125281,30.4627107 C137.563106,32.2897797 136.746207,33.9323605 135.674561,35.3905021 C134.602915,36.8486438 133.267769,38.0520318 131.669084,39.0007022 C130.070398,39.9493727 128.217005,40.4588363 126.108848,40.5291081 L122.261482,40.5291081 C121.804714,40.5291081 121.409441,40.3622149 121.07565,40.0284235 C120.741858,39.694632 120.574965,39.2993586 120.574965,38.8425913 C120.574965,38.385824 120.741858,37.9905506 121.07565,37.6567591 C121.409441,37.3229677 121.804714,37.1560744 122.261482,37.1560744 L126.108848,37.1560744 C127.549422,37.1560744 128.858216,36.7871526 130.03527,36.0492978 C131.212324,35.3114429 132.222468,34.3627867 133.06573,33.2033006 C133.908993,32.0438144 134.558998,30.743804 135.015765,29.3032303 C135.472533,27.8626567 135.700913,26.4221046 135.700913,24.9815309 C135.700913,23.4004134 135.384694,21.9159421 134.752247,20.5280723 C134.1198,19.1402026 133.258983,17.9280307 132.169768,16.8915204 C131.080554,15.85501 129.833247,15.0293277 128.427809,14.4144487 C127.022371,13.7995697 125.529116,13.4921348 123.947999,13.4921348 L122.735815,13.4394312 L122.366889,12.2799508 C121.48849,9.46907537 120.07429,7.28189569 118.124245,5.71834621 C116.1742,4.15479672 113.53026,3.37303371 110.192346,3.37303371 C108.084189,3.37303371 106.186876,3.73317173 104.500351,4.45345857 C102.813826,5.17374541 101.36449,6.17510478 100.1523,7.45756671 C98.9401098,8.74002865 98.0090213,10.2684193 97.3590063,12.0427844 C96.7089914,13.8171496 96.3839888,15.7232459 96.3839888,17.7611306 L96.4366924,17.7611306 L96.5420997,19.3422402 L95.0136938,19.6057584 C93.1514888,19.9219819 91.5703951,20.9233413 90.2703652,22.6098666 C88.9703353,24.2963919 88.3203301,26.1937043 88.3203301,28.301861 C88.3203301,30.6911051 89.1196608,32.7640947 90.7183462,34.5208919 C92.3170316,36.277689 94.2055603,37.1560744 96.3839888,37.1560744 L101.232725,37.1560744 C101.724628,37.1560744 102.128685,37.3229677 102.444909,37.6567591 C102.761132,37.9905506 102.919242,38.385824 102.919242,38.8425913 C102.919242,39.2993586 102.761132,39.694632 102.444909,40.0284235 C102.128685,40.3622149 101.724628,40.5291081 101.232725,40.5291081 L96.3839888,40.5291081 C94.8380073,40.5291081 93.3798875,40.2041055 92.0095857,39.5540906 C90.6392839,38.9040756 89.4358959,38.0169064 88.3993855,36.8925562 C87.3628752,35.768206 86.5371929,34.4681956 85.9223139,32.992486 C85.3074349,31.5167763 85,29.9532503 85,28.301861 C85,25.5963933 85.7554115,23.1544819 87.266257,20.9760534 C88.7771026,18.7976249 90.7095505,17.3395051 93.0636587,16.6016503 C93.2042025,14.2475421 93.7224499,12.0603624 94.6184164,10.0400456 C95.514383,8.0197289 96.7089871,6.26295807 98.2022647,4.76968048 C99.6955423,3.27640288 101.452313,2.10815028 103.47263,1.26488764 C105.492947,0.421624997 107.732829,0 110.192346,0 C112.089686,0 113.82889,0.237164061 115.410007,0.711499298 C116.991124,1.18583453 118.414109,1.8621913 119.679003,2.74058989 C120.943897,3.61898847 122.033095,4.69061868 122.946629,5.95551264 C123.860164,7.22040661 124.615575,8.62582326 125.212886,10.1718048 Z M113.249157,23.611236 L119.468188,30.4627107 C119.71414,30.7086623 119.837114,30.9985295 119.837114,31.3323209 C119.837114,31.6661124 119.71414,31.9735473 119.468188,32.2546348 L119.046559,32.5181531 C118.835743,32.7641047 118.563444,32.8607271 118.229652,32.8080232 C117.895861,32.7553193 117.605994,32.6059937 117.360042,32.3600421 L113.670787,28.2491573 L113.670787,45.2197331 C113.670787,45.7116364 113.503893,46.1156936 113.170102,46.4319171 C112.83631,46.7481406 112.441037,46.90625 111.98427,46.90625 C111.492366,46.90625 111.088309,46.7481406 110.772086,46.4319171 C110.455862,46.1156936 110.297753,45.7116364 110.297753,45.2197331 L110.297753,28.2491573 L106.713904,32.2546348 C106.467953,32.5005864 106.178086,32.649912 105.844294,32.7026159 C105.510503,32.7553198 105.220636,32.6586974 104.974684,32.4127458 L104.553055,32.1492275 C104.307103,31.86814 104.184129,31.5607051 104.184129,31.2269136 C104.184129,30.8931222 104.307103,30.603255 104.553055,30.3573034 L110.666678,23.611236 L110.666678,23.5585323 L111.088308,23.1369031 C111.193715,22.9963593 111.325473,22.8997369 111.483585,22.847033 C111.641697,22.7943291 111.791022,22.7679775 111.931566,22.7679775 C112.107246,22.7679775 112.265355,22.7943291 112.405899,22.847033 C112.546443,22.8997369 112.686984,22.9963593 112.827528,23.1369031 L113.249157,23.5585323 L113.249157,23.611236 Z" />
                                                                            </g>
                                                                        </g>
                                                                    </g>
                                                                </svg>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="jfUpload-button-container">
                                                        <div
                                                            className="jfUpload-button"
                                                            aria-hidden="true"
                                                            tabIndex={0}
                                                            style={{ display: 'none' }}
                                                            data-version="v2"
                                                        >
                                                            Upload a File
                                                            <div className="jfUpload-heading forDesktop">
                                                                Drag and drop files here
                                                            </div>
                                                            <div className="jfUpload-heading forMobile">
                                                                Choose or Drag and Drop a File
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="jfUpload-files-container">
                                                    <input
                                                        onChange={onFileChange}
                                                        type="file"
                                                        id="input_78"
                                                        name="ID"
                                                        multiple
                                                        className="form-upload-multiple"
                                                        data-imagevalidate="yes"
                                                        data-file-accept="pdf, doc, docx, xls, csv, txt, rtf, html, zip, mp3, wma, mpg, flv, avi, jpg, jpeg, png, gif"
                                                        data-file-maxsize={0}
                                                        data-file-minsize={0}
                                                        data-file-limit
                                                        data-component="fileupload"
                                                        aria-label="Upload a File"
                                                    />
                                                    <small>or Drag & Drop Files</small>
                                                </div>
                                            </div>
                                            <div data-wrapper-react="true" />
                                        </div>
                                        <span style={{ display: 'none' }} className="cancelText">
                                            {' '}
                                            Cancel{' '}
                                        </span>
                                        <span style={{ display: 'none' }} className="ofText">
                                            {' '}
                                            of{' '}
                                        </span>
                                    </div>
                                </div>
                            </li>
                            <li className="form-line" data-type="control_fileupload" id="id_91">
                                <label
                                    className="form-label form-label-left form-label-auto"
                                    id="label_91"
                                    htmlFor="input_91"
                                >
                                    Bank Statement 1:
                                </label>
                                <div id="cid_91" className="form-input" data-layout="full">
                                    <div className="jfQuestion-fields" data-wrapper-react="true">
                                        <div className="jfField isFilled">
                                            <div className="jfUpload-wrapper">
                                                <div className="jfUpload-container">
                                                    <div className="jfUpload-text-container">
                                                        <div className="jfUpload-icon forDesktop">
                                                            <span className="iconSvg dhtupload">
                                                                <svg
                                                                    viewBox="0 0 54 47"
                                                                    version="1.1"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <g
                                                                        stroke="none"
                                                                        strokewidth={1}
                                                                        fill="none"
                                                                    >
                                                                        <g transform="translate(-1506.000000, -2713.000000)">
                                                                            <g transform="translate(1421.000000, 2713.000000)">
                                                                                <path d="M125.212886,10.1718048 C127.110227,10.3826204 128.89335,10.9096517 130.562307,11.7529143 C132.231264,12.596177 133.689384,13.676591 134.93671,14.9941889 C136.184036,16.3117868 137.167828,17.8226097 137.888114,19.5267029 C138.608401,21.2307962 138.968539,23.049054 138.968539,24.9815309 C138.968539,26.8086 138.687456,28.6356416 138.125281,30.4627107 C137.563106,32.2897797 136.746207,33.9323605 135.674561,35.3905021 C134.602915,36.8486438 133.267769,38.0520318 131.669084,39.0007022 C130.070398,39.9493727 128.217005,40.4588363 126.108848,40.5291081 L122.261482,40.5291081 C121.804714,40.5291081 121.409441,40.3622149 121.07565,40.0284235 C120.741858,39.694632 120.574965,39.2993586 120.574965,38.8425913 C120.574965,38.385824 120.741858,37.9905506 121.07565,37.6567591 C121.409441,37.3229677 121.804714,37.1560744 122.261482,37.1560744 L126.108848,37.1560744 C127.549422,37.1560744 128.858216,36.7871526 130.03527,36.0492978 C131.212324,35.3114429 132.222468,34.3627867 133.06573,33.2033006 C133.908993,32.0438144 134.558998,30.743804 135.015765,29.3032303 C135.472533,27.8626567 135.700913,26.4221046 135.700913,24.9815309 C135.700913,23.4004134 135.384694,21.9159421 134.752247,20.5280723 C134.1198,19.1402026 133.258983,17.9280307 132.169768,16.8915204 C131.080554,15.85501 129.833247,15.0293277 128.427809,14.4144487 C127.022371,13.7995697 125.529116,13.4921348 123.947999,13.4921348 L122.735815,13.4394312 L122.366889,12.2799508 C121.48849,9.46907537 120.07429,7.28189569 118.124245,5.71834621 C116.1742,4.15479672 113.53026,3.37303371 110.192346,3.37303371 C108.084189,3.37303371 106.186876,3.73317173 104.500351,4.45345857 C102.813826,5.17374541 101.36449,6.17510478 100.1523,7.45756671 C98.9401098,8.74002865 98.0090213,10.2684193 97.3590063,12.0427844 C96.7089914,13.8171496 96.3839888,15.7232459 96.3839888,17.7611306 L96.4366924,17.7611306 L96.5420997,19.3422402 L95.0136938,19.6057584 C93.1514888,19.9219819 91.5703951,20.9233413 90.2703652,22.6098666 C88.9703353,24.2963919 88.3203301,26.1937043 88.3203301,28.301861 C88.3203301,30.6911051 89.1196608,32.7640947 90.7183462,34.5208919 C92.3170316,36.277689 94.2055603,37.1560744 96.3839888,37.1560744 L101.232725,37.1560744 C101.724628,37.1560744 102.128685,37.3229677 102.444909,37.6567591 C102.761132,37.9905506 102.919242,38.385824 102.919242,38.8425913 C102.919242,39.2993586 102.761132,39.694632 102.444909,40.0284235 C102.128685,40.3622149 101.724628,40.5291081 101.232725,40.5291081 L96.3839888,40.5291081 C94.8380073,40.5291081 93.3798875,40.2041055 92.0095857,39.5540906 C90.6392839,38.9040756 89.4358959,38.0169064 88.3993855,36.8925562 C87.3628752,35.768206 86.5371929,34.4681956 85.9223139,32.992486 C85.3074349,31.5167763 85,29.9532503 85,28.301861 C85,25.5963933 85.7554115,23.1544819 87.266257,20.9760534 C88.7771026,18.7976249 90.7095505,17.3395051 93.0636587,16.6016503 C93.2042025,14.2475421 93.7224499,12.0603624 94.6184164,10.0400456 C95.514383,8.0197289 96.7089871,6.26295807 98.2022647,4.76968048 C99.6955423,3.27640288 101.452313,2.10815028 103.47263,1.26488764 C105.492947,0.421624997 107.732829,0 110.192346,0 C112.089686,0 113.82889,0.237164061 115.410007,0.711499298 C116.991124,1.18583453 118.414109,1.8621913 119.679003,2.74058989 C120.943897,3.61898847 122.033095,4.69061868 122.946629,5.95551264 C123.860164,7.22040661 124.615575,8.62582326 125.212886,10.1718048 Z M113.249157,23.611236 L119.468188,30.4627107 C119.71414,30.7086623 119.837114,30.9985295 119.837114,31.3323209 C119.837114,31.6661124 119.71414,31.9735473 119.468188,32.2546348 L119.046559,32.5181531 C118.835743,32.7641047 118.563444,32.8607271 118.229652,32.8080232 C117.895861,32.7553193 117.605994,32.6059937 117.360042,32.3600421 L113.670787,28.2491573 L113.670787,45.2197331 C113.670787,45.7116364 113.503893,46.1156936 113.170102,46.4319171 C112.83631,46.7481406 112.441037,46.90625 111.98427,46.90625 C111.492366,46.90625 111.088309,46.7481406 110.772086,46.4319171 C110.455862,46.1156936 110.297753,45.7116364 110.297753,45.2197331 L110.297753,28.2491573 L106.713904,32.2546348 C106.467953,32.5005864 106.178086,32.649912 105.844294,32.7026159 C105.510503,32.7553198 105.220636,32.6586974 104.974684,32.4127458 L104.553055,32.1492275 C104.307103,31.86814 104.184129,31.5607051 104.184129,31.2269136 C104.184129,30.8931222 104.307103,30.603255 104.553055,30.3573034 L110.666678,23.611236 L110.666678,23.5585323 L111.088308,23.1369031 C111.193715,22.9963593 111.325473,22.8997369 111.483585,22.847033 C111.641697,22.7943291 111.791022,22.7679775 111.931566,22.7679775 C112.107246,22.7679775 112.265355,22.7943291 112.405899,22.847033 C112.546443,22.8997369 112.686984,22.9963593 112.827528,23.1369031 L113.249157,23.5585323 L113.249157,23.611236 Z" />
                                                                            </g>
                                                                        </g>
                                                                    </g>
                                                                </svg>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="jfUpload-button-container">
                                                        <div
                                                            className="jfUpload-button"
                                                            aria-hidden="true"
                                                            tabIndex={0}
                                                            style={{ display: 'none' }}
                                                            data-version="v2"
                                                        >
                                                            Browse Files
                                                            <div className="jfUpload-heading forDesktop">
                                                                Drag and drop files here
                                                            </div>
                                                            <div className="jfUpload-heading forMobile">
                                                                Choose or Drag and Drop a File
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="jfUpload-files-container">
                                                    <input
                                                        onChange={onFileChange}
                                                        type="file"
                                                        id="input_91"
                                                        name="Bank Statement 1"
                                                        multiple
                                                        className="form-upload-multiple"
                                                        data-imagevalidate="yes"
                                                        data-file-accept="pdf, doc, docx, xls, xlsx, csv, txt, rtf, html, zip, mp3, wma, mpg, flv, avi, jpg, jpeg, png, gif"
                                                        data-file-maxsize={0}
                                                        data-file-minsize={0}
                                                        data-file-limit
                                                        data-component="fileupload"
                                                        aria-label="Browse Files"
                                                    />
                                                    <small>or Drag & Drop Files</small>
                                                </div>
                                            </div>
                                            <div data-wrapper-react="true" />
                                        </div>
                                        <span style={{ display: 'none' }} className="cancelText">
                                            {' '}
                                            Cancel{' '}
                                        </span>
                                        <span style={{ display: 'none' }} className="ofText">
                                            {' '}
                                            of{' '}
                                        </span>
                                    </div>
                                </div>
                            </li>

                            <li className="form-line" data-type="control_fileupload" id="id_91">
                                <label
                                    className="form-label form-label-left form-label-auto"
                                    id="label_91"
                                    htmlFor="input_91"
                                >
                                    Bank Statement 2:
                                </label>
                                <div id="cid_91" className="form-input" data-layout="full">
                                    <div className="jfQuestion-fields" data-wrapper-react="true">
                                        <div className="jfField isFilled">
                                            <div className="jfUpload-wrapper">
                                                <div className="jfUpload-container">
                                                    <div className="jfUpload-text-container">
                                                        <div className="jfUpload-icon forDesktop">
                                                            <span className="iconSvg dhtupload">
                                                                <svg
                                                                    viewBox="0 0 54 47"
                                                                    version="1.1"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <g
                                                                        stroke="none"
                                                                        strokewidth={1}
                                                                        fill="none"
                                                                    >
                                                                        <g transform="translate(-1506.000000, -2713.000000)">
                                                                            <g transform="translate(1421.000000, 2713.000000)">
                                                                                <path d="M125.212886,10.1718048 C127.110227,10.3826204 128.89335,10.9096517 130.562307,11.7529143 C132.231264,12.596177 133.689384,13.676591 134.93671,14.9941889 C136.184036,16.3117868 137.167828,17.8226097 137.888114,19.5267029 C138.608401,21.2307962 138.968539,23.049054 138.968539,24.9815309 C138.968539,26.8086 138.687456,28.6356416 138.125281,30.4627107 C137.563106,32.2897797 136.746207,33.9323605 135.674561,35.3905021 C134.602915,36.8486438 133.267769,38.0520318 131.669084,39.0007022 C130.070398,39.9493727 128.217005,40.4588363 126.108848,40.5291081 L122.261482,40.5291081 C121.804714,40.5291081 121.409441,40.3622149 121.07565,40.0284235 C120.741858,39.694632 120.574965,39.2993586 120.574965,38.8425913 C120.574965,38.385824 120.741858,37.9905506 121.07565,37.6567591 C121.409441,37.3229677 121.804714,37.1560744 122.261482,37.1560744 L126.108848,37.1560744 C127.549422,37.1560744 128.858216,36.7871526 130.03527,36.0492978 C131.212324,35.3114429 132.222468,34.3627867 133.06573,33.2033006 C133.908993,32.0438144 134.558998,30.743804 135.015765,29.3032303 C135.472533,27.8626567 135.700913,26.4221046 135.700913,24.9815309 C135.700913,23.4004134 135.384694,21.9159421 134.752247,20.5280723 C134.1198,19.1402026 133.258983,17.9280307 132.169768,16.8915204 C131.080554,15.85501 129.833247,15.0293277 128.427809,14.4144487 C127.022371,13.7995697 125.529116,13.4921348 123.947999,13.4921348 L122.735815,13.4394312 L122.366889,12.2799508 C121.48849,9.46907537 120.07429,7.28189569 118.124245,5.71834621 C116.1742,4.15479672 113.53026,3.37303371 110.192346,3.37303371 C108.084189,3.37303371 106.186876,3.73317173 104.500351,4.45345857 C102.813826,5.17374541 101.36449,6.17510478 100.1523,7.45756671 C98.9401098,8.74002865 98.0090213,10.2684193 97.3590063,12.0427844 C96.7089914,13.8171496 96.3839888,15.7232459 96.3839888,17.7611306 L96.4366924,17.7611306 L96.5420997,19.3422402 L95.0136938,19.6057584 C93.1514888,19.9219819 91.5703951,20.9233413 90.2703652,22.6098666 C88.9703353,24.2963919 88.3203301,26.1937043 88.3203301,28.301861 C88.3203301,30.6911051 89.1196608,32.7640947 90.7183462,34.5208919 C92.3170316,36.277689 94.2055603,37.1560744 96.3839888,37.1560744 L101.232725,37.1560744 C101.724628,37.1560744 102.128685,37.3229677 102.444909,37.6567591 C102.761132,37.9905506 102.919242,38.385824 102.919242,38.8425913 C102.919242,39.2993586 102.761132,39.694632 102.444909,40.0284235 C102.128685,40.3622149 101.724628,40.5291081 101.232725,40.5291081 L96.3839888,40.5291081 C94.8380073,40.5291081 93.3798875,40.2041055 92.0095857,39.5540906 C90.6392839,38.9040756 89.4358959,38.0169064 88.3993855,36.8925562 C87.3628752,35.768206 86.5371929,34.4681956 85.9223139,32.992486 C85.3074349,31.5167763 85,29.9532503 85,28.301861 C85,25.5963933 85.7554115,23.1544819 87.266257,20.9760534 C88.7771026,18.7976249 90.7095505,17.3395051 93.0636587,16.6016503 C93.2042025,14.2475421 93.7224499,12.0603624 94.6184164,10.0400456 C95.514383,8.0197289 96.7089871,6.26295807 98.2022647,4.76968048 C99.6955423,3.27640288 101.452313,2.10815028 103.47263,1.26488764 C105.492947,0.421624997 107.732829,0 110.192346,0 C112.089686,0 113.82889,0.237164061 115.410007,0.711499298 C116.991124,1.18583453 118.414109,1.8621913 119.679003,2.74058989 C120.943897,3.61898847 122.033095,4.69061868 122.946629,5.95551264 C123.860164,7.22040661 124.615575,8.62582326 125.212886,10.1718048 Z M113.249157,23.611236 L119.468188,30.4627107 C119.71414,30.7086623 119.837114,30.9985295 119.837114,31.3323209 C119.837114,31.6661124 119.71414,31.9735473 119.468188,32.2546348 L119.046559,32.5181531 C118.835743,32.7641047 118.563444,32.8607271 118.229652,32.8080232 C117.895861,32.7553193 117.605994,32.6059937 117.360042,32.3600421 L113.670787,28.2491573 L113.670787,45.2197331 C113.670787,45.7116364 113.503893,46.1156936 113.170102,46.4319171 C112.83631,46.7481406 112.441037,46.90625 111.98427,46.90625 C111.492366,46.90625 111.088309,46.7481406 110.772086,46.4319171 C110.455862,46.1156936 110.297753,45.7116364 110.297753,45.2197331 L110.297753,28.2491573 L106.713904,32.2546348 C106.467953,32.5005864 106.178086,32.649912 105.844294,32.7026159 C105.510503,32.7553198 105.220636,32.6586974 104.974684,32.4127458 L104.553055,32.1492275 C104.307103,31.86814 104.184129,31.5607051 104.184129,31.2269136 C104.184129,30.8931222 104.307103,30.603255 104.553055,30.3573034 L110.666678,23.611236 L110.666678,23.5585323 L111.088308,23.1369031 C111.193715,22.9963593 111.325473,22.8997369 111.483585,22.847033 C111.641697,22.7943291 111.791022,22.7679775 111.931566,22.7679775 C112.107246,22.7679775 112.265355,22.7943291 112.405899,22.847033 C112.546443,22.8997369 112.686984,22.9963593 112.827528,23.1369031 L113.249157,23.5585323 L113.249157,23.611236 Z" />
                                                                            </g>
                                                                        </g>
                                                                    </g>
                                                                </svg>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="jfUpload-button-container">
                                                        <div
                                                            className="jfUpload-button"
                                                            aria-hidden="true"
                                                            tabIndex={0}
                                                            style={{ display: 'none' }}
                                                            data-version="v2"
                                                        >
                                                            Browse Files
                                                            <div className="jfUpload-heading forDesktop">
                                                                Drag and drop files here
                                                            </div>
                                                            <div className="jfUpload-heading forMobile">
                                                                Choose or Drag and Drop a File
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="jfUpload-files-container">
                                                    <input
                                                        onChange={onFileChange}
                                                        type="file"
                                                        id="input_91"
                                                        name="Bank Statement 2"
                                                        multiple
                                                        className="form-upload-multiple"
                                                        data-imagevalidate="yes"
                                                        data-file-accept="pdf, doc, docx, xls, xlsx, csv, txt, rtf, html, zip, mp3, wma, mpg, flv, avi, jpg, jpeg, png, gif"
                                                        data-file-maxsize={0}
                                                        data-file-minsize={0}
                                                        data-file-limit
                                                        data-component="fileupload"
                                                        aria-label="Browse Files"
                                                    />
                                                    <small>or Drag & Drop Files</small>
                                                </div>
                                            </div>
                                            <div data-wrapper-react="true" />
                                        </div>
                                        <span style={{ display: 'none' }} className="cancelText">
                                            {' '}
                                            Cancel{' '}
                                        </span>
                                        <span style={{ display: 'none' }} className="ofText">
                                            {' '}
                                            of{' '}
                                        </span>
                                    </div>
                                </div>
                            </li>

                            <li className="form-line" data-type="control_fileupload" id="id_91">
                                <label
                                    className="form-label form-label-left form-label-auto"
                                    id="label_91"
                                    htmlFor="input_91"
                                >
                                    Bank Statement 3:
                                </label>
                                <div id="cid_91" className="form-input" data-layout="full">
                                    <div className="jfQuestion-fields" data-wrapper-react="true">
                                        <div className="jfField isFilled">
                                            <div className="jfUpload-wrapper">
                                                <div className="jfUpload-container">
                                                    <div className="jfUpload-text-container">
                                                        <div className="jfUpload-icon forDesktop">
                                                            <span className="iconSvg dhtupload">
                                                                <svg
                                                                    viewBox="0 0 54 47"
                                                                    version="1.1"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <g
                                                                        stroke="none"
                                                                        strokewidth={1}
                                                                        fill="none"
                                                                    >
                                                                        <g transform="translate(-1506.000000, -2713.000000)">
                                                                            <g transform="translate(1421.000000, 2713.000000)">
                                                                                <path d="M125.212886,10.1718048 C127.110227,10.3826204 128.89335,10.9096517 130.562307,11.7529143 C132.231264,12.596177 133.689384,13.676591 134.93671,14.9941889 C136.184036,16.3117868 137.167828,17.8226097 137.888114,19.5267029 C138.608401,21.2307962 138.968539,23.049054 138.968539,24.9815309 C138.968539,26.8086 138.687456,28.6356416 138.125281,30.4627107 C137.563106,32.2897797 136.746207,33.9323605 135.674561,35.3905021 C134.602915,36.8486438 133.267769,38.0520318 131.669084,39.0007022 C130.070398,39.9493727 128.217005,40.4588363 126.108848,40.5291081 L122.261482,40.5291081 C121.804714,40.5291081 121.409441,40.3622149 121.07565,40.0284235 C120.741858,39.694632 120.574965,39.2993586 120.574965,38.8425913 C120.574965,38.385824 120.741858,37.9905506 121.07565,37.6567591 C121.409441,37.3229677 121.804714,37.1560744 122.261482,37.1560744 L126.108848,37.1560744 C127.549422,37.1560744 128.858216,36.7871526 130.03527,36.0492978 C131.212324,35.3114429 132.222468,34.3627867 133.06573,33.2033006 C133.908993,32.0438144 134.558998,30.743804 135.015765,29.3032303 C135.472533,27.8626567 135.700913,26.4221046 135.700913,24.9815309 C135.700913,23.4004134 135.384694,21.9159421 134.752247,20.5280723 C134.1198,19.1402026 133.258983,17.9280307 132.169768,16.8915204 C131.080554,15.85501 129.833247,15.0293277 128.427809,14.4144487 C127.022371,13.7995697 125.529116,13.4921348 123.947999,13.4921348 L122.735815,13.4394312 L122.366889,12.2799508 C121.48849,9.46907537 120.07429,7.28189569 118.124245,5.71834621 C116.1742,4.15479672 113.53026,3.37303371 110.192346,3.37303371 C108.084189,3.37303371 106.186876,3.73317173 104.500351,4.45345857 C102.813826,5.17374541 101.36449,6.17510478 100.1523,7.45756671 C98.9401098,8.74002865 98.0090213,10.2684193 97.3590063,12.0427844 C96.7089914,13.8171496 96.3839888,15.7232459 96.3839888,17.7611306 L96.4366924,17.7611306 L96.5420997,19.3422402 L95.0136938,19.6057584 C93.1514888,19.9219819 91.5703951,20.9233413 90.2703652,22.6098666 C88.9703353,24.2963919 88.3203301,26.1937043 88.3203301,28.301861 C88.3203301,30.6911051 89.1196608,32.7640947 90.7183462,34.5208919 C92.3170316,36.277689 94.2055603,37.1560744 96.3839888,37.1560744 L101.232725,37.1560744 C101.724628,37.1560744 102.128685,37.3229677 102.444909,37.6567591 C102.761132,37.9905506 102.919242,38.385824 102.919242,38.8425913 C102.919242,39.2993586 102.761132,39.694632 102.444909,40.0284235 C102.128685,40.3622149 101.724628,40.5291081 101.232725,40.5291081 L96.3839888,40.5291081 C94.8380073,40.5291081 93.3798875,40.2041055 92.0095857,39.5540906 C90.6392839,38.9040756 89.4358959,38.0169064 88.3993855,36.8925562 C87.3628752,35.768206 86.5371929,34.4681956 85.9223139,32.992486 C85.3074349,31.5167763 85,29.9532503 85,28.301861 C85,25.5963933 85.7554115,23.1544819 87.266257,20.9760534 C88.7771026,18.7976249 90.7095505,17.3395051 93.0636587,16.6016503 C93.2042025,14.2475421 93.7224499,12.0603624 94.6184164,10.0400456 C95.514383,8.0197289 96.7089871,6.26295807 98.2022647,4.76968048 C99.6955423,3.27640288 101.452313,2.10815028 103.47263,1.26488764 C105.492947,0.421624997 107.732829,0 110.192346,0 C112.089686,0 113.82889,0.237164061 115.410007,0.711499298 C116.991124,1.18583453 118.414109,1.8621913 119.679003,2.74058989 C120.943897,3.61898847 122.033095,4.69061868 122.946629,5.95551264 C123.860164,7.22040661 124.615575,8.62582326 125.212886,10.1718048 Z M113.249157,23.611236 L119.468188,30.4627107 C119.71414,30.7086623 119.837114,30.9985295 119.837114,31.3323209 C119.837114,31.6661124 119.71414,31.9735473 119.468188,32.2546348 L119.046559,32.5181531 C118.835743,32.7641047 118.563444,32.8607271 118.229652,32.8080232 C117.895861,32.7553193 117.605994,32.6059937 117.360042,32.3600421 L113.670787,28.2491573 L113.670787,45.2197331 C113.670787,45.7116364 113.503893,46.1156936 113.170102,46.4319171 C112.83631,46.7481406 112.441037,46.90625 111.98427,46.90625 C111.492366,46.90625 111.088309,46.7481406 110.772086,46.4319171 C110.455862,46.1156936 110.297753,45.7116364 110.297753,45.2197331 L110.297753,28.2491573 L106.713904,32.2546348 C106.467953,32.5005864 106.178086,32.649912 105.844294,32.7026159 C105.510503,32.7553198 105.220636,32.6586974 104.974684,32.4127458 L104.553055,32.1492275 C104.307103,31.86814 104.184129,31.5607051 104.184129,31.2269136 C104.184129,30.8931222 104.307103,30.603255 104.553055,30.3573034 L110.666678,23.611236 L110.666678,23.5585323 L111.088308,23.1369031 C111.193715,22.9963593 111.325473,22.8997369 111.483585,22.847033 C111.641697,22.7943291 111.791022,22.7679775 111.931566,22.7679775 C112.107246,22.7679775 112.265355,22.7943291 112.405899,22.847033 C112.546443,22.8997369 112.686984,22.9963593 112.827528,23.1369031 L113.249157,23.5585323 L113.249157,23.611236 Z" />
                                                                            </g>
                                                                        </g>
                                                                    </g>
                                                                </svg>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="jfUpload-button-container">
                                                        <div
                                                            className="jfUpload-button"
                                                            aria-hidden="true"
                                                            tabIndex={0}
                                                            style={{ display: 'none' }}
                                                            data-version="v2"
                                                        >
                                                            Browse Files
                                                            <div className="jfUpload-heading forDesktop">
                                                                Drag and drop files here
                                                            </div>
                                                            <div className="jfUpload-heading forMobile">
                                                                Choose or Drag and Drop a File
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="jfUpload-files-container">
                                                    <input
                                                        onChange={onFileChange}
                                                        type="file"
                                                        id="input_91"
                                                        name="Bank Statement 3"
                                                        multiple
                                                        className="form-upload-multiple"
                                                        data-imagevalidate="yes"
                                                        data-file-accept="pdf, doc, docx, xls, xlsx, csv, txt, rtf, html, zip, mp3, wma, mpg, flv, avi, jpg, jpeg, png, gif"
                                                        data-file-maxsize={0}
                                                        data-file-minsize={0}
                                                        data-file-limit
                                                        data-component="fileupload"
                                                        aria-label="Browse Files"
                                                    />
                                                    <small>or Drag & Drop Files</small>
                                                </div>
                                            </div>
                                            <div data-wrapper-react="true" />
                                        </div>
                                        <span style={{ display: 'none' }} className="cancelText">
                                            {' '}
                                            Cancel{' '}
                                        </span>
                                        <span style={{ display: 'none' }} className="ofText">
                                            {' '}
                                            of{' '}
                                        </span>
                                    </div>
                                </div>
                            </li>

                            <li className="form-line" data-type="control_fileupload" id="id_91">
                                <label
                                    className="form-label form-label-left form-label-auto"
                                    id="label_91"
                                    htmlFor="input_91"
                                >
                                    Bank Statement 4
                                </label>
                                <div id="cid_91" className="form-input" data-layout="full">
                                    <div className="jfQuestion-fields" data-wrapper-react="true">
                                        <div className="jfField isFilled">
                                            <div className="jfUpload-wrapper">
                                                <div className="jfUpload-container">
                                                    <div className="jfUpload-text-container">
                                                        <div className="jfUpload-icon forDesktop">
                                                            <span className="iconSvg dhtupload">
                                                                <svg
                                                                    viewBox="0 0 54 47"
                                                                    version="1.1"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <g
                                                                        stroke="none"
                                                                        strokewidth={1}
                                                                        fill="none"
                                                                    >
                                                                        <g transform="translate(-1506.000000, -2713.000000)">
                                                                            <g transform="translate(1421.000000, 2713.000000)">
                                                                                <path d="M125.212886,10.1718048 C127.110227,10.3826204 128.89335,10.9096517 130.562307,11.7529143 C132.231264,12.596177 133.689384,13.676591 134.93671,14.9941889 C136.184036,16.3117868 137.167828,17.8226097 137.888114,19.5267029 C138.608401,21.2307962 138.968539,23.049054 138.968539,24.9815309 C138.968539,26.8086 138.687456,28.6356416 138.125281,30.4627107 C137.563106,32.2897797 136.746207,33.9323605 135.674561,35.3905021 C134.602915,36.8486438 133.267769,38.0520318 131.669084,39.0007022 C130.070398,39.9493727 128.217005,40.4588363 126.108848,40.5291081 L122.261482,40.5291081 C121.804714,40.5291081 121.409441,40.3622149 121.07565,40.0284235 C120.741858,39.694632 120.574965,39.2993586 120.574965,38.8425913 C120.574965,38.385824 120.741858,37.9905506 121.07565,37.6567591 C121.409441,37.3229677 121.804714,37.1560744 122.261482,37.1560744 L126.108848,37.1560744 C127.549422,37.1560744 128.858216,36.7871526 130.03527,36.0492978 C131.212324,35.3114429 132.222468,34.3627867 133.06573,33.2033006 C133.908993,32.0438144 134.558998,30.743804 135.015765,29.3032303 C135.472533,27.8626567 135.700913,26.4221046 135.700913,24.9815309 C135.700913,23.4004134 135.384694,21.9159421 134.752247,20.5280723 C134.1198,19.1402026 133.258983,17.9280307 132.169768,16.8915204 C131.080554,15.85501 129.833247,15.0293277 128.427809,14.4144487 C127.022371,13.7995697 125.529116,13.4921348 123.947999,13.4921348 L122.735815,13.4394312 L122.366889,12.2799508 C121.48849,9.46907537 120.07429,7.28189569 118.124245,5.71834621 C116.1742,4.15479672 113.53026,3.37303371 110.192346,3.37303371 C108.084189,3.37303371 106.186876,3.73317173 104.500351,4.45345857 C102.813826,5.17374541 101.36449,6.17510478 100.1523,7.45756671 C98.9401098,8.74002865 98.0090213,10.2684193 97.3590063,12.0427844 C96.7089914,13.8171496 96.3839888,15.7232459 96.3839888,17.7611306 L96.4366924,17.7611306 L96.5420997,19.3422402 L95.0136938,19.6057584 C93.1514888,19.9219819 91.5703951,20.9233413 90.2703652,22.6098666 C88.9703353,24.2963919 88.3203301,26.1937043 88.3203301,28.301861 C88.3203301,30.6911051 89.1196608,32.7640947 90.7183462,34.5208919 C92.3170316,36.277689 94.2055603,37.1560744 96.3839888,37.1560744 L101.232725,37.1560744 C101.724628,37.1560744 102.128685,37.3229677 102.444909,37.6567591 C102.761132,37.9905506 102.919242,38.385824 102.919242,38.8425913 C102.919242,39.2993586 102.761132,39.694632 102.444909,40.0284235 C102.128685,40.3622149 101.724628,40.5291081 101.232725,40.5291081 L96.3839888,40.5291081 C94.8380073,40.5291081 93.3798875,40.2041055 92.0095857,39.5540906 C90.6392839,38.9040756 89.4358959,38.0169064 88.3993855,36.8925562 C87.3628752,35.768206 86.5371929,34.4681956 85.9223139,32.992486 C85.3074349,31.5167763 85,29.9532503 85,28.301861 C85,25.5963933 85.7554115,23.1544819 87.266257,20.9760534 C88.7771026,18.7976249 90.7095505,17.3395051 93.0636587,16.6016503 C93.2042025,14.2475421 93.7224499,12.0603624 94.6184164,10.0400456 C95.514383,8.0197289 96.7089871,6.26295807 98.2022647,4.76968048 C99.6955423,3.27640288 101.452313,2.10815028 103.47263,1.26488764 C105.492947,0.421624997 107.732829,0 110.192346,0 C112.089686,0 113.82889,0.237164061 115.410007,0.711499298 C116.991124,1.18583453 118.414109,1.8621913 119.679003,2.74058989 C120.943897,3.61898847 122.033095,4.69061868 122.946629,5.95551264 C123.860164,7.22040661 124.615575,8.62582326 125.212886,10.1718048 Z M113.249157,23.611236 L119.468188,30.4627107 C119.71414,30.7086623 119.837114,30.9985295 119.837114,31.3323209 C119.837114,31.6661124 119.71414,31.9735473 119.468188,32.2546348 L119.046559,32.5181531 C118.835743,32.7641047 118.563444,32.8607271 118.229652,32.8080232 C117.895861,32.7553193 117.605994,32.6059937 117.360042,32.3600421 L113.670787,28.2491573 L113.670787,45.2197331 C113.670787,45.7116364 113.503893,46.1156936 113.170102,46.4319171 C112.83631,46.7481406 112.441037,46.90625 111.98427,46.90625 C111.492366,46.90625 111.088309,46.7481406 110.772086,46.4319171 C110.455862,46.1156936 110.297753,45.7116364 110.297753,45.2197331 L110.297753,28.2491573 L106.713904,32.2546348 C106.467953,32.5005864 106.178086,32.649912 105.844294,32.7026159 C105.510503,32.7553198 105.220636,32.6586974 104.974684,32.4127458 L104.553055,32.1492275 C104.307103,31.86814 104.184129,31.5607051 104.184129,31.2269136 C104.184129,30.8931222 104.307103,30.603255 104.553055,30.3573034 L110.666678,23.611236 L110.666678,23.5585323 L111.088308,23.1369031 C111.193715,22.9963593 111.325473,22.8997369 111.483585,22.847033 C111.641697,22.7943291 111.791022,22.7679775 111.931566,22.7679775 C112.107246,22.7679775 112.265355,22.7943291 112.405899,22.847033 C112.546443,22.8997369 112.686984,22.9963593 112.827528,23.1369031 L113.249157,23.5585323 L113.249157,23.611236 Z" />
                                                                            </g>
                                                                        </g>
                                                                    </g>
                                                                </svg>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="jfUpload-button-container">
                                                        <div
                                                            className="jfUpload-button"
                                                            aria-hidden="true"
                                                            tabIndex={0}
                                                            style={{ display: 'none' }}
                                                            data-version="v2"
                                                        >
                                                            Browse Files
                                                            <div className="jfUpload-heading forDesktop">
                                                                Drag and drop files here
                                                            </div>
                                                            <div className="jfUpload-heading forMobile">
                                                                Choose or Drag and Drop a File
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="jfUpload-files-container">
                                                    <input
                                                        onChange={onFileChange}
                                                        type="file"
                                                        id="input_91"
                                                        name="Bank Statement"
                                                        multiple
                                                        className="form-upload-multiple"
                                                        data-imagevalidate="yes"
                                                        data-file-accept="pdf, doc, docx, xls, xlsx, csv, txt, rtf, html, zip, mp3, wma, mpg, flv, avi, jpg, jpeg, png, gif"
                                                        data-file-maxsize={0}
                                                        data-file-minsize={0}
                                                        data-file-limit
                                                        data-component="fileupload"
                                                        aria-label="Browse Files"
                                                    />
                                                    <small>or Drag & Drop Files</small>
                                                </div>
                                            </div>
                                            <div data-wrapper-react="true" />
                                        </div>
                                        <span style={{ display: 'none' }} className="cancelText">
                                            {' '}
                                            Cancel{' '}
                                        </span>
                                        <span style={{ display: 'none' }} className="ofText">
                                            {' '}
                                            of{' '}
                                        </span>
                                    </div>
                                </div>
                            </li>

                            <li className="form-line" data-type="control_fileupload" id="id_91">
                                <label
                                    className="form-label form-label-left form-label-auto"
                                    id="label_91"
                                    htmlFor="input_91"
                                >
                                    VOID Check:
                                </label>
                                <div id="cid_91" className="form-input" data-layout="full">
                                    <div className="jfQuestion-fields" data-wrapper-react="true">
                                        <div className="jfField isFilled">
                                            <div className="jfUpload-wrapper">
                                                <div className="jfUpload-container">
                                                    <div className="jfUpload-text-container">
                                                        <div className="jfUpload-icon forDesktop">
                                                            <span className="iconSvg dhtupload">
                                                                <svg
                                                                    viewBox="0 0 54 47"
                                                                    version="1.1"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <g
                                                                        stroke="none"
                                                                        strokewidth={1}
                                                                        fill="none"
                                                                    >
                                                                        <g transform="translate(-1506.000000, -2713.000000)">
                                                                            <g transform="translate(1421.000000, 2713.000000)">
                                                                                <path d="M125.212886,10.1718048 C127.110227,10.3826204 128.89335,10.9096517 130.562307,11.7529143 C132.231264,12.596177 133.689384,13.676591 134.93671,14.9941889 C136.184036,16.3117868 137.167828,17.8226097 137.888114,19.5267029 C138.608401,21.2307962 138.968539,23.049054 138.968539,24.9815309 C138.968539,26.8086 138.687456,28.6356416 138.125281,30.4627107 C137.563106,32.2897797 136.746207,33.9323605 135.674561,35.3905021 C134.602915,36.8486438 133.267769,38.0520318 131.669084,39.0007022 C130.070398,39.9493727 128.217005,40.4588363 126.108848,40.5291081 L122.261482,40.5291081 C121.804714,40.5291081 121.409441,40.3622149 121.07565,40.0284235 C120.741858,39.694632 120.574965,39.2993586 120.574965,38.8425913 C120.574965,38.385824 120.741858,37.9905506 121.07565,37.6567591 C121.409441,37.3229677 121.804714,37.1560744 122.261482,37.1560744 L126.108848,37.1560744 C127.549422,37.1560744 128.858216,36.7871526 130.03527,36.0492978 C131.212324,35.3114429 132.222468,34.3627867 133.06573,33.2033006 C133.908993,32.0438144 134.558998,30.743804 135.015765,29.3032303 C135.472533,27.8626567 135.700913,26.4221046 135.700913,24.9815309 C135.700913,23.4004134 135.384694,21.9159421 134.752247,20.5280723 C134.1198,19.1402026 133.258983,17.9280307 132.169768,16.8915204 C131.080554,15.85501 129.833247,15.0293277 128.427809,14.4144487 C127.022371,13.7995697 125.529116,13.4921348 123.947999,13.4921348 L122.735815,13.4394312 L122.366889,12.2799508 C121.48849,9.46907537 120.07429,7.28189569 118.124245,5.71834621 C116.1742,4.15479672 113.53026,3.37303371 110.192346,3.37303371 C108.084189,3.37303371 106.186876,3.73317173 104.500351,4.45345857 C102.813826,5.17374541 101.36449,6.17510478 100.1523,7.45756671 C98.9401098,8.74002865 98.0090213,10.2684193 97.3590063,12.0427844 C96.7089914,13.8171496 96.3839888,15.7232459 96.3839888,17.7611306 L96.4366924,17.7611306 L96.5420997,19.3422402 L95.0136938,19.6057584 C93.1514888,19.9219819 91.5703951,20.9233413 90.2703652,22.6098666 C88.9703353,24.2963919 88.3203301,26.1937043 88.3203301,28.301861 C88.3203301,30.6911051 89.1196608,32.7640947 90.7183462,34.5208919 C92.3170316,36.277689 94.2055603,37.1560744 96.3839888,37.1560744 L101.232725,37.1560744 C101.724628,37.1560744 102.128685,37.3229677 102.444909,37.6567591 C102.761132,37.9905506 102.919242,38.385824 102.919242,38.8425913 C102.919242,39.2993586 102.761132,39.694632 102.444909,40.0284235 C102.128685,40.3622149 101.724628,40.5291081 101.232725,40.5291081 L96.3839888,40.5291081 C94.8380073,40.5291081 93.3798875,40.2041055 92.0095857,39.5540906 C90.6392839,38.9040756 89.4358959,38.0169064 88.3993855,36.8925562 C87.3628752,35.768206 86.5371929,34.4681956 85.9223139,32.992486 C85.3074349,31.5167763 85,29.9532503 85,28.301861 C85,25.5963933 85.7554115,23.1544819 87.266257,20.9760534 C88.7771026,18.7976249 90.7095505,17.3395051 93.0636587,16.6016503 C93.2042025,14.2475421 93.7224499,12.0603624 94.6184164,10.0400456 C95.514383,8.0197289 96.7089871,6.26295807 98.2022647,4.76968048 C99.6955423,3.27640288 101.452313,2.10815028 103.47263,1.26488764 C105.492947,0.421624997 107.732829,0 110.192346,0 C112.089686,0 113.82889,0.237164061 115.410007,0.711499298 C116.991124,1.18583453 118.414109,1.8621913 119.679003,2.74058989 C120.943897,3.61898847 122.033095,4.69061868 122.946629,5.95551264 C123.860164,7.22040661 124.615575,8.62582326 125.212886,10.1718048 Z M113.249157,23.611236 L119.468188,30.4627107 C119.71414,30.7086623 119.837114,30.9985295 119.837114,31.3323209 C119.837114,31.6661124 119.71414,31.9735473 119.468188,32.2546348 L119.046559,32.5181531 C118.835743,32.7641047 118.563444,32.8607271 118.229652,32.8080232 C117.895861,32.7553193 117.605994,32.6059937 117.360042,32.3600421 L113.670787,28.2491573 L113.670787,45.2197331 C113.670787,45.7116364 113.503893,46.1156936 113.170102,46.4319171 C112.83631,46.7481406 112.441037,46.90625 111.98427,46.90625 C111.492366,46.90625 111.088309,46.7481406 110.772086,46.4319171 C110.455862,46.1156936 110.297753,45.7116364 110.297753,45.2197331 L110.297753,28.2491573 L106.713904,32.2546348 C106.467953,32.5005864 106.178086,32.649912 105.844294,32.7026159 C105.510503,32.7553198 105.220636,32.6586974 104.974684,32.4127458 L104.553055,32.1492275 C104.307103,31.86814 104.184129,31.5607051 104.184129,31.2269136 C104.184129,30.8931222 104.307103,30.603255 104.553055,30.3573034 L110.666678,23.611236 L110.666678,23.5585323 L111.088308,23.1369031 C111.193715,22.9963593 111.325473,22.8997369 111.483585,22.847033 C111.641697,22.7943291 111.791022,22.7679775 111.931566,22.7679775 C112.107246,22.7679775 112.265355,22.7943291 112.405899,22.847033 C112.546443,22.8997369 112.686984,22.9963593 112.827528,23.1369031 L113.249157,23.5585323 L113.249157,23.611236 Z" />
                                                                            </g>
                                                                        </g>
                                                                    </g>
                                                                </svg>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="jfUpload-button-container">
                                                        <div
                                                            className="jfUpload-button"
                                                            aria-hidden="true"
                                                            tabIndex={0}
                                                            style={{ display: 'none' }}
                                                            data-version="v2"
                                                        >
                                                            Browse Files
                                                            <div className="jfUpload-heading forDesktop">
                                                                Drag and drop files here
                                                            </div>
                                                            <div className="jfUpload-heading forMobile">
                                                                Choose or Drag and Drop a File
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="jfUpload-files-container">
                                                    <input
                                                        onChange={onFileChange}
                                                        type="file"
                                                        id="input_91"
                                                        name="Void check"
                                                        multiple
                                                        className="form-upload-multiple"
                                                        data-imagevalidate="yes"
                                                        data-file-accept="pdf, doc, docx, xls, xlsx, csv, txt, rtf, html, zip, mp3, wma, mpg, flv, avi, jpg, jpeg, png, gif"
                                                        data-file-maxsize={0}
                                                        data-file-minsize={0}
                                                        data-file-limit
                                                        data-component="fileupload"
                                                        aria-label="Browse Files"
                                                    />
                                                    <small>or Drag & Drop Files</small>
                                                </div>
                                            </div>
                                            <div data-wrapper-react="true" />
                                        </div>
                                        <span style={{ display: 'none' }} className="cancelText">
                                            {' '}
                                            Cancel{' '}
                                        </span>
                                        <span style={{ display: 'none' }} className="ofText">
                                            {' '}
                                            of{' '}
                                        </span>
                                    </div>
                                </div>
                            </li>
                            <li className="form-line" data-type="control_fileupload" id="id_108">
                                <label
                                    className="form-label form-label-left form-label-auto"
                                    id="label_108"
                                    htmlFor="input_108"
                                >
                                    Other (Tax return)
                                </label>
                                <div id="cid_108" className="form-input" data-layout="full">
                                    <div className="jfQuestion-fields" data-wrapper-react="true">
                                        <div className="jfField isFilled">
                                            <div className="jfUpload-wrapper">
                                                <div className="jfUpload-container">
                                                    <div className="jfUpload-text-container">
                                                        <div className="jfUpload-icon forDesktop">
                                                            <span className="iconSvg dhtupload">
                                                                <svg
                                                                    viewBox="0 0 54 47"
                                                                    version="1.1"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <g
                                                                        stroke="none"
                                                                        strokewidth={1}
                                                                        fill="none"
                                                                    >
                                                                        <g transform="translate(-1506.000000, -2713.000000)">
                                                                            <g transform="translate(1421.000000, 2713.000000)">
                                                                                <path d="M125.212886,10.1718048 C127.110227,10.3826204 128.89335,10.9096517 130.562307,11.7529143 C132.231264,12.596177 133.689384,13.676591 134.93671,14.9941889 C136.184036,16.3117868 137.167828,17.8226097 137.888114,19.5267029 C138.608401,21.2307962 138.968539,23.049054 138.968539,24.9815309 C138.968539,26.8086 138.687456,28.6356416 138.125281,30.4627107 C137.563106,32.2897797 136.746207,33.9323605 135.674561,35.3905021 C134.602915,36.8486438 133.267769,38.0520318 131.669084,39.0007022 C130.070398,39.9493727 128.217005,40.4588363 126.108848,40.5291081 L122.261482,40.5291081 C121.804714,40.5291081 121.409441,40.3622149 121.07565,40.0284235 C120.741858,39.694632 120.574965,39.2993586 120.574965,38.8425913 C120.574965,38.385824 120.741858,37.9905506 121.07565,37.6567591 C121.409441,37.3229677 121.804714,37.1560744 122.261482,37.1560744 L126.108848,37.1560744 C127.549422,37.1560744 128.858216,36.7871526 130.03527,36.0492978 C131.212324,35.3114429 132.222468,34.3627867 133.06573,33.2033006 C133.908993,32.0438144 134.558998,30.743804 135.015765,29.3032303 C135.472533,27.8626567 135.700913,26.4221046 135.700913,24.9815309 C135.700913,23.4004134 135.384694,21.9159421 134.752247,20.5280723 C134.1198,19.1402026 133.258983,17.9280307 132.169768,16.8915204 C131.080554,15.85501 129.833247,15.0293277 128.427809,14.4144487 C127.022371,13.7995697 125.529116,13.4921348 123.947999,13.4921348 L122.735815,13.4394312 L122.366889,12.2799508 C121.48849,9.46907537 120.07429,7.28189569 118.124245,5.71834621 C116.1742,4.15479672 113.53026,3.37303371 110.192346,3.37303371 C108.084189,3.37303371 106.186876,3.73317173 104.500351,4.45345857 C102.813826,5.17374541 101.36449,6.17510478 100.1523,7.45756671 C98.9401098,8.74002865 98.0090213,10.2684193 97.3590063,12.0427844 C96.7089914,13.8171496 96.3839888,15.7232459 96.3839888,17.7611306 L96.4366924,17.7611306 L96.5420997,19.3422402 L95.0136938,19.6057584 C93.1514888,19.9219819 91.5703951,20.9233413 90.2703652,22.6098666 C88.9703353,24.2963919 88.3203301,26.1937043 88.3203301,28.301861 C88.3203301,30.6911051 89.1196608,32.7640947 90.7183462,34.5208919 C92.3170316,36.277689 94.2055603,37.1560744 96.3839888,37.1560744 L101.232725,37.1560744 C101.724628,37.1560744 102.128685,37.3229677 102.444909,37.6567591 C102.761132,37.9905506 102.919242,38.385824 102.919242,38.8425913 C102.919242,39.2993586 102.761132,39.694632 102.444909,40.0284235 C102.128685,40.3622149 101.724628,40.5291081 101.232725,40.5291081 L96.3839888,40.5291081 C94.8380073,40.5291081 93.3798875,40.2041055 92.0095857,39.5540906 C90.6392839,38.9040756 89.4358959,38.0169064 88.3993855,36.8925562 C87.3628752,35.768206 86.5371929,34.4681956 85.9223139,32.992486 C85.3074349,31.5167763 85,29.9532503 85,28.301861 C85,25.5963933 85.7554115,23.1544819 87.266257,20.9760534 C88.7771026,18.7976249 90.7095505,17.3395051 93.0636587,16.6016503 C93.2042025,14.2475421 93.7224499,12.0603624 94.6184164,10.0400456 C95.514383,8.0197289 96.7089871,6.26295807 98.2022647,4.76968048 C99.6955423,3.27640288 101.452313,2.10815028 103.47263,1.26488764 C105.492947,0.421624997 107.732829,0 110.192346,0 C112.089686,0 113.82889,0.237164061 115.410007,0.711499298 C116.991124,1.18583453 118.414109,1.8621913 119.679003,2.74058989 C120.943897,3.61898847 122.033095,4.69061868 122.946629,5.95551264 C123.860164,7.22040661 124.615575,8.62582326 125.212886,10.1718048 Z M113.249157,23.611236 L119.468188,30.4627107 C119.71414,30.7086623 119.837114,30.9985295 119.837114,31.3323209 C119.837114,31.6661124 119.71414,31.9735473 119.468188,32.2546348 L119.046559,32.5181531 C118.835743,32.7641047 118.563444,32.8607271 118.229652,32.8080232 C117.895861,32.7553193 117.605994,32.6059937 117.360042,32.3600421 L113.670787,28.2491573 L113.670787,45.2197331 C113.670787,45.7116364 113.503893,46.1156936 113.170102,46.4319171 C112.83631,46.7481406 112.441037,46.90625 111.98427,46.90625 C111.492366,46.90625 111.088309,46.7481406 110.772086,46.4319171 C110.455862,46.1156936 110.297753,45.7116364 110.297753,45.2197331 L110.297753,28.2491573 L106.713904,32.2546348 C106.467953,32.5005864 106.178086,32.649912 105.844294,32.7026159 C105.510503,32.7553198 105.220636,32.6586974 104.974684,32.4127458 L104.553055,32.1492275 C104.307103,31.86814 104.184129,31.5607051 104.184129,31.2269136 C104.184129,30.8931222 104.307103,30.603255 104.553055,30.3573034 L110.666678,23.611236 L110.666678,23.5585323 L111.088308,23.1369031 C111.193715,22.9963593 111.325473,22.8997369 111.483585,22.847033 C111.641697,22.7943291 111.791022,22.7679775 111.931566,22.7679775 C112.107246,22.7679775 112.265355,22.7943291 112.405899,22.847033 C112.546443,22.8997369 112.686984,22.9963593 112.827528,23.1369031 L113.249157,23.5585323 L113.249157,23.611236 Z" />
                                                                            </g>
                                                                        </g>
                                                                    </g>
                                                                </svg>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="jfUpload-button-container">
                                                        <div
                                                            className="jfUpload-button"
                                                            aria-hidden="true"
                                                            tabIndex={0}
                                                            style={{ display: 'none' }}
                                                            data-version="v2"
                                                        >
                                                            Browse Files
                                                            <div className="jfUpload-heading forDesktop">
                                                                Drag and drop files here
                                                            </div>
                                                            <div className="jfUpload-heading forMobile">
                                                                Choose or Drag and Drop a File
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="jfUpload-files-container">
                                                    <input
                                                        onChange={onFileChange}
                                                        type="file"
                                                        id="input_108"
                                                        name="Other (Tax return)"
                                                        multiple
                                                        className="form-upload-multiple"
                                                        data-imagevalidate="yes"
                                                        data-file-accept="pdf, doc, docx, xls, xlsx, csv, txt, rtf, html, zip, mp3, wma, mpg, flv, avi, jpg, jpeg, png, gif"
                                                        data-file-maxsize={0}
                                                        data-file-minsize={0}
                                                        data-file-limit
                                                        data-component="fileupload"
                                                        aria-label="Browse Files"
                                                    />
                                                    <small>or Drag & Drop Files</small>
                                                </div>
                                            </div>
                                            <div data-wrapper-react="true" />
                                        </div>
                                        <span style={{ display: 'none' }} className="cancelText">
                                            {' '}
                                            Cancel{' '}
                                        </span>
                                        <span style={{ display: 'none' }} className="ofText">
                                            {' '}
                                            of{' '}
                                        </span>
                                    </div>
                                </div>
                            </li>
                            <Button
                                style={{
                                    margin: '30px auto',
                                    background: 'grey',
                                    border: '1px solid grey',
                                    borderRadius: '4px',
                                    outline: 'none',
                                }}
                                onClick={(e) => onUploadSubmission(e)}
                            >
                                Confirm files for upload
                            </Button>
                            <li
                                className="form-line jf-required"
                                data-type="control_widget"
                                id="id_109"
                            >
                                <div
                                    id="cid_109"
                                    className="form-input termsAndConditionsV2 jf-required"
                                    data-layout="full"
                                >
                                    <div
                                        data-widget-name="Terms &amp; Conditions"
                                        style={{
                                            width: '100%',
                                            textAlign: 'Left',
                                            overflowX: 'auto',
                                        }}
                                        data-component="widget-field"
                                    >
                                        <iframe
                                            data-client-id="52948fb29322cd302b00000c"
                                            title="Terms &amp; Conditions"
                                            frameBorder={0}
                                            scrolling="no"
                                            allowTransparency="true"
                                            allow="geolocation; microphone; camera; autoplay; encrypted-media; fullscreen"
                                            data-type="iframe"
                                            className="custom-field-frame"
                                            id="customFieldFrame_109"
                                            src
                                            style={{
                                                maxWidth: 580,
                                                border: 'none',
                                                width: '100%',
                                                height: 50,
                                            }}
                                            data-width={580}
                                            data-height={50}
                                        />
                                        <div className="widget-inputs-wrapper">
                                            <input
                                                onChange={handleChange}
                                                type="hidden"
                                                id="input_109"
                                                className="form-hidden form-widget widget-required"
                                                name="Type A"
                                            />
                                            <input
                                                onChange={handleChange}
                                                type="hidden"
                                                id="widget_settings_109"
                                                className="form-hidden form-widget-settings"
                                                defaultValue="%5B%7B%22name%22%3A%22termsText%22%2C%22value%22%3A%22I%20agree%20to%20%7Bterms%20%26%20conditions%7D.%22%7D%2C%7B%22name%22%3A%22termsLink%22%2C%22value%22%3A%22https%3A%2F%2Fwww.termsfeed.com%2Flive%2F98e35a98-d939-4d3c-9131-43cf62fcedbd%22%7D%2C%7B%22name%22%3A%22theme%22%2C%22value%22%3A%22default%22%7D%2C%7B%22name%22%3A%22acceptedText%22%2C%22value%22%3A%22Accepted%22%7D%5D"
                                                data-version={2}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="form-line" data-type="control_text" id="id_111">
                                <div id="cid_111" className="form-input-wide" data-layout="full">
                                    <div
                                        style={{ textAlign: 'justify' }}
                                        id="text_111"
                                        className="form-html"
                                        data-component="text"
                                    >
                                        By signing below, each of the above listed business and
                                        business owner/officer (individually and collectively,
                                        “you”) authorize Loan-Acc LLC (“Loan-Acc Network”) and each
                                        of its representatives, successors, assigns and designees
                                        (“Recipients”) that may be involved with or acquire
                                        commercial loans having daily repayment features or
                                        purchases of future receivables including Merchant Cash
                                        Advance transactions, including without limitation the
                                        application therefor (collectively, “Transactions”) to
                                        obtain consumer or personal, business and investigative
                                        reports and other information about you, including credit
                                        card processor statements and bank statements, from one or
                                        more consumer reporting agencies, such as TransUnion,
                                        Experian and Equifax, and from other credit bureaus, banks,
                                        creditors and other third parties. You also authorize
                                        Loan-Acc Network to transmit this application form, along
                                        with any of the foregoing information obtained in connection
                                        with this application, to any or all of the Recipients for
                                        the foregoing purposes. You also consent to the release, by
                                        any creditor or financial institution, of any information
                                        relating to any of you, to Loan-Acc Network and to each of
                                        the Recipients, on its own behalf. You also authorize
                                        Loan-Acc Network and each of its Recipients to contact you
                                        via text message, automated call or email message at the
                                        contact information listed above.
                                    </div>
                                </div>
                            </li>
                            <li
                                className="form-line fixed-width jf-required"
                                data-type="control_signature"
                                id="id_79"
                            >
                                <label
                                    className="form-label form-label-top"
                                    id="label_79"
                                    htmlFor="input_79"
                                >
                                    Signature
                                </label>
                                <div
                                    id="cid_79"
                                    className="form-input-wide jf-required"
                                    data-layout="half"
                                >
                                    <div data-wrapper-react="true">
                                        <div className={styles.sigContainer}>
                                            <SignaturePad
                                                canvasProps={{
                                                    width: 500,
                                                    height: 200,
                                                    className: 'sigCanvas',
                                                }}
                                                ref={(ref) => {
                                                    sigPad = ref;
                                                }}
                                            />
                                        </div>
                                        <div>
                                            <button
                                                type="button"
                                                className={styles.buttons}
                                                onClick={() => clear()}
                                            >
                                                Clear
                                            </button>
                                            <button
                                                type="button"
                                                className={styles.buttons}
                                                onClick={() => trim()}
                                            >
                                                Confirm
                                            </button>
                                        </div>
                                        {sig.trimmedDataURL ? (
                                            <img
                                                className={styles.sigImage}
                                                src={sig.trimmedDataURL}
                                            />
                                        ) : null}

                                        <div data-wrapper-react="true" />
                                    </div>
                                </div>
                            </li>
                            <li className="form-line" data-type="control_divider" id="id_67">
                                <div id="cid_67" className="form-input-wide" data-layout="full">
                                    <div
                                        data-component="divider"
                                        style={{
                                            borderBottom: '1px solid #e6e6e6',
                                            height: 1,
                                            marginLeft: 0,
                                            marginRight: 0,
                                            marginTop: 5,
                                            marginBottom: 5,
                                        }}
                                    />
                                </div>
                            </li>
                            <li className="form-line" data-type="control_button" id="id_106">
                                <div id="cid_106" className="form-input-wide" data-layout="full">
                                    <div
                                        data-align="center"
                                        className="form-buttons-wrapper form-buttons-center jsTest-button-wrapperField"
                                    >
                                        <button
                                            id="input_106"
                                            type="submit"
                                            className="form-submit-button submit-button jf-form-buttons jsTest-submitField"
                                            data-component="button"
                                            data-content
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </li>
                            <li style={{ display: 'none' }}>
                                Should be Empty:
                                <input onChange={handleChange} type="text" name="website" />
                            </li>
                        </ul>
                    </div>
                    <input
                        onChange={handleChange}
                        type="hidden"
                        className="simple_spc"
                        id="simple_spc"
                        name="Simple SPC"
                        defaultValue="210189014380145-210189014380145"
                    />
                    <input
                        onChange={handleChange}
                        type="hidden"
                        id="input_107"
                        name="Ref number"
                        className="form-textbox form-hidden"
                        defaultValue="SBA8562"
                        data-component="autoincrement"
                    />
                </form>
            </div>
        </Container>
    );
};

export default BusinessLoan;
