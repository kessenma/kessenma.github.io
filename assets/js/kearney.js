function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} // Made by Yago Estévez (Twitter: @yagoestevez.com)



/***********************
  Project Component
 ***********************/

  const Project = props => {
    const tech = {
      sass: 'fab fa-sass',
      css: 'fab fa-css3-alt',
      js: 'fab fa-js-square',
      react: 'fab fa-react',
      vue: 'fab fa-vuejs',
      d3: 'far fa-chart-bar',
      node: 'fab fa-node' };
  
  
    const link = props.link || 'http://';
    const repo = props.repo || 'http://';
  
    return /*#__PURE__*/(
      React.createElement("div", { className: "project" }, /*#__PURE__*/
      React.createElement("a", { className: "project-link", href: link, target: "_blank", rel: "noopener noreferrer" }, /*#__PURE__*/
      React.createElement("img", { className: "project-image", src: props.img, alt: 'Screenshot of ' + props.title })), /*#__PURE__*/
  
      React.createElement("div", { className: "project-details" }, /*#__PURE__*/
      React.createElement("div", { className: "project-tile" }, /*#__PURE__*/
      React.createElement("p", { className: "icons" },
      props.tech.split(' ').map((t) => /*#__PURE__*/
      React.createElement("i", { className: tech[t], key: t }))),
  
  
      props.title, ' '),
  
      props.children, /*#__PURE__*/
      React.createElement("div", { className: "buttons" }, /*#__PURE__*/
      React.createElement("a", { href: repo, target: "_blank", rel: "noopener noreferrer" }, "View source ", /*#__PURE__*/
      React.createElement("i", { className: "fas fa-external-link-alt" })), /*#__PURE__*/
  
      React.createElement("a", { href: link, target: "_blank", rel: "noopener noreferrer" }, "Try it Live ", /*#__PURE__*/
      React.createElement("i", { className: "fas fa-external-link-alt" }))))));
  
  
  
  
  
  };

  
  
/***********************
  Menu Component
 ***********************/

const Menu = props => {
  return /*#__PURE__*/(
    React.createElement("div", { className: `menu-container ${props.showMenu}` }, /*#__PURE__*/
    React.createElement("div", { className: "overlay" }), /*#__PURE__*/
    React.createElement("div", { className: "menu-items" }, /*#__PURE__*/
    React.createElement("ul", null, /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#welcome-section", onClick: props.toggleMenu }, "HOME")), /*#__PURE__*/



    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#about", onClick: props.toggleMenu }, "ABOUT")), /*#__PURE__*/



    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#projects", onClick: props.toggleMenu }, "PORTFOLIO")), /*#__PURE__*/



    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#contact", onClick: props.toggleMenu }, "CONTACT"))), /*#__PURE__*/




    React.createElement(SocialLinks, null))));



};


/***********************
  Nav Component
 ***********************/

const Nav = props => {
  return /*#__PURE__*/(
    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement("nav", { id: "navbar" }, /*#__PURE__*/
    React.createElement("div", { className: "nav-wrapper" }, /*#__PURE__*/
    React.createElement("p", { className: "brand" }, "kyle", /*#__PURE__*/

    React.createElement("strong", null, "Essenmacher")), /*#__PURE__*/

    React.createElement("a", {
      onClick: props.toggleMenu,
      className: props.showMenu === 'active' ? 'menu-button active' : 'menu-button' }, /*#__PURE__*/

    React.createElement("span", null))))));





};



/***********************
  Header Component
 ***********************/

const Header = props => {
  return /*#__PURE__*/(
    React.createElement("header", { id: "welcome-section" }, /*#__PURE__*/
    React.createElement("div", { className: "moon" }), /*#__PURE__*/
    React.createElement("div", { className: "forest" }), /*#__PURE__*/
    React.createElement("div", { className: "silhouette" }), /*#__PURE__*/
    React.createElement("div", { className: "container" }, /*#__PURE__*/
    React.createElement("h1", null, /*#__PURE__*/
    React.createElement("span", { className: "line" }, "Hey Kearney!"), /*#__PURE__*/
    React.createElement("span", { className: "line" }, "  "), /*#__PURE__*/
    React.createElement("span", { className: "line" }, /*#__PURE__*/
    React.createElement("span", { className: "color" }, "My name is Kyle"), " and I'm interested in working at your firm.")), /*#__PURE__*/


    React.createElement("div", { className: "buttons" }, /*#__PURE__*/
    React.createElement("a", { href: "https://kessenma.github.io/" }, "my portfolio"), /*#__PURE__*/
    React.createElement("a", { href: "https://kessenma.github.io/#contact", className: "cta" }, "get in touch")))));






};


/***********************
  About Component
 ***********************/

const About = props => {
  return /*#__PURE__*/(
    React.createElement("section", { id: "about" }, /*#__PURE__*/
    React.createElement("div", { className: "wrapper" }, /*#__PURE__*/
    React.createElement("article", null, /*#__PURE__*/
    React.createElement("div", { className: "desc full" }, /*#__PURE__*/



    
    // React.createElement("div", { className: "title" }, /*#__PURE__*/ 
    // React.createElement("h4", null, "What roles am I interested in?"),
    // React.createElement("div", { className: "whiteHighlight" })), /*#__PURE__*/

    React.createElement("h4", { className: "subtitle" }, "What roles am I interested in?"), /*#__PURE__*/
    React.createElement("p", null, "This marketing intern position I’m applying to seems up my alley, but I am open to more traditional consulting roles as well. Not entirely sure ‘where I fit’ right now… I can build landing pages like this one fairly quickly though!"), /*#__PURE__*/



    React.createElement("h4", { className: "subtitle" }, "What is my background and how does it align with Kearney?"), /*#__PURE__*/

    React.createElement("p", null, "I grew up in Michigan and both my parents work for GM as engineers. My mom in environmental and my dad in Product Development. We grew up in suburbia and a mixture of; teenage angst + desire to escape monotony + having average high school grades + high ambitions == me packing up two suitcases and…. at 18 I left for Seattle to pursue an associates degree at North Seattle College. I didn’t know anyone in Seattle or much about it other than it having mountains and coffee. The associates degree paid off and the experiences + my grades from it propelled me to getting accepted into a Bachelors of Science in Information at the University of Michigan-- so back to Michigan I went! "), /*#__PURE__*/

    React.createElement("p", null, ""), /*#__PURE__*/

    React.createElement("p", null, " One of the core classes in my curriculum was taught by Professor John Leslie King, the ‘founding father’ of the Bachelors degree program I was in. This class taught us the importance of absorbing a lot of information and writing concise reports on the info we absorbed. This teaching methodology is rooted in the The UM School of Information's history. It used to be the ‘School of Library Science’ till 1996 when it evolved to the School of Information, and then in 2015 they offered bachelor's degrees for the first time. In 2017 when I attended, it was the first time the School of Information ever accepted transfer students into their degree. I was in this first cohort of external transfer students along with ~20 others. Then when I graduated in 2019, I was awarded the John Leslie King award….! (the pic of me in the background is me and Professor King) "), /*#__PURE__*/

    React.createElement("p", null, "After graduating I went on to work at Ford Motor Company in spring of 2019 in their rotational program for college graduates (FCGs) --This is where I began interacting with different types of consultants professionally. I worked with ‘tech consultants’ from Accenture to implement CRM technology at Ford, and thenfelt the consequences of the ‘’management consultants’ decisions like BCG – who were in charge of Ford's ‘smart redesign’ which I came to know as .. deciding who gets fired. One of the consequences I felt by smart redesign was my ‘manager to be’ was fired 3 weeks before I started at the company... and I ended up having to choose a different role for my first rotation from ‘leftover rotations’ (since everyone else in the cohort had chosen their rotations for the year)."), /*#__PURE__*/
    
    
    React.createElement("div", { className: "subtitle" }, /*#__PURE__*/
    React.createElement("h4", { className: "" }, "What is my background and how does it align with Kearney’s goals?"), /*#__PURE__*/
    React.createElement("p", { className: "" })), /*#__PURE__*/

    React.createElement("p", null, "I grew up in Michigan and both my parents work for GM as engineers. My mom in environmental and my dad in Product Development. We grew up in suburbia and a mixture of; teenage angst + desire to escape monotony + having average high school grades + high ambitions == me packing up two suitcases and…. ")), /*#__PURE__*/

    // React.createElement("p", null, "at 18 I left for Seattle to pursue an associates degree at North Seattle College. I didn’t know anyone in Seattle or much about it other than it having mountains and coffee. The associates degree paid off and the experiences + my grades from it propelled me to getting accepted to study Information Science at the University of Michigan School of Information. One of the core classes was taught by Professor John Leslie King- who was a ‘founding father’ of the Bachelors degree program I was in. This class taught us the importance of absorbing a lot of information and writing concise reports on the info we absorbed. I didn’t know it when I was doing it, but we were just essentially just doing case studies that consulting companies are notorious for having in their interview process... ha")), /*#__PURE__*/

    // React.createElement("p", null, "The UM School of Information used to be the ‘School of Library Science’ till 1996 when it became the School of Information, and then only in 2015 did they start offering bachelor's degrees. Then in 2017 when I attended, it was the first time the School of Information had ever accepted transfer students into their degree. I was in this first cohort of external transfer students along with ~20 others. Then when I graduated in 2019, I was awarded the John Leslie King award….!")), /*#__PURE__*/

    // React.createElement("p", null, "I went on to work at Ford after graduating in spring of 2019 in their rotational program for college graduates (FCGs) --then… I began interacting with different types of consultants. I worked with ‘tech consultants’ from Accenture to implement CRM technology at Ford, and then there are also ‘’management consultants’ like BCG – who were in charge of what Ford internally advertised as ‘smart redesign’ and I came to know as .. deciding who gets fired. I never interacted with them but felt the consequences of their actions… My ‘manager to be’ was fired 3 weeks before I started and I ended up having to choose a different role for my time at Ford from ‘the leftover rotations’ after everyone else in the cohort had chosen their rotations for the year.")), /*#__PURE__*/


    // React.createElement("span", { className: "color" }, "Ford"), "for two years and seeing what Accenture/BCG consultants do with Ford"")), /*#__PURE__*/

    // React.createElement("span", { className: "color" }, "and"), "then working on a Covid Dashboard for the state of Michigan with McKinsey employees"")), /*#__PURE__*/

    // React.createElement("p", null, "I believe my studies from when I was at the University of Michigan School of Information were teaching me a lot of the skills that consultants use. One of my favorite classes was taught by this professor that a lot of my classmates thought was kooky for all sorts of reasons, one being how he  he would emphasize the importance of being concise sooo much. This class was four months long, and the 'only' thing we had to do was write (what I NOW know as) case studies...")), /*#__PURE__*/
  





    React.createElement("div", { className: "title" }, /*#__PURE__*/
    React.createElement("h3", null, "What does he do?"), /*#__PURE__*/
    React.createElement("p", { className: "separator" })), /*#__PURE__*/

    React.createElement("div", { className: "desc" }, /*#__PURE__*/
    React.createElement("h4", { className: "subtitle" }, "I'm a programmer."), /*#__PURE__*/
    React.createElement("p", null, "For the front-end I usually work with Javascript, either standalone or including popular frameworks like ReactJS and VueJS. I also make the web pretty by using Sass, CSS and, whenever needed, any of their friends: Bootstrap, Bulma, etc."), /*#__PURE__*/




    React.createElement("p", null, "For the back-end I also work with Javascript (NodeJS, Express, MongoDB, etc). But, of course, whenever the project requires PHP, I do PHP as well (Wordpress, Laravel, etc).")), /*#__PURE__*/




    React.createElement("div", { className: "desc" }, /*#__PURE__*/
    React.createElement("h4", { className: "subtitle" }, "Also a designer."), /*#__PURE__*/
    React.createElement("p", null, "I feel comfortable working with many Adobe products. Photoshop, Illustrator, InDesign, Lightroom or Xd are some kind of industry standards and I love working with them. I'm not limited to them, though: Gimp, Inkscape or Figma are also very valid applications that I've been working with."), /*#__PURE__*/





    React.createElement("p", null, "User interfaces, brochures, books, branding... You name it! As I mentioned, creating pretty things is particularly important for me."))))));








};





/***********************
  Projects Component
 ***********************/

const Projects = props => {
  return /*#__PURE__*/(
    React.createElement("section", { id: "projects" }, /*#__PURE__*/
    React.createElement("div", { className: "projects-container" }, /*#__PURE__*/
    React.createElement("div", { className: "heading" }, /*#__PURE__*/
    React.createElement("h3", { className: "title" }, "My Works"), /*#__PURE__*/
    React.createElement("p", { className: "separator" }), /*#__PURE__*/
    React.createElement("p", { className: "subtitle" }, "Here's a list of ", /*#__PURE__*/
    React.createElement("u", null, "most"), " of the projects I've been working on lately. All of these were built during my coding camp adventure on",
    ' ', /*#__PURE__*/
    React.createElement("a", { href: "https://www.freecodecamp.org/", target: "_blank", rel: "noopener noreferrer" }, "freeCodeCamp"), ", where I've been coding for almost 7 months non-stop until I completed all the projects required to get my Full-Stack Developer certification.")), /*#__PURE__*/






    React.createElement("div", { className: "projects-wrapper" }, /*#__PURE__*/
    React.createElement(Project, {
      title: "Anonymous Message Board.",
      img: 'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/AnonMsgBoard.jpg',
      tech: "js css react node",
      link: "https://yagoestevez-anon-msg-board.glitch.me/",
      repo: "https://github.com/yagoestevez/anonymous-message-board" }, /*#__PURE__*/

    React.createElement("small", null, "Built using Node, Express, MongoDB, CSS + Bulma, React.js and React Router."), /*#__PURE__*/


    React.createElement("p", null, "This is a full-stack website that I made which lets the users read and post anonymous messages and replies.")), /*#__PURE__*/




    React.createElement(Project, {
      title: "Stock Price Checker.",
      img: 'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/StockPriceChecker.jpg',
      tech: "js node css",
      link: "https://yagoestevez-stock-price-checker.glitch.me/",
      repo: "https://github.com/yagoestevez/fcc-stock-price-checker" }, /*#__PURE__*/

    React.createElement("small", null, "Built using Node, Express, MongoDB, JS + jQuery + Axios, CSS + Bootstrap and Pug."), /*#__PURE__*/


    React.createElement("p", null, "Another full-stack website to check the current value of any requested stock in the market.")), /*#__PURE__*/




    React.createElement(Project, {
      title: "Personal Library.",
      img: 'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/PersonalLibrary.jpg',
      tech: "js node css",
      link: "https://yagoestevez-personal-library.glitch.me/",
      repo: "https://github.com/yagoestevez/fcc-personal-library" }, /*#__PURE__*/

    React.createElement("small", null, "Built using Node, Express, MongoDB, JS + jQuery, CSS + Bootstrap and Pug."), /*#__PURE__*/
    React.createElement("p", null, "A full-stack website to store book titles and comments to each book into a remote database.")), /*#__PURE__*/




    React.createElement(Project, {
      title: "Issue Tracker.",
      img: 'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/IssueTracker.jpg',
      tech: "js node css",
      link: "https://yagoestevez-issue-tracker.glitch.me/",
      repo: "https://github.com/yagoestevez/fcc-issue-tracker" }, /*#__PURE__*/

    React.createElement("small", null, "Built using Node, Express, MongoDB, JS + jQuery, CSS + Bootstrap and Pug."), /*#__PURE__*/
    React.createElement("p", null, "Yet another full-stack app to save and manage technical issues to be fixed.")), /*#__PURE__*/

    React.createElement(Project, {
      title: "Metric-Imperial Converter.",
      img: 'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/MetricImperialConverter.jpg',
      tech: "js node css",
      link: "https://yagoestevez-metric-imperial-converter.glitch.me/",
      repo: "https://github.com/yagoestevez/fcc-metric-imperial-converter/" }, /*#__PURE__*/

    React.createElement("small", null, "Built using Node, Express, JS + jQuery, CSS + Bootstrap and Pug."), /*#__PURE__*/
    React.createElement("p", null, "Another full-stack for converting values from the Internation System of Units (Metric) into the imperial units.")), /*#__PURE__*/




    React.createElement(Project, {
      title: "URL Shortener Microservice.",
      img: 'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/Cortala.jpg',
      tech: "js node css",
      link: "https://cortala.glitch.me/example",
      repo: "https://github.com/yagoestevez/cortala" }, /*#__PURE__*/

    React.createElement("small", null, "Built using Node, Express, CSS + Bootstrap and Pug."), /*#__PURE__*/
    React.createElement("p", null, "A microservice which takes a raw URL and makes it a short link to make it easy to sent it through the Internet.")), /*#__PURE__*/




    React.createElement(Project, {
      title: "Exercise Tracker.",
      img: 'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/ExerciseTracker.jpg',
      tech: "js vue node css",
      link: "https://yagoestevez-exercise-tracker.glitch.me",
      repo: "https://github.com/yagoestevez/exercise-tracker" }, /*#__PURE__*/

    React.createElement("small", null, "Built using Node, Express, VueJS + Vue Router and CSS + Bootstrap."), /*#__PURE__*/
    React.createElement("p", null, "A service which lets the users save their daily exercise (or anything) into a log for them to check it later.")), /*#__PURE__*/




    React.createElement(Project, {
      title: "Bar Chart.",
      img: 'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/BarChart.jpg',
      tech: "js d3 css",
      link: "https://codepen.io/yagoestevez/full/wxjmrB/",
      repo: "https://github.com/yagoestevez/fcc-barchart" }, /*#__PURE__*/

    React.createElement("small", null, "Built using CSS, JS and D3.js."), /*#__PURE__*/
    React.createElement("p", null, "A bar chart representing the evolution of the US GDP.")), /*#__PURE__*/

    React.createElement(Project, {
      title: "Treemap Diagram.",
      img: 'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/TreemapDiagram.jpg',
      tech: "js d3 css",
      link: "https://codepen.io/yagoestevez/full/bjZygz/",
      repo: "https://github.com/yagoestevez/fcc-treemap-diagram" }, /*#__PURE__*/

    React.createElement("small", null, "Built using CSS, JS and D3.js."), /*#__PURE__*/
    React.createElement("p", null, "A treemap diagram representing groups of pledges and sales from a particular category.")), /*#__PURE__*/



    React.createElement(Project, {
      title: "Choropleth Map.",
      img: 'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/ChoroplethMap.jpg',
      tech: "js d3 css",
      link: "https://codepen.io/yagoestevez/full/NBeaWK/",
      repo: "https://github.com/yagoestevez/fcc-choropleth-map" }, /*#__PURE__*/

    React.createElement("small", null, "Built using CSS, JS and D3.js."), /*#__PURE__*/
    React.createElement("p", null, "A choropleth map representing the educational attainment by county in the U.S.")), /*#__PURE__*/

    React.createElement(Project, {
      title: "Random Quoting Machine.",
      img: 'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/QuotingMachine.jpg',
      tech: "js vue css",
      link: "https://codepen.io/yagoestevez/full/bxgEyd/",
      repo: "https://github.com/yagoestevez/random-quoting-machine" }, /*#__PURE__*/

    React.createElement("small", null, "Built using VueJS, Axios and CSS + Bootstrap."), /*#__PURE__*/
    React.createElement("p", null, "A random quoting app which retrieves pictures and quotes from two different APIs.")), /*#__PURE__*/

    React.createElement(Project, {
      title: "Calculator.",
      img: 'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/Calculator.jpg',
      tech: "js react css",
      link: "https://codepen.io/yagoestevez/full/ERVONM/",
      repo: "https://github.com/yagoestevez/the-calcoolator" }, /*#__PURE__*/

    React.createElement("small", null, "Built using React and CSS."), /*#__PURE__*/
    React.createElement("p", null, "A project on which I built a virtual calculator with its usual features.")), /*#__PURE__*/

    React.createElement(Project, {
      title: "Pomodoro Timer.",
      img: 'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/TomateTimer.jpg',
      tech: "js react css",
      link: "https://codepen.io/yagoestevez/full/dqJGVa",
      repo: "https://github.com/yagoestevez/tomate-time" }, /*#__PURE__*/

    React.createElement("small", null, "Built using React, CSS and lots of SVG."), /*#__PURE__*/
    React.createElement("p", null, "A cute and animated Pomodoro clock to help the users improve their productivity.")), /*#__PURE__*/

    React.createElement(Project, {
      title: "TicTacToe Game.",
      img: 'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/TicTacToe.jpg',
      tech: "js react css",
      link: "https://codepen.io/yagoestevez/full/KRevzB/",
      repo: "https://github.com/yagoestevez/TicTacToe" }, /*#__PURE__*/

    React.createElement("small", null, "Built using React, CSS and SVG."), /*#__PURE__*/
    React.createElement("p", null, "A TicTacToe game with a basic AI algorithm made for the legacy front-end projects on FreeCodeCamp.")), /*#__PURE__*/




    React.createElement(Project, {
      title: "Twitch Clone.",
      img: 'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/Twitch.jpg',
      tech: "js vue sass",
      link: "https://codepen.io/yagoestevez/full/xjwVPq/" }, /*#__PURE__*/


    React.createElement("small", null, "Built using VueJS, Axios and Scss."), /*#__PURE__*/
    React.createElement("p", null, "Simple Twitch clone using the new Twitch Helix API and made for the legacy front-end projects on FreeCodeCamp.")), /*#__PURE__*/




    React.createElement(Project, {
      title: "Weather App.",
      img: 'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/WeatherApp.jpg',
      tech: "js vue css",
      link: "https://codepen.io/yagoestevez/full/zWbGmZ/" }, /*#__PURE__*/


    React.createElement("small", null, "Built using VueJS, Axios and CSS."), /*#__PURE__*/
    React.createElement("p", null, "App that present the users with the current local weather for their location.")), /*#__PURE__*/

    React.createElement(Project, {
      title: "Tribute.",
      img: 'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/Tribute.jpg',
      tech: "js sass",
      link: "https://codepen.io/yagoestevez/full/aaaOxL/",
      repo: "https://github.com/yagoestevez/tribute-to-aaron-swartz" }, /*#__PURE__*/

    React.createElement("small", null, "Built using vanilla Javascript and Scss."), /*#__PURE__*/
    React.createElement("p", null, "Tribute page to Aaron Swartz, a static website built with SCSS and plain Javascript.")), /*#__PURE__*/



    React.createElement(Project, {
      title: "Survey Form.",
      img: 'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/SurveyForm.jpg',
      tech: "js sass",
      link: "https://codepen.io/yagoestevez/full/bjVgjX/",
      repo: "https://github.com/yagoestevez/membership-form" }, /*#__PURE__*/

    React.createElement("small", null, "Built using vanilla Javascript and Scss."), /*#__PURE__*/
    React.createElement("p", null, "An animated survey form.")), /*#__PURE__*/

    React.createElement(Project, {
      title: "Landing Page Example.",
      img: 'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/LandingPage.jpg',
      tech: "js sass",
      link: "https://codepen.io/yagoestevez/full/pOBLeK/",
      repo: "https://github.com/yagoestevez/tomate-timer-landing-page" }, /*#__PURE__*/

    React.createElement("small", null, "Built using vanilla Javascript and Scss."), /*#__PURE__*/
    React.createElement("p", null, "A landing page for the Pomodoro Timer I made (shown previously in this section).")), /*#__PURE__*/

    React.createElement(Project, {
      title: "Technical Documentation Page.",
      img: 'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/Documentify.jpg',
      tech: "js react css",
      link: "https://codepen.io/yagoestevez/full/QxOLKX/",
      repo: "https://github.com/yagoestevez/documentify" }, /*#__PURE__*/

    React.createElement("small", null, "Built using React and CSS."), /*#__PURE__*/
    React.createElement("p", null, "A technical documentation page made for a little React library I published on NPM."))))));







};



/***********************
  Contact Component
 ***********************/

const Contact = props => {
  return /*#__PURE__*/(
    React.createElement("section", { id: "contact" }, /*#__PURE__*/
    React.createElement("div", { className: "container" }, /*#__PURE__*/
    React.createElement("div", { className: "heading-wrapper" }, /*#__PURE__*/
    React.createElement("div", { className: "heading" }, /*#__PURE__*/
    React.createElement("p", { className: "title" }, "Want to ", /*#__PURE__*/
    React.createElement("br", null), "contact me?"), /*#__PURE__*/


    React.createElement("p", { className: "separator" }), /*#__PURE__*/
    React.createElement("p", { className: "subtitle" }, "Please, use the form below or send an email to ",
    '', /*#__PURE__*/
    React.createElement("span", { className: "mail" }, "web", /*#__PURE__*/

    React.createElement("i", { className: "fas fa-at at" }), "yagoestevez", /*#__PURE__*/

    React.createElement("i", { className: "fas fa-circle dot" }), "com"), ":")), /*#__PURE__*/





    React.createElement(SocialLinks, null)), /*#__PURE__*/

    React.createElement("form", { id: "contact-form", action: "#" }, /*#__PURE__*/
    React.createElement("input", { placeholder: "Name", name: "name", type: "text", required: true }), /*#__PURE__*/
    React.createElement("input", { placeholder: "Email", name: "email", type: "email", required: true }), /*#__PURE__*/
    React.createElement("textarea", { placeholder: "Message", type: "text", name: "message" }), /*#__PURE__*/
    React.createElement("input", { className: "button", id: "submit", value: "Submit", type: "submit" })))));




};



/***********************
  Footer Component
 ***********************/

const Footer = props => {
  return /*#__PURE__*/(
    React.createElement("footer", null, /*#__PURE__*/
    React.createElement("div", { className: "wrapper" }, /*#__PURE__*/
    React.createElement("h3", null, "THANKS FOR VISITING"), /*#__PURE__*/
    React.createElement("p", null, "\xA9 ", new Date().getFullYear(), " Yago Est\xE9vez."), /*#__PURE__*/
    React.createElement(SocialLinks, null))));



};




/***********************
  Social Links Component
 ***********************/

const SocialLinks = props => {
  return /*#__PURE__*/(
    React.createElement("div", { className: "social" }, /*#__PURE__*/
    React.createElement("a", {
      href: "https://twitter.com/yagoestevez",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Link to author's Twitter profile" },

    ' ', /*#__PURE__*/
    React.createElement("i", { className: "fab fa-twitter" })), /*#__PURE__*/

    React.createElement("a", {
      id: "profile-link",
      href: "https://github.com/yagoestevez",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Link to author's GitHub Profile" },

    ' ', /*#__PURE__*/
    React.createElement("i", { className: "fab fa-github" })), /*#__PURE__*/

    React.createElement("a", {
      href: "https://codepen.io/yagoestevez",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Link to author's Codepen Profile" },

    ' ', /*#__PURE__*/
    React.createElement("i", { className: "fab fa-codepen" }))));



};



/***********************
  Main Component
 ***********************/

class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      menuState: false });_defineProperty(this, "toggleMenu",


    () => {
      this.setState(state => ({
        menuState: !state.menuState ?
        'active' :
        state.menuState === 'deactive' ?
        'active' :
        'deactive' }));

    });}

  render() {
    return /*#__PURE__*/(
      React.createElement(React.Fragment, null, /*#__PURE__*/
      React.createElement(Menu, { toggleMenu: this.toggleMenu, showMenu: this.state.menuState }), /*#__PURE__*/
      React.createElement(Nav, { toggleMenu: this.toggleMenu, showMenu: this.state.menuState }), /*#__PURE__*/
      React.createElement(Header, null), /*#__PURE__*/
      React.createElement(About, null), /*#__PURE__*/
      React.createElement(Projects, null), /*#__PURE__*/
      React.createElement(Contact, null), /*#__PURE__*/
      React.createElement(Footer, null)));


  }

  componentDidMount() {
    const navbar = document.querySelector('#navbar');
    const header = document.querySelector('#welcome-section');
    const forest = document.querySelector('.forest');
    const silhouette = document.querySelector('.silhouette');
    let forestInitPos = -300;

    window.onscroll = () => {
      let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollPos <= window.innerHeight) {
        silhouette.style.bottom = `${parseInt(scrollPos / 6)}px`;
        forest.style.bottom = `${parseInt(forestInitPos + scrollPos / 6)}px`;
      }

      if (scrollPos - 100 <= window.innerHeight)
      header.style.visibility = header.style.visibility === 'hidden' && 'visible';else
      header.style.visibility = 'hidden';

      if (scrollPos + 100 >= window.innerHeight) navbar.classList.add('bg-active');else
      navbar.classList.remove('bg-active');
    };

    (function navSmoothScrolling() {
      const internalLinks = document.querySelectorAll('a[href^="#"]');
      for (let i in internalLinks) {
        if (internalLinks.hasOwnProperty(i)) {
          internalLinks[i].addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(internalLinks[i].hash).scrollIntoView({
              block: 'start',
              behavior: 'smooth' });

          });
        }
      }
    })();
  }}



ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));