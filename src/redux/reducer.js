import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./types";

const initialState = {
    myFavorites: [],
    allCharacters: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_FAV: {
            return {
                ...state,
                myFavorites: [...state.allCharacters, action.payload],
                allCharacters: [...state.allCharacters, action.payload]
            }
        }
        case REMOVE_FAV: {
            const filteredFavs = state.allCharacters.filter((favorite) => favorite.id !== Number(action.payload))
            return {
                ...state,
                myFavorites: filteredFavs,
                allCharacters: filteredFavs
            }
        }
        case FILTER:
            if(action.payload === "All") return {...state, myFavorites: state.allCharacters}
            const allCharactersCopyFilter = [...state.allCharacters];
            
            const filteredCharacters = allCharactersCopyFilter.filter(character => character.gender === action.payload);
            return {
                ...state, myFavorites: filteredCharacters
            }
        case ORDER:
            const newOrder = state.allCharacters.sort((a, b) => {
                if (a.id > b.id) return "A" === action.payload ? 1 : -1;
                if (a.id < b.id) return "D" === action.payload ? 1 : -1;
                return 0;
            });
            return {
                ...state,
                myFavorites: newOrder
            }

        default: {
            return { ...state }
        }
    }
}

export default reducer;