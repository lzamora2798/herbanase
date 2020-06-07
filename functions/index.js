const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
const admin=require('firebase-admin');

const nodemailer =require('nodemailer');
admin.initializeApp()

require('dotenv').config()

const {S_EMAIL,S_PASS}= process.env;
exports.sendEmailNotification=functions.firestore.document('ordenes/{docId}')
.onCreate((snap,ctx)=>{
    const data=snap.data();
    let authData=nodemailer.createTransport({
        host:'smtp.gmail.com',
        port:465,
        secure:true,
        auth:{
            user:S_EMAIL,
            pass:S_PASS
        }
    });
    authData.sendMail({
        from :'luis.zv27@gmail.com',
        to:'adrian199808@hotmail.com',
        subject:'Your submission Info',
        text:`${data.mesaje}`,
        html:`${data.mesaje}`,
        }).then(res=>console.log('successfully sent that mail')).catch(err=>console.log(err));
})