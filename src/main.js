import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'

import './assets/main.css'

const store = createStore({
    state () {
        return {
            progress: 0,
            stages: [{
                'name': 'Этап первый',
                'id': 1,
                'thresholdPoints': 25,
                'games': [
                    {
                        'name': 'Игра 1.1',
                        'bestResult': 0,
                        'isPlayed': false
                    }
                ]
            },
                {
                    'name': 'Этап второй',
                    'id': 2,
                    'thresholdPoints': 50,
                    'games': [
                        {
                            'name': 'Игра 2.1',
                            'bestResult': 0,
                            'isPlayed': false
                        }
                    ]
                },
                {
                    'name': 'Этап третий',
                    'id': 3,
                    'thresholdPoints': 100,
                    'games': [
                        {
                            'name': 'Игра 3.1',
                            'bestResult': 0,
                            'isPlayed': false
                        }
                    ]
                },
                {
                    'name': 'Этап четвёртый',
                    'id': 4,
                    'thresholdPoints': 200,
                    'games': [
                        {
                            'name': 'Игра 4.1',
                            'bestResult': 0,
                            'isPlayed': false
                        }
                    ]
                },
                {
                    'name': 'Этап пятый',
                    'id': 5,
                    'thresholdPoints': 500,
                    'games': [
                        {
                            'name': 'Игра 5.1',
                            'bestResult': 0,
                            'isPlayed': false
                        }
                    ]
                },
                {
                    'name': 'Этап шестой',
                    'id': 6,
                    'thresholdPoints': 1000,
                    'games': [
                        {
                            'name': 'Игра 6.1',
                            'bestResult': 0,
                            'isPlayed': false
                        },
                        {
                            'name': 'Игра 6.2',
                            'bestResult': 0,
                            'isPlayed': false
                        }
                    ]
                },
                {
                    'name': 'Этап первый',
                    'id': 1,
                    'thresholdPoints': 25,
                    'games': [
                        {
                            'name': 'Игра 1.1',
                            'bestResult': 0,
                            'isPlayed': false
                        }
                    ]
                }
            ]
        }
    },
    mutations: {
        increment(state) {
            state.progress++
        }
    }
})

createApp(App).use(store).mount('#app')

