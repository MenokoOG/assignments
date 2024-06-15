/* eslint-disable react/prop-types */
import React from 'react';
import axios from 'axios';
import EditBounty from './EditBounty';

// eslint-disable-next-line react/prop-types
const ReadBounties = ({ bounties, onBountiesChange }) => {
  const [editBountyId, setEditBountyId] = React.useState(null);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/bounty/${id}`);
      onBountiesChange(); // Refresh bounties list after deleting a bounty
    } catch (error) {
      console.error('Error deleting bounty:', error);
    }
  };

  const handleEdit = (id) => {
    setEditBountyId(id);
  };

  const handleUpdate = () => {
    onBountiesChange(); // Refresh bounties list after updating a bounty
    setEditBountyId(null); // Reset edit state
  };

  return (
    <div className='card'>
      <h2>All Bounties</h2>
      <ul>
        {bounties.map(bounty => (
          <li key={bounty._id}>
            <strong>{bounty.firstName} {bounty.lastName} </strong> - ${bounty.bountyAmount} ({bounty.type})
            <button className="btn btn-danger" onClick={() => handleDelete(bounty._id)}>Delete</button>
            <button className="btn btn-secondary" onClick={() => handleEdit(bounty._id)}>Edit</button>
            {editBountyId === bounty._id && <EditBounty bounty={bounty} onUpdate={handleUpdate} />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReadBounties;
