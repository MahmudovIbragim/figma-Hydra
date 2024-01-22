import React from 'react';
import scss from './Section1.module.scss';
import ButtonBG from '../../ui/buttons/ButtonBG';
import img_right from '../../../assets/icons/arrow-small-right.svg';
import img_girl from '../../../assets/images/girl-photo.png';
import location_icon from '../../../assets/icons/location.svg';
import smoth_line from '../../../assets/lineIcons/Vector 5.svg';
import phone_icon from '../../../assets/icons/phone-call.svg';
import email_icon from '../../../assets/icons/mail.svg';

const Section1 = () => {
	return (
		<>
			<section className={scss.section_1}>
				<div className="container">
					<div className={scss.sectionContent}>
						<div className={scss.sectionContentText}>
							<span>Dive </span>
							<span>Into The Depths </span>
							<br />
							<span>Of </span>
							<span>Virtual Reality </span>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore nisl tincidunt
								eget. Lectus mauris eros in vitae .
							</p>
							<div className={scss.sectionContentComponents}>
								<ButtonBG children={'BUILD YOUR WORLD'} />
								<img src={img_right} alt="" />
							</div>
						</div>
						<div className={scss.sectionContentImg}>
							<img src={img_girl} alt="" />
						</div>
					</div>
					<div className={scss.sectionInformation}>
						<div className={scss.informationsContainer}>
							<div className={scss.inforImg}>
								<img src={location_icon} alt="" />
							</div>
							<div className={scss.inforText}>
								<h2>Pay Us a Visit</h2>
								<p>Union St, Seattle, WA 98101, United States</p>
							</div>
						</div>
						<img className={scss.smothLine} src={smoth_line} alt="" />
						<div className={scss.informationsContainer}>
							<div className={scss.inforImg}>
								<img src={phone_icon} alt="" />
							</div>
							<div className={scss.inforText}>
								<h2>Give Us a Call</h2>
								<p>(110) 1111-1010</p>
							</div>
						</div>
						<img className={scss.smothLine} src={smoth_line} alt="" />
						<div className={scss.informationsContainer}>
							<div className={scss.inforImg}>
								<img src={email_icon} alt="" />
							</div>
							<div className={scss.inforText}>
								<h2>Send Us a Message</h2>
								<p>Contact@HydraVTech.com</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Section1;
