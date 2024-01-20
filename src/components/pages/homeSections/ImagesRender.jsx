import React from 'react';
import { images } from '../../../data/whyBuildData';

const ImagesRender = () => {
	return (
		<div className="containerImages">
			{images.map((item) => {
				return (  
					<div className="box">
						<img src={item.img} alt="" />
						<img src={item.img2} alt="" />
						<img src={item.img3} alt="" />
						<img src={item.img4} alt="" />
					</div>
				);
			})}
		</div>
	);
};

export default ImagesRender;
