export const heroesFetching = () => {
    return {
        type: 'HEROES_FETCHING'
    }
}

export const heroesFetched = (heroes) => {
    return {
        type: 'HEROES_FETCHED',
        payload: heroes
    }
}

export const heroesFetchingError = () => {
    return {
        type: 'HEROES_FETCHING_ERROR'
    }
}

export const heroRemoved = (id) => {
    return {
        type: 'HERO_REMOVED',
        payload: id
    }
}

export const addHero = (hero) => {
    return {
        type: 'HERO_ADDED',
        payload: hero
    }
}

export const filtersFetching = () => {
    return {
        type: 'FILTERS_FETCHING',
        
    }
}

export const filtersFetched = (filters) => {
    return {
        type: 'FILTERS_FETCHED',
        payload: filters
    }
}

export const filtersFetchError = () => {
    return {
        type: 'FILTERS_FETC_ERROR',
    }
}

export const filterActiveChange = (filter) => {
    return {
        type: 'FILTERS_ACTIVE_CHANGED',
        payload: filter
    }
}