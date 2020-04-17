const pool = require('./sinyal');

const fs = require('fs');

// fs.readFile('./subjects.json', 'utf8' , (err,data)=>{
//   if(err){
    
//     throw err
//   }else{
//     let dataParse = JSON.parse(data);
//     let text = 'INSERT INTO subjects(subject_name) VALUES'
//     for(var i = 0; i < dataParse.length; i++){
//       text += `('${dataParse[i].subject_name}')${i < dataParse.length -1 ? ', ' : ''}`
//     }

//     console.log(text)
//   pool
//   .query(text)
//   .then(res => {
    
//     console.log(res.rows)
   
//   })
 
//   .catch(e => console.error(e.stack))
  
//   }
// })

// fs.readFile('./students.json', 'utf8' , (err,data)=>{
//   if(err){
    
//     throw err
//   }else{
//     let dataParse = JSON.parse(data);
//     let text = 'INSERT INTO murid(first_name, last_name, email, gender, birth_date) VALUES'
//     for(var i = 0; i < dataParse.length; i++){
//       text += `('${dataParse[i].first_name}', '${dataParse[i].last_name}', '${dataParse[i].email}', '${dataParse[i].gender}', '${dataParse[i].birth_date}')${i < dataParse.length -1 ? ', ' : ''}`
//     }

//     console.log(text)
//   pool
//   .query(text)
//   .then(res => {
    
//     console.log(res.rows)
   
//   })
 
//   .catch(e => console.error(e.stack))
  
//   }
// })


fs.readFile('./teachers.json', 'utf8' , (err,data)=>{
  if(err){
    
    throw err
  }else{
    let dataParse = JSON.parse(data);
    let text = 'INSERT INTO guru(first_name, last_name, email, gender) VALUES'
    for(var i = 0; i < dataParse.length; i++){
      text += `('${dataParse[i].first_name}', '${dataParse[i].last_name}', '${dataParse[i].email}', '${dataParse[i].gender}')${i < dataParse.length -1 ? ', ' : ''}`
    }

    console.log(text)
  pool
  .query(text)
  .then(res => {
    
    console.log(res.rows)
   
  })
 
  .catch(e => console.error(e.stack))
  
  }
})

