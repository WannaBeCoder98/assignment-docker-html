/* // Source: https://github.com/tag/msis-in-class-2021/blob/blue-2021/public/js/index.js


const personApp = {
    data() {
      return {
        result: [],
        student: [],
        offer: [],
        selectStudents: null
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
            })
        },

        selectStudent(s){
            if (s == this. selectedStudent) {
                return;
            }
            this. selectedStudent = s;
            this.offers = [];
            this. fetchOfferData(this.selectedStudent);

        },

        fetchSudentData() {
            fetch('/API/student')
            .then(response => response.json())
            .then((json) => {
                console.log("Got json back:", json);
                this.student = json.students[0];
                console.log("C");
            })
            .catch( (error) => {
                console.error(error);
            })
        },

        fetchOfferData() {
            console.log("Fetching offer data for ", s);
            fetch('/API/offer/?student=' + s.id)
            .then(response => response.json())
            .then((json) => {
                console.log("Got json back:", json);
                this.offer = json.offers[0];
                console.log("C");
            })
            .catch( (error) => {
                console.error(error);
            })
        }
    },
    created() {
        this.fetchUserData();
    }

  }
  
  Vue.createApp(personApp).mount('#personApp'); */


const SomeApp = {
    data() {
    return {
        students: [],
        selectedStudent: null,
        offers: []
    }
    },
    computed: {},
    methods: {
        prettyData(d) {
            return dayjs(d)
            .format('D MMM YYYY')
        },
        prettyDollar(n) {
            const d = new Intl.NumberFormat("en-US").format(n);
            return "$ " + d;
        },
        selectStudent(s) {
            if (s == this.selectedStudent) {
                return;
            }
            this.selectedStudent = s;
            this.offers = [];
            this.fetchOfferData(this.selectedStudent);
        },
        fetchStudentData() {
            fetch('/api/student/')
            .then( response => response.json() )
            .then( (responseJson) => {
                console.log(responseJson);
                this.students = responseJson;
            })
            .catch( (err) => {
                console.error(err);
            })
        },
        fetchOfferData(s) {
            console.log("Fetching offer data for ", s);
            fetch('/api/offer/?student=' + s.id)
            .then( response => response.json() )
            .then( (responseJson) => {
                console.log(responseJson);
                this.offers = responseJson;
            })
            .catch( (err) => {
                console.error(err);
            })
            .catch( (error) => {
                console.error(error);
            });
        }
    },
    created() {
        this.fetchStudentData();
    }

    }

    Vue.createApp(SomeApp).mount('#offerApp');