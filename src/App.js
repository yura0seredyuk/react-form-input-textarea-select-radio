import React from "react";
import "./style.css";

class App extends React.Component {
  state = {
    name: 'World',
    username: '',
    password: '',
    comment: '',
    remember: false,
    color: '',
    sex: '',
  }

  handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    this.setState({
      [name]: type === 'checkbox'
        ? checked
        : value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // console.log(event.target.elements.username.value)
    // console.log(event.target.elements.password.value)
    console.log(this.state)
  }

  render() {
    return (
      <div className="App">
        <h1>Hello {this.state.name}</h1>
        
        <div>
          <label htmlFor="sex_m">Male</label>
          <input
            type="radio"
            name="sex"
            id="sex_m"
            value="m"
            checked={this.state.sex === 'm'}
            onChange={this.handleChange}
          />

          <label htmlFor="sex_f">Female</label>
          <input
            type="radio"
            name="sex"
            id="sex_f"
            value="f"
            checked={this.state.sex === 'f'}
            onChange={this.handleChange}
          />
        </div>


        <select
          name="color"
          value={this.state.color}
          onChange={this.handleChange}
        >
          <option value="">Choose a color</option>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
        </select>

        <input
          type="text"
          value={this.state.name}
          onChange={(event) => {
            this.setState({
              name: event.target.value,
            })
          }}
        />

        <br />
        <br />

      <form onSubmit={this.handleSubmit}>
        <input
          type="checkbox"
          id="remember"
          name="remember"
          checked={this.state.remember}
          onChange={this.handleChange}
        />
        <label htmlFor="remember">
          Remember me
        </label>

        <br />

        <textarea
          name="comment"
          value={this.state.comment}
          onChange={this.handleChange}
        />

        <br />

        <input
          type="text"
          name="username"
          placeholder="Name"
          value={this.state.username}
          onChange={this.handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.handleChange}
        />

        <button type="submit">Sign in</button>
      </form>
      </div>
    )
  }
}

export default App;


// <input
//   type="text"
//   name="username"
//   placeholder="Name"
//   value={this.state.username}
//   onChange={(event) => {
//     const { name, value } = event.target;

//     this.setState({
//       [name]: value,
//     });
//   }}
// />

// <input
//   type="password"
//   name="password"
//   placeholder="Password"
//   value={this.state.password}
//   onChange={(event) => {
//     this.setState({
//       password: event.target.value,
//     });
//   }}
// />