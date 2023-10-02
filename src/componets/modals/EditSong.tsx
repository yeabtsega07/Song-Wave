/* eslint-disable prettier/prettier */
import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from '@emotion/styled';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(5px); /* Add a blur effect to the background */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputContainer = styled.label`
  position: relative;
`;

const InputField = styled.input`
  margin-bottom: .5rem;
  box-sizing: border-box;
  display: block;
  width: 100%;
  height: 3.2rem;
  border: 3px solid currentColor;
  
  padding: calc(var(--size-bezel) * 1.5) var(--size-bezel);
  color: currentColor;
  background: #ffffff;


  &:focus,
  &:not(:placeholder-shown) {
    & + .input__label {
      transform: translate(0.25rem, -100%) scale(0.8);
      color: white;
      font-size: larger;
      
    }
  }
  &:focus {
    outline: none;
    border: 3px solid #032530;
  }
  appearance: none;
	border: none;
	outline: none;
	border: .14em solid #163742ca;
	background: rgba(#16374292, .2);
	border-radius: .5em .5em;
	padding: .4em;
	color: #14313a;
  margin-top: 3rem;
  font-size: large;
`;

const InputLabel = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  background: pink;
  white-space: nowrap;
  transform: translate(0, 0);
  transform-origin: 0 0;
  transition: transform 120ms ease-in;
  background: var(--color-background);
  font-weight: normal;
  line-height: 1.2;
  margin-left: .5rem;
  margin-top: .7rem;
  padding-bottom: .4rem;
  font-size: large;
  color: #163742;
`;

const Button = styled.button`
    width: 9rem;
    height: 3rem;
    background-color: #163742;
    color: white;
    border-radius: 7px;
    border: 2px solid #163742;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
    margin: 0.5em ;
    padding: 0.5em 1.3em;
    transition: transform 0.5s ease-in-out;
    font-size: .9rem;
    font-weight: bold;
    margin-top: 2rem;

    &:hover {
        cursor: pointer;
        transform: translateY(.5px);
        box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.2);
    }
`;

interface Props {
  songId: number;
  songTitle : string;
  songArtist : string;
  songImg : string;
  handleClose: () => void;
}
  

  

const EditSong: React.FC<Props> = ({songTitle, songArtist, songImg, songId, handleClose}) => {
  const dispatch = useDispatch();
  const [openModal] = useState(true);
  const [artist,setArtist] = useState(songArtist)
  const [imgUrl , setImgUrl] = useState(songImg)
  const [title ,setTitle] = useState(songTitle)
  const [isUpdated, setIsUpdated] = useState(false);



  console.log("songId",songId);
  console.log("artist",artist);
  console.log("title",title);
  console.log("imgUrl",imgUrl);
  console.log("isUpdated",isUpdated);

  const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isUpdated) {
      const payloadObject = {
        id:songId,
        artist:artist,
        title:title,
        img:imgUrl, 
      }
      console.log("before dispatch");
      dispatch({type:'songs/updateSong',payload:payloadObject});
      setIsUpdated(true);
      handleClose();
    }

  }, [isUpdated, songId, artist, title, imgUrl, dispatch, handleClose]);

  const notify = () => toast("Updated a Song Successfully!");

  return (
    <Modal >
      <div
        css={{
          backgroundColor: "#9ab1c3b7",
          minWidth: "40rem",
          height: "25rem",
          "@media (max-width: 660px)": {
            minWidth: "100%",
            borderRadius: "0",
          },
          borderRadius: "1rem",
          boxShadow: "0 0 10px rgba(0,0,0,0.5)",
          border: "none",
          padding: "2rem",
          transition: "transform 0.5s",
          transform: openModal ? "translateY(0)" : "translateY(-100vh)",
        }}
      >
        
      <form onSubmit={handleSubmit} 
      css = {{
        width: '100%',
        transition: 'all 0.3s ease-in-out',
        boxSizing: 'border-box',
  

      }}
      >
      <InputContainer className="input">
      <InputField
        className="input__field"
        type="text"
        id="title"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder=''
      />
      <InputLabel className="input__label">Song Title</InputLabel>
    </InputContainer>
    <InputContainer className="input">
      <InputField
        className="input__field"
        type="text"
        id="artist"
        name="artist"
        value={artist}
        placeholder=''
        onChange={(e) => setArtist(e.target.value)}
        
      />
      <InputLabel className="input__label"
      css = {{
        marginTop: '3.2rem',
      }}
      >Artist Name</InputLabel>
    </InputContainer>
    <InputContainer className="input">
      <InputField
        className="input__field"
        type="text"
        id="img"
        name="img"
        value={imgUrl}
        placeholder=''
        onChange={(e) => setImgUrl(e.target.value)}
      />
      <InputLabel className="input__label"
      css = {{
        marginTop: '3.2rem',
      }}
      >Image URL</InputLabel>
    </InputContainer>        
        <Button type='submit' 
        css = {{
          marginLeft: "10rem",
        }} onClick={notify}
        >Update Song</Button>
        <Button 
        css = {{backgroundColor: "#d1cbce",color:"#132f39", border: "2px solid #beb7bb"}}
        onClick= {handleClose} >Cancle</Button>

      </form>
      </div>
    </Modal>
  );
};

export default EditSong;


