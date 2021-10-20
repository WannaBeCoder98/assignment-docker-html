const SomeApp = {
    data() {
        return {
            books:[],
            infoForm: {}
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

        postNewBook(evt) {   
            
            console.log("Posting!", this.infoForm);
    
            fetch('API/books/create.php', {
                method:'POST',
                body: JSON.stringify(this.infoForm),
                headers: {
                  "Content-Type": "application/json; charset=utf-8"
                }
              })
              .then( response => response.json() )
              .then( json => {
                console.log("Returned from post:", json);
                // TODO: test a result was returned!
                this.books = json;
                
                // reset the form
                this.resetinfoForm = {};
              });
        }
        
    },
    created(){
        this.fetchBookData();
    }

}

Vue.createApp(SomeApp).mount('#offerApp');