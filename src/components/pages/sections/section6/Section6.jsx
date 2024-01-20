import React from 'react'
import MainStyle from '../../../layout/main/MainStyle.scss'
import ButtonBG from '../../../ui/buttons/ButtonBG';
import Inputs from '../../../ui/formInputs/Inputs';
import line from '../../../../assets/lineIcons/line.svg'

const Section6 = () => {
  return (
		<>
			<section className={`${MainStyle} section_6`}>
				<div className="joinHydra">
					<h1>JOIN HYDRA</h1>
					<img src={line} alt="" />
					<h1>Let’s Build Your VR Experience</h1>
				</div>
				<div className="form">
					<div className="sectorFirst">
						<Inputs type={'text'} text={'First Name'} />
						<Inputs type={'text'} text={'Last Name'} />
					</div>
					<div className="sectorSecond">
						<Inputs type={'email'} text={'Email'} />
						<Inputs type={'number'} text={'Phone Number'} />
					</div>
					<div className="sectorThrid">
						<Inputs type={'text'} text={'Subject'} />
						<Inputs type={'text'} text={'Tell Us Something...'} />
					</div>
					<ButtonBG children={'SEND TO HYDRA'} />
				</div>
			</section>
		</>
	);
}

export default Section6