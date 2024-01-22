import React from 'react';
import scss from './CustomInput.module.scss';

const CustomInput = ({ type, placeholder, maxWidth }) => {
	return (
		<input
			type={type}
			className={scss.input}
			style={{ maxWidth: maxWidth }}
			placeholder={placeholder}
		/>
	);
};
export default CustomInput;
