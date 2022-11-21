import React, { Component } from 'react'




export class Header extends Component {
  render() {
    return (
			<div className='header'>
				<div className='header-left'>
					<h1>CC</h1>
					<div className='header-left-wrapper'>
						<h2>Chris Candidate</h2>
						<h4>Human Resource Manager</h4>
					</div>
				</div>
				<div className='header-right'>
					<p>
						4759 Sunnydale Lane Plano, TX, 75071 email@youremail.com (469)
						385-2948
					</p>
				</div>
			</div>
		);
  }
}

export default Header