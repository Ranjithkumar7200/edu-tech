import React, { useState } from "react";
import "./UICourseCard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { syllabusData } from './syllabusJson';

const SyllabuListing = () => {
  // State to track the search query
  const [searchQuery, setSearchQuery] = useState('');

  // Function to handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter syllabusData based on searchQuery
  const filteredSyllabus = syllabusData.filter((weekData) => {
    const weekMatch = weekData.week.toLowerCase().includes(searchQuery.toLowerCase());
    const daysMatch = weekData.days.some((day) =>
      day.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return weekMatch || daysMatch;
  });

  return (
    <div className="syllabuscontainer">
      <div className="container mt-5">
        <h2 className="text-center mb-4">Basic Course Syllabus</h2>

        {/* Search Input */}
        <input
          type="text"
          className="syllabus-input"
          placeholder="Search syllabus..."
          value={searchQuery}
          onChange={handleSearchChange}
        />

        <div className="accordion" id="syllabusAccordion">
          {filteredSyllabus.length > 0 ? (
            filteredSyllabus.map((weekData, index) => (
              <div className="accordion-item" key={index}>
                {/* Accordion Header */}
                <h2 className="accordion-header" id={`heading${index}`}>
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${index}`}
                    aria-expanded="false"
                    aria-controls={`collapse${index}`}
                  >
                    {weekData.week}
                  </button>
                </h2>

                {/* Accordion Body */}
                <div
                  id={`collapse${index}`}
                  className="accordion-collapse collapse"
                  aria-labelledby={`heading${index}`}
                  data-bs-parent="#syllabusAccordion"
                >
                  <div className="accordion-body">
                    <ul className="list-unstyled">
                      {weekData.days.map((day, idx) => (
                        <li key={idx} className="mb-2">
                          {day}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center">No syllabus found for the search term</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SyllabuListing;
