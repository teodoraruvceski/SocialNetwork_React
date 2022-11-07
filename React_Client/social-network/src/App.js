import logo from './logo.svg';
import {useState,useEffect} from 'react';
import './App.css';
import * as React from 'react';
// import {
//   FormControl,
//   ChakraProvider,
//   FormLabel,
//   FormErrorMessage,
//   FormHelperText,
//   Button,
//   Input,
//   Flex
// } from '@chakra-ui/react'

function App() {
  const [title,setTitle]=useState('');
  const [content,setContent]=useState('');
  const Post=()=>{
    console.log('post ',title,' ',content);
    setContent('');
    setTitle('');
  }
  return (
    <div className="App">
      <input className='inputs' value={title} onChange={(e)=>{setTitle(e.target.value);}}></input><br/>
      <input className='inputs' value={content} onChange={(e)=>{setContent(e.target.value);}}></input><br/>
      <button className="post" onClick={Post}>Post</button>
    </div>
  
     

    
  );
}

export default App;
