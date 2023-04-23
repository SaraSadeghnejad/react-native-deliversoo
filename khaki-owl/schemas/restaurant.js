export default {
    name:"restaurant",
    title:"Restaurant",
    type:"document",
    fields:[
        {name:"name",
         type:"string",
         title:"Restaurant Name",
         validate:(Rule)=>Rule.required()
        }]
}