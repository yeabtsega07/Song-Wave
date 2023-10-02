/* eslint-disable prettier/prettier */
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { SongActionTypes } from '../types';
import { getSongs, getSongById, createSong, updateSong, deleteSong, getSongByIds } from '../../api/index';
import { PayloadAction } from '@reduxjs/toolkit';
import { setLoading, setError, getSongsSuccess, getSongsFailure, addSong, updateSong as updateSongAction, deleteSong as deleteSongAction, getSongByIds as getSongByIdsSuccess ,getSong} from '../song/songSlice';
import Song from '../../models/song';
import { useCallback } from 'react';

export function* handleGetSongs(): Generator<any, void, any> {
    try {
        yield put(setLoading(true));
        const songs = yield call(getSongs);
        yield put(getSongsSuccess(songs));
    } catch (error) {
        const errorMessage = error as string;
        yield put(setError(errorMessage));
        yield put(getSongsFailure(errorMessage));
    }
}

export function* watchGetSongs()  {
    yield takeLatest(SongActionTypes.GET_SONGS_FETCH, handleGetSongs);
}

export function* handleAddSong(action: PayloadAction<Song>) : Generator<any, void, any> {
    try {
        yield call(createSong, action.payload);
    } catch (error) {
        const errorMessage = error as string;
        yield put(setError(errorMessage));
        yield put(getSongsFailure(errorMessage));
    }
}

export function* watchAddSong() {
    console.log("watchAddSong")
    yield takeLatest("songs/addSong", handleAddSong);
}



export function* handleUpdateSong(action: PayloadAction<Song>) : Generator<any, void, any> {
    console.log("handleUpdateSong");

    try {
        yield call(updateSong, action.payload.id, action.payload);

    } catch (error) {
        const errorMessage = error as string;
        yield put(setError(errorMessage)); // Consider combining these actions
        yield put(getSongsFailure(errorMessage));
    }
}

export function* watchUpdateSong() {
    yield takeLatest("songs/updateSong", handleUpdateSong);
}

export function* handleDeleteSong(action: PayloadAction<number>) : Generator<any, void, any> {
    try {
        yield call(deleteSong, action.payload);
    } catch (error) {
        const errorMessage = error as string;
        yield put(setError(errorMessage));
        yield put(getSongsFailure(errorMessage));
    }
}

export function* watchDeleteSong() {
    yield takeLatest("songs/deleteSong", handleDeleteSong);
}

export function* handleGetSongById(action: PayloadAction<number>) : Generator<any, void, any> {
    try {
        console.log("handleGetSongById")
        const song = yield call(getSongById, action.payload);
        yield put(getSongByIdsSuccess(song));
    } catch (error) {
        const errorMessage = error as string;
        yield put(setError(errorMessage));
        // yield put(getSongByIdFailure(errorMessage));
    }
}

export function* watchGetSongById() {
    yield takeLatest("songs/getSong", handleGetSongById);
}

export function* handleGetSongByIds(action: PayloadAction<number[]>) : Generator<any, void, any> {
    try {
        const songs = yield call(getSongByIds, action.payload);
        yield put(getSongByIdsSuccess(songs));
    } catch (error) {
        const errorMessage = error as string;
        yield put(setError(errorMessage));
        // yield put(getSongByIdsFailure(errorMessage));
    }
}

export function* watchGetSongByIds() {
    yield takeLatest(SongActionTypes.GET_SONG_BY_IDS, handleGetSongByIds);
}

export default function* songSaga() {
    yield all([
        watchGetSongs(),
        watchAddSong(),
        watchUpdateSong(),
        watchDeleteSong(),
        watchGetSongById(),
        watchGetSongByIds(),
    ]);
}