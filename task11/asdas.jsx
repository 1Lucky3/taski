import React,{useState} from "react";

const User = () => {
  const [value, setValue] = useState('');
  return(
    <>
      <div className="vasya" style={{border: '1px solid gray'}} >
        <label htmlFor="name">Enter your name: </label>
        <input 
          type="text" 
          id="name" 
          value={value}
          onChange={event => setValue(event.target.value)} 
        />
      </div>
      <p>{value}</p>
    </>
  );
}

export default User;