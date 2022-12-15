// базовый url https://rickandmortyapi.com/api/
// варианты:
// `https://rickandmortyapi.com/api/episode/?page=${page}`
// `https://rickandmortyapi.com/api/episode/?episode=S0${season}`
// `https://rickandmortyapi.com/api/episode/?name=${name}`
//
// const api = {
//     episode: {
//         page: `episode/?page=${page}`,
//         season: `episode/?episode=S0${season}`,
//         searchName: `episode/?name=${name}`,
//     }
// }

// export const loadList = urlParams =>
//     fetch(
//         `https://rickandmortyapi.com/api/${urlParams}`
//     ).then(r => r.json());
//


const api = {

    episode: {
        pageUrl: (page) => `https://rickandmortyapi.com/api/episode/?page=${page}`,
        // pageUrl: `https://rickandmortyapi.com/api/episode/?page=`,
        // seasonUrl: (season) `https://rickandmortyapi.com/api/episode/?episode=S0${season}`,
        // nameUrl: (name) `https://rickandmortyapi.com/api/episode/?name=${name}`
    },

}

export default api;
