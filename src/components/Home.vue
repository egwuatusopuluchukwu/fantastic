<template>
  <div>
    <header class="main-header" id="myHeader">
      <a href="/" class="brand-logo">
        <img src="../assets/crystal.png" style="width: 50px; height: 50px" />
        <div class="brand-logo-name">Dev-Crystal</div>
      </a>
      <nav class="main-nav" id="myTopnav">
        <ul>
          <li>
              <i class="fas fa-home"></i>
            <a href="./">Home</a>
          </li>
          <li>
            <i class="fas fa-info"></i>
            <a href="#bio">About</a>
          </li>
          <li>
            <i class="fas fa-tools"></i>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <i class="fas fa-id-card"></i>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <i class="fas fa-blog"></i>
            <a href="#blog">Blog</a>
          </li>
          <li>
      
          </li>
        </ul>
      </nav>
    </header>

    <div class="content">
      <div class="home-page-circle-1"></div>
      <div class="home-page-circle-2"></div>
      <div class="home-page-circle-3"></div>

      <section class="home-main-section">
        <div class="animate__animated animate__zoomIn animate__infinite animate__slower animate__delay-4s ">
          <div class="title"  >
            <h1 class="header show-on-scroll">Hi<br />
                    My name is Sopuluchukwu
                </h1>
                <span class="subtitle"> Nice to meet you</span><br />
                <a href="#contact" class="btn">Contact Me</a>
            </div>
        </div>
        
            <div class="image-wrapper">
                <div class="my-image">
                    <img src="../assets/main.png">

                </div>
            </div>
    </section>

    <section>
            <div id="bio">
                <h1 class="section-title">
                    About me
                </h1>
                <div class="about">
                <div class="lady">
                  <img src="../assets/lady.jpg" style="width: 50vw; height: 50vh;">  
                </div>
                <div class="about-info">
                  <p class="Section-subtitle">Egwuatu Sopuluchukwu is a dynamic web developer who is enthusiastic about creativity.
                  An undergraduate of Computer Science at Nnamdi Azikiwe University Awka, Anambra state
                  
                  
                  My passion has always been to solve as many problems as possible with my expertise in web development.
                  
                  
                  If you are looking for a web developer to help bring your ideas to life, 
                  work on an existing project, or join a team of developers?
                   I am currently available to take on any project
                  
                  </p>

                </div>
                </div>
               
            </div>

        </section>

    <section>
            <div id="#skills">
                <h5 class="section-title">
                Skills</h5>
                <div > 
                  <h4>Tools I work with</h4>
                <ul class="skills-section">
                    <li class="skills">
                      <div class="skill-icon"><i class="fab fa-html5 fa-2x"></i></div>
                      <div class="skill-name">Html</div>
                      </li>
                    

                    <li class="skills">
                      <div class="skill-icon"><i class="fab fa-css3 fa-2x"></i></div>
                    <div class="skill-name">Css</div>
                    </li>
                    
                    <li class="skills">
                      <div class="skill-icon"><i class="fab fa-js-square fa-2x"></i></div>
                    <div class="skill-name">Javascript</div>
                      </li>
                      
                    <li class="skills">
                      <div class="skill-icon"><i class="fab fa-react fa-2x"></i></div>
                    <div class="skill-name">
                      React
                    </div>
                    </li>
                      
                    <li class="skills">
                      <div class="skill-icon"><i class="fab fa-vuejs fa-2x"></i></div>
                    <div class="skill-name">Vue</div>
                      </li>

                      
                    <li class="skills">
                      <div class="skill-icon"><i class="fab fa-github fa-2x"></i></div>
                    <div class="skill-name">Github</div>
                      </li>
                    
                    <li class="skills">
                      <div class="skill-icon"><i class="fab fa-node-js fa-2x"></i></div>
                    <div class="skill-name">Nodejs</div>
                      </li>

                    <li class="skills">
                      <div class="skill-icon"><i class="fab fa-php fa-2x"></i></div>
                    <div class="skill-name">PHP</div>
                      </li>

                <li class="skills">
                      <div class="skill-icon"><i class="fas fa-database fa-2x"></i></div>
                    <div class="skill-name">SQL</div>
                      </li>
                </ul>
                </div>
                
              
            </div>
        </section>

      

        <section>
            <div id="contact">

                <div class="container">
                    <div style="text-align:center">
                        <h2>Contact</h2>
                        
                    </div>
                    <div class="row">
                        <div class="column">
                            <!-- <img src="../assets/—Pngtree—2021 calendar_5549350.png" style="width:100%"> -->
                            <div class="contact-form">
                              <form action="/action_page.php">
                                <label for="fname">First Name</label>
                                <input type="text" id="fname" name="firstname" placeholder="Your name..">
                                <label for="lname">Last Name</label>
                                <input type="text" id="lname" name="lastname" placeholder="Your last name..">
                                <label for="subject">Subject</label>
                                <textarea id="subject" name="subject" placeholder="Write something.."
                                    style="height:170px"></textarea>
                                <button type="submit" value="Submit">Send</button>
                            </form> 
                        </div>
                        </div>
                        <div class="column">

<div class="contact-info">
          <h4>More info</h4>
          <ul>
            <li><i class="fas fa-comment-dollar"></i>Awka,Anambra Nigeria</li>
            <li><i class="fas fa-phone-square"></i> +2349092364123</li>
            <li><i class="fas fa-envelope-open-text"></i>egwuatusopuluchukwu@gmail.com</li>
          </ul>
          
          <p>
        Have a question or wanna make something together.
          </p>

          <p>Lorem, ipsum dolor.</p>
        </div>
            
<div class="social">

                <a href="https://www.facebook.com/catherine.egwuatu">  <i class="fab fa-facebook-square fa-2x"  style=" color: rgb(15, 26, 189);"></i></a>

                    <a href="https://twitter.com/SopuluCrystal">  <i class="fab fa-twitter-square fa-2x"  style="color: #55ACEE"></i></a>
                    <a href=https://www.instagram.com/catherineegwuatu>  <i class="fab fa-instagram-square fa-2x"  style=" color: rgb(136, 17, 27);"></i>  </a>
                    <a href="https://github.com/egwuatusopuluchukwu">  <i class="fab fa-github-square fa-2x"  style=" color: rgb(1, 1, 15);"></i> </a>

                    <a href="https://wa.me/message/BEKGOPEMGII5A1"> <i class="fab fa-whatsapp-square fa-2x"  style="color: rgb(9, 100, 73);"></i> </a>
                    </div>

                      
                        </div>
                    </div>
                </div>

                <div class="icon-bar">
                    <a href="https://www.facebook.com/catherine.egwuatu"> <i class="fab fa-facebook-square fa-2x"
                                style="color: rgb(15, 26, 189);"></i></a>

                    <a href="https://twitter.com/SopuluCrystal"><i class="fab fa-twitter-square fa-2x"
                                style="color: rgb(33, 81, 236);"></i></a>
                    <a href=https://www.instagram.com/catherineegwuatu> <i class="fab fa-instagram-square fa-2x"
                            style="color: rgb(136, 17, 27);"></i></a>
                    <a href="https://github.com/egwuatusopuluchukwu"><i class="fab fa-github-square fa-2x"
                                style="color: rgb(1, 1, 15);"></i></a>

                    <a href="https://wa.me/message/BEKGOPEMGII5A1"> <i class="fab fa-whatsapp-square fa-2x"
                                style="color: rgb(9, 100, 73);"></i></a>
                    </div>


            </div>
        </section>

        

    </div>
<footer class="main-footer">
      
        
          <p>Have a question or wanna make something together.</p>
          <p>Start by <a href="mailto:egwuatusopuluchukwu@gmail.com">saying hi.</a></p>
  
          <p>
            built by Egwuatu Sopuluchukwu.
            © 2020. All right reserved.
          </p>


      
    </footer>
  </div>
</template>

<script>
export default {
  name: "Home",
};




</script>
