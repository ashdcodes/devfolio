import React from 'react'
import "./work-card.css";
function WorkCard({item}) {
    return (
        <div className="work-card">
            <img src={item.companyLogo} alt="companylogo" className="work-logo" />
            <div className="work-info">
            <label className="company-name">{item.company}</label>
            <div>
            <label className="work-designation">{item.designation}</label>
            </div>
            <div>
            <label className="work-type">{item.type}</label>
            </div>
            <div className="work-dates">
            <label>{item.dateJoin}</label>-<label>{item.dateEnd}</label>
            </div>
            <div className="work-desc">
            <p>{item.description}</p>
            </div>
            </div>
        </div>
    )
}

export default WorkCard
