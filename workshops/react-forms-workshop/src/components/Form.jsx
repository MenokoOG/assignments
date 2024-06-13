import React, { useState } from 'react';

function Form({addData}) {
    const [formData, setFormData] = useState({
        email: "",
        fName: "",
        lName: "",
        newsletter: false,
        contactMethod: "",
        country: ""
    });

    function handleChange(e) {
        const { name, value, type, checked } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        addData(formData)
        setFormData({
            email: "",
            fName: "",
            lName: "",
            newsletter: false,
            contactMethod: "",
            country: ""  
        })
        console.log(formData);
    }

    return (
        <form className='form' onSubmit={handleSubmit}>
            <label>
                Email:
                <input
                    placeholder='Email'
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                />
            </label>

            <label>
                First Name:
                <input
                    placeholder='First Name'
                    type='text'
                    name='fName'
                    value={formData.fName}
                    onChange={handleChange}
                />
            </label>

            <label>
                Last Name:
                <input
                    placeholder='Last Name'
                    type='text'
                    name='lName'
                    value={formData.lName}
                    onChange={handleChange}
                />
            </label>

            <label className='inline'>
                Sign up for newsletter?
                <input
                    type='checkbox'
                    name='newsletter'
                    checked={formData.newsletter}
                    onChange={handleChange}
                />
            </label>

            <fieldset>
                <legend>Preferred Contact Method</legend>
                <label>
                    <input
                        type='radio'
                        name='contactMethod'
                        value='email'
                        checked={formData.contactMethod === 'email'}
                        onChange={handleChange}
                    />
                    Email
                </label>
                <label>
                    <input
                        type='radio'
                        name='contactMethod'
                        value='phone'
                        checked={formData.contactMethod === 'phone'}
                        onChange={handleChange}
                    />
                    Phone
                </label>
                <label>
                    <input
                        type='radio'
                        name='contactMethod'
                        value='mail'
                        checked={formData.contactMethod === 'mail'}
                        onChange={handleChange}
                    />
                    Mail
                </label>
            </fieldset>

            <label>
                Country:
                <select
                    name='country'
                    value={formData.country}
                    onChange={handleChange}
                >
                    <option value=''>Select a country</option>
                    <option value='usa'>United States</option>
                    <option value='canada'>Canada</option>
                    <option value='uk'>United Kingdom</option>
                </select>
            </label>

            <button type='submit'>Submit</button>
        </form>
    );
}

export default Form;
