import React from "react";
import { Link } from "react-router-dom";
import "../style/inner-banner.css";

const InnerBanner = ({ title }) => {
  return (
    <section className="inner-banner">
      <div className="inner-banner-content">
        <h1>{title}</h1>
        <p className="breadcrumb">
          <Link to="/">Home</Link>&nbsp;-&nbsp;<span>{title}</span>
        </p>
      </div>
    </section>
  );
};

export default InnerBanner;
