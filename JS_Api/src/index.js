
import express from 'express';
import bodyParser from 'body-parser'
import router from 'express' 
import { createClient } from '@supabase/supabase-js'

const app=express();
const port=5000;
const supabaseUrl = 'https://gpdsyuakdnjenfizudji.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdwZHN5dWFrZG5qZW5maXp1ZGppIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2Nzg0MDcyMiwiZXhwIjoxOTgzNDE2NzIyfQ.j2WP6HccGPDo9vssAm1NrW1qqyjUBhhKDVjCHuzF7mI"
const supabase = createClient(supabaseUrl, supabaseKey)
var posts=[]
var urlencodedParser=bodyParser.urlencoded({extended:false})
app.use(urlencodedParser);
app.use(bodyParser.json());
//app.use("/", router)
app.use(express.static('public')); 
app.get('/',(req,res)=>{
    //res.send('hi');
   FetchPosts(res);
   
    
});
app.get('/hi',(req,res)=>{
    //res.send('hi');
   res.send('hi');
   
    
});
app.post('/sendPost',(req,res)=>{
    let data=JSON.parse(req.body.data);
    console.log('body:',data.title,',',data.content);
    if(data.title!==null && data.content!==null)
    {
        AddPost(data.title,data.content,res);
        console.log('Saved to DB.');
    }
    
})

app.listen(port,()=>{
    console.log(`App listening on port ${port}`);
})
async function FetchPosts(res){
    const {data} =await supabase
    .from('posts')
    .select()
    //console.log(data);
    res.send(data); 
}
async function AddPost(title,content,res)
{
    const {data}=await supabase
    .from('posts')
    .insert([
        {title,content}
    ])
    .single()
    FetchPosts(res);

}