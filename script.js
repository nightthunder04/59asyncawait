async function harry (){
let delhiWheather = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve("27 deg")
  },1000)
})

let bangaloreWheather = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve("20 deg")
  },2000)
})
  // delhiWheather.then(alert)
  // bangaloreWheather.then(alert)
  let delhiW = await delhiWheather 
  let bangaloreW = await bangaloreWheather
  return [delhiW, bangaloreW]
}
console.log("welcom to wheather control room")
 let a = harry()
console.log(a)