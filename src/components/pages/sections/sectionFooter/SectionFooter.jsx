import React from 'react'
import logo_Footer from '../../../../assets/logo.png'
import ButtonBG from '../../../ui/buttons/ButtonBG'
import facebook from '../../../../assets/icons/facebook.svg'
import twitter from '../../../../assets/icons/twitter.svg'
import in_icon from '../../../../assets/icons/linkedin.svg'
import youTube from '../../../../assets/icons/youtube.svg'
import instagramm from '../../../../assets/icons/instagram.svg'
import pinterest from '../../../../assets/icons/pinterest.svg'
import line_Horizont from '../../../../assets/lineIcons/Vector 17.svg'
import line_vertical from '../../../../assets/lineIcons/Vector 22.svg'

const SectionFooter = () => {
  return (
		<>
			<div className="footerInfo">
				<div className="footerLogo">
					<img src={logo_Footer} alt="" />
				</div>
				<img src={line_vertical} alt="" />
				<div className="supportServise">
					<p>ABOUT</p>
					<p>SERVICES</p>
					<p>TECHNOLOGIES</p>
					<p>HOW TO</p>
					<p>JOIN HYDRA</p>
				</div>
				<img src={line_vertical} alt="" />

				<div className="supportServise">
					<p>F.A.Q</p>
					<p>SITEMAP</p>
					<p>CONDITIONS</p>
					<p>LICENSES</p>
				</div>
				<img src={line_vertical} alt="" />

				<div className="socialNetWork">
					<p>SOCIALIZE WITH HYDRA</p>
					<div className="netWorks">
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
			<div className="footerContent">
				<div className="lineHorizont">
					<img src={line_Horizont} alt="" />
				</div>
				<p>
					2023 © HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS RESERVED
				</p>
			</div>
		</>
	);
}

export default SectionFooter