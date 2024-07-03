const arr = [1,2,3,'ali jafar']
arr.push(true)
arr.unshift(false)
let arra = arr.slice(2,4)
arr.splice(0,4,'6','4',78,24)
console.log(arr.every(num => num%2===0))
arr.pop()
arr.shift()
for(const item of arr)
    console.log(item)
arr.forEach((item, index) =>{
console.log(`${index} <--------> ${item}`)
})

