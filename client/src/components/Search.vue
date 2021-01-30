<template>
    <div>
        <h1>Welcome to Search Albums By Name of the Artist</h1>
        <br>
        <a v-bind:href="url">Log out here</a>
        <br>
         <form @submit="searchAlbums">
            <!-- to pass input value to state, use v-model -->
            <input 
                class="input-box" 
                type="text" 
                v-model="name" 
                name="name" 
                placeholder="Artist's name here..."
            >{{' '}}
            <input 
                class="btn"
                type="submit" 
                value="Submit" 
            >
        </form>
        <div v-bind:key="album.id" v-for="album in albumData">
            <div class="cards-layout">
                <b-card
                    class="card"
                    :title="album.name"
                    :img-src="album.images[1].url"
                >
                </b-card>
                </div>
        </div>
    </div>
    
</template>

<script>
import axios from 'axios';

export default {
    name: "Search",
    data() {
        return {
            name: '',
            url: 'http://localhost:5000/auth/logout',
            albumData: []
        }
    },
    props: ["auth"],
    methods: {
        searchAlbums: async function (e) {
            e.preventDefault();
            const name = this.name;
            const auth = 'BQAlLB_0hTf849Sn6j7iimMcdRwFBROlTt7kflD-Sqch3c3Xe6IP_AgETSOTHP1Wjf21VGTFNnVXAbM-QU2UndBTucATWfXU7joBa_S5eY1JQ3hBcFpDGcCZdpYCspMyXXLtIDLgi1MMjaYNfQ';
            // console.log(auth)
            const res = await axios.get(`http://localhost:5000/auth/search/${auth}/${name}`)
            this.albumData = res.data    

            this.name = '';
        }
    }
}
</script>

<style scoped>
    .card {
        max-width: 30rem; 
        max-height: 35rem; 
        padding: 5rem; 
        margin: 2rem
    }

    .cards-layout {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }

    .btn {
        border: solid;
        border-color: cadetblue;
    }


</style>