// Install dulu axios belom gw install

import axios from 'axios';

const API_URL = 'http://localhost:3000';  // samain di be lu bener ga portnya

export const getAllRooms = async () => {  // ganti nama
    try {
        const response = await axios.get(`${API_URL}/room`);  // ganti path /room
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.error('Error fetching Rooms:', error);  // ini juga ganti namanya 'Rooms'
        throw error;
    }
};

// sisanya sama ganti2 di bagian itu

export const addRoom = async (roomData) => { // ganti
    try {
        const response = await axios.post(`${API_URL}/room/create`, roomData); // ganti
        return response.data;
    } catch (error) {
        console.error('Error adding trainer:', error); // ganti
        throw error;
    }
};

export const updateRoom = async (id, roomData) => {
    try {
        const response = await axios.put(`${API_URL}/room/update/${id}`, roomData); // ganti path, kalo masi error chat gw
        return response.data;
    } catch (error) {
        console.error('Error updating room:', error); // ganti
        throw error;
    }
};

export const deleteRoom = async (id) => { // ganti
    try {
        const response = await axios.delete(`${API_URL}/room/delete/${id}`); // ganti path, kalo masi error chat gw
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.error('Error deleting trainer:', error);
        throw error;
    }
};
