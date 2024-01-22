import React from 'react';
import scss from './Section4.module.scss';
import { images } from '../../../data/data';

const Section4 = () => {
	return (
		<>
			<section className={scss.section_4}>
				<div className="container">
					<div className={scss.hardware}>
						<h1>TECHNOLOGIES & HARDWARE</h1>
						<h2>USED BY HYDRA VR.</h2>
					</div>
					<div className={scss.containerImages}>
						{images.map((item) => {
							return (
								<div className={scss.box}>
									<img src={item.img} alt="" />
									<img src={item.img2} alt="" />
									<img src={item.img3} alt="" />
									<img src={item.img4} alt="" />
								</div>
							);
						})}
					</div>
				</div>
			</section>
		</>
	);
};

export default Section4;
