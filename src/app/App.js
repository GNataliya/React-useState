import { useState } from 'react';

function App() {

  const [ showName, setNewName ] = useState('');

  const showUserName = (ev) => {
    setNewName(ev.target.value);
    console.log(ev.target.value)
  }

  const showSmth = () => {
    setNewName(' writed smth. ');
  }

  return (
    <>
      
        <label> User name: </label>
        <input type='text' placeholder="name" value={showName} onChange={showUserName} />
        
        <button type="submit" onClick={ showSmth } >Submit</button>

    </>






  // const [ showName, setNewName ] = useState(' ');
  // const [ showSurname, setNewSurname ] = useState(' ');

  // const showUserName = (ev) => {
  //   setNewName(ev.target.value);
  // }

  // const showUserSurname = (ev) => {
  //   setNewSurname(ev.target.value);
  // }

  // return (
  //   <>
  //     <form>
  //       <label> User name: </label>
  //       <input type='text' placeholder='name' value={showName} onChange={showUserName} />
        
  //       <label> User surname: </label>
  //       <input type='text' placeholder='surname' value={showSurname} onChange={showUserSurname}/>

  //       <button type="submit" onClick={({showUserName} && {showUserSurname}) ? ({showName} && {showUserSurname}) } >Submit</button>

  //     </form>
  //   </>
    );
} 


// function App() {

//   const [ showPassword, setShowPassword ] = useState(false);

//   const showDots = () => {
//     setShowPassword(!showPassword);
//   }

//   return (
//     <>
//       <input type={showPassword ? 'text' : 'password'} placeholder='name' />

//       <button type="button" onClick={showDots}>
//         {showPassword ? 'hide' : 'show'}
//       </button>
//     </>
//     );
// } 



export default App;
