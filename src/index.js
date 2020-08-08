import './css/index.css'
import './css/index.less'
// import './css/index.scss'
// import Vue from 'vue';
// new Vue({
//     el: '#block',
//     data() {
//         return{
//             name: 'hi leslie~',
//         }
//     },
//     created() {
//         this.test()
//     },
//     methods: {
//         test() {
//             console.log('hi leslie~')
//         }
//     }
// })
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