<template>
  <div id="app">
    <router-view></router-view>
    <Home/>
    
  </div>
</template>

<style >

* {
    box-sizing: border-box;
  
}

body {
    padding: 0;
    margin: 0;
    font-size: 1.2rem;
    /* color: black; */
        
    font-family:  'Montserrat', 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

.brand-logo {
    display: flex;
    align-items: center;
    font-size: 1.25em;
    /* color: white; */
    text-decoration: none;
}

header{
  position: fixed;
  width:100vw;
  z-index:200; 
  left: 0;
  top: 0;
  height:100px;
}
.content{
  margin-top: 80px;
}
.brand-logo-name {
    margin-left: 1rem;
}
/* .main-nav{
padding: 5px;
} */
.main-nav>ul>li>i{
    margin: 0;
    padding: 0;
}

@media screen and (max-width: 650px) {
    .main-nav>ul>li>i{
        display: none;
    }



}

.main-nav ul {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
}

.main-nav a {
    text-decoration: none;
    margin-right: 15px;
    color: white;
    
}
.main-nav .icon {
  display: none;
}

@media screen and (max-width: 600px) {
  .main-nav a:not(:first-child) {display: none;}
  .main-nav a.icon {
    float: right;
    display: block;
  }
}

@media screen and (max-width: 600px) {
  .main-nav.responsive {position: relative;}
  .main-nav.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}


.main-nav a:hover {
    color: #adadad;
}

.main-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    background-color: rgb(1, 1, 26);
    opacity: .9;
    color: #f1f1f1;
    padding: 10px;
}

.main-header a {
    color: #f1f1f1;
}

.home-main-section {
    background-color: rgb(2, 2, 41);
    display: flex;
    align-items: stretch;
    justify-content: space-between;


}

.home-main-section .image-wrapper {
    display: flex;
    align-items: stretch;
    justify-content: flex-end;
}

.home-main-section .my-image {
    max-height: 70vh;
    max-width: 70vh;
    display: flex;
}



@media screen and (max-width: 650px) {
    .home-main-section .my-image {
        display: none;
    };
    

}

.home-page-circle-1 {
    position: absolute;
    width: 15vw;
    height: 15vh;
    border-radius: 50%;
    background-color: rgba(58, 3, 3, 0.253);
    bottom: 10vw;
    left: 5vw;
    z-index: 1;
}

.home-page-circle-2 {
    position: absolute;
    width: 15vw;
    height: 15vh;
    border-radius: 50%;
    background-color: rgba(31, 31, 163, 0.158);
    top: 15vw;
    left: 5vw;
    z-index: 1;
}

.home-page-circle-3 {
    position: absolute;
    width: 20vw;
    height: 20vh;
    border-radius: 50%;
    background-color:rgba(31, 31, 163, 0.158);
    bottom: 5vw;
    right: 2vw;
    z-index: 1;
}

.sticky {
    position: fixed;
    top: 0;
    width: 100%
}

.sticky+.content {
    padding-top: 102px;
}

.title {
    font-weight: 500;
    font-size: 2em;
    margin-bottom: 1rem;
    margin-top: 0;
    text-align: center;
    color: #f1f1f1;
}
.section-title{
    font-weight: 600;
    font-size: 3rem;
    text-align: center;
    margin-top: 10px;

}


.subtitle {
    font-weight: 500;
    font-size: 1.2em;
    margin-bottom: 2rem;
    margin-top: 0;
}
.about{
    display: flex;
    flex-flow: row;
}
    

.about-info, .lady{
    display: flex;
    padding: 10px;
    margin: 10px;
    box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.562);
    border-radius: 9%;
}

.btn {
    color: #f1f1f1;
    background-color: rgb(58, 3, 3);
    padding: .75rem 1.5rem;
    border-radius: .5rem;
    text-decoration: none;
    font-size: .9rem;
}
#contact{
    padding: 50px;
}
/* .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 40px;
} */
/* Style inputs */
input[type=text],
select,
textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
}

input[type=submit] {
    background-color: #4CAF50;
    color: white;
    padding: 12px 20px;
    border: none;
    cursor: pointer;
}

input[type=submit]:hover {
    background-color: #45a049;
}

/* Style the container/contact section */
.container {
    border-radius: 5px;
    background-color: rgb(2, 2, 41);
    padding: 10px;
    color: white;
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.842);
    width: 90vw;
    margin: auto;
}
.contact-form form input,
.contact-form form textarea {
    width: 100%;
    padding: .7em;
    border: none;
    background: none;
    outline: 0;
    color: #fff;
    border-bottom: 1px solid rgb(85, 5, 5);
}
.contact-form form button {
    background-color:rgb(85, 5, 5);
    border: 0;
    text-transform: uppercase;
    padding: 1em;
    font-size: 1em;
    letter-spacing: .1em;
    border-radius: .3em;

}
button{
    color: #ffffff;
}

.contact-info{
     background-color:rgb(85, 5, 5);
}

.contact-info>ul{
    list-style: none;
    padding: 5px;
}
.contact-info>ul>li{
    padding: 5px;
    margin: 5px;
    font-size: 15px;
}
.social>a>i{
    margin: 3px;
    box-shadow: 2px 3px 4px rgba(49, 50, 51, 0.925);
    background-color: rgb(245, 245, 247);
    padding: 0;
}


/* Create two columns that float next to eachother */
.column {
    float: left;
    width: 50%;
    margin-top: 6px;
    padding: 20px;
    box-shadow: 0 5px 20px 0 rgba(209, 5, 5, 0.3);
    transition: 0.3s;
}

/* Clear floats after the columns */
.row:after {
    content: "";
    display: table;
    clear: both;
}

/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {

    .column,
    input[type=submit] {
        width: 100%;
        margin-top: 0;
    }
}

/*  */

.heading {
    font-size: 25px;
    margin-right: 25px;
}

.fa {
    font-size: 25px;
}

.checked {
    color: orange;
}

/* Three column layout */
.side {
    float: left;
    width: 15%;
    margin-top: 10px;
}

.middle {
    float: left;
    width: 70%;
    margin-top: 10px;
}

/* Place text to the right */
.right {
    text-align: right;
}

/* Clear floats after the columns */
.row:after {
    content: "";
    display: table;
    clear: both;
}

/* The bar container */
.bar-container {
    width: 100%;
    background-color: #f1f1f1;
    text-align: center;
    color: white;
}

/* Individual bars */
.bar-5 {
    width: 60%;
    height: 18px;
    background-color: #4CAF50;
}

/* .bar-4 {
    width: 30%;
    height: 18px;
    background-color: #2196F3;
}

.bar-3 {
    width: 10%;
    height: 18px;
    background-color: #00bcd4;
}

.bar-2 {
    width: 4%;
    height: 18px;
    background-color: #ff9800;
}

.bar-1 {
    width: 15%;
    height: 18px;
    background-color: #f44336;
} */

/* Responsive layout - make the columns stack on top of each other instead of next to each other */
@media (max-width: 400px) {

    .side,
    .middle {
        width: 100%;
    }

    /* Hide the right column on small screens */
    .right {
        display: none;
    }
}


/* Fixed/sticky icon bar (vertically aligned 50% from the top of the screen) */
.icon-bar {
    position: fixed;
    top: 50%;
    right: 1%;

    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
}

/* Style the icon bar links */
.icon-bar a {
    display: block;
    text-align: center;
    padding: 16px;
    transition: all 0.3s ease;
    color: white;
    font-size: 20px;
}
.skills-section{
        display: flex;
    flex-flow: row wrap;
    justify-content: center;
    list-style: none;
}
.skills{
    margin: 2.3rem 1.5rem;
    position: relative;
    width: 4rem;
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.2);
    padding: 5px;
    border-radius: 15px;
}
.skills:hover{
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.842);  
}

.skill-icon {
    height: 3rem;
    width: 100%;
    background-color: #15245f;
    border-radius: 8px 8px 4px 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(250, 250, 252);
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.842);
}
.contact-icon>i{
    /* background-color: #fcfcfc;
    color:#15245f; */
    /* color: rgb(250, 250, 252); */
    display: flex;
    width: 3rem;  
    height: 3rem;
    border-radius: 50% ;
}
.skill-name{
    font-size: 12px;
    text-align: center;
}


footer{
    background-color: rgb(0, 0, 8);
    color: rgb(252, 252, 252);
    font-size: 14px;
    height: 300px;
}
footer>p>a{
    color: rgb(172, 9, 9);
}

</style>

<script>
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    Home,
  },
};






    
    
</script>
