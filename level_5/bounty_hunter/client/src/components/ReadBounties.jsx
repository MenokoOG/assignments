import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EditBounty from './EditBounty';

const ReadBounties = () => {
  const [bounties, setBounties] = useState([]);
  const [editBountyId, setEditBountyId] = useState(null);

  useEffect(() => {
    const fetchBounties = async () => {
      try {
        const res = await axios.get('/api/bounty');
        setBounties(res.data);
      } catch (error) {
        console.error('Error fetching bounties:', error);
      }
    };

    fetchBounties();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/bounty/${id}`);
      setBounties(bounties.filter(bounty => bounty.id !== id));
    } catch (error) {
      console.error('Error deleting bounty:', error);
    }
  };

  const handleEdit = (id) => {
    setEditBountyId(id);
  };

  const handleUpdate = (updatedBounty) => {
    setBounties(bounties.map(bounty =>
      bounty.id === updatedBounty.id ? updatedBounty : bounty
    ));
    setEditBountyId(null);
  };

  return (
    <div className='card'>
      <h2>All Bounties</h2>
      <ul>
        {bounties.map(bounty => (
          <li key={bounty._id}>
            <strong>{bounty.firstName} {bounty.lastName}</strong> - ${bounty.bountyAmount} ({bounty.type})
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
