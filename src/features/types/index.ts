/* eslint-disable prettier/prettier */
import Song  from "../../models/song";

export enum SongActionTypes {
    GET_SONGS_FETCH = 'GET_SONGS_FETCH',
    GET_SONGS_SUCCESS = 'GET_SONGS_SUCCESS',
    GET_SONGS_FAILURE = 'GET_SONGS_FAILURE',
    ADD_SONG = 'ADD_SONG',
    ADD_SONG_SUCCESS = 'ADD_SONG_SUCCESS',
    ADD_SONG_FAILURE = 'ADD_SONG_FAILURE',
    UPDATE_SONG = 'UPDATE_SONG',
    DELETE_SONG = 'DELETE_SONG',
    GET_SONG_BY_ID = 'GET_SONG_BY_ID',
    GET_SONG_BY_IDS = 'GET_SONG_BY_IDS',
    UPDATE_SONG_SUCCESS = "UPDATE_SONG_SUCCESS",
    UPDATE_SONG_FAILURE = "UPDATE_SONG_FAILURE",
    DELETE_SONG_SUCCESS = "DELETE_SONG_SUCCESS",
    DELETE_SONG_FAILURE = "DELETE_SONG_FAILURE",
    GET_SONG_BY_ID_SUCCESS = "GET_SONG_BY_ID_SUCCESS",
    GET_SONG_BY_ID_FAILURE = "GET_SONG_BY_ID_FAILURE",
    GET_SONG_BY_IDS_SUCCESS = "GET_SONG_BY_IDS_SUCCESS",
    GET_SONG_BY_IDS_FAILURE = "GET_SONG_BY_IDS_FAILURE"
}

export interface AddSongAction {
    type: typeof SongActionTypes.ADD_SONG;
    payload: Song;
}

export interface UpdateSongAction {
    type: typeof SongActionTypes.UPDATE_SONG;
    payload: Song;
}

export interface DeleteSongAction {
    type: typeof SongActionTypes.DELETE_SONG;
    payload: number;
}

export interface GetSongsFetchAction {
    type: typeof SongActionTypes.GET_SONGS_FETCH;
}

export interface GetSongsSuccessAction {
    type: typeof SongActionTypes.GET_SONGS_SUCCESS;
    payload: Song[];
}

export interface GetSongsFailureAction {
    type: typeof SongActionTypes.GET_SONGS_FAILURE;
    payload: string;
}

export interface GetSongByIdAction {
    type: typeof SongActionTypes.GET_SONG_BY_ID;
    payload: number;
}

export interface GetSongByIdsAction {
    type: typeof SongActionTypes.GET_SONG_BY_IDS;
    payload: number;
}

export type SongAction =
    | AddSongAction
    | UpdateSongAction
    | DeleteSongAction
    | GetSongsFetchAction
    | GetSongsSuccessAction
    | GetSongsFailureAction
    | GetSongByIdAction
    | GetSongByIdsAction;