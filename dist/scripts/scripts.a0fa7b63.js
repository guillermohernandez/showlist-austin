var app=angular.module("showList",[]);app.controller("MainController",["$scope",function(a){a.shows=[{lineup:"Royal Headache, Bad Sports, Jonly Bonly",venue:"Red 7",time:"8 PM",cover:5},{lineup:"Speedy Sparks and the Koolerators",venue:"Hotel Vegas",time:"9 PM",cover:5},{lineup:"Rock N' Roll Karaoke",venue:"Beerland",time:"9 PM",cover:5},{lineup:"Katie Butcher, The Love Sprockets, Ravi Nulu & Micah Wagner",venue:"Scoot Inn",time:"8 PM",cover:5},{lineup:"Roger Wallace, Lindsey Verrill, Sweet Gary Newcomb",venue:"Hole in the Wall",time:"9 PM",cover:5}]}]),angular.module("showlistAppApp").run(["$templateCache",function(a){"use strict";a.put("views/main.html",'<div class="jumbotron"> <h1>\'Allo, \'Allo!</h1> <p class="lead"> <img src="images/yeoman.42092f92.png" alt="I\'m Yeoman"><br> Always a pleasure scaffolding your apps. </p> <p><a class="btn btn-lg btn-success" ng-href="#/">Splendid!<span class="glyphicon glyphicon-ok"></span></a></p> </div> <div class="row marketing"> <h4>HTML5 Boilerplate</h4> <p> HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites. </p> <h4>Angular</h4> <p> AngularJS is a toolset for building the framework most suited to your application development. </p> <h4>Karma</h4> <p>Spectacular Test Runner for JavaScript.</p> </div>')}]);