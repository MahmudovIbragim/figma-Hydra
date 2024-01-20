import React from 'react';
// import scss from '../formInputs/forms';

const Inputs = ({ type, text }) => {
	return <input type={type} placeholder={text} />;
};

export default Inputs;
