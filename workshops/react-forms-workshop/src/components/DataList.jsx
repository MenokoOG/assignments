import React from 'react';

function DataList({ data }) {
    return (
        <div className='data-main'>
            <h2>Submissions</h2>
            <div className='data-list'>
                {data.map((submission, index) => (
                    <div key={index}>
                        <p>Email: {submission.email}</p>
                        <p>First Name: {submission.fName}</p>
                        <p>Last Name: {submission.lName}</p>
                        <p>Newsletter: {submission.newsletter ? 'Yes' : 'No'}</p>
                        <p>Preferred Contact Method: {submission.contactMethod}</p>
                        <p>Country: {submission.country}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DataList;
