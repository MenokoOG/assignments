import React from 'react';

function Form() {

    return (
        <form className='form'>
            <label>
                Email:
                <input
                    placeholder='Email'
                    type='email'
                    name='email'
                    
                />
            </label>

            <label>
                First Name:
                <input
                    placeholder='First Name'
                    type='text'
                    name='fName'
                />
            </label>

            <label>
                Last Name:
                <input
                    placeholder='Last Name'
                    type='text'
                    name='lName'
                />
            </label>

            <label className='inline'>
                Sign up for newsletter?
                <input
                    type='checkbox'
                    name='newsletter'
                />
            </label>

            <fieldset>
                <legend>Preferred Contact Method</legend>
                <label>
                    <input
                        type='radio'
                        name='contactMethod'
                        value='email'
                    />
                    Email
                </label>
                <label>
                    <input
                        type='radio'
                        name='contactMethod'
                        value='phone'
                    />
                    Phone
                </label>
                <label>
                    <input
                        type='radio'
                        name='contactMethod'
                        value='mail'
                    />
                    Mail
                </label>
            </fieldset>

            <label>
                Country:
                <select
                    name='country'
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