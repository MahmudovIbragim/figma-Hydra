import React from 'react';
import ButtonBG from '../../../ui/buttons/ButtonBG';
import right_icon from '../../../../assets/icons/arrow-right.svg';
import man_photo from '../../../../assets/images/man-photo.png';
const Section2 = () => {
	return (
		<>
			<section className={` section_2`}>
				{/* INTRODUCTION */}
				<div className={` sectionIntroduc`}>
					<div className={` subjectIntroduc`}>
						<h1>INTRODUCTION </h1>
						<div className={` `}>
							<p>TO HYDRA VR</p>
							<img src={right_icon} alt="" />
						</div>
					</div>
					<div className={` textIntroduc`}>
						<p>
							Vitae sapien pellentesque habitant morbi tristique senectus et
							netus et. Feugiat nibh sed pulvinar proin gravida hendrerit
							lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt
							nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet
							est placerat in. Lectus magna fringilla urna porttitor rhoncus
							vitae.
						</p>
					</div>
				</div>
				{/* ABOUT */}
				<div className={` sectionAbout`}>
					<div className={` aboutHydra`}>
						<div className={` imgAbout`}>
							<img src={man_photo} alt="" />
						</div>
						<div className={` aboutInfo`}>
							<h1>ABOUT</h1>
							<h2>HYDRA VR</h2>
							<p>
								Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus
								mattis rhoncus urna neque viverra justo. Vivamus at augue eget
								arcu dictum. Ultrices gravida dictum fusce ut placerat orci.
								Aenean et tortor at risus viverra adipiscing at in. Mattis
								aliquam faucibus purus in massa. Est placerat in egestas erat
								imperdiet sed. Consequat semper viverra nam libero justo laoreet
								sit amet. Aliquam etiam erat velit scelerisque in dictum non
								consectetur a. Laoreet sit amet cursus sit amet. Vel eros donec
								ac odio tempor orci dapibus. Sem nulla pha retra diam sit amet
								nisl suscipit adipiscing bibendum. Leo a diam sollicitudi n
								tempor.
							</p>
							<ButtonBG children={'LET’S GET IN TOUCH'} />
						</div>
					</div>
					{/* WHYBUILD */}
					<div className={` whyBuild`}>
						<div className={` subjectWhyBuild`}>
							<h1>WHY BUILD </h1>
							<div className={` textIconRight`}>
								<p>WITH HYDRA?</p>
								<img src={right_icon} alt="" />
							</div>
						</div>
						<div className={` textWhyBuild`}>
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
			</section>
		</>
	);
};

export default Section2;
