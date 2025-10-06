import { useState } from 'react';
import './AddFactForm.css';

export default function AddFactForm({ onBack, onAddFact }) {
  const [formData, setFormData] = useState({
    agencyName: '',
    description: ''
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
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

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.agencyName.trim()) {
      newErrors.agencyName = 'Agency name is required';
    }
    
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    }
    
    if (formData.agencyName.trim().length < 2) {
      newErrors.agencyName = 'Agency name must be at least 2 characters';
    }
    
    if (formData.description.trim().length < 10) {
      newErrors.description = 'Description must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Create a new fact entry in the same format as the CSV data
      const newFact = [
        '', // ID (empty for new entries)
        '', // Some other field (empty for new entries)
        formData.agencyName.trim(),
        formData.description.trim()
      ];
      
      onAddFact(newFact);
      
      // Reset form
      setFormData({
        agencyName: '',
        description: ''
      });
      setErrors({});
    }
  };

  return (
    <div className="add-fact-container">
      <div className="add-fact-header">
        <h1 className="add-fact-title">Add New Fact</h1>
        <button 
          onClick={onBack}
          className="back-button"
          title="Back to Study Guide"
        >
          <i className="fa fa-arrow-left"></i>
        </button>
      </div>

      <form onSubmit={handleSubmit} className="add-fact-form">
        <div className="form-group">
          <label htmlFor="agencyName" className="form-label">
            Agency Name *
          </label>
          <input
            type="text"
            id="agencyName"
            name="agencyName"
            value={formData.agencyName}
            onChange={handleInputChange}
            className={`form-input ${errors.agencyName ? 'error' : ''}`}
            placeholder="Enter agency name"
          />
          {errors.agencyName && (
            <span className="error-message">{errors.agencyName}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="description" className="form-label">
            Description *
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className={`form-textarea ${errors.description ? 'error' : ''}`}
            placeholder="Enter detailed description of the fact"
            rows="4"
          />
          {errors.description && (
            <span className="error-message">{errors.description}</span>
          )}
        </div>

        <div className="form-actions">
          <button type="button" onClick={onBack} className="cancel-button">
            Cancel
          </button>
          <button type="submit" className="submit-button">
            Add Fact
          </button>
        </div>
      </form>
    </div>
  );
}
