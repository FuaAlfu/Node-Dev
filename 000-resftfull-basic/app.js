//jshint eserversion:6

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const ejs = require('ejs');
const port  = process.env.PORT || 3000;

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static("public"));

//database :: userNewParser: true look up for the reason
mongoose.connect("mongodb://localhost:27017/wikiDB", {useNewUrlParser: true});

//create new schema
const articleSchema = {
    title: String,
    content: String
};

//create a modle :: usually use upper case
const Article = mongoose.model("Article", articleSchema);

//the high train , a chainable handlers :: chain method //app.route("/articles").get().post().delete();
app.route("/articles")

.get((req,res) => {
    //take two arg , we will ignore the first one (we dont have any conddition)
    Article.find((err,foundArticles) => {
      if(!err){
          //  console.log(foundArticles);
        res.send(foundArticles);
      }else{
          res.send(err);
      }
    });
})

.post((req,res) => {
    console.log(req.body.title);
     console.log(req.body.content);

     const newArticle = new Article({
         title: req.body.title,
         content: req.body.content
     });
     newArticle.save((err) => {
         if (!err){
             res.send("Successfuly added a new article.");
         }else{
             res.send(err);
         }
     });
})

.delete((req,res) => {
    Article.deleteMany(function(err) {
        if(!err){
            res.send("Successfully deleted all articles.");
        }else{
            res.send(err);
        }
    });
});
//-------------------------- requist targetting a specific article ------------------------
//using route method
app.route("/articles/:articleTitle")


.get((req,res)=>{
  Article.findOne({title:req.params.articleTitle}, (err,foundArticle)=>{
     if(foundArticle){
         res.send(foundArticle)
     }else{
         res.send("no articles matching that title was found")
     }
  });
})

.put((req,res)=>{
    Article.update(
        {title: req.params.articleTitle},
        {title: req.body.title, content: req.body.content},
        {overwrite: true},
        function(err){
            if(!err){
                res.send('Successfully updated article.');
            }
        }
    );
})

.patch((req,res)=>{
   Article.update(
       {title: req.params.articleSchema},
       //$set called set flag
       {$set: req.body},
       function(err){
           if(!err){
               res.send('successfully updated article.');
           }else{
               res.send(err);
           }
       }
   );
})

.delete((req,res)=>{
    Article.deleteOne(
        {title: req.params.articleTitle},
        (err)=>{
            if(!err){
                res.send('successfully deleted the curresponding article.');
            }else{+
                res.send(err);
            }
        }
    );
});


app.listen(port, () => {
    console.log('server started on port 3000');
    
});