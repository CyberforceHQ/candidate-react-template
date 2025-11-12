import React, { useState } from 'react';
import './App.css';

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    username: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateStep = () => {
    const newErrors = {};

    if (step === 1) {
      if (!formData.fullName.trim()) {
        newErrors.fullName = 'Full Name is required.';
      }
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required.';
      } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
          newErrors.email = 'Email is not valid.';
        }
      }
      if (!formData.phone.trim()) {
        newErrors.phone = 'Phone Number is required.';
      } else {
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(formData.phone)) {
          newErrors.phone = 'Phone Number is required.';
        }
      }
    } else if (step === 2) {
      if (!formData.username.trim() || formData.username.length < 4) {
        newErrors.username = 'Username must be at least 4 characters long.';
      }
      if (!formData.password || formData.password.length < 8) {
        newErrors.password = 'Password must be at least 8 characters long.';
      }
      if (!formData.confirmPassword || formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match.';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep()) {
      setStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    setStep(prev => prev - 1);
  };

  const handleSubmit = () => {
    setStep(4);
  };

  const renderStep1 = () => {
    return (
      <div className="form-container">
        <h1 className="form-heading">Step 1: Personal Details</h1>
        
        <div className="form-group">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            className={`form-input ${errors.fullName ? 'input-error' : ''}`}
          />
          {errors.fullName && <span className="error-text">{errors.fullName}</span>}
        </div>

        <div className="form-group">
          <label className="form-label">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className={`form-input ${errors.email ? 'input-error' : ''}`}
          />
          {errors.email && <span className="error-text">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label className="form-label">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            className={`form-input ${errors.phone ? 'input-error' : ''}`}
            maxLength="10"
          />
          {errors.phone && <span className="error-text">{errors.phone}</span>}
        </div>

        <div className="button-wrapper">
          <button type="button" onClick={nextStep} className="btn-primary">
            Next
          </button>
        </div>
      </div>
    );
  };

  const renderStep2 = () => {
    return (
      <div className="form-container">
        <h1 className="form-heading">Step 2: Account Setup</h1>
        
        <div className="form-group">
          <label className="form-label">Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Choose a username"
            className={`form-input ${errors.username ? 'input-error' : ''}`}
          />
          {errors.username && <span className="error-text">{errors.username}</span>}
        </div>

        <div className="form-group">
          <label className="form-label">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Choose a secure password"
            className={`form-input ${errors.password ? 'input-error' : ''}`}
          />
          {errors.password && <span className="error-text">{errors.password}</span>}
        </div>

        <div className="form-group">
          <label className="form-label">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm your password"
            className={`form-input ${errors.confirmPassword ? 'input-error' : ''}`}
          />
          {errors.confirmPassword && <span className="error-text">{errors.confirmPassword}</span>}
        </div>

        <div className="button-wrapper">
          <button type="button" onClick={prevStep} className="btn-secondary">
            Back
          </button>
          <button type="button" onClick={nextStep} className="btn-primary">
            Next
          </button>
        </div>
      </div>
    );
  };

  const renderStep3 = () => {
    return (
      <div className="form-container">
        <h1 className="form-heading">Step 3: Review Your Details</h1>
        
        <div className="review-section">
          <div className="review-item">
            <span className="review-label">Full Name:</span>
            <span className="review-value">{formData.fullName}</span>
          </div>
          <div className="review-item">
            <span className="review-label">Email:</span>
            <span className="review-value">{formData.email}</span>
          </div>
          <div className="review-item">
            <span className="review-label">Phone:</span>
            <span className="review-value">{formData.phone}</span>
          </div>
          <div className="review-item">
            <span className="review-label">Username:</span>
            <span className="review-value">{formData.username}</span>
          </div>
        </div>

        <div className="button-wrapper">
          <button type="button" onClick={prevStep} className="btn-secondary">
            Back
          </button>
          <button type="button" onClick={handleSubmit} className="btn-primary">
            Submit
          </button>
        </div>
      </div>
    );
  };

  const renderStep4 = () => {
    return (
      <div className="form-container">
        <h1 className="form-heading">Registration Successful!</h1>
        <p className="success-text">Thank you for registering!</p>
      </div>
    );
  };

  return (
    <div className="App">
      {step === 1 && renderStep1()}
      {step === 2 && renderStep2()}
      {step === 3 && renderStep3()}
      {step === 4 && renderStep4()}
    </div>
  );
}

export default App;

