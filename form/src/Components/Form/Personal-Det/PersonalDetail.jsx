import React from 'react';
import './personal_details.css';
import { Link } from 'react-router-dom';

const PersonalDetail = () => {
    return (
        <div className="personal-details-form-container">
            <form className="personal-details-form">
                <section className="form-section">
                    <h1>Appraisal Form</h1>
                    <div className="form-group">
                        <h2>Personal Details</h2>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" placeholder="Full Name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="photo">Upload Photo</label>
                        <input type="file" id="photo" name="photo" accept="image/*" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="personal-email">Personal Email</label>
                        <input type="email" id="personal-email" placeholder="example@domain.com" required />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <textarea id="address" placeholder="Residential Address" rows="3" required></textarea>
                    </div>
                    {/* Gender */}
                    <div className="form-group">
                        <label htmlFor="gender">Gender</label>
                        <select id="gender" required>
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input type="tel" id="phone" placeholder="Phone Number" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="college">College/Institution</label>
                        <input type="text" id="college" placeholder="Name of the College/Institution" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="designation">Designation</label>
                        <input type="text" id="designation" placeholder="Current Designation" required />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="work-email">Work Email</label>
                        <input type="email" id="work-email" placeholder="work@institution.com" required />
                    </div>
                    {/* Date of Joining */}
                    <div className="form-group">
                        <label htmlFor="doj">Date of Joining</label>
                        <input type="date" id="doj" required />
                    </div>

                    {/* Qualification */}
                    <div className="form-group">
                        <label htmlFor="qualification">Qualification</label>
                        <input type="text" id="qualification" placeholder="Highest Qualification" required />
                    </div>

                    {/* Teaching Experience */}
                    <div className="form-group">
                        <label htmlFor="teaching-experience">Teaching Experience (in years)</label>
                        <input type="number" id="teaching-experience" placeholder="Teaching Experience in years" min="0" required />
                    </div>

                    {/* Industry Experience */}
                    <div className="form-group">
                        <label htmlFor="industry-experience">Industry Experience (in years)</label>
                        <input type="number" id="industry-experience" placeholder="Industry Experience in years" min="0" required />
                    </div>

                    

                </section>

                <div className="next-page-link">
                    <Link to="/research-publications" className="next-page-button">Submit and Go to Next Page</Link>
                </div>
            </form>
        </div>
    );
};

export default PersonalDetail;
