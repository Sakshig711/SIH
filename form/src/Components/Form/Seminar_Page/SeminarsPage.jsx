import React from 'react';
import './Seminar_page.css'; // Create this CSS file for styling
import { Link } from 'react-router-dom';

const SeminarsPage = () => {
    return (
        <div className="seminars-form-container">
            <form className="seminars-form">
                {/* Seminars Section */}
                <section className="form-section">
                    <h1>Seminars</h1>

                    {/* FDP/STTP/Workshop/Certificate Course/Seminar */}
                    <div className="form-group">
                        <h2>FDP/STTP/Workshop/Certificate Course/Seminar conducted within institute</h2>
                        <label>Additional 5 score for per 1 lakh fund fetched (Per event) Maximum 10</label>
                        <div className="input-group">
                            <label>Fund Fetched (in Lakhs)</label>
                            <input type="number" min="0" max="2" step="0.01" placeholder="Amount in Lakhs" />
                        </div>
                    </div>

                    {/* International Events */}
                    <div className="form-group">
                        <h2>International</h2>
                        <div className="input-group">
                            <label>Coordinator – 4 points per event</label>
                            <input type="number" min="0" max="5" placeholder="Number of Events" />
                        </div>
                        <div className="input-group">
                            <label>Co-Coordinator – 3 points per event</label>
                            <input type="number" min="0" max="5" placeholder="Number of Events" />
                        </div>
                        <div className="input-group">
                            <label>Resource Person – 1 point per event</label>
                            <input type="number" min="0" max="5" placeholder="Number of Events" />
                        </div>
                    </div>

                    {/* National/State/University Level/Institute Level Events */}
                    <div className="form-group">
                        <h2>National/State/University Level/Institute Level</h2>
                        <div className="input-group">
                            <label>Coordinator – 3 points per event</label>
                            <input type="number" min="0" max="5" placeholder="Number of Events" />
                        </div>
                        <div className="input-group">
                            <label>Co-Coordinator – 2 points per event</label>
                            <input type="number" min="0" max="5" placeholder="Number of Events" />
                        </div>
                        <div className="input-group">
                            <label>Resource Person – 1 point per event</label>
                            <input type="number" min="0" max="5" placeholder="Number of Events" />
                        </div>
                    </div>
                </section>

                <div className="form-group">
                    <label htmlFor="pdf-upload">Upload PDF with supporting documents</label>
                    <input type="file" id="pdf-upload" name="pdf-upload" accept=".pdf" />
                </div>

                <div className="next-page-link">
                    <Link to="/consult" className="next-page-button">Submit and Go to Next Page</Link>
                </div>
            </form>
        </div>
    );
};

export default SeminarsPage