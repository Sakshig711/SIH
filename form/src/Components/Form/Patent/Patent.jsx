
import React from 'react';
import './Patent.css'; // Create this CSS file for styling
import { Link } from 'react-router-dom';

const Patent = () => {
    return (
        <div className="patents-form-container">
            <form className="patents-form">
                {/* Patents Section */}
                <section className="form-section">
                    <h1>Patents</h1>

                    {/* International Patents */}
                    <div className="form-group">
                        <h2>International</h2>
                        <label>With proper examination/review at each stage and with no additional amount</label>
                        <div className="input-group">
                            <label>Licensed - 15 points per patent</label>
                            <input type="number" min="0" max="5" placeholder="Number of Patents" />
                        </div>
                        <div className="input-group">
                            <label>Granted – 10 points per patent</label>
                            <input type="number" min="0" max="5" placeholder="Number of Patents" />
                        </div>
                        <div className="input-group">
                            <label>Published – 8 points per patent</label>
                            <input type="number" min="0" max="5" placeholder="Number of Patents" />
                        </div>
                        <div className="input-group">
                            <label>Filed – 5 points per patent</label>
                            <input type="number" min="0" max="5" placeholder="Number of Patents" />
                        </div>
                    </div>

                    {/* National Patents */}
                    <div className="form-group">
                        <h2>National</h2>
                        <div className="input-group">
                            <label>Licensed - 10 points per patent</label>
                            <input type="number" min="0" max="5" placeholder="Number of Patents" />
                        </div>
                        <div className="input-group">
                            <label>Granted – 8 points per patent</label>
                            <input type="number" min="0" max="5" placeholder="Number of Patents" />
                        </div>
                        <div className="input-group">
                            <label>Published – 5 points per patent</label>
                            <input type="number" min="0" max="5" placeholder="Number of Patents" />
                        </div>
                        <div className="input-group">
                            <label>Filed – 3 points per patent</label>
                            <input type="number" min="0" max="5" placeholder="Number of Patents" />
                        </div>
                    </div>
                </section>

                <div className="form-group">
                    <label htmlFor="pdf-upload">Upload PDF with supporting documents</label>
                    <input type="file" id="pdf-upload" name="pdf-upload" accept=".pdf" />
                </div>

                <div className="next-page-link">
                    <Link to="/seminar" className="next-page-button">Submit and Go to Next Page</Link>
                </div>
            </form>
        </div>
    );
};

export default Patent;
