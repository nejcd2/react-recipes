import styled from "styled-components"
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Search() {
  //use state je string "" da se dobi input
  // arrow function v inputu
  // onChange={(e) => setInput(e.target.value)}
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
   
    e.preventDefault();
    console.log("Submit");

    navigate('/searched/'+input);

  }

  return (
    <FormStyle onSubmit={submitHandler}>
    <div>   
        <FaSearch color="white"/>
            <input onChange={(e) => setInput(e.target.value)} 
            type="text" 
            value={input}/>
    </div>
    </FormStyle>
  )
}

const FormStyle = styled.form`
    margin: 0rem 20rem;

    div {
        width: 100%;
        position: relative;
    }
    
    input {
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.5rem;
        color: white;
        padding: 1rem 3rem;
        border: none;
        border-radius: 1rem;
        outline: none;
        width: 100%;
    }

    svg {
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
    }
`;

export default Search
