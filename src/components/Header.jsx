import React, { Component } from 'react'




export class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
      first: {
        name: false,
        one: false,
        textA: ""
      },
      second: {
        profession: false,
        two: false,
        textB: "",
      },
      value: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.toggleActive = this.toggleActive.bind(this);
    this.TextInput = this.TextInput.bind(this)
    this._NameContent = this._NameContent.bind(this)
	}

	handleChange(event) {
		switch (event.target.className) {
			case '1':
				this.setState({ textA: event.target.value });
        break;

			case '2':
				this.setState({ textB: event.target.value });
        break;


			default:
				break;
		}
	}

	handleSubmit(event) {
		alert('A name was submitted: ' + this.state.value);
		this.setState({ name: false });
    this.setState({ one: false });


    this.setState({ profession: false });
    this.setState({ two: false });
		event.preventDefault();
	}

	toggleActive(event) {
		console.log(event);
		switch (event.target.className) {
			case '1':
          this.setState({ name: true })
          this.setState({ one: true })
        break;

			case '2':
          this.setState({ profession: true })
          this.setState({ two: true })
        break;

			default:
				break;
		}
	}

	TextInput(key) {
      switch (key) {
        case "1":
          return (<label>
            <input
              className={key}
              type='text'
              textA={this.state.value}
              onChange={this.handleChange}
            />
          </label>)
        
        case "2":
          return (<label>
            <input
              className={key}
              type='text'
              textB={this.state.value}
              onChange={this.handleChange}
            />
          </label>)
          
      
        default:
          break;
      }

	}

	_NameContent(key) {
    switch (key) {
      case "1":
        return <h3 className='1'>{this.state.textA || 'Chris Candidate'}</h3>;
      
      case "2":
        return <h4 className='2'>{this.state.textB || 'Human Resource Manger'}</h4>;
      
      default:
        break;
    }
	}

	render() {

		return (
      <div className='header'>
            <div className='header-left'>
              <h1>CC</h1>
              <div className='header-left-wrapper'>
          <form onSubmit={this.handleSubmit}>
                <h3 onClick={this.toggleActive}>
                  {this.state.name ? this.TextInput("1") : this._NameContent("1")}
                </h3>
          </form>
          <form onSubmit={this.handleSubmit}>
                <h4 className='2' onClick={this.toggleActive}>
                  {this.state.profession ? this.TextInput("2") : this._NameContent("2")}
                </h4>
          </form>
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