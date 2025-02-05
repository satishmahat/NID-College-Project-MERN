import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EnrollNavbar from '../../components/EnrollNavbar';

const AdminLayout = () => {
  const [forms, setForms] = useState([]);

  // Fetch Forms Data
  useEffect(() => {
    axios.get('http://localhost:5000/forms')
      .then(response => {
        setForms(response.data);
      })
      .catch(error => {
        console.error("Error fetching forms:", error);
      });
  }, []);

  // Handle Status Change
  const handleStatusChange = async (id, newStatus) => {
    try {
      await axios.put(`http://localhost:5000/forms/edit/${id}`, { status: newStatus });
      setForms(forms.map(form => form._id === id ? { ...form, status: newStatus } : form));
      alert("Status Updated Successfully");
    } catch (error) {
      console.error("Error updating status:", error);
      alert("Failed to update status");
    }
  };

  return (
    <div>
      <EnrollNavbar />

      <div className='px-6 sm:px-16 py-8'>

      <h2 className="text-3xl mb-4">Forms List</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-blue-800 text-white">
            <th className="border p-2">ID</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {forms.map((form) => (
            <tr key={form._id} className="text-center">
              <td className="border p-2">{form._id}</td>
              <td className="border p-2">{`${form.app_fname} ${form.app_lname}`}</td>
              <td className="border p-2">{form.status}</td>
              <td className="border p-2">
                <select 
                  value={form.status} 
                  onChange={(e) => handleStatusChange(form._id, e.target.value)}
                  className="p-1 border"
                >
                  <option value="Pre-enrollment Done">Pre-enrollment Done</option>
                  <option value="Biometric Done">Biometric Done</option>
                  <option value="Printed-visit the DAO">Printed-visit the DAO</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      </div>

    </div>
  );
};

export default AdminLayout;
