const app = Vue.createApp({
    data() {
        return {
            firstName: "",
            lastName: "",
        };
    },

    computed: {
        fullname() {
            return `${this.firstName} ${this.lastName}`
        }
    },
});

app.component();

app.mount("#app");