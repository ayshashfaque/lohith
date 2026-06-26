import React, { useState } from 'react';
import './FreeEstimateSection.css';

export default function FreeEstimateSection() {
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', location: '', plotSize: '', requirement: '', notes: ''
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim() || !/^[0-9]{10}$/.test(formData.phone)) newErrors.phone = 'Valid 10-digit phone required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email required';
    if (!formData.location.trim()) newErrors.location = 'Location is required';
    if (!formData.requirement.trim()) newErrors.requirement = 'Please select a requirement';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setStatus('loading');
      try {
        await new Promise(res => setTimeout(res, 1500)); // Mock API
        setStatus('success');
        setFormData({ name: '', phone: '', email: '', location: '', plotSize: '', requirement: '', notes: '' });
      } catch (error) {
        setStatus('error');
      }
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null });
    }
  };

  return (
    <section className="section-padding estimate-section">
      <div className="container">
        <div className="estimate-header">
          <h2 className="section-title">REQUEST FREE ESTIMATE</h2>
          <p className="section-subtitle">Begin your journey to a timeless home. Our senior architects will review your details.</p>
        </div>

        {status === 'success' && (
          <div className="alert-box success" role="alert" aria-live="polite">
            <h3>Request Received Successfully</h3>
            <p>Our team will contact you within 24 hours to schedule your consultation.</p>
            <button className="btn-secondary" onClick={() => setStatus('idle')}>Submit Another Request</button>
          </div>
        )}

        {status === 'error' && (
          <div className="alert-box error" role="alert" aria-live="assertive">
            <h3>Submission Failed</h3>
            <p>There was a problem submitting your request. Please try again or call us directly.</p>
            <button className="btn-secondary" onClick={() => setStatus('idle')}>Try Again</button>
          </div>
        )}

        {status !== 'success' && (
          <form className="estimate-form" onSubmit={handleSubmit} noValidate>
            <div className="form-grid">
              
              <div className="input-group">
                <label htmlFor="name">Full Name *</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} disabled={status === 'loading'} />
                {errors.name && <span className="error-msg" id="name-error" role="alert">{errors.name}</span>}
              </div>

              <div className="input-group">
                <label htmlFor="phone">Phone Number *</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "phone-error" : undefined} disabled={status === 'loading'} />
                {errors.phone && <span className="error-msg" id="phone-error" role="alert">{errors.phone}</span>}
              </div>

              <div className="input-group">
                <label htmlFor="email">Email Address *</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} disabled={status === 'loading'} />
                {errors.email && <span className="error-msg" id="email-error" role="alert">{errors.email}</span>}
              </div>

              <div className="input-group">
                <label htmlFor="location">Project Location *</label>
                <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} aria-invalid={!!errors.location} aria-describedby={errors.location ? "location-error" : undefined} disabled={status === 'loading'} />
                {errors.location && <span className="error-msg" id="location-error" role="alert">{errors.location}</span>}
              </div>

              <div className="input-group">
                <label htmlFor="plotSize">Plot Size (Sq.Ft)</label>
                <input type="text" id="plotSize" name="plotSize" value={formData.plotSize} onChange={handleChange} disabled={status === 'loading'} />
              </div>

              <div className="input-group">
                <label htmlFor="requirement">Requirement *</label>
                <select id="requirement" name="requirement" value={formData.requirement} onChange={handleChange} aria-invalid={!!errors.requirement} aria-describedby={errors.requirement ? "req-error" : undefined} disabled={status === 'loading'}>
                  <option value="">Select an option</option>
                  <option value="villa">Custom Villa Construction</option>
                  <option value="apartment">Premium Apartment</option>
                  <option value="commercial">Commercial Space</option>
                  <option value="other">Other / Not Sure</option>
                </select>
                {errors.requirement && <span className="error-msg" id="req-error" role="alert">{errors.requirement}</span>}
              </div>
            </div>

            <div className="input-group full-width">
              <label htmlFor="notes">Additional Notes</label>
              <textarea id="notes" name="notes" rows="4" value={formData.notes} onChange={handleChange} disabled={status === 'loading'}></textarea>
            </div>

            <div className="form-actions">
              <button type="submit" className="btn-primary large-cta" disabled={status === 'loading'}>
                {status === 'loading' ? 'Processing...' : 'Request Free Estimate'}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
