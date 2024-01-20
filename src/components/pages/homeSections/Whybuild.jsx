import React from 'react';
import scss from '../Style.module.scss';
import { data } from '../../../data/whyBuildData';
import ButtonBG from '../../ui/buttons/ButtonBG';

const Whybuild = () => {
	return (
		<section className={`${scss} section_3`}>
			<div className={`${scss} cards`}>
				{data.map((item, index) => (
					<div key={index} className={`${scss} renderCards`}>
						<img className={`${scss} img`} src={item.img} alt={item.title} />
						<h1>{item.title}</h1>
						<img src={item.line} alt="" />
						<p>{item.text}</p>
						<ButtonBG className={`${scss} buttonCard`}> TRY IT NO</ButtonBG>
					</div>
				))}
			</div>
		</section>
	);
};

export default Whybuild;
