/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import styled from "@emotion/styled";
import { Flex, Text } from "rebass";
import { useDispatch } from "react-redux";
import { deleteSong } from "../../features/song/songSlice";
import Song from "../../models/song";
import EditSong from "../modals/EditSong";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface SongCardItemProps {
    song: Song;
}

const Card = styled.div`
    position: relative;
    width: 250px;
    height: 300px;
    border-radius: 10px;
    overflow: hidden;
    color: #ddd;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    transition: box-shadow 0.4s;
    margin: 2rem;
    box-shadow: 7px 7px 0px rgba(0, 0, 0, 0.183);

    &:hover {
        box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5);
    }
`;

const CardImage = styled.img`
    position: absolute;
    z-index: 0;
    left: 0;
    top: 0;
    width: 250px;
    height: 100%;
    object-fit: cover;
    object-position: center;
    filter: brightness(0.5) blur(0.5px);
`;

const Info = styled.div<{ isVisible: boolean }>`
    position: absolute;
    z-index: 10;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 10px 15px;
    text-align: center;
    transform: translateY(${({ isVisible }) => (isVisible ? "0" : "100%")});
    opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
    transition: transform 0.5s ease-out, opacity 0.3s ease-out;
`;

const Buttons = styled.div<{ isVisible: boolean }>`
    position: absolute;
    z-index: 20;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 10px 15px;
    text-align: center;
    transform: translateY(${({ isVisible }) => (isVisible ? "0" : "100%")});
    opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
    transition: transform 0.7s ease-out, opacity 0.5s ease-out;
`;

const Button = styled.button`
    width: 3.5;
    /* height: 3rem; */
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
`;

const ButtonWrapper = styled.div`
    display: inline-block;
    margin: 0 8px;
`;

const SongCardItem: React.FC<SongCardItemProps> = ({ song }) => {
    const dispatch = useDispatch();
    const [, setIsHovered] = useState(false);
    const [areButtonsVisible, setAreButtonsVisible] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const notify = () => toast("Deleted a Song Successfully!");
    const handleDelete = () => {
        dispatch(deleteSong(song.id));
        notify();
    };

    const handleEdit = () => {
        console.log("edit");
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <>
            <Card
                onMouseEnter={() => {
                    setIsHovered(true);
                    setAreButtonsVisible(true);
                }}
                onMouseLeave={() => {
                    setIsHovered(false);
                    setAreButtonsVisible(false);
                }}
            >
                <CardImage src={song.img} alt={song.title} />
                <Info isVisible={!areButtonsVisible}>
                    <Text fontSize={3} fontWeight="bold" mb={2}>
                        {song.title}
                    </Text>
                    <Flex alignItems="center" mb={2}>
                        <Text fontSize={2} mr={1}>
                            Artist:
                        </Text>
                        <Text fontSize={2} fontWeight="bold">
                            {song.artist}
                        </Text>
                    </Flex>
                </Info>
                <Buttons isVisible={areButtonsVisible}>
                    <ButtonWrapper>
                        <Button onClick={handleEdit}>Edit</Button>
                    </ButtonWrapper>
                    <ButtonWrapper>
                        <Button
                            onClick={handleDelete}
                            css={{
                                backgroundColor: "#f44336",
                                border: "2px solid #f44336",
                            }}
                        >
                            Delete
                        </Button>
                    </ButtonWrapper>
                </Buttons>
            </Card>
            {isOpen && (
                <EditSong
                    songArtist={song.artist}
                    songTitle={song.title}
                    songImg={song.img}
                    songId={song.id}
                    handleClose={handleClose}
                />
            )}
        </>
    );
};

export default SongCardItem;