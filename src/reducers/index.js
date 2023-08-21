const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle',
    filters: [],
    filteredHeroes: [],
    activeFilter: 'all',
    filterLoadingStatus: 'idle'
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'HEROES_FETCHING':
            return {
                ...state,
                heroesLoadingStatus: 'loading'
            }
        case 'HEROES_FETCHED':
            return {
                ...state,
                heroes: action.payload,
                filteredHeroes: state.activeFilter === 'all' ? 
                            state.heroes : 
                            state.heroes.filter(hero => hero.element === state.activeFilter),
                heroesLoadingStatus: 'idle'
            }
        case 'HEROES_FETCHING_ERROR':
            return {
                ...state,
                heroesLoadingStatus: 'error'
            }
        case 'HERO_REMOVED':
            const updatedHeroes = state.heroes.filter(hero => hero.id !== action.payload) 
            return {
                ...state,
                heroes: updatedHeroes
            }
        case 'HERO_ADDED':
            return{
                ...state,
                heroes: [...state.heroes, action.payload]
            }
        case 'FILTERS_FETCHING': 
            return{
                ...state,
                filterLoadingStatus: 'loading'
            }
        case 'FILTERS_FETCHED': 
        return{
            ...state,
            filters: action.payload,
            filterLoadingStatus: 'idle'
        }
        case 'FILTERS_FETC_ERROR': 
        return{
            ...state,
            filterLoadingStatus: 'error'
        }
        case 'FILTERS_ACTIVE_CHANGED': 
        return{
            ...state,
            activeFilter: action.payload,
            filteredHeroes: action.payload == 'all' ? 
                            state.heroes : 
                            state.heroes.filter(hero => hero.element === action.payload) 
        }
        default: return state
    }
}

export default reducer;