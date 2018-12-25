import React from "react";

const Startups = () => {
  return (
    <div className="community">
      <h2>
        UNE COMMUNAUTÉ D’ENTREPRENEURS VISIONNAIRES RASSEMBLÉS POUR{" "}
        <span>SCALER</span>
      </h2>

      <ul className="filters">
        <li data-filter="*">All</li>
        <li data-filter=".seed">1- Stage Seed</li>
        <li data-filter=".venture">2- Stage Venture</li>
        <li data-filter=".growth">3- Stage Growth</li>
        <li data-filter=".apps-services">Apps/Services</li>
        <li data-filter=".commerce-marketplaces">Commerce/Marketplaces</li>
        <li data-filter=".data-analytics-ai">Data/Analytics/AI</li>
        <li data-filter=".entreprise">Enterprise</li>
        <li data-filter=".hardware-iot">Hardware/IoT</li>
        <li data-filter=".health">Health</li>
        <li data-filter=".healthcare">Healthcare</li>
        <li data-filter=".infrastructure-networks-security">
          Infrastructure/Networks/Security
        </li>
        <li data-filter=".marketing">Marketing</li>
      </ul>

      <div className="startups-logo" />
    </div>
  );
};
export default Startups;
