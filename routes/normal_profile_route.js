const router = require("express").Router();

const authCheck_normal =(req,res,next)=>{
    
    if(req.session.user){
        //if user is not logged in
        next();
        
    }else{
        //if logged in
        res.redirect('/auth/login')
    }
}


router.get("/",authCheck_normal,(req,res)=>{
    res.render('profile',{user:req.session.user})
})

module.exports=router;