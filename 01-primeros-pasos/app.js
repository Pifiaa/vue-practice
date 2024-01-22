const app = Vue.createApp({
    // template: `
    //     <h1>Hola mundo</h1>
    //     <p>{{ 1 + 1}}</p>
    // `

    data() {
        return {
            message: 'Hola mundo'
        }
    },
    methods: {
        changeMessage() {
            this.message = 'Mensaje cambiado'
        }
    },
})

app.mount('#myApp')