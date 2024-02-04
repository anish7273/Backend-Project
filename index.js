const express= require('express');
const app= express();
const port=3000;

app.use(express.json());
let abc= 15;
const user= [{
    name: "john",
    kidney: [{
        healthy: false
    }]
}];

app.get('/',(req,res)=>{
    const johnkidney= user[0].kidney;
    const noofkidney= johnkidney.length;
    let noofhealthykidney= 0;
     noofhealthykidney= johnkidney.filter((a)=>a.healthy).length;
   let  noofunhealthykidney = noofkidney - noofhealthykidney;

   res.json({
    johnkidney,
    noofkidney,
    noofhealthykidney,
    noofunhealthykidney
   })

});

app.post('/',(req,res)=>{
    abc+=abc;
    let n= req.body.ishealthy;
    user[0].kidney.push({
        healthy: n
    })
   res.json({
    msg: "Done",
    abcm:abc
   })
})

app.put('/',(req,res)=>{
    
    for(let i=0;i<user[0].kidney.length;i++){
        user[0].kidney[0].healthy =true; 
    }
    res.json({
        msg: "update hogya",
        nt: abc
    })
})

app.delete('/',(req,res)=>{


    
  let newkidney = user[0].kidney.filter((kid)=>kid.healthy)
  user[0].kidney = newkidney;  
  res.json({
        msg: "new hogya"
    })
})

app.listen(port);

