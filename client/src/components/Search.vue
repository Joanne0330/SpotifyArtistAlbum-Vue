<template>
    <div>
        <h1>Welcome to Search Albums By Name of the Artist</h1>
        <br>
        <a v-bind:href="url">Log out here</a>
        <br>
         <form @submit="searchAlbums">
            <!-- to pass input value to state, use v-model -->
            <input class="input-box" type="text" v-model="name" name="name" placeholder="Artist's name here...">
            <input type="submit" value="Submit" class="btn">
        </form>
        <div v-bind:key="album.id" v-for="album in albumData">
            <div>
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
            const auth = 'BQAd0v3I_ZvjDd7cG_EmUIG78IV0qORxWX0vPDCgIB5J33P3DIwOJAN3kHBVbu-RijgGF71QTmhtLjSF1GyQYExEBBYrD3glYFaL_xEQolsMvL0qslGnPWmMa--jRnK-s7Md76SA0OY9EW095A';
            // console.log(auth)
            const res = await axios.get(`http://localhost:5000/auth/search/${auth}/${name}`)
            this.albumData = res.data    

            this.name = '';
        }
    }
}
</script>