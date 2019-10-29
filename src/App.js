import React from 'react';

// function App() {
  
//   return(
//   <div>
//   <label htmlFor="bar">
//     bar
//     </label><input type="text" onChange={() => {console.log("hihi")}} />
//   </div>

//   );
// }

const App = () => {
  const profiles = [
    {name: "taro" , age: 10},
    {name: "hanako" , age: 5},
    {name: "nobady"}
  ]
  return(
<div>
  {
    profiles.map((profile, index) => {
      return( <User name={profile.name} age={profile.age} key={index}/> );
    })

  }

</div>

  ) 
}
const User = (props) => {
  return <div>{props.name} and {props.age} years old </div>

}

User.defaultProps = {
age:1
}

export default App;
