import React from 'react'
import right_icon from '../../../../assets/icons/arrow-right.svg'
import MainStyle from '../../../layout/main/MainStyle.scss'
import NumbersRender from '../../homeSections/NumbersRender'

const Section5 = () => {
  return (
		<>
			<section className={`${MainStyle} section_5`}>
				<div className={`howBuild`}>
					<div className={` subjectHowBuild`}>
						<h1>HOW WE BUILD</h1>
						<div className={` textHowIconRight`}>
							<p>WITH HYDRA VR?</p>
							<img src={right_icon} alt="" />
						</div>
					</div>
					<div className={` textHowBuild`}>
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
				<NumbersRender />
			</section>
		</>
	);
}

export default Section5