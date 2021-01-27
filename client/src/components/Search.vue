<template>
    <div>
        <h1>Welcome to Search Albums By Artist's Name</h1>
        <br>
        <a v-bind:href="url">Log out here</a>
         <form @submit="searchAlbums">
            <!-- to pass input value to state, use v-model -->
            <input type="text" v-model="name" name="name" placeholder="Artist's name here...">
            <input type="submit" value="Submit" class="btn">
        </form>
        <div v-bind:key="album.id" v-for="album in albumData">
            <div>
                <b-card
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
            // const auth = this.auth;
            // console.log(auth)
            const res = await axios.get(`http://localhost:5000/auth/search/BQAdTWzqIUHckx_FIA3VfI1NzdiY9mUthoWT7yUUO6D9DVzqKLPCdZDfeYCXdZt9DVe-zTDzvJtBybEYltzgYh-OHC0JHh7C6Pdd8MSfqeX0ttcsfoOcvWbh6RORaFAyyV1SpYjPFvgfpsEsmA/${name}`)
            this.albumData = res.data    

            
        }
    }
}
</script>