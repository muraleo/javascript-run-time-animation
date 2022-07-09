import React from "react";
import SectionHeader from "../elements/SectionHeader";
import SourceCodeRow from "../elements/SourceCodeRow";

const SourceCodeSection = ({ sourceCodeData = "", sourceCodeSteps = [] }) => {
  const sourceCodeStrings = sourceCodeData.split("\n");

  return (
    <div className="box-section source-code-section">
      <SectionHeader header="Source Code" />

      <div>
        {sourceCodeStrings.map((codeStr, idx) => {
          return (
            <span key={`source-code-str-${idx}`}>
              <SourceCodeRow
                idx={idx}
                codeStr={codeStr}
                sourceCodeSteps={sourceCodeSteps}
              />
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default SourceCodeSection;
