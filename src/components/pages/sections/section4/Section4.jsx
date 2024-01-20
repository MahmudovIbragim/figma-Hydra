import React from 'react'
import MainStyle from '../../../layout/main/MainStyle.scss'
import ImagesRender from '../../homeSections/ImagesRender';

const Section4 = () => {
  return (
		<>
			<section className={`${MainStyle} section_4`}>
				<div className={`${MainStyle} hardware`}>
					<h1>TECHNOLOGIES & HARDWARE</h1>
					<h2>USED BY HYDRA VR.</h2>
				</div>
				<ImagesRender />
			</section>
		</>
	);
}

export default Section4