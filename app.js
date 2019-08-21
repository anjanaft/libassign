const Express=require('express');
var app=new Express();
app.set('view engine','ejs');
author=[{
    name:"A.P.J.Abdul Kalam",
    DOB:"13/09/1941",
    place:"Tamil Nadu",
    im:"/image/index.jpeg"
    
},
{
    name:" M.T.Vasudevan Nair",
    DOB:"14/09/1945",
    place:"Kerala",
    im:"/image/index2.jpeg"
    
},
{
    name:"K.R.Meera",
    DOB:"09/06/1960",
    place:"Kerala",
    im:"/image/index3.jpeg"
},
{
    name:"Vaikom Muhammad Basheer",
    DOB:"30/02/1955",
    place:"Kerala",
    im:"/image/index4.jpeg"
},
{
    name:"S. K. Pottekkatt",
    DOB:"13/12/1950",
    place:"Kerala",
    im:"/image/index5.jpeg"
},
{
    name:"Perumbadavam Sreedharan",
    DOB:"23/10/1949",
    place:"Kerala",
    im:"/image/index6.jpeg"
},
{
    name:"M. T. Vasudevan Nair",
    DOB:"11/05/1951",
    place:"Kerala",
    im:"/image/index2.jpeg"
},
{
    name:"Kamala Suraiyya",
    DOB:"03/07/1950",
    place:"Kerala",
    im:"/image/index7.jpeg"
},
{
    name:"Vaikom Muhammad Basheer",
    DOB:"16/04/1941",
    place:"Kerala",
    im:"/image/index4.jpeg"
},
{
    name:"P. K. Balakrishnan",
    DOB:"25/09/1956",
    place:"Kerala",
    im:"/image/index8.jpeg"

}
]

nav=[
{
    
        link:"/author",
        title:"author"
}
];
app.use(Express.static(__dirname+"/public"));
app.get('/',(req,res)=>{
    res.render('b2');
});
app.get('/home',(req,res)=>{

    res.render('b2');
});
app.get('/home/login',(req,res)=>{
   
    res.render('b1');
});
app.get('/home/register',(req,res)=>{
    res.render('b3');
});
app.get('/home/add',(req,res)=>{
    
    res.render('add');
});

app.get('/author',(req,res)=>{
    res.render('author',{nav:nav,title:"Author",author:author});
});
app.get('/more/:id',(req,res)=>{

    const y=req.params.id;
    res.render('more',{nav:nav,title:"Author","author":author[y]});
});
app.listen(process.env.PORT || 3000,()=>{
    console.log("server is running on http://localhost:3000/index")
    });