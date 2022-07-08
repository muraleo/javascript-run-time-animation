import React from "react";
import SectionHeader from "../elements/SectionHeader";
import SectionCard from "../elements/SectionCard";

const WebAPIsSection = ({webApisData = []}) => {
  return (
    <div className="box-section web-api-section w-2/4">
      <SectionHeader header="Web APIs" />

      <div className="section-content-height-full">
        {webApisData.map((data, idx) => {
          const {content, countDownTime} = data;
          return (
            <div key={`web-apis-${idx}`}>
              <SectionCard content={content} countDownTime={countDownTime}/>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WebAPIsSection;
