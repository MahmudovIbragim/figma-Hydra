import React from 'react';
import scss from './Footer.module.scss';
import SectionFooter from '../../pages/sections/sectionFooter/SectionFooter';

const Footer = () => {
	return (
		<>
			<footer className={scss.footer}>
				<SectionFooter/>
			</footer>
		</>
	);
};
export default Footer;
