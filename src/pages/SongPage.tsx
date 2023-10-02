/* eslint-disable prettier/prettier */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from '@emotion/styled';
import { Box, Flex, Text } from 'rebass';
import { getSongsFetch } from '../features/song/songSlice';
import SongCardItem from '../componets/songItem/SongCardItem';
import { RootState } from '../app/store';
import { SongActionTypes } from '../features/types';
import { FC } from 'react';
import { SyncLoader } from 'react-spinners';
import { ToastContainer } from 'react-toastify';
import SideNav from '../componets/sideNav/SideNav';


const Loader = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const NotFound = styled(Flex)`
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const Image = styled.img`
    height: 100px;
    margin-right: 10px;
    display: inline-block;
`

const Container = styled(Flex)`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100%;
    gap: 2rem;
    flex-wrap: wrap;
    max-width: 1500px;
    padding-left: 3.5;
    margin: 0 auto;
    margin-left: 12.3rem;

    @media (max-width: 900px) {
        padding: 0 16px;
        flex-direction: column;
    }

    @media (max-width: 500px) {
        padding: 0 8px;
        margin-left: 5rem;
    }
    

    @media (min-width: 1650px) {
        justify-content: flex-start;
        flex-wrap: nowrap;
        gap: 1rem;
        margin-left: 20rem;

        & > * {
            flex-basis: calc(20% - 1rem);
        }
    }
`;


const SongsList: FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: SongActionTypes.GET_SONGS_FETCH });
        dispatch(getSongsFetch());
    }, [dispatch]);

    const { songs, isLoading } = useSelector((state: RootState) => state.song);



    return (
        <>
            <SideNav/>
            {isLoading ? (
                <Loader>
                    <SyncLoader color='#204a51' />
                </Loader>
            ) : songs.length > 0 ? (
                <Container  paddingTop="20px">
                    {songs.map((song) => (
                        <SongCardItem song={song} key={song.id}  />
                    ))}
                </Container>
            ) : (
                <NotFound justifyContent='center' alignContent='center' >
                    <Image src="/src/public/images/music-svgrepo-com.svg"  alt="" />
                    <Text>
                    No songs found.
                    </Text> 
                    </NotFound>
            )}

            <ToastContainer />
        </>
    );
};

export default SongsList;