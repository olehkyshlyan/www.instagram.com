// ==UserScript==
// @name         Instagram | Posts
// @namespace    https://www.instagram.com/p/
// @noframes
// @version      0.1
// @description  Instagram | www.instagram.com | Posts
// @author       oleh.kyshlyan
// @match        http://www.instagram.com/p/*
// @match        https://www.instagram.com/p/*
// @require      https://code.jquery.com/jquery-3.4.0.min.js
// @grant        none
// ==/UserScript==

var InstagramPosts = new function(){

  this.article = function(){
    var articleInclosure = function(){
      var article = jQuery("BODY ARTICLE[class*='QBXjJ']");
      if(article.length == 1){
        article.css({"position": "relative"});
        article.css({"display": "block"});

        var text = jQuery("BODY ARTICLE[class*='QBXjJ'] > DIV[class*='eo2As']");
        if(text.length == 1){
          var cuttedTxt = text.detach();
          var image = jQuery("BODY ARTICLE[class*='QBXjJ'] > DIV[class*='_97aPb']");
          if(image.length == 1){
            image.before(cuttedTxt);
          }
        }

      }
    }
    setTimeout(articleInclosure,2000);
  }

  this.articleImage = function(){
    var articleImageInclosure = function(){
      var image = jQuery("BODY ARTICLE[class*='QBXjJ'] > DIV[class*='_97aPb']");
      image.css({"width": "calc(100% - 335px)","height": "100%"});
    }
    setTimeout(articleImageInclosure,2000);
  }

  this.postText = function(){
    var postTextInclosure = function(){
      var text = jQuery("BODY ARTICLE[class*='QBXjJ'] > DIV[class*='eo2As']");
      text.css({"position": "relative"});
      text.css({"float": "right"});
      text.css({"margin-top": "80px"});
      text.css({"top": "auto"});
      text.css({"right": "auto"});
    }
    setTimeout(postTextInclosure,2000);
  }

}

InstagramPosts.article();
InstagramPosts.articleImage();
InstagramPosts.postText();
