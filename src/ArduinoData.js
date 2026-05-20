import React, { useState, useEffect } from 'react';

function ArduinoData() {
  const [temperature, setTemperature] = useState(null);
  const [pHValue, setPHValue] = useState(null);
  const [statusMessage, setStatusMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://172.20.10.3/data'); 
        const data = await response.json();

        // Assuming the JSON structure is: { "temperature": value, "pH": value }
        setTemperature(data.temperature);
        setPHValue(data.pH);

        // Create a status message based on temperature and pH values
        if (data.temperature >= 25 && data.temperature <= 32 && data.pH >= 6.5 && data.pH <= 9) {
          setStatusMessage(`It is a good condition for aquatic environment, Temperature is ${data.temperature}°C and pH is ${data.pH}`);
        }
        else if(data.temperature > 32 && data.pH > 9 ){
          setStatusMessage(`The Temperature and pH of water is HIGH!!!!, Temperature is ${data.temperature}°C and pH is ${data.pH}`);
        }
        else if(data.temperature > 32 && data.pH < 6.5 ){
          setStatusMessage(`The Temperature of water is HIGH and pH is LOW!!!!, Temperature is ${data.temperature}°C and pH is ${data.pH}`);
        }else if(data.temperature > 32 && data.pH >= 6.5 && data.pH <= 9 ){
          setStatusMessage(`The Temperature of water is HIGH!!!!  and pH is good, Temperature is ${data.temperature}°C and pH is ${data.pH}`);
        }
        else if(data.temperature >= 25 && data.temperature <= 32 && data.pH > 9 ){
          setStatusMessage(`The Temperature of water is good and pH is HIGH!!!!, Temperature is ${data.temperature}°C and pH is ${data.pH}`);
        }
        else if(data.temperature < 25 && data.pH < 6.5 ){
          setStatusMessage(`The Temperature and pH of water is LOW!!!!, Temperature is ${data.temperature}°C and pH is ${data.pH}`);
        }
        else if(data.temperature < 25 && data.pH > 9 ){
          setStatusMessage(`The Temperature of water is LOW and pH is HIGH!!!!, Temperature is ${data.temperature}°C and pH is ${data.pH}`);
        }
        else if(data.temperature < 25 && data.pH >= 6.5 && data.pH <= 9 ){
          setStatusMessage(`The Temperature is LOW!!!! and pH of water is GOOD, Temperature is ${data.temperature}°C and pH is ${data.pH}`);
        }
        else if(data.temperature >= 25 && data.temperature <=32 && data.pH < 6.5 ){
          setStatusMessage(`The Temperature of water is GOOD and pH is LOW!!!!, Temperature is ${data.temperature}°C and pH is ${data.pH}`);
        }
        
        
      } catch (error) {
        console.error("Error fetching data:", error);
        setStatusMessage("Failed to fetch data from NodeMCU.");
      }
    };

    fetchData();

    // Optional: Set interval to fetch data periodically (e.g., every 3 seconds)
    const interval = setInterval(fetchData, 3000); // Fetch data every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>NodeMCU Sensors Data</h1>
      {statusMessage && <p>{statusMessage}</p>}
      {temperature !== null && pHValue !== null && (
        <div>
          <p>Temperature: {temperature}°C</p>
          <p>pH Value: {pHValue}</p>
        </div>
      )}
    </div>
  );
}

export default ArduinoData;
