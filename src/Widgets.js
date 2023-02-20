import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets_article">
      <div className="widgets_articleLeft">
        <FiberManualRecordIcon />
      </div>

      <div className="widgets_articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets_header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>

      {newsArticle("Jerry is coding", "Top news - He is still coding")}
      {newsArticle("Profit boost for private banks", "1d ago • 560 readers")}
      {newsArticle(
        "R-Day weekend: travel demand surges",
        "1d ago • 484 readers"
      )}
      {newsArticle("More students going to colleges", "1d ago • 298 readers")}
      {newsArticle("High streets buzz with new stores", "1d ago • 110 readers")}
      {newsArticle("ऐसे बढ़ाए अपना आत्मविश्वास", "1d ago • 746 readers")}
      {newsArticle("Techies eye safer, stable jobs", "1d ago • 3,328 readers")}
      {newsArticle("India wins U-19 Women’s World Cup", "1d ago • 722 readers")}
    </div>
  );
}

export default Widgets;
