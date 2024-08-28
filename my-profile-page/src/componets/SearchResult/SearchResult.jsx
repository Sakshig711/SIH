import React from 'react';
import './SearchResult.css';

const SearchResults = () => {
  const results = [
    {
      title: 'Double stimulations during the follicular and luteal phases of poor responders in IVF/ICSI programs (Shanghai protocol)',
      authors: 'Y Kuang, Q Chen, Q Hong, Q Lyu, A Ai, Y Fu',
      source: 'Reproductive..., 2014 - Elsevier',
      link: 'rbmojournal.com',
      citations: 319,
    },
    {
      title: 'Luteal-phase ovarian stimulation is feasible for producing competent oocytes in women undergoing in vitro fertilization/intracytoplasmic sperm injection',
      authors: 'Y Kuang, Q Hong, Q Chen, Q Lyu, A Ai, Y Fu',
      source: 'Fertility and sterility, 2014 - Elsevier',
      link: 'sciencedirect.com',
      citations: 303,
    },
    {
      title: "Where's the AI?",
      authors: 'RC Schank',
      source: 'AI magazine, 1991 - ojs.aaai.org',
      link: 'aaai.org',
      citations: 236,
    },
  ];

  return (
    <div className="search-results">
      {results.map((result, index) => (
        <div key={index} className="result-item">
          <h3 className="result-title">{result.title}</h3>
          <p className="result-authors">{result.authors}</p>
          <p className="result-source">{result.source}</p>
          <a href={`https://${result.link}`} className="result-link">{result.link}</a>
          <p className="result-citations">{result.citations} cited</p>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
