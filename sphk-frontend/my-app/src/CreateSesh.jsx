import React, { useState } from 'react';
import './CreateSesh.css';
import PageHeader from './PageHeader';

const CreateSesh = () => {
  const [formData, setFormData] = useState({
    eventTitle: '',
    sport: '',
    time: '',
    location: '',
    currentPlayers: '',
    playersLimit: '',
  });

  const [errors, setErrors] = useState({
    eventTitle: '',
    sport: '',
    time: '',
    location: '',
    currentPlayers: '',
    playersLimit: '',
  });

  const [success, setSuccess] = useState('');

  const sportsOptions = ['Basketball', 'Soccer', 'Ping Pong', 'Volleyball', 'Tennis'];
  const locationsOptions = ['BSB', 'REC', 'SES'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setErrors({ ...errors, [name]: '' });

    if (name === 'currentPlayers' && value <= 0) {
      setErrors({ ...errors, [name]: 'Number of players must be more than zero.' });
    }

    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSportChange = (value) => {
    setFormData((prevData) => ({ ...prevData, sport: value }));
    setErrors({ ...errors, sport: '' });
  };

  const handleLocationChange = (value) => {
    setFormData((prevData) => ({ ...prevData, location: value }));
    setErrors({ ...errors, location: '' });
  };

  const handleInputClick = (name) => {
    setErrors({ ...errors, [name]: '' });
    setSuccess('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let hasErrors = false;

    if (formData.currentPlayers <= 0) {
      setErrors({ ...errors, currentPlayers: 'Number of players must be more than zero.' });
      hasErrors = true;
    } else {
      setErrors({ ...errors, currentPlayers: '' });
    }

    if (formData.playersLimit <= 0) {
      setErrors({ ...errors, playersLimit: 'Number of players limit must be more than zero.' });
      hasErrors = true;
    } else {
      setErrors({ ...errors, playersLimit: '' });
    }

    if (!formData.sport) {
      setErrors({ ...errors, sport: 'Please select a sport.' });
      hasErrors = true;
    }

    if (!formData.location) {
      setErrors({ ...errors, location: 'Please select a location.' });
      hasErrors = true;
    }

    if (hasErrors) {
      setSuccess('');
      return;
    }

    const game = {
      eventTitle: formData.eventTitle,
      sport: formData.sport,
      time: formData.time,
      location: formData.location,
      currentPlayers: parseInt(formData.currentPlayers),
      playersLimit: parseInt(formData.playersLimit),
    };

    setSuccess('Session Created!');
    
    // Clear the form after success
    setFormData({
      eventTitle: '',
      sport: '',
      time: '',
      location: '',
      currentPlayers: '',
      playersLimit: '',
    });
  };

  return (
    <div className="sesh-container">
        <PageHeader />
      <div className="form-container">
        <h1>Create Session</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="label">Event Title:</label>
            <input
              type="text"
              name="eventTitle"
              value={formData.eventTitle}
              onChange={handleInputChange}
              onClick={() => handleInputClick('eventTitle')}
              className="input"
            />
          </div>

          <div className="form-group">
            <label className="label">Sport:</label>
            <select
              name="sport"
              value={formData.sport}
              onChange={(e) => handleSportChange(e.target.value)}
              onClick={() => handleInputClick('sport')}
              className="input"
            >
              <option value="">Select Sport</option>
              {sportsOptions.map((sport) => (
                <option key={sport} value={sport}>
                  {sport}
                </option>
              ))}
            </select>
            <span className="error">{errors.sport}</span>
          </div>

          <div className="form-group">
            <label className="label">Time:</label>
            <input
              type="text"
              name="time"
              value={formData.time}
              onChange={handleInputChange}
              onClick={() => handleInputClick('time')}
              className="input"
            />
          </div>

          <div className="form-group">
            <label className="label">Location:</label>
            <select
              name="location"
              value={formData.location}
              onChange={(e) => handleLocationChange(e.target.value)}
              onClick={() => handleInputClick('location')}
              className="input"
            >
              <option value="">Select Location</option>
              {locationsOptions.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
            <span className="error">{errors.location}</span>
          </div>

          <div className="form-group">
            <label className="label">Current Players:</label>
            <input
              type="number"
              name="currentPlayers"
              value={formData.currentPlayers}
              onChange={handleInputChange}
              onClick={() => handleInputClick('currentPlayers')}
              className="input"
            />
            <span className="error">{errors.currentPlayers}</span>
          </div>

          <div className="form-group">
            <label className="label">Players Limit:</label>
            <input
              type="number"
              name="playersLimit"
              value={formData.playersLimit}
              onChange={handleInputChange}
              onClick={() => handleInputClick('playersLimit')}
              className="input"
            />
            <span className="error">{errors.playersLimit}</span>
          </div>

          <button type="submit" className="button">
            Create Sesh
          </button>

          {success && <p className="success">{success}</p>}
        </form>
      </div>
    </div>
  );
};

export default CreateSesh;
