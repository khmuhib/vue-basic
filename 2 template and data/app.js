Vue.createApp({
    data() {
        return {
            count: 0,
        };
    },
    methods: {
        increase(x) {
            console.log(x)
            this.count++
        }
    },
}).mount("#app");