import React from 'react';
import './research_paper.css';
import { Link } from 'react-router-dom';

const FacultyAppraisalForm = () => {
    return (
        <div className="appraisal-form-container">
            <form className="appraisal-form">
                {/* Research Publications Section */}
                <section className="form-section">
                    <h1>Research Publications</h1>

                    {/* Journal Publication */}
                    <div className="form-group">
                        <h2>Journal Publication</h2>
                        <label>SCI/Scopus/Web of Science</label>
                        <div className="input-group">
                            <label>1st / Correspondence Author - 10 points per paper</label>
                            <input type="number" min="0" max="5" placeholder="Number of Papers" />
                        </div>
                        <div className="input-group">
                            <label>Other - 7 points per paper</label>
                            <input type="number" min="0" max="5" placeholder="Number of Papers" />
                        </div>

                        <label>UGC</label>
                        <div className="input-group">
                            <label>1st / Correspondence Author - 8 points per paper</label>
                            <input type="number" min="0" max="5" placeholder="Number of Papers" />
                        </div>
                        <div className="input-group">
                            <label>Other - 5 points per paper</label>
                            <input type="number" min="0" max="5" placeholder="Number of Papers" />
                        </div>

                        <label>Other Journals</label>
                        <div className="input-group">
                            <label>1st / Correspondence Author - 2 points per paper</label>
                            <input type="number" min="0" max="5" placeholder="Number of Papers" />
                        </div>
                        <div className="input-group">
                            <label>Other - 1 point per paper</label>
                            <input type="number" min="0" max="5" placeholder="Number of Papers" />
                        </div>
                    </div>

                    {/* Conference Paper */}
                    <div className="form-group">
                        <h2>Conference Paper</h2>
                        <label>International</label>
                        <div className="input-group">
                            <label>Abroad Offline - 10 points per paper</label>
                            <input type="number" min="0" max="5" placeholder="Number of Papers" />
                        </div>
                        <div className="input-group">
                            <label>Abroad Online - 5 points per paper</label>
                            <input type="number" min="0" max="5" placeholder="Number of Papers" />
                        </div>
                        <div className="input-group">
                            <label>India - 5 points per paper</label>
                            <input type="number" min="0" max="5" placeholder="Number of Papers" />
                        </div>

                        <label>National</label>
                        <div className="input-group">
                            <label>2 points per paper</label>
                            <input type="number" min="0" max="5" placeholder="Number of Papers" />
                        </div>

                        <label>State/University</label>
                        <div className="input-group">
                            <label>1 point per paper</label>
                            <input type="number" min="0" max="5" placeholder="Number of Papers" />
                        </div>
                    </div>
                </section>

                {/* Academic Research Section */}
                <section className="form-section">
                    <h1>Academic Research</h1>

                    {/* Ph.D. Research */}
                    <div className="form-group">
                        <h2>Ph.D.</h2>
                        <div className="input-group">
                            <label>8 points per degree awarded</label>
                            <input type="number" min="0" max="5" placeholder="Number of Degrees Awarded" />
                        </div>
                        <div className="input-group">
                            <label>4 points per thesis submitted</label>
                            <input type="number" min="0" max="5" placeholder="Number of Thesis Submitted" />
                        </div>
                    </div>

                    {/* P.G. Dissertation */}
                    <div className="form-group">
                        <h2>P.G. Dissertation</h2>
                        <div className="input-group">
                            <label>2 points per degree awarded</label>
                            <input type="number" min="0" max="5" placeholder="Number of Degrees Awarded" />
                        </div>
                    </div>

                    {/* U.G. Projects */}
                    <div className="form-group">
                        <h2>U.G. Projects</h2>
                        <div className="input-group">
                            <label>1 point per group</label>
                            <input type="number" min="0" max="5" placeholder="Number of Groups" />
                        </div>
                    </div>
                </section>

                {/* Upload PDF Section */}
                <div className="form-group">
                    <label htmlFor="pdf-upload">Upload PDF with supporting documents</label>
                    <input type="file" id="pdf-upload" name="pdf-upload" accept=".pdf" />
                </div>

                {/* Navigation Button */}
                <div className="next-page-link">
                    <Link to="/patent" className="next-page-button">Submit and Go to Next Page</Link>
                </div>
            </form>
        </div>
    );
};

export default FacultyAppraisalForm;
