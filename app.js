
const SUPABASE_URL =
"https://nnjdhqlrosjjkogolqdo.supabase.co";


const SUPABASE_KEY =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5uamRocWxyb3NqamtvZ29scWRvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ3Mjk5NzUsImV4cCI6MjEwMDMwNTk3NX0.qsFp3OxuvuvQLeTE5DRYhlfZxItfAevnZt456eFPsOg";


const DOMAIN =
"https://gtle.netlify.app";



const client =
supabase.createClient(
SUPABASE_URL,
SUPABASE_KEY
);



async function uploadDocument(){


const file =
document.getElementById("fileInput").files[0];



if(!file){

alert("Select a document");

return;

}



let filename =
Date.now()+"_"+file.name;



document.getElementById("message")
.innerHTML="Uploading...";



const {error}=await client
.storage
.from("documents")
.upload(filename,file);



if(error){

console.log("UPLOAD ERROR:", error);

alert(error.message);

return;

}



let qrURL =
client
.storage
.from("documents")
.getPublicUrl(filename)
.data.publicUrl;



document.getElementById("message")
.innerHTML=
"QR Generated Successfully";



createQR(qrURL);



}





function createQR(url){



document.getElementById("qrcode")
.innerHTML="";



new QRCode(

document.getElementById("qrcode"),

{

text:url,

width:250,

height:250

}

);



setTimeout(()=>{


let img =
document.querySelector("#qrcode img");


let link =
document.getElementById("downloadQR");



link.href=img.src;

link.download="document-qr.png";

link.innerHTML=
"Download QR Code";



},1000);



}
