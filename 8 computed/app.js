const app = Vue.createApp({
    data() {
        return {
            emailAddress: "",
        };
    },
    methods: {},
    watch: {
        emailAddress(val, oldVal) {
            console.log(val, oldVal);
        },
    },
});

app.mount("#app");