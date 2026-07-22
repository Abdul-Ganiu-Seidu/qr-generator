
const SUPABASE_URL =
"https://nnjdhqlrosjjkogolqdo.supabase.co";


const SUPABASE_KEY =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5uamRocWxyb3NqamtvZ29scWRvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ3Mjk5NzUsImV4cCI6MjEwMDMwNTk3NX0.qsFp3OxuvuvQLeTE5DRYhlfZxItfAevnZt456eFPsOg";



const client =
supabase.createClient(
SUPABASE_URL,
SUPABASE_KEY
);



let params =
new URLSearchParams(
window.location.search
);



let filename =
params.get("file");



const {data}=client
.storage
.from("documents")
.getPublicUrl(filename);



document.getElementById("viewer")
.src=data.publicUrl;
