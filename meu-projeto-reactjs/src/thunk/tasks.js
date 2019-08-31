import axios from 'axios';
import { receiveTasks, setFetchingTasks } from '../redux/tasks';

export const requestTasksThunk = () => {
    return (dispatch, getState) => {
        dispatch(setFetchingTasks(true));

        return axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(response => {
                // invocar quando a requisição terminar com status 2XX
                const { data } = response
                dispatch(receiveTasks({
                    data,
                    error: null,
                }));
            })
            .catch(error => {
                // invocar quando houver um erro 4XX, 5XX ou até mesmo falta de internet
                console.warn(error);
                dispatch(receiveTasks({
                    data: [],
                    error: error.message,
                }));
            })
            .finally(() => {
                dispatch(setFetchingTasks(false));
            });
    };
}