var db = require('../config/connection');
module.exports = {
    signup : (reqbody)=>{
        return new Promise((resolve,reject)=>{

            // checking user all ready login

            db.get().collection('newuser').findOne(reqbody).then((data)=>{
                if(data=== null){
                    db.get().collection('newuser').insertOne(reqbody).then((outdata)=>{
                        resolve()
                    })
                }else{
                    var status = true;
                    resolve(status)
                    console.log('user all ready signup');
                }
            })           
        })
    },
    // login 

    Login :(data)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection('newuser').findOne(data).then((data)=>{
                resolve(data)
            })
        })
    },
    adminLogin :(reqBody)=>{
        return new Promise ((resolve,reject)=>{
            db.get().collection('admin').findOne(reqBody).then((outdata)=>{
                resolve(outdata)
            })
        })
    },
    getAllCollecions:()=>{
        return new Promise(async (resolve,reject)=>{
            var collections = await db.get().collection('newuser').find().toArray()
            resolve(collections) 
        })
    },
    addUser:(data)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection('newuser').insertOne(data).then((data)=>{
                resolve()
            })
        })
    }





    // showCollections :()=>{
    //     return new Promise ((resolve,reject)=>{
    //         db.get().collection('newuser').find().then((outdata)=>{
    //             resolve(outdata)
    //         })
    //     })
    // },
    
}