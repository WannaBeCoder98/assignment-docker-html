// Source: https://github.com/tag/msis-in-class-2021/blob/blue-2021/public/js/index.js


const personApp = {
    data() {
      return {
        result: {},
      }
    },
    computed: {
        prettyBirthday() {
            return dayjs(this.result.dob.date)
            .format('D MMM YYYY')
        }
    },
    methods: {
        fetchUserData() {
            //Method 1:
            fetch('https://randomuser.me/api/')
            .then(response => response.json())
            .then((json) => {
                console.log("Got json back:", json);
                this.result = json.results[0];
                console.log("C");
            })
            .catch( (error) => {
                console.error(error);
            });
        }
    },
    created() {
        this.fetchUserData();
    }

  }
  
  Vue.createApp(personApp).mount('#personApp');