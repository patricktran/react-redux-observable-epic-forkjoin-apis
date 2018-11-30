import types from '../types';

const loadData = () => ({
    type: types.LOAD_DATA
});

const setData = (jedi, planet, starship) => ({
    type: types.SET_DATA,
    payload: {
        jedi,
        planet,
        starship
    }
})

export default {
    loadData,
    setData
}