import _ from 'lodash'
import printMe from './print.js' 
// import './style.css'

import { cube } from './math.js'

console.log(process)
console.log(process.env.NODE_ENV)
if(process.env.NODE_ENV != 'production'){
    console.log('Looks like we are in development mode!')
}

// function component(){
//     var element = document.createElement('div');
//     var btn = document.createElement('button')

//     element.innerHTML = _.join(['Hello', 'webpack'], ' ')
//     btn.innerHTML = 'Click me and check the console!'
//     btn.onclick = printMe

//     element.appendChild(btn)
  
//     return element
// }

function component(){
    var element = document.createElement('pre');
    element.innerHTML = [
        'Hello webpack',
        '5 cubed is equal to ' + cube(5)
    ].join('\n\n')

    return element
}

document.body.appendChild(component())

if(module.hot){
    module.hot.accept('./print.js',function(){
        console.log('Accepting the updated printMe module!')
        printMe()
    })
}