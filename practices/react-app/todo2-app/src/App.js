import './App.css';
import React from 'react';
import User from './User/User';

export default class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      users: [
        { id: 1, name: "ali", age: 10 },
        { id: 2, name: "ahmad", age: 14 },
        { id: 3, name: "hassan", age: 20 },
        { id: 4, name: "mohamed", age: 30 },
      ],
      scores: [55, 47, 89, 65],
      count: 0
    }
    this.clickHandler = this.clickHandler.bind(this);
    this.code = 25;

    setTimeout(() => {
      this.setState({
        users: [
          { id: 1, name: "ava", age: 10 },
          { id: 2, name: "reza", age: 14 },
          { id: 3, name: "ilya", age: 20 },
          { id: 4, name: "akbar", age: 50 },
        ]
      })
    }, 3000)
  }

  clickHandler() {
    console.log(this)
    console.log('clicked, done');
    this.code = 56;
  }

  keyHandler() {
    console.log('key down');
  }

  changeUsersHandler() {
    //روش اول تغییر استیت this.setState({
    //   users: [
    //     { id: 1, name: "aaaaa", age: 0 },
    //     { id: 2, name: "vvvvvv", age: 4 },
    //     { id: 3, name: "jjjjj", age: 0 },
    //     { id: 4, name: "kkkkk", age: 0 },
    //   ]

    // }) 

    this.setState(prevState => {
      return {
        users: prevState.users.map(user => {
          if (user.id === 1) {
            return { ...user, name: "کگکگگکگ" }
          }
          if (user.id === 2) {
            return { ...user, name: "ییبیر" }
          }
          if (user.id === 3) {
            return { ...user, name: "عغععغ" }
          }
          if (user.id === 4) {
            return { ...user, name: "هنس" }
          }
          return user
        }),

        count: prevState.count + 1
      }
    })

  }
  render() {
    return (
      <div>
        {/* <h1 onClick={this.clickHandler.bind(this)}>{this.code}</h1>  روش اول  */}
        {/* <h1 onClick={() => this.clickHandler()}>{this.code}</h1>   روش دوم  */}
        <h1 onClick={this.clickHandler}>{this.code}</h1>

        <input type="text" onKeyDown={this.keyHandler} />

        <button onClick={this.changeUsersHandler.bind(this)}>change users</button>
        <User {...this.state.users[0]} />
        <User {...this.state.users[1]} />
        <User {...this.state.users[2]} />
        <User {...this.state.users[3]} />
        <div>{this.state.scores[2]}</div>
        <h3>{this.state.count}</h3>
      </div>
    )
  }
}




// export default function App() {

// const users = [
//   { id: 1, name: "ali", age: 10 },
//   { id: 2, name: "ahmad", age: 14 },
//   { id: 3, name: "hassan", age: 20 },
//   { id: 4, name: "mohamed", age: 30 },
// ]

//   return (
//     <div>
//       <User {...users[0]}/>
//       <User {...users[1]}/>
//       <User {...users[2]}/>
//       <User {...users[3]}/>
//     </div>
//   );
// }