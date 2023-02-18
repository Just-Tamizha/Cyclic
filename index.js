var express =require('express');
var app=express()

const fs = require('fs');
const ytdl = require('ytdl-core');

var url="https://youtu.be/mo2kxoCNYSY"
app.use('/',async (req,res)=>{
    // ytdl(url).pipe(fs.createWriteStream('video.mp4'));
    var info=await ytdl.getInfo(url)
    const formats = ytdl.filterFormats(info.formats, 'video');
    res.header('Content-Disposition', 'attachment; filename="video.mp4"');
    ytdl(url, {
        format: "144p"
    }).pipe(res);
    //res.sendFile(__dirname+"/src/index.html")
    // res.send(formats);
})

app.listen(3000,()=>{
    console.log('Server is running !')
})
