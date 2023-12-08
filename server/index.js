const mailer=require('nodemailer')
const express=require('express')
const http=require('http')
const cors=require('cors')



const app=express()
const server=http.createServer(app)
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}))
app.use(express.json())
app.post('/post',(req,res)=>{
    console.log(req.body)
    const mailtransport=mailer.createTransport({
      service:'gmail',
      auth:{
          
          user:'narenvasu2003@gmail.com',
          pass:'avkm avid tiup cijo',
          
        
      }
  })
  const mailOptions={
      from:'narenvasu2003@gmail.com',
      to:req.body.mail,
      subject:req.body.sub,
      text:req.body.cont
  }
  mailtransport.sendMail(mailOptions, function(err, data) {
      if (err) {
        console.log("Error " + err);
      
      } else {
        console.log("Email sent successfully");
        res.send('Email sent successfully')
      }

    });
  
})
/**/
server.listen('3001',()=>{
  console.log("Listening successfully")
})