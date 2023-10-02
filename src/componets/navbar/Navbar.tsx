/* eslint-disable prettier/prettier */
import React from 'react';
import styled from '@emotion/styled';
import { Box, Flex } from 'rebass';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../features/modal/ModalSlice';
import AddSong from '../modals/AddSong';

const Nav = styled(Flex)`
    background-color: #2b727ebc;
    color: #fff;
    justify-content: space-around;
    align-items: center;
    height: 5rem;
    position: sticky;
    top: 0;
    z-index: 1;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
`;

const NavLink = styled(Box)`
    padding: 1rem;
    text-decoration: none;
    color: #fff;
    font-weight: bold;
    font-size: 1.5rem;
    text-shadow: 0 0 1px #fff, 0 0 1px #fff, 0 0 1px #fff, 0 0 1px #fff;
    &:hover {
        cursor: pointer;
    }
`;

const Button = styled.button`
    background-color: #163742;
    color: white;
    border-radius: 7px;
    border: 2px solid #163742;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
    margin: 0.5em 1em;
    padding: 0.5em 1.3em;
    transition: transform 0.5s ease-in-out;
    font-size: .9rem;
    font-weight: bold;

    &:hover {
        cursor: pointer;
        /* transform: translateY(1px); */
        box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.2);
    }
`;

const Logo = styled.img`
    height: 60px;
    margin-right: 10px;
`;

const Navbar = () => {
    const dispatch = useDispatch();
    const isOpen = useSelector((state: any) => state.modal.isOpen);

    console.log(isOpen);

    return (
        <>
        <Nav overflowX="hidden">
            <Flex alignItems="center">
                <Logo src="https://res.cloudinary.com/dyzhbjom8/image/upload/v1696270126/icons8-music-100_ao0pco.svg" alt="SongWave Logo" />
                <NavLink as="a" href="/">
                    SongWave
                </NavLink>
            </Flex>
            <Button onClick={() => dispatch(openModal())}>Add Song</Button>
        </Nav>
        {isOpen && <AddSong />}
        </>
    );
};

export default Navbar;