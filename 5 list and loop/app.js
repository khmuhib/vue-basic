Vue.createApp({
    data() {
        return {
            todos: [
                { text: "Buy Milk", done: true },
                { text: "Buy Bag", done: false },
                { text: "Buy Pancil", done: true },
                { text: "Buy Photo", done: true },
                { text: "Buy Title", done: false }
            ],
        }
    },

    methods: {},
}).mount('#app')