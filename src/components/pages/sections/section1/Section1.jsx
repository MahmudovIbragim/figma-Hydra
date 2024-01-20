import React from 'react'
import MainStyle from '../../../layout/main/MainStyle.scss'
import ButtonBG from '../../../ui/buttons/ButtonBG';
import img_right from '../../../../assets/icons/arrow-small-right.svg'
import img_girl from '../../../../assets/images/girl-photo.png'
import location_icon from '../../../../assets/icons/location.svg'
import smoth_line from '../../../../assets/lineIcons/Vector 5.svg'
import phone_icon from '../../../../assets/icons/phone-call.svg'
import email_icon from '../../../../assets/icons/mail.svg'

const Section1 = () => {
  return (
		<>
			<section className={`${MainStyle} section_1`}>
				<div className={`${MainStyle} sectionContent`}>
					<div className={`${MainStyle} sectionContentText `}>
						<h2>Dive Into The Depths </h2>
						<h2>Of Virtual Reality</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget.
							Lectus mauris eros in vitae .
						</p>
						<div className={`${MainStyle} sectionContentComponents`}>
							<ButtonBG children={'BUILD YOUR WORLD'} />
							<img src={img_right} alt="" />
						</div>
					</div>
					<div className={`${MainStyle} sectionContentImg`}>
						<img src={img_girl} alt="" />
					</div>
				</div>
				<div className={`${MainStyle} sectionInformation`}>
					<div className={`${MainStyle} informationsContainer`}>
						<div className={`${MainStyle} inforImg`}>
							<img src={location_icon} alt="" />
						</div>
						<div className={`${MainStyle} inforText`}>
							<h2>Pay Us a Visit</h2>
							<p>Union St, Seattle, WA 98101, United States</p>
						</div>
					</div>
					<img className={`${MainStyle} smothLine`} src={smoth_line} alt="" />
					<div className={`${MainStyle} informationsContainer`}>
						<div className={`${MainStyle} inforImg`}>
							<img src={phone_icon} alt="" />
						</div>
						<div className={`${MainStyle} inforText`}>
							<h2>Give Us a Call</h2>
							<p>(110) 1111-1010</p>
						</div>
					</div>
					<img className={`${MainStyle} smothLine`} src={smoth_line} alt="" />
					<div className={`${MainStyle} informationsContainer`}>
						<div className={`${MainStyle} inforImg`}>
							<img src={email_icon} alt="" />
						</div>
						<div className={`${MainStyle} inforText`}>
							<h2>Send Us a Message</h2>
							<p>Contact@HydraVTech.com</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Section1