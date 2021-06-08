var os=require('os');
var fs=require('fs');
var crypto=require('crypto');
var path=require('path');
var value=require('./data');
var userdata= value.data("Prograd",2020,"BE");
var secret='GFG';
const password = crypto.createHmac('sha256', secret).update('Prograd').digest('hex');
fs.appendFile(path.join(__dirname,'message.txt'),
'ProGrad Details\r\nUserId->1000,\r\nName ->'+userdata.name+',\r\nYear ->'+userdata.Year+',\r\nQualification ->'+userdata.Qualification+',\r\nUserName->Jayanthi,\r\nPassword->'+password,
function(err){
    if(err)
    {
        throw err;
    }
    console.log('File Appended');
})