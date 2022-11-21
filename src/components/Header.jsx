import React, { Component } from 'react'




export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      isActive: false,
      
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleActive = this.toggleActive.bind(this);

  }

  handleChange(event) {
    if (event !== undefined) {
      this.setState({value: event.target.value});
    }
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    this.setState({isActive: false})
    event.preventDefault();
  }
  
  toggleActive() {
    if (!(this.state.isActive)) {
      return this.setState({isActive: true})
    }
  }

  activeContent() {
    return (
			<label>
				<input
					type='text'
					value={this.state.value}
					onChange={this.handleChange}
				/>
			</label>
		);
  }


  inActiveContent() {
    return (
			<h2>{this.state.value || "Chris Candidate"}</h2>
		);
  }

  
  
  render() {
    const inActiveContent = this.inActiveContent();
    const activeContent = this.activeContent();


    return (
			<form onSubmit={this.handleSubmit}>
				<div className='header'>
					<div className='header-left'>
						<h1>CC</h1>
						<div className='header-left-wrapper'>
							<h3 onClick={this.toggleActive}>{this.state.isActive ? activeContent : inActiveContent}</h3>
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
			</form>
		);
  }
}

export default Header