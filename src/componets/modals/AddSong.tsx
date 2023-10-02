/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from '@emotion/styled';
import { closeModal } from '../../features/modal/ModalSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputContainer = styled.label`
  position: relative;
`;

const InputField = styled.input`
  margin-bottom: 0.5rem;
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
  border: 0.14em solid #163742ca;
  background: rgba(#16374292, 0.2);
  border-radius: 0.5em 0.5em;
  padding: 0.4em;
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
  margin-left: 0.5rem;
  margin-top: 0.7rem;
  padding-bottom: 0.4rem;
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
  margin: 0.5em;
  padding: 0.5em 1.3em;
  transition: transform 0.5s ease-in-out;
  font-size: 0.9rem;
  font-weight: bold;
  margin-top: 2rem;

  &:hover {
    cursor: pointer;
    transform: translateY(0.5px);
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.2);
  }
  // media queries
  @media (max-width: 393px) {
    width: 6rem;
    height: 3rem;
    font-size: 0.7rem;

  }
`;

const AddSong: React.FC = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: any) => state.modal.isOpen);
  const [openModal, setOpenModal] = useState(false);
  const [artist, setArtist] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [title, setTitle] = useState('');

  useEffect(() => {
    setOpenModal(isOpen);
  }, [isOpen]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    var id = parseInt(Date.now().toString());
    const payloadObject = {
      id: id,
      artist: artist,
      title: title,
      img: imgUrl,
    };
    dispatch({ type: 'songs/addSong', payload: payloadObject });

    dispatch(closeModal());
  };

  const notify = () => toast('Added a Song Successfully!');
  if (isOpen === false) {
    return null;
  }

  return (
    <Modal>
      <div
        css={{
          backgroundColor: '#9ab1c3b7',
          minWidth: '40rem',
          height: '25rem',
          '@media (max-width: 660px)': {
            minWidth: '100%',
            borderRadius: '0',
          },
          borderRadius: '1rem',
          boxShadow: '0 0 10px rgba(0,0,0,0.5)',
          border: 'none',
          padding: '2rem',
          transition: 'transform 0.5s',
          transform: openModal ? 'translateY(0)' : 'translateY(-100vh)',
          // media queries
          '@media (max-width: 725px)': {
            minWidth: '15rem',
          },
          '@media (max-width: 554px)': {
            minWidth: '5rem',
          },
        }}
      >
        <form
          onSubmit={handleSubmit}
          css={{
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
              placeholder=""
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
              placeholder=""
              onChange={(e) => setArtist(e.target.value)}
            />
            <InputLabel
              className="input__label"
              css={{
                marginTop: '3.2rem',
              }}
            >
              Artist Name
            </InputLabel>
          </InputContainer>
          <InputContainer className="input">
            <InputField
              className="input__field"
              type="text"
              id="img"
              name="img"
              value={imgUrl}
              placeholder=""
              onChange={(e) => setImgUrl(e.target.value)}
            />
            <InputLabel
              className="input__label"
              css={{
                marginTop: '3.2rem',
              }}
            >
              Image URL
            </InputLabel>
          </InputContainer>
          <Button css={{ marginLeft: '10rem',
          '@media (max-width: 725px)': {
            marginLeft: '2rem',
          },
          '@media (max-width: 554px)': {
            marginLeft: '.4rem',
          },
          
        
        }} onClick={notify}>
            Add Song
          </Button>
          <Button
            css={{
              backgroundColor: '#d1cbce',
              color: '#132f39',
              border: '2px solid #beb7bb',
            }}
            onClick={() => {
              dispatch(closeModal());
            }}
          >
            Cancel
          </Button>
        </form>
      </div>
    </Modal>
  );
};

export default AddSong;