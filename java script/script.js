const URL = "http://localhost:3000/students/2"

// fetch(URL).then(res=>{
//     if(res.ok){
//         console.log(res.status,res.statusText)
//     }
// }).catch(err=>console.log(err))



// let options = {
//     "method":"POST",
//     "headers":{
//         "content-Type":"application/json"
//     },
//     "body":JSON.stringify(
//         {
//             "id":"6",
//             "name":"Swapna",
//             "course":"javascript"
//         })
// }
// fetch(URL,options).then(res=>{
//     if(res.ok){
//         console.log(res.status,res.statusText)
//     }
// }).catch(err=>console.log(err))


// let options = {
//     "method":"PATCH",
//     "headers":{
//         "content-Type":"application/json"
//     },
//     "body":JSON.stringify(
//         {
            
//             "name":"Swapna",
//             "course":"SQL"
//         })
// }
// fetch(URL,options).then(res=>{
//     if(res.ok){
//         console.log(res.status,res.statusText)
//     }
// }).catch(err=>console.log(err))




// let options = {
//     "method":"PUT",
//     "headers":{
//         "content-Type":"application/json"
//     },
//     "body":JSON.stringify(
//         {
            
//             "name":"Swapna",
//             "course":"javascript"
//         })
// }
// fetch(URL,options).then(res=>{
//     if(res.ok){
//         console.log(res.status,res.statusText)
//     }
// }).catch(err=>console.log(err))


let options = {
    "method":"DELETE"
}
fetch(URL,options).then(res=>{
    if(res.ok){
        console.log(res.status,res.statusText)
    }
}).catch(err=>console.log(err))

