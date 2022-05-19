const app = Vue.createApp({
    data() {
        return {
            todos: [
                { text: "Buy Milk", done: true },
                { text: "Buy Bag", done: false },
                { text: "Buy Pancil", done: true },
                { text: "Buy Photo", done: true },
                { text: "Buy Title", done: false },
            ],
        };
    },
});

app.component("todo", {
    props: ["todo"],
    methods: {},

    template: `
    <!-- Todo Elements -->
    <div v-for=""class="mt-3 py-3 px-4 rounded-3 shadow d-flex justify-content-between align-items-center">
        <p class="mb-0">{{todo.text}}</p>
        <button v-if="!todo.done" class="btn btn-success" @click="todo.done  = true">Done</button>
        <button v-else class="btn btn-danger" @click="todo.done  = false">Note Done</button>
    </div>
    <!-- ./ Todo Elements  -->
    
    `,
});

app.mount("#app");