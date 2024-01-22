import React from 'react';
import scss from './Section6.module.scss';
import ButtonBG from '../../ui/buttons/ButtonBG';
import line from '../../../assets/lineIcons/line.svg';
import CustomInput from '../../ui/inputs/CustomInput';

const Section6 = () => {
	return (
		<>
			<section className={scss.section_6}>
				<div className="container">
					<div className={scss.content}>
						<div className={scss.inside_container}>
							<h1 className={scss.title}>JoinHydra</h1>
							<img className={scss.line} src={line} alt="line" />
							<p className={scss.text}>Let’s Build Your VR Experience</p>
							<div className={scss.inputs}>
								<div className={scss.block}>
									<CustomInput
										type="text"
										placeholder="First Name"
										maxWidth={524}
									/>
									<CustomInput
										type="text"
										placeholder="Last Name"
										maxWidth={524}
									/>
								</div>
								<div className={scss.block}>
									<CustomInput type="text" placeholder="Email" maxWidth={524} />
									<CustomInput
										type="text"
										placeholder="Phone Number"
										maxWidth={524}
									/>
								</div>
								<CustomInput type="text" placeholder="Subject" />
								<textarea className={scss.textarea}></textarea>
							</div>
							<ButtonBG>SEND TO HYDRA</ButtonBG>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Section6;
