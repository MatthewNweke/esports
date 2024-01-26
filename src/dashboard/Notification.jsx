import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PricingPlan from '../components/PricingPlan';

const Notification = () => {
  const [notifications, setNotifications] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchNotifications = async () => {
      setIsLoading(true);

      try {
        const response = await axios.get(
          'https://vaultcoin-production.up.railway.app/notification/'
        );

        // Assuming the response contains an array of notifications
        setNotifications(response.data);
      } catch (error) {
        console.error('Error fetching notifications:', error.message);
        setError('Error fetching notifications');
      } finally {
        setIsLoading(false);
      }
    };

    fetchNotifications();
  }, []);

  return (
    <div>
        <div className="min-h-[500px] shadow-xl rounded px-5 py-10">
          <h1 className="py-10">All Notifications</h1>

          {isLoading && <p>Loading notifications...</p>}

          {error && <p style={{ color: 'red' }}>{error}</p>}

          {notifications.length > 0 && (
            <div>
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className="border border-[#00000020] hover:text-green-500 border-x-0 p-5 cursor-pointer"
                >
                  <p>{notification.type}</p>
                  <p>{notification.message}</p>
                  <p className="text-[0.7rem]">{notification.timestamp}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        <PricingPlan />
    
    </div>
  );
};

export default Notification;
