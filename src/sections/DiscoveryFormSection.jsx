import React, { useState } from 'react';
import './DiscoveryFormSection.css';

export default function DiscoveryFormSection() {
  const [formData, setFormData] = useState({ name: '', phone: '', project: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = 'Enter a valid 10-digit mobile number.';
    }
    if (!formData.project) newErrors.project = 'Please select a project category.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      setSubmitStatus(null);
      // Simulate API call to Formspree/EmailJS
      try {
        await new Promise(resolve => setTimeout(resolve, 2000));
        // Mock success
        setSubmitStatus('success');
        setFormData({ name: '', phone: '', project: '' });
      } catch (err) {
        setSubmitStatus('error');
      } finally {
        setIsSubmitting(false);
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
    <section className="slide-section discovery-section">
      <div className="geometric-grid">
        
        <div style={{ gridColumn: '1 / 13', paddingBottom: '24px' }}>
          <h2 className="section-heading">PROJECT DISCOVERY TERMINAL</h2>
        </div>

        <div className="discovery-layout" style={{ gridColumn: '1 / 13' }}>
          
          {/* Left Column: Form */}
          <div className="discovery-form-panel">
            <h3 className="panel-title">INITIATE ARCHITECTURAL REVIEW</h3>
            
            {submitStatus === 'success' && (
              <div className="status-overlay success" role="alert" aria-live="assertive">
                <h4>DATA TRANSMISSION SUCCESSFUL</h4>
                <p>Our senior architects will review your requirements and contact you shortly.</p>
                <button className="terminal-btn" onClick={() => setSubmitStatus(null)}>ACKNOWLEDGE</button>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="status-overlay error" role="alert" aria-live="assertive">
                <h4>TRANSMISSION FAILED</h4>
                <p>Unable to connect to data pipes. Please try again or use direct contacts.</p>
                <button className="terminal-btn" onClick={() => setSubmitStatus(null)}>RETRY</button>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate aria-busy={isSubmitting}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  className={`form-input ${errors.name ? 'invalid' : ''}`}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  disabled={isSubmitting}
                />
                {errors.name && <span id="name-error" className="error-text">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="phone" className="form-label">Mobile Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={formData.phone}
                  onChange={handleChange}
                  className={`form-input ${errors.phone ? 'invalid' : ''}`}
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? 'phone-error' : undefined}
                  disabled={isSubmitting}
                />
                {errors.phone && <span id="phone-error" className="error-text">{errors.phone}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="project" className="form-label">Project Interest</label>
                <select 
                  id="project" 
                  name="project" 
                  value={formData.project}
                  onChange={handleChange}
                  className={`form-input ${errors.project ? 'invalid' : ''}`}
                  aria-invalid={!!errors.project}
                  aria-describedby={errors.project ? 'project-error' : undefined}
                  disabled={isSubmitting}
                >
                  <option value="">-- Select Category --</option>
                  <option value="flat">Buying a Flat</option>
                  <option value="villa">Building a Custom Villa</option>
                  <option value="commercial">Commercial Construction</option>
                </select>
                {errors.project && <span id="project-error" className="error-text">{errors.project}</span>}
              </div>

              <button type="submit" className="terminal-btn submit-btn" disabled={isSubmitting}>
                {isSubmitting ? '[ PROCESSING REQUEST... ]' : '[ SUBMIT DATA FOR ARCHITECTURAL REVIEW ]'}
              </button>
            </form>
          </div>

          {/* Right Column: Shortcuts & Map */}
          <div className="discovery-info-panel">
            <h3 className="panel-title">DIRECT COMMUNICATION LINKS</h3>
            
            <div className="shortcuts-container">
              <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="shortcut-btn whatsapp">
                [ CONNECT ON WHATSAPP ]
              </a>
              <a href="tel:+919999999999" className="shortcut-btn phone">
                [ CALL SALES OFFICE ]
              </a>
            </div>

            <div className="location-desk">
              <h4 className="desk-title">HQ LOCATION DESK</h4>
              <p className="desk-address">
                Lohith Construction Headquarters<br />
                Velachery Main Road, Medavakkam,<br />
                Chennai, Tamil Nadu 600100
              </p>
              
              <div className="map-frame">
                <iframe 
                  title="HQ Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.358509618491!2d80.19177111482181!3d12.948924090870597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525dc11054b1f3%3A0xb35a9094e99f6ec7!2sMedavakkam%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1689000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Mobile persistent floating action mechanics */}
      <div className="mobile-persistent-actions">
        <a href="tel:+919999999999" className="mobile-action call-action">CALL</a>
        <a href="https://wa.me/919999999999" className="mobile-action wa-action">WHATSAPP</a>
      </div>
    </section>
  );
}
