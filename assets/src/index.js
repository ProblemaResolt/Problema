'use strict';
<<<<<<< HEAD
require("./styles.scss");

=======

require("./styles.scss");

>>>>>>> 0d3729351ccbb117f4c46839362a7122c071520d
const {Elm} = require('./Main');
var app = Elm.Main.init({flags: 6});

app.ports.toJs.subscribe(data => {
    console.log(data);
})
// Use ES2015 syntax and let Babel compile it for you
var testFn = (inp) => {
    let a = inp + 1;
    return a;
}
