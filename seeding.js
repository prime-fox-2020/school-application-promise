const pool = require(`./db/connection`)
const fs = require(`fs`)



let query1 =`
    INSERT INTO "students" ("first_name", "last_name", "email", "gender", "birt_date") VALUES `;

 fs.readFile(`./student.json`,(err,data)=>{

    data = JSON.parse(data)

    for (let i = 0; i < data.length; i++) {
        query1 += `('${data[i].first_name}','${data[i].last_name}','${data[i].email}', '${data[i].gender}','${data[i].birt_date}')`
        if( i < data.length-1) query1+=','
    }

    pool.query(query1, (err,result) =>{
        if(err) throw err
        else
        console.log(`berhasil tambah data student `)
    })

    // pool.end()
})



let query2 =`
    INSERT INTO "teachers" ("first_name", "last_name", "email", "gender") VALUES `;
    
 fs.readFile(`./teachers.json`,(err,data)=>{

    data = JSON.parse(data)

    for (let i = 0; i < data.length; i++) {
        query2 += `('${data[i].first_name}','${data[i].last_name}','${data[i].email}', '${data[i].gender}')`
        if( i < data.length-1) query2+=','
    }

    pool.query(query2, (err,result) =>{
        if(err) throw err
        else
        console.log(`berhasil tambah data teachers `)
    })

    // pool.end()
})

let query3 =`
    INSERT INTO "subjects" ("subjects_name") VALUES `;
    
 fs.readFile(`./subjects.json`,(err,data)=>{

    data = JSON.parse(data)

    for (let i = 0; i < data.length; i++) {
        query3 += `('${data[i].subject_name}')`
        if( i < data.length-1) query3+=','
    }

    pool.query(query3, (err,result) =>{
        if(err) throw err
        else
        console.log(`berhasil tambah data subjects `)
    })

    pool.end()
})

