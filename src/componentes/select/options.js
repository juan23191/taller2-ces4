import React from "react";

const Options = ({ id, name }) => {
    return (
        <>
            <option value={id}>{name}</option>
        </>
    );
};

export default Options;
