/* eslint-disable prettier/prettier */
import axios, { AxiosInstance } from 'axios';

interface Song {
    id: number;
    title: string;
    artist: string;
    img: string;
}

const API_BASE_URL = 'http://localhost:3500';

const api: AxiosInstance = axios.create({
    baseURL: API_BASE_URL,
});

export const getSongs = async () => {
    const response = await api.get('/songs');
    return response.data;
};

export const getSongById = async (id: number) => {
    const response = await api.get(`/songs/${id}`);
    return response.data;
};

export const createSong = async (song: Song) => {
    const response = await api.post('/songs', song);
    return response.data;
};

export const updateSong = async (id: number, song: Song) => {
    const response = await api.put(`/songs/${id}`, song);
    return response.data;
};

export const deleteSong = async (id: number) => {
    const response = await api.delete(`/songs/${id}`);
    return response.data;
};

export const getSongByIds = async (ids: number[]) => {
    const response = await api.get(`/songs?ids=${ids.join(',')}`);
    return response.data;
};