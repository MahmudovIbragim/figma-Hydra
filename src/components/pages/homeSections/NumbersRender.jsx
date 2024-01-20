import React from 'react'
import { numbers } from '../../../data/whyBuildData'

const NumbersRender = () => {
  return (
    <div className='containerNumbers'>
      {
        numbers.map((item) => {
          return (
						<div className="box">
							<div className="imgNumber">
								<img src={item.img} alt="" />
							</div>
							<div className="textIcon">
								<img className="smallRight" src={item.icon} alt="" />
								<p>{item.title}</p>
							</div>
						</div>
					);
        })
      }
    </div>
  )
}

export default NumbersRender