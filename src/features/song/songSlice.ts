/* eslint-disable prettier/prettier */
import { createSlice, current, PayloadAction } from "@reduxjs/toolkit"

interface Song {
    id: number
    title: string
    artist: string
    img: string
}

interface SongState {
    songs: Song[]
    isLoading: boolean
    error: string | null
    editSong?: Song[]
    indSong?: number
}


const initialState: SongState = {
    songs: [],
    isLoading: false,
    error: null,
}



const songSlice = createSlice({
    name: "songs",
    initialState,
    reducers: {
        addSong: (state: SongState, action: PayloadAction<Song>) => {
        state.songs.push(action.payload)
        },
        updateSong: (state: SongState, action: PayloadAction<Song>) => {
        const { id, title, artist, img } = action.payload
        const songToUpdate = state.songs.find((song) => song.id === id)
        if (songToUpdate) {
            songToUpdate.title = title
            songToUpdate.artist = artist
            songToUpdate.img = img
        }
        },
        deleteSong: (state: SongState, action: PayloadAction<number>) => {
        const songIndex = state.songs.findIndex(
            (song) => song.id === action.payload,
        )
        if (songIndex !== -1) {
            state.songs.splice(songIndex, 1)
        }
        },
        setLoading: (state: SongState, action: PayloadAction<boolean>) => {
        state.isLoading = action.payload
        },
        setError: (state: SongState, action: PayloadAction<string>) => {
        state.error = action.payload
        },
        getSongsFetch: (state: SongState) => {
        state.isLoading = true
        },
        getSongsSuccess: (state: SongState, action: PayloadAction<Song[]>) => {
        state.isLoading = false
        state.songs = action.payload
        },
        getSongsFailure: (state: SongState, action: PayloadAction<string>) => {
                state.isLoading = false;
                state.error = action.payload;

        },
        getSong: (state: SongState, action: PayloadAction<number>) => {
        const getSongById = current(state).songs.filter(
            (s) => s.id === action.payload,
        )
        state.editSong = getSongById
        },
        getSongByIds: (state: SongState, action: PayloadAction<number>) => {
        state.isLoading = true
        state.indSong = action.payload
        },
    },
})

export const {
    addSong,
    updateSong,
    deleteSong,
    setLoading,
    setError,
    getSongsFetch,
    getSongsSuccess,
    getSongsFailure,
    getSongByIds,
    getSong,
} = songSlice.actions

export default songSlice.reducer
