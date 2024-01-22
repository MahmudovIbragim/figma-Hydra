import React from 'react';
import scss from './Section2.module.scss';
import ButtonBG from '../../ui/buttons/ButtonBG';
import right_icon from '../../../assets/icons/arrow-right.svg';
import man_photo from '../../../assets/images/man-photo.png';
const Section2 = () => {
	return (
		<>
			<section className={scss.section_2}>
				{/* INTRODUCTION */}
				<div className="container">
					<div className={scss.sectionIntroduc}>
						<div className={scss.subjectIntroduc}>
							<h1>INTRODUCTION </h1>
							<div>
								<p>TO HYDRA VR</p>
								<img src={right_icon} alt="" />
							</div>
						</div>
						<div className={scss.textIntroduc}>
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
					{/* ABOUT */}
					<div className={scss.sectionAbout}>
						<div className={scss.aboutHydra}>
							<div className={scss.imgAbout}>
								<img src={man_photo} alt="" />
							</div>
							<div className={scss.aboutInfo}>
								<h1>ABOUT</h1>
								<h2>HYDRA VR</h2>
								<p>
									Eget mi proin sed libero enim sed faucibus turpis. Nisl
									rhoncus mattis rhoncus urna neque viverra justo. Vivamus at
									augue eget arcu dictum. Ultrices gravida dictum fusce ut
									placerat orci. Aenean et tortor at risus viverra adipiscing at
									in. Mattis aliquam faucibus purus in massa. Est placerat in
									egestas erat imperdiet sed. Consequat semper viverra nam
									libero justo laoreet sit amet. Aliquam etiam erat velit
									scelerisque in dictum non consectetur a. Laoreet sit amet
									cursus sit amet. Vel eros donec ac odio tempor orci dapibus.
									Sem nulla pha retra diam sit amet nisl suscipit adipiscing
									bibendum. Leo a diam sollicitudi n tempor.
								</p>
								<ButtonBG children={'LET’S GET IN TOUCH'} />
							</div>
						</div>
						{/* WHYBUILD */}
						<div className={scss.whyBuild}>
							<div className={scss.subjectWhyBuild}>
								<h1>WHY BUILD </h1>
								<div className={scss.textIconRight}>
									<p>WITH HYDRA?</p>
									<img src={right_icon} alt="" />
								</div>
							</div>
							<div className={scss.textWhyBuild}>
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
					</div>
				</div>
			</section>
		</>
	);
};

export default Section2;
