const Normal_User            =    require("../modals/user-modal");
const User                   =    Normal_User.Normal_User;
const bcrypt                 =   require("bcrypt");

function signup(req,res){
   
        if(req.body){
            User.findOne({email:req.body.email})
                   .then((currentUser)=>{
                     if(currentUser){
                        console.log("current  user is ,",currentUser)
                    
                    }else{
                        if(req.body.password===req.body.password2){
                            var newUser = new User({
                                email:req.body.email,
                                password:req.body.password,
                                })
                       newUser.password = bcrypt.hashSync(newUser.password, 5),
                             newUser.save().then((user)=>{
                             console.log("new user creater"+" "+user)
                        }).catch((err)=>{throw err})
                    }
                 }
             })
         res.redirect('/auth/login');
        } else {   
           res.redirect('/signup');
        }
 }

 module.exports ={
     signup
 }