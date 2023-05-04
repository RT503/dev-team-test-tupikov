import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'

import './assets/main.css'

const store = createStore({
    state () {
        return {
            progress: 0
        }
    },
    mutations: {
        increment(state) {
            state.progress++
        }
    }
})

createApp(App).use(store).mount('#app')

