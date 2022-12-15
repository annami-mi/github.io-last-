import {createRouter, createWebHashHistory} from "vue-router";

import pageEpisodes from "@/page/pageEpisodes.vue";
import pageCharacters from "@/page/pageCharacters";
import pageLocations from "@/page/pageLocations";
import itemEpisodes from "@/page/itemEpisode.vue";
import itemCharacter from "@/page/itemCharacter";
import itemLocation from "@/page/itemLocation";
// import filtersLine from "@/components/filtersLine";

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'main',
            component: pageEpisodes
        },
        {
            path: '/episode/:id',
            name: 'episodePage',
            component: itemEpisodes
        },
        {
            path: '/character/',
            name: 'charactersPage',
            component: pageCharacters
        },
        {
            path: '/character/:id',
            name: 'characterItem',
            component: itemCharacter,
        },
        {
            path: '/location/',
            name: 'locationsPage',
            component: pageLocations
        },
        {
            path: '/location/:id',
            name: 'locationItem',
            component: itemLocation
        },
    ]
})