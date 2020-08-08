import './css/index.css'
import './css/index.less'
// import './css/index.scss'

function test() {
    console.log('hi leslie~')
}
test()

class Person {
    constructor() {
        this.name = 'leslie'
    }
    static info = 'xxx'
}
console.log(Person.name)
console.log(Person.info)

import Vue from 'vue';
import App from './components/App.vue'
new Vue({
    el: '#app',
    render: h => h(App),
    data() {
        return{
            name: 'vue hi leslie~',
        }
    },
    created() {
        this.test()
    },
    methods: {
        test() {
            console.log(this.name)
        }
    }
})