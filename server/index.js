const mailer=require('nodemailer')
const express=require('express')
const http=require('http')

const app=express()
const server=http.createServer(app)

/*const mailtransport=mailer.createTransport({
    service:'gmail',
    auth:{
        
        user:'narenvasu2003@gmail.com',
        pass:'avkm avid tiup cijo',
        
       
    }
})
const mailOptions={
    from:'narenvasu2003@gmail.com',
    to:'batarangnaren@gmail.com',
    subject:'Test node mailer',
    text:'Hello world'
}
mailtransport.sendMail(mailOptions, function(err, data) {
    if (err) {
      console.log("Error " + err);
    } else {
      console.log("Email sent successfully");
    }

  });*/
server.listen('3001',()=>{
  console.log("Listening successfully")
})