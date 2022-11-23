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
      third: {
        address: false,
        three: false,
        textC: "",
      },
      fourth: {
        description: false,
        four: false,
        textD: "",
      },
      fifth: {
        title: "Human Resources Manager",
        experience: false,
        five: false,
        textE: "",
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
      
      case '3':
        this.setState({ textC: event.target.value });
        break;

      case '4':
        this.setState({ textD: event.target.value });
        break;  
      
      case '5':
      this.setState({ textE: event.target.value });
      break;  


			default:
				break;
		}
	}

	handleSubmit(event) {
		this.setState({ name: false });
    this.setState({ one: false });


    this.setState({ profession: false });
    this.setState({ two: false });


    this.setState({ address: false });
    this.setState({ three: false });


    this.setState({ description: false })
    this.setState({ four: false })


    this.setState({ experience: false })
    this.setState({ five: false })

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

      case '3':
        this.setState({ address: true })
        this.setState({ three: true })
      break;

      case '4':
        this.setState({ description: true })
        this.setState({ four: true })
      break;

      case '5':
        this.setState({ experience: true })
        this.setState({ five: true })
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
          
        case "3":
          return (<label>
            <input
              className={key}
              type='text'
              textC={this.state.value}
              onChange={this.handleChange}
            />
          </label>)

        case "4":
          return (<label>
            <input
              className={key}
              type='text'
              textD={this.state.value}
              onChange={this.handleChange}
            />
          </label>)
        
        case "5":
          return (<label>
            <input
              className={key}
              type='text'
              textE={this.state.value}
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
      
      case "3":
        return <p className='3'>{this.state.textC || "4759 Sunnydale Lane \n Plano, TX, 75071 \n email@youremail.com \n (469) 385-2948" }</p>;
      
      case "4":
        return <p className='4'>{this.state.textD || "Human resources generalist with 8 years of experience in HR, including hiring and terminating, disciplining employees and helping department managers improve employee performance. Worked with labor unions to negotiate compensation packages for workers. Organized new hire training initiatives as well as ongoing training to adhere to workplace safety standards. Worked with OSHA to ensure that all safety regulations are followed." }</p>;
      
      case "5":
      return (
        <>
        <div className="container-exp">

          <div className="left-exp">
            <p> January 2016 - Present </p>
          </div>

          <div className="right-exp">

            <h4 className="exp-title">{this.state.fifth.title}</h4>
            <ul>
              <li className='5'>
                {this.state.textE || "Implement effective company policies to ensure that all practices comply with labor and employment regulations"}
              </li>
              <li className='5'>
                {this.state.textE || "Implement effective company policies to ensure that all practices comply with labor and employment regulations"}
              </li>
              <li className='5'>
                {this.state.textE || "Implement effective company policies to ensure that all practices comply with labor and employment regulations"}
              </li>
            </ul>
          </div>
        </div>
        </>
      )
      default:
        break;
    }
	}

	render() {

		return (
      <>
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
          <form onSubmit={this.handleSubmit}>
                <p className='3' onClick={this.toggleActive}>
                  {this.state.address ? this.TextInput("3") : this._NameContent("3")}
                </p>
          </form>
            </div>
      </div>


      <div className="bg-color-desc">
          <form onSubmit={this.handleSubmit}>
                <p className='4 description' onClick={this.toggleActive}>
                  {this.state.description ? this.TextInput("4") : this._NameContent("4")}
                </p>
          </form>
      </div>



      <div className="bg-experience">
        <h3>
          Professional Experience
        </h3>
        <form onSubmit={this.handleSubmit}>
              <p className='5 experience' onClick={this.toggleActive}>
                {this.state.experience ? this.TextInput("5") : this._NameContent("5")}
              </p>
        </form>
      </div>
      </>
		);
	}
}

export default Header