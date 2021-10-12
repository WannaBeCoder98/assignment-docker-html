const SomeApp = {
    data() {
        return {
            books: [],
        }
    },
    computed: {},
    methods: {
        fetchBookData() {
            fetch('/API/books/')
            .then( response => response.json() )
            .then( (responseJson) => {
                console.log(responseJson);
                this.books = responseJson;
            })
        },
        created(){
            this.fetchBookData();
        }
    }}

Vue.createApp(SomeApp).mount('#offerApp');