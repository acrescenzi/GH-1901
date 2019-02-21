import axios from 'axios';
import { ADD_CAMPUS, SELECT_CAMPUS, SET_CAMPUSES, SET_STUDENTS } from './constants';

// ACTION CREATORS

export const setCampuses = (campuses) => {
  return {
    type: SET_CAMPUSES,
    campuses
  };
};

export const selectCampus = (campus) => {
  return {
    type: SELECT_CAMPUS,
    campus
  };
};

export const addCampus = (campus) => {
  return {
    type: ADD_CAMPUS,
    campus
  };
};

export const setStudents = (students) => {
  return {
    type: SET_STUDENTS,
    students
  };
};

// THUNK CREATORS

export const fetchCampuses = () => {
  return async (dispatch) => {
    const response = await axios.get('/api/campuses')
    dispatch(setCampuses(response.data));
  };
};

export const postCampus = (campus) => {
  return async (dispatch) => {
    const response = await axios.post('/api/campuses', campus)
    dispatch(addCampus(response.data));
  };
};
