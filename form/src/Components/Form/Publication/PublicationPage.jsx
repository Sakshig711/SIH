import React from 'react';
import './publication_page.css'; 

const PublicationPage = () => {
    return (
        <div className="publications-form-container">
            <form className="publications-form">
                {/* Publications Section */}
                <section className="form-section">
                    <h1>Publications (Other than Research Papers)</h1>

                    {/* Books Authored */}
                    <div className="form-group">
                        <h2>Books Authored</h2>
                        <label>Points based on Publisher</label>
                        <div className="input-group">
                            <label>International Publishers - 10 points per book</label>
                            <input type="number" min="0" placeholder="Number of Books" />
                        </div>
                        <div className="input-group">
                            <label>National Publishers - 6 points per book</label>
                            <input type="number" min="0" placeholder="Number of Books" />
                        </div>
                    </div>

                    {/* Chapter in Edited Book */}
                    <div className="form-group">
                        <h2>Chapter in Edited Book</h2>
                        <label>Points per chapter</label>
                        <div className="input-group">
                            <label>Chapters - 2 points per book</label>
                            <input type="number" min="0" placeholder="Number of Chapters" />
                        </div>
                    </div>

                    {/* Editor of Book */}
                    <div className="form-group">
                        <h2>Editor of Book</h2>
                        <label>Points based on Publisher</label>
                        <div className="input-group">
                            <label>International Publisher - 8 points per book</label>
                            <input type="number" min="0" placeholder="Number of Books" />
                        </div>
                        <div className="input-group">
                            <label>National Publisher - 5 points per book</label>
                            <input type="number" min="0" placeholder="Number of Books" />
                        </div>
                    </div>
                </section>

                <div className="form-group">
                    <label htmlFor="pdf-upload">Upload PDF with supporting documents</label>
                    <input type="file" id="pdf-upload" name="pdf-upload" accept=".pdf" />
                </div>

                <div className="next-page-link">
                    <button className='next-page-button' type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default PublicationPage;

