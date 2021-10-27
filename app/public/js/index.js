const SomeApp = {
    data() {
        return {
            books:[],
            infoForm: {},
            selectedBook: null
        }
    },
    computed: {},
    methods: {
        fetchBookData() {
            fetch('/API/books/index.php')
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
                this.resetinfoForm();
              });
        },
        resetinfoForm() {

            this.infoForm = {};
        },
        // Books Update & Delete
        postEditBook(evt) {
                
            console.log("Updating!", this.infoForm);
    
            fetch('API/books/update.php', {
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
                
                this.resetinfoForm();
              });
          },
          postDeleteBook(b) {
            if (!confirm("Are you sure you want to delete "+b.title+"?")) { // confused here as well
                return;
            }
            
            fetch('API/books/delete.php', {
                method:'POST',
                body: JSON.stringify(b),
                headers: {
                  "Content-Type": "application/json; charset=utf-8"
                }
              })
              .then( response => response.json() )
              .then( json => {
                console.log("Returned from post:", json);
                // TODO: test a result was returned!
                this.books = json;
                
                this.resetinfoForm();
              });
          },
          selectBook(b) { // confused here as well 
            this.selectedBook = b;
            this.infoForm = Object.assign({}, this.selectedBook);
          },
          resetinfoForm() { // think I understand this
            this.selectedBook = null;
            this.infoForm = {};
          },
          postBook(evt) {
            if (this.selectedBook === null) {
                this.postNewBook(evt);
            } else {
                this.postEditBook(evt);
            }
          },
        
    },
    created(){
        this.fetchBookData();
    }

}

Vue.createApp(SomeApp).mount('#offerApp');