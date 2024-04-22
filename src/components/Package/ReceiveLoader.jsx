import React, { useEffect } from "react";

const ReceiveLoader = ({ bulletColors, lineColors }) => {
  useEffect(() => {
    const changeBulletAndLineColor = () => {
      const bullets = document.querySelectorAll(".loader .bullet");
      const lines = document.querySelectorAll(".loader .line");
      
      bullets.forEach((item, idx) => {
        item.style.backgroundColor = bulletColors[idx];
        
        // Find the span inside the bullet and set its color
        const span = item.querySelector("span");
        if (span) {
          span.style.color = bulletColors[idx] === "#000080" ? "white" : "black";
        }
      });

      lines.forEach((item, idx) => {
        item.style.backgroundColor = lineColors[idx];
      });
    };

    changeBulletAndLineColor();
  }, [bulletColors, lineColors]);

  return (
    <div className="loader">
      <div className="bullet" style={{backgroundColor: bulletColors[0]}}>
      </div>
      <div className="line" style={{backgroundColor: lineColors[0]}}></div>
      <div className="bullet" style={{backgroundColor: bulletColors[1]}}>
      </div>
      <div className="line" style={{backgroundColor: lineColors[1]}}></div>
      <div className="bullet" style={{backgroundColor: bulletColors[2]}}>
      </div>
      <div className="line" style={{backgroundColor: lineColors[2]}}></div>
      <div className="bullet" style={{backgroundColor: bulletColors[3]}}>
      </div>
    </div>
  );
};

export default ReceiveLoader;
