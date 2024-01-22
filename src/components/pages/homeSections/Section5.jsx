import React from 'react';
import scss from './Section5.module.scss';
import right_icon from '../../../assets/icons/arrow-right.svg';
import { numbers } from '../../../data/data';

const Section5 = () => {
	return (
		<>
			<section className={scss.section_5}>
				<div className="container">
					<div className={scss.howBuild}>
						<div className={scss.subjectHowBuild}>
							<h1>HOW WE BUILD</h1>
							<div className={scss.textHowIconRight}>
								<p>WITH HYDRA VR?</p>
								<img src={right_icon} alt="" />
							</div>
						</div>
						<div className={scss.textHowBuild}>
							<p>
								Vitae sapien pellentesque habitant morbi tristique senectus et
								netus et. Feugiat nibh sed pulvinar proin gravida hendrerit
								lectus. Mi sit amet mauris commodo quis imperdiet massa
								tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare
								lectus sit amet est placerat in. Lectus magna fringilla urna
								porttitor rhoncus vitae.
							</p>
						</div>
					</div>
					<div className={scss.containerNumbers}>
						{numbers.map((item) => {
							return (
								<div className={scss.box}>
									<div className={scss.imgNumber}>
										<img src={item.img} alt="" />
									</div>
									<div className={scss.textIcon}>
										<img className={scss.smallRight} src={item.icon} alt="" />
										<p>{item.title}</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</section>
		</>
	);
};

export default Section5;
