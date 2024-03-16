import React, { useContext } from 'react';
import IssueList from './IssueList';
import { IssueContext } from '../context/IssueProvider';

function Public() {
    const { issueState } = useContext(IssueContext);
    const { issues } = issueState;

    return (
        <div className="public">
            <h1>Public Issues</h1>
            <IssueList issues={issues} />
        </div>
    );
}

export default Public;
