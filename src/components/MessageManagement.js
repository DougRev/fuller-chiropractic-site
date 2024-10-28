import React, { useEffect, useState } from 'react';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [filteredAppointments, setFilteredAppointments] = useState([]);
  const [filterDate, setFilterDate] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch messages from Firestore
    const fetchAppointments = async () => {
      try {
        const appointmentsCollection = collection(db, 'messages');
        const snapshot = await getDocs(appointmentsCollection);
        const appointmentsData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setAppointments(appointmentsData);
        setFilteredAppointments(appointmentsData);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchAppointments();
  }, []);

  const handleDateFilterChange = (date) => {
    setFilterDate(date);
    if (date) {
      setFilteredAppointments(
        appointments.filter(
          (appointment) =>
            appointment.date &&
            appointment.date.toDate().toDateString() === date.toDateString()
        )
      );
    } else {
      setFilteredAppointments(appointments);
    }
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setFilteredAppointments(
      appointments.filter(
        (appointment) =>
          appointment.name.toLowerCase().includes(value.toLowerCase()) ||
          appointment.email.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  // Function to delete a message
  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, 'messages', id)); // Delete the message from Firestore
      setAppointments(appointments.filter((appointment) => appointment.id !== id)); // Update state to remove the deleted message
      setFilteredAppointments(filteredAppointments.filter((appointment) => appointment.id !== id)); // Update filtered list
      console.log('Message deleted successfully.');
    } catch (error) {
      console.error('Error deleting message:', error);
    }
  };

  return (
    <div>
      {/* Messages Management */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-bold mb-4">Filter Messages</h3>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium mb-1">Filter by Date:</label>
            <DatePicker
              selected={filterDate}
              onChange={handleDateFilterChange}
              className="border p-2 rounded w-full md:w-auto"
              placeholderText="Select a date"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">Search by Name or Email:</label>
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              className="border p-2 rounded w-full"
              placeholder="Search..."
            />
          </div>
        </div>
      </div>
      {filteredAppointments.length === 0 ? (
        <p>No Messages found.</p>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">Messages</h3>
          <ul className="divide-y divide-gray-200">
            {filteredAppointments.map((appointment) => (
              <li key={appointment.id} className="py-4 flex justify-between items-center">
                <div>
                  <strong>Name:</strong> {appointment.name} <br />
                  <strong>Email:</strong> {appointment.email} <br />
                  <strong>Date:</strong> {appointment.date.toDate().toLocaleString()} <br />
                  <strong>Message:</strong> {appointment.message || 'N/A'}
                </div>
                <button
                  onClick={() => handleDelete(appointment.id)} // Call handleDelete with message id
                  className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Appointments;
