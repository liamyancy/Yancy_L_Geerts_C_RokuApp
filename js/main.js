import { fetchData } from "./modules/TheDataMiner.js";
import KidsMovies from "./modules/TheKidsMovies.js";
import KidsTV from "./modules/TheKidsTV.js";
import KidsMusic from "./modules/TheKidsMusic.js";
import ParentMovies from "./modules/TheParentMovies.js";
import ParentTV from "./modules/TheParentTV.js";
import ParentMusic from "./modules/TheParentMusic.js";

(() => {

    let vue_vm = new Vue({

        data: {
            rokuData: [],
            currentRokuData: {},
        },

        mounted: function() {
            console.log("Vue is mounted, trying a fetch for the initial data");
            
            fetchData("./includes/index.php")
                .then(data => {
                    data.forEach(tbl_ => this.rokuData.push(tbl_));
                })
                .catch(err => console.error(err));
        },

        updated: function() {
            console.log('Vue just updated the DOM');
        },

        components: {
            "kids-movie-data": KidsMovies,
            "kids-television-data": KidsTV,
            "kids-music-data": KidsMusic,
            "parent-movie-data": ParentMovies,
            "parent-television-data": ParentTV,
            "parent-music-data": ParentMusic
        }
        
    }).$mount("#app");
})();