import React from 'react';

const SourceCodeRow = ({idx, codeStr, sourceCodeSteps}) => {
    return (
        <div className="source-code-row flex items-center">
            <div className="code-idx">{idx + 1}</div>
            <div className={`code-str ${sourceCodeSteps.includes(idx) ? 'highlight' : ''}`}>{codeStr}</div>
        </div>
    );
};

export default SourceCodeRow;