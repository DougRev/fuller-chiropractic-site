import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from 'firebase/firestore';

const AlertMessages = () => {
  const [alerts, setAlerts] = useState([]);
  const [isLoadingAlerts, setIsLoadingAlerts] = useState(true);

  // State for creating a new alert
  const [newAlertMessage, setNewAlertMessage] = useState('');
  const [newAlertIsActive, setNewAlertIsActive] = useState(false);

  useEffect(() => {
    const fetchAlerts = async () => {
      try {
        const alertsCollection = collection(db, 'alerts');
        const alertsSnapshot = await getDocs(alertsCollection);
        const alertsData = alertsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setAlerts(alertsData);
      } catch (error) {
        console.error('Error fetching alerts:', error);
      } finally {
        setIsLoadingAlerts(false);
      }
    };

    fetchAlerts();
  }, []);

  const handleCreateAlert = async () => {
    try {
      const alertsCollection = collection(db, 'alerts');
      const newAlert = {
        message: newAlertMessage,
        isActive: newAlertIsActive,
        createdAt: new Date(),
      };
      const docRef = await addDoc(alertsCollection, newAlert);
      setAlerts([...alerts, { id: docRef.id, ...newAlert }]);
      // Reset the new alert form
      setNewAlertMessage('');
      setNewAlertIsActive(false);
      alert('Alert message created successfully.');
    } catch (error) {
      console.error('Error creating alert message:', error);
      alert('Failed to create alert message.');
    }
  };

  const handleUpdateAlert = async (alertId, updatedAlert) => {
    try {
      const alertDocRef = doc(db, 'alerts', alertId);
      await updateDoc(alertDocRef, updatedAlert);
      setAlerts(
        alerts.map((alert) => (alert.id === alertId ? { ...alert, ...updatedAlert } : alert))
      );
      alert('Alert message updated successfully.');
    } catch (error) {
      console.error('Error updating alert message:', error);
      alert('Failed to update alert message.');
    }
  };

  const handleDeleteAlert = async (alertId) => {
    try {
      const alertDocRef = doc(db, 'alerts', alertId);
      await deleteDoc(alertDocRef);
      setAlerts(alerts.filter((alert) => alert.id !== alertId));
      alert('Alert message deleted successfully.');
    } catch (error) {
      console.error('Error deleting alert message:', error);
      alert('Failed to delete alert message.');
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h3 className="text-xl font-bold mb-4">Manage Alert Messages</h3>
      {isLoadingAlerts ? (
        <p>Loading alert messages...</p>
      ) : (
        <div>
          {/* Form to create a new alert */}
          <div className="mb-6">
            <h4 className="text-lg font-bold mb-2">Create New Alert</h4>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Alert Message:</label>
              <textarea
                value={newAlertMessage}
                onChange={(e) => setNewAlertMessage(e.target.value)}
                className="border p-2 rounded w-full"
                rows={4}
                placeholder="Enter alert message..."
              ></textarea>
            </div>
            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                id="newIsActive"
                checked={newAlertIsActive}
                onChange={(e) => setNewAlertIsActive(e.target.checked)}
                className="mr-2"
              />
              <label htmlFor="newIsActive" className="text-sm font-medium">
                Activate Alert Message
              </label>
            </div>
            <button
              onClick={handleCreateAlert}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Create Alert Message
            </button>
          </div>

          {/* List of existing alerts */}
          <div>
            <h4 className="text-lg font-bold mb-2">Existing Alerts</h4>
            {alerts.length === 0 ? (
              <p>No alerts found.</p>
            ) : (
              <ul className="divide-y divide-gray-200">
                {alerts.map((alert) => (
                  <li key={alert.id} className="py-4">
                    <div className="mb-2">
                      <label className="block text-sm font-medium mb-1">Alert Message:</label>
                      <textarea
                        value={alert.message}
                        onChange={(e) =>
                          setAlerts(
                            alerts.map((a) =>
                              a.id === alert.id ? { ...a, message: e.target.value } : a
                            )
                          )
                        }
                        className="border p-2 rounded w-full"
                        rows={2}
                      ></textarea>
                    </div>
                    <div className="mb-2 flex items-center">
                      <input
                        type="checkbox"
                        id={`isActive-${alert.id}`}
                        checked={alert.isActive}
                        onChange={(e) =>
                          setAlerts(
                            alerts.map((a) =>
                              a.id === alert.id ? { ...a, isActive: e.target.checked } : a
                            )
                          )
                        }
                        className="mr-2"
                      />
                      <label htmlFor={`isActive-${alert.id}`} className="text-sm font-medium">
                        Activate Alert Message
                      </label>
                    </div>
                    <div className="flex gap-4">
                      <button
                        onClick={() => handleUpdateAlert(alert.id, alert)}
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                      >
                        Update Alert Message
                      </button>
                      <button
                        onClick={() => handleDeleteAlert(alert.id)}
                        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                      >
                        Delete Alert Message
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AlertMessages;
