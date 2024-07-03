const obj = {
    name : 'ali jafar',
    age : 19,
    cnic : '36304-5953804-3',
    date : 8989898989898989,
    WhatIsMyName : function(){
    console.log(`My name is ${this.name}`)
    }
}
delete obj.name
console.log(obj.name)
obj.WhatIsMyName()