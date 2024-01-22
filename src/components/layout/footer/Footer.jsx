import React from 'react';
import scss from './Footer.module.scss';
import logo_Footer from '../../../assets/logo.png';
import line_vertical from '../../../assets/lineIcons/Vector 22.svg';
import facebook from '../../../assets/icons/facebook.svg';
import twitter from '../../../assets/icons/twitter.svg';
import in_icon from '../../../assets/icons/linkedin.svg';
import youTube from '../../../assets/icons/youtube.svg';
import instagramm from '../../../assets/icons/instagram.svg';
import pinterest from '../../../assets/icons/pinterest.svg';
import ButtonBG from '../../ui/buttons/ButtonBG';
import line_Horizont from '../../../assets/lineIcons/Vector 17.svg';

const Footer = () => {
	return (
		<>
			<footer className={scss.footer}>
				<div className="container">
					<div className={scss.footerInfo}>
						<div className={scss.footerLogo}>
							<img src={logo_Footer} alt="" />
						</div>
						<img className={scss.lineVertical} src={line_vertical} alt="" />
						<div className={scss.supportServise}>
							<p>ABOUT</p>
							<p>SERVICES</p>
							<p>TECHNOLOGIES</p>
							<p>HOW TO</p>
							<p>JOIN HYDRA</p>
						</div>
						<img className={scss.lineVertical} src={line_vertical} alt="" />

						<div className={scss.supportServise}>
							<p>F.A.Q</p>
							<p>SITEMAP</p>
							<p>CONDITIONS</p>
							<p>LICENSES</p>
						</div>
						<img className={scss.lineVertical} src={line_vertical} alt="" />

						<div className={scss.socialNetWork}>
							<p>SOCIALIZE WITH HYDRA</p>
							<div className={scss.netWorks}>
								<img src={facebook} alt="" />
								<img src={twitter} alt="" />
								<img src={in_icon} alt="" />
								<img src={youTube} alt="" />
								<img src={instagramm} alt="" />
								<img src={pinterest} alt="" />
							</div>
							<ButtonBG children={'BUILD YOUR WORLD'} />
						</div>
					</div>
					<div className={scss.footerContent}>
						<div className={scss.lineHorizont}>
							<img src={line_Horizont} alt="" />
						</div>
						<p>
							2023 © HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS
							RESERVED
						</p>
					</div>
				</div>
			</footer>
		</>
	);
};
export default Footer;
