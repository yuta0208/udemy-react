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
  return(
<div>

<Cat />
<Cat />
<Cat />

</div>

  ) 
}
const Cat = () => {
  return <div>nyan!</div>
}

export default App;
