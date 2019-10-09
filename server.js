const express                =   require('express');
const app                    =   express();
const authRoutes             =   require("./routes/auth-routes");
const profileRoutes          =   require("./routes/profile-routes");
const cookieSession          =   require("cookie-session");
const keys                   =   require("./config/keys");
const passport               =   require("passport");
const bodyParser             =   require("body-parser");
const mainRoutes             =   require("./routes/mainRoutes");
const normalProfileRoute     =   require("./routes/normal_profile_route");

require("./config/passport-setup");
require("./modals/database");

//set up view engine
app.set("view engine","ejs");

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(cookieSession({
    maxAge:1*60*60*1000,
    keys:[keys.session.cookierKey]
}));


//initialize passport
app.use(passport.initialize());
app.use(passport.session());

//setup routes
app.use('/auth' ,authRoutes);
app.use('/profile',profileRoutes);

app.use("/normal-profile",normalProfileRoute);

//create home route
app.get('/',(req,res)=>{
    res.render('home',{user:req.user})
});

app.get("/signup",(req,res)=>{
    res.render("signup")
});

app.post('/signup',mainRoutes.signup)  


app.post('/auth/login',
passport.authenticate('local',
            { successRedirect: "/normal-profile",
              failureRedirect: '/signup',
              failureFlash:"error occured while login"
           }))

   


app.listen(3000,()=>{
    console.log("app is now listening at : 3000")
});

