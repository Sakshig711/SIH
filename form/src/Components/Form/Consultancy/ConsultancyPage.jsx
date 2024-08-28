import React from 'react';
import './Consultancy_page.css'; // Create this CSS file for styling
import { Link } from 'react-router-dom';

const ConsultancyPage = () => {
    return (
        <div className="consultancy-form-container">
            <form className="consultancy-form">
                {/* Consultancy Section */}
                <section className="form-section">
                    <h1>Consultancy</h1>

                    {/* Paid Consultancy */}
                    <div className="form-group">
                        <h2>Paid Consultancy</h2>
                        <label>Points will be distributed equally amongst all the CO-PIs</label>
                        <div className="input-group">
                            <label>Amount (in Lakhs)</label>
                            <input type="number" min="0" step="0.01" placeholder="Amount in Lakhs" />
                        </div>
                    </div>

                    {/* Unpaid Consultancy */}
                    <div className="form-group">
                        <h2>Unpaid Consultancy</h2>
                        <label>Points per project/work</label>
                        <div className="input-group">
                            <label>Number of Projects/Works</label>
                            <input type="number" min="0" placeholder="Number of Projects/Works" />
                        </div>
                    </div>

                    {/* Product Development */}
                    <div className="form-group">
                        <h2>Product Development</h2>
                        <label>Points equally amongst all the CO-PIs</label>
                        <div className="input-group">
                            <label>Number of Products (Deployed and Functional)</label>
                            <input type="number" min="0" placeholder="Number of Products" />
                        </div>
                    </div>
                </section>

                <div className="form-group">
                    <label htmlFor="pdf-upload">Upload PDF with supporting documents</label>
                    <input type="file" id="pdf-upload" name="pdf-upload" accept=".pdf" />
                </div>

                <div className="next-page-link">
                    <Link to="/publication" className="next-page-button">Submit and Go to Next Page</Link>
                </div>
            </form>
        </div>
    );
};

export default ConsultancyPage;
