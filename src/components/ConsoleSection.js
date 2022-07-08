import React from 'react';
import SectionHeader from "../elements/SectionHeader";

const ConsoleSection = ({consoleData = []}) => {
    return (
        <div className="box-section console-section">
            <SectionHeader header={"Console"}/>

            <div className="section-content-height-full bg-white p-2 rounded">
                {consoleData.map((data, idx) => {
                    return <div key={`call-stack-${idx}`}>
                    > {data}
                    </div>
                })}
            </div>
        </div>
    );
};

export default ConsoleSection;