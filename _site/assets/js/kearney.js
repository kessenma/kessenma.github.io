function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } // Made by Yago Estévez (Twitter: @yagoestevez.com)



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
    node: 'fab fa-node'
  };


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
          React.createElement("a", { href: link, target: "_blank", rel: "noopener noreferrer" }, "View source ", /*#__PURE__*/
            React.createElement("i", { className: "fas fa-external-link-alt" })), /*#__PURE__*/

          // React.createElement("a", { href: link, target: "_blank", rel: "noopener noreferrer" }, "Try it Live ", /*#__PURE__*/
          // React.createElement("i", { className: "fas fa-external-link-alt" }))
        ))));





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
            className: props.showMenu === 'active' ? 'menu-button active' : 'menu-button'
          }, /*#__PURE__*/

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
            React.createElement("span", { className: "color" }, "My name is Kyle"), " and I'm interested in working at your firm. Scroll down to read more")), /*#__PURE__*/


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


            React.createElement("h4", { className: "subtitle" }, "What is my background and how does it align with Kearney?"), /*#__PURE__*/

            React.createElement("p", null, "For the past couple of years, I've been curious about careers in consulting, and Kearney seems well-respected for their consulting services. Having the opportunity to; grow under Kearney’s partners — who historically have shown independence, confidence, and foresight (I admire that the partners bought back the firm in 2005) — sounds like a great way to explore this curiosity while also providing value to Kearney with my skills."), /*#__PURE__*/

            React.createElement("p", null, "The University of Michigan School of Information (UMSI) taught me how to turn complex issues into concise, need-to-know, executive summaries.I am proud to say that much of my education at UMSI was mentored by Professor John Leslie King, who, was the ‘founding father’, of the bachelors of science in information (BSI) program I was in. In 2017, I applied to UMSI as a transfer student. For the first time in UMSI’s history, myself and 19 other transfer students were accepted into the BSI program. I took full advantage of the opportunities provided, and when I graduated in 2019, I won an award named after my mentor, John Leslie King at the graduation ceremony. ")), /*#__PURE__*/


          // React.createElement("p", null, "(the pic of me in the background is me and Professor King) "), /*#__PURE__*/
          React.createElement("div", { className: "title" }, /*#__PURE__*/
            React.createElement("p", null, "(this background is Professor King and I)")), /*#__PURE__*/

          React.createElement("div", { className: "desc" }, /*#__PURE__*/
          
          React.createElement("p", null, "After graduating I went on to work at Ford Motor Company in the spring of 2019 in their rotational program for college graduates (FCGs). This was my introduction to a variety of consultants. I worked directly with Accenture’s tech implementation consultants on Ford’s CRM technology for a year. In 2019 I was nominated to be the volunteer lead by the FCG co-president. One of my major responsibilities was to organize an annual-Christmas-gift-wrapping-party for 300 employees. Another responsibility with this position was presenting on a monthly basis to more than 100 FCG employees. Pre-pandemic, I organized volunteer events once a month. During covid, I adapted and started seeking+promoting remote volunteer opportunities. Then in April 2020 I got an email for a volunteer opportunity from a previous professor of mine, Dr. Paul Resnick "), /*#__PURE__*/

          React.createElement("p", null, "Dr. King referred me to Dr. Resnick to assist with building a Covid dashboard for the state of Michigan. I worked as a product manager and software tester on this dashboard, and my team of self described ‘software testers’ were responsible for creating algorithms in Python to create risk levels for MI state officials to follow. I’d like to work on more projects like this one, and I believe Kearney may be involved with them.")), /*#__PURE__*/




          React.createElement("div", { className: "title" }, /*#__PURE__*/
            React.createElement("h3", null, "So, what roles am I interested in?"), /*#__PURE__*/
            React.createElement("p", { className: "separator" })), /*#__PURE__*/

          React.createElement("div", { className: "desc" }, /*#__PURE__*/
            React.createElement("h4", { className: "subtitle" }, ""), /*#__PURE__*/
            React.createElement("p", null, "This marketing intern position I’m applying to seems up my alley, but I am open to more traditional consulting roles as well. Not entirely sure ‘where I fit’ right now… I can build landing pages like this one fairly quickly!"), /*#__PURE__*/
            React.createElement("p", null, "I have 5 years of German classes from high school + college, and I really really want to speak it- so roles that lead me to that end goal also excite me quite a bit. I have an interview with the Austrian Institute of Technology this coming April for a backend developer position in behavior science. Vienna is where I want to live next so I’m very excited about this opportunity. I see that Kearney also has offices in Vienna 🧐")) /*#__PURE__*/




            
            ))));








};





/***********************
  Projects Component
 ***********************/

const Projects = props => {
  return /*#__PURE__*/(
    React.createElement("section", { id: "projects" }, /*#__PURE__*/
      React.createElement("div", { className: "projects-container" }, /*#__PURE__*/
        React.createElement("div", { className: "heading" }, /*#__PURE__*/
          React.createElement("h3", { className: "title" }, "My 'Curriculum vitae' of marketing + research"), /*#__PURE__*/
          React.createElement("p", { className: "separator" }), /*#__PURE__*/
          React.createElement("p", { className: "subtitle" }, "Here's a list of ", /*#__PURE__*/
            React.createElement("u", null, "some"), " of the projects I've been involved with that utilize communication skills in; graphic design, content creation, publishing, and research-backed-guidance for founders.",
            ' ', /*#__PURE__*/
            React.createElement("a", { href: "https://www.kessenma.com/", target: "_blank", rel: "noopener noreferrer" }, ""), "")), /*#__PURE__*/


        React.createElement("div", { className: "projects-wrapper" }, /*#__PURE__*/

        React.createElement(Project, {
          title: "Human Computer Interaction Publications",
          img: 'https://media2.giphy.com/media/gie76aVZpoArr6Nogs/giphy.gif?cid=ecf05e47sa2zg4x3edidetg1dzllpgeb2i97cpu203tq1oon&rid=giphy.gif&ct=g',
          tech: "UX Research",
          link: "/#publications"
        }, /*#__PURE__*/
          React.createElement("small", null, "statistics documented: F-Tests, T-Tests, X2, bivariate correlations, & Betas"), /*#__PURE__*/
          React.createElement("p", null, "While at the University of Michigan School of Information (UMSI), I worked as a statistics coder for Dr. Lionel Robert. I read academic papers on human computer interaction and documented targeted statistics from those papers. After I graduated, a PhD student Under Dr. Robert analyzed my documented statistics and they published my work with me as a co-author.")), /*#__PURE__*/
          
          React.createElement(Project, {
            title: "SciCrunch",
            img: '/assets/img/sciCrunch_logo.png',
            tech: "UX Research",
            link: "/scicrunch.html"
          }, /*#__PURE__*/
            React.createElement("small", null, "research techniques used: user interviews, usability testing, competitive analysis, A/B testing, surveying, web scraping, email campaigning"), /*#__PURE__*/
            React.createElement("p", null, "For my capstone project my senior year at UMSI I worked with a team to provide UX research for a biology company, SciCrunch. This was my most in depth UX research project. Attached below is an overview of my team's research process."), /*#__PURE__*/
            React.createElement("a", { href: " /assets/img/SciCrunch_Final_Presentation.pptx" }, "click here to download the final presentaion")), /*#__PURE__*/


            React.createElement(Project, {
              title: "UpRound Venture Capital",
              img: 'data:image/png;base64,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',
              tech: "UX Research",
              link: "https://www.upround.vc/"
            }, /*#__PURE__*/
              React.createElement("small", null, "created event advertising using Sketch and emailed UMSI list servs"), /*#__PURE__*/
              React.createElement("p", null, "I made a post on a University of Michigan student Facebook page saying I was looking to participate in student clubs that needed graphic design work done, then a cofounder for UpRound VC said they needed advertising for an event. Their first event for students only had 36 spots available and they had over 100 applicants.")), /*#__PURE__*/
            

          
          React.createElement(Project, {
            title: "Possibilities for Change",
            img: 'https://pbs.twimg.com/profile_images/981520684214992896/fJ3TkoDv_400x400.jpg',
            tech: "UX Research",
            link: "/assets/img/P4C.pdf"
          }, /*#__PURE__*/
            React.createElement("small", null, "research techniques used: user interviews, usability testing, competitive analysis"), /*#__PURE__*/
            React.createElement("p", null, "During my last summer in undergrad I did pro-bono UX research consulting (I received class credits) with P4C for their nicotine risk assessment module. Attached is my final report I presented to the CEO at the end of the summer.")), /*#__PURE__*/

          React.createElement(Project, {
            title: "CMYK Design",
            img: 'https://cdn.shopify.com/s/files/1/0456/3648/5273/files/image-asset-2.gif?v=1598567731',
            tech: "process = Pencil + paper, Adobe Illurstrator, lots of emailing with the founder, and ",
            link: "https://eatgonanas.com/pages/about"
          }, /*#__PURE__*/
            React.createElement("small", null, "<-- Gonana's Founders"), /*#__PURE__*/
            React.createElement("p", null, "Myself, some art + design, and business students at UM started a club in 2019 to provide design consulting services to startups. Our first client was Gonana's. We created a brand identity for them with color+font guides, made graphics for their website, and updated their packaging. After we worked with them they secured a contract to sell their bread in Nordstrom's and aired it on QVC.")), /*#__PURE__*/


          React.createElement(Project, {
            title: "North Star Advertising",
            img: '/assets/img/northstar1.jpg',
            tech: "photoshop",
            link: "https://www.facebook.com/northstarseattle/photos/653489701477152"
          }, /*#__PURE__*/
            React.createElement("small", null, "Built using photoshop"), /*#__PURE__*/
            React.createElement("p", null, "When I was a busboy at North Star Diner I ended up making some ads for their facebook and instagram pages. The ad pictured here even got copied by a bar down the street."), /*#__PURE__*/
            React.createElement("a", { href: "https://lh3.googleusercontent.com/sMFVKIxJW7zlYpn7Y1C110Z7rIfKU_IT96EpwH64kRhTZpksmFtPMawuLF4jDXcYllDg04yzzGbBP6ZYKNSM4znHdzRYz6rB1JG1hz21TdvRoF0phiFd6XWCONbSVMQj7eSiJP5-Bn15frJx6n5OO2o4j6trRMg5i0bPB2hZQc7nOiPQ3wOOJiPEMqPoso7plZRkEHhbpleD4shuM4V_UPK35Mmihi21QT8KZWUOKaAitBW9Xmo3uhDlqYfo6JUvNBiOdok5jLY2dYAtA_BWnAtRTtaaZeOrX2bKyVOSBnGBMWw1XCFF8UCvfQ-YC234TFoI8Z70VlZTh6ErenqV2HNzm4cRkPQ1atcT97qi1hDporT8qorbgAH9zAyd0xfdX94szc7pU6f50oXD8tzFcRJX3dd7osTogXpcl3Ib34EkvAYAUBcQp6fnaFRO8OwwQn5oTmjec-5jl9d-x1LLGrw2Ak7F4IcTzqpaQS-oNi_7gmi8gPaXHy-z6kmi3GXDj13I16UHeo2UcrTo4DyfJc3RJImbIQnOngYrMSOzLwtKGqVZbns3TA458M3nicgffHbzyjOrJ277CfE3UGCmCHer9JeJ-grSWokaLkPbf7tFR4D4LCR0Qu-q9hYzbOTMgXXYdu_y0PsyUXYsTFlnoNWdF3VfD3Yx2udq9S3sYopGbtfluEuxit0Dtx9QxjOu_JuJ1sjwmNScQ-jSp_NZYYmm7Z3LZuEcs5a7plkZhMWEeeyaZR-ePc2_I_fjgM11jIip_CETs-1lEtnWbo40Sp9t6FexltATtQ=w1404-h1872-no?authuser=1", target: "_blank", rel: "noopener noreferrer" }, "click here to see the copy-cat")), /*#__PURE__*/
          React.createElement(Project, {
            img: '/assets/img/northstar2.jpg',
            tech: "photoshop",
            link: "https://www.facebook.com/northstarseattle/photos/a.474863476006443/660585904100865"
          }, /*#__PURE__*/
            React.createElement("small", null, "Built using photoshop"), /*#__PURE__*/
            React.createElement("p", null, "and here is another ad I made for North Star Diner to promote the Sunday-brunch-time performer, Country Dave")), /*#__PURE__*/



          React.createElement(Project, {
            title: "Sound and Silence Photography",
            img: '/assets/img/halsey.jpg',
            tech: "",
            link: "https://www.instagram.com/p/BKgznE8AfKN"
          }, /*#__PURE__*/
            React.createElement("small", null, "Captured with a Canon EoS SL 2 + 50mm"), /*#__PURE__*/
            React.createElement("p", null, "...It began with sneaking into photo pits, press stands, and backstage in all sorts of ways, pictured here is Halsey from Seattle's Bumbershoot in 2016 -- where I had an official 'press pass' for 'day 1' of a three day music festival. Halsey performed on 'day 3', but I know how to use whiteout and have nice handwriting 😉")), /*#__PURE__*/

          React.createElement(Project, {
            img: '/assets/img/fetty.jpg',
            tech: "",
            link: "https://www.facebook.com/soundandsilencemedia/photos/1753252961594052"
          }, /*#__PURE__*/
            React.createElement("small", null, "Captured with a Canon EoS SL 2 + 50mm"), /*#__PURE__*/
            React.createElement("p", null, "Fetty Wap, Bumbershoot, Seattle, WA, 2016")), /*#__PURE__*/

          React.createElement(Project, {
            img: '/assets/img/mattAndKim.JPG',
            tech: "",
            link: "https://photos.google.com/u/1/photo/AF1QipPfRy_p8PT4qALDipQsSDQLkkVb1KWniodlunyJ"
          }, /*#__PURE__*/
            React.createElement("small", null, "Captured with a Canon EoS SL 2 + 75-300mm"), /*#__PURE__*/
            React.createElement("p", null, "Matt and Kim, MoPop, Detroit, MI, 2016. My fake press pass got me next to the local Fox news reporter for this angle ha")), /*#__PURE__*/

          React.createElement(Project, {
            img: '/assets/img/g_eazy.jpg',
            tech: "",
            link: "https://photos.google.com/photo/AF1QipPmocvdgy4sNZ6jw15KXHpfinwktgzRiT97JhoG"
          }, /*#__PURE__*/
            React.createElement("small", null, "Captured with a Canon EoS SL 2 + 75-300mm"), /*#__PURE__*/
            React.createElement("p", null, "G-eazy, MoPop, Detroit, MI, 2016. ")), /*#__PURE__*/

          React.createElement(Project, {
            img: '/assets/img/jamiexx.JPG',
            tech: "",
            link: "https://lh3.googleusercontent.com/IK5wL0DNBU2KqBCBohhV6RNraZVVffCMc51eGlS6GxfHIHkjiqkjcYqtSukwXp4CC8lqSS8RhSSVobiGGpUyA0dsueu8gxoWyp7IsbtdteuUNkw3odoVjeqi56pqmXHFzog-UEN04C2HRppSqV-zULJn3cKc3qC8Jf3P0NAyDQI-2VIbq8TiXml2VmXZy2rc21Nb9eXsBOwLDYblZmA9U13d9oYaM4DJUSOt6tTZhZKY9Ie9h2t6no4X39sYoA98m0FeLha0HI70cbPa7B5svbg5Hk8Hs51wD2g6rjFOGbFWM3FvaAKNlGHGMIttutUQqAp_Ymxc9ugZ7dFDJl5-pSImurjHA0p8qbyWdiEAuTs4wUiOaxxBCoqL8mWpzKFeK8JWQmHOA8e-2qFZlLeKNZH727BZ1QjVB1BU2ru2sX7ujkUMAUDlSacyINHS_WYenyGvvXLXAWHmEs4gUH3ajbzH4Vb_RLNR4WZmFxb6KIBAZ-P8fZ1xcf_8tMjL3hRH91ibf0wxiq1Z-P_-WFFYVVu2wY3Fr9tk56W1FbgTDLEfd8NPB_VY5dvfPTjfUmmDBmwBSbrZaMHRJLimPq9EX0waRI3tWMoEithE0hVw-HmZjaW0V-mIdRIZseEFdc1Vrp0E0OAfFUEFRaBL_FSH3TjuZG4jJ5wJwgLFIViwAWQc4QV3pkne9wFiwff6ECUZPL3zHlzDqy8I77Qn73sGVLD7r8g-ChnNFvtQQsQJKxjiIDcjEEa4ZAorIQPTCu7Lmri4Vczkdd0tjxRPlQBTa83TG8L2qSg5Rw=w2686-h1790-no?authuser=1"
          }, /*#__PURE__*/
            React.createElement("small", null, "Captured with a Canon EoS SL 2 + 50mm"), /*#__PURE__*/
            React.createElement("p", null, "Jamie XX, Lightning in a Bottle, Central Valley, CA, 2016 "), /*#__PURE__*/
            React.createElement("a", { href: "https://www.instagram.com/p/BPQXBY-hjtc", target: "_blank", rel: "noopener noreferrer" }, "click here to [read/see] more [about/of] my concert photography experiences")), /*#__PURE__*/







        ))));







};





// /***********************
//   Contact Component
//  ***********************/

// const Contact = props => {
//   return /*#__PURE__*/(
//     React.createElement("section", { id: "contact" }, /*#__PURE__*/
//     React.createElement("div", { className: "container" }, /*#__PURE__*/
//     React.createElement("div", { className: "heading-wrapper" }, /*#__PURE__*/
//     React.createElement("div", { className: "heading" }, /*#__PURE__*/
//     React.createElement("p", { className: "title" }, "Want to ", /*#__PURE__*/
//     React.createElement("br", null), "contact me?"), /*#__PURE__*/


//     React.createElement("p", { className: "separator" }), /*#__PURE__*/
//     React.createElement("p", { className: "subtitle" }, "Please, use the form below or send an email to ",
//     '', /*#__PURE__*/
//     React.createElement("span", { className: "mail" }, "web", /*#__PURE__*/

//     React.createElement("i", { className: "fas fa-at at" }), "yagoestevez", /*#__PURE__*/

//     React.createElement("i", { className: "fas fa-circle dot" }), "com"), ":")), /*#__PURE__*/





//     React.createElement(SocialLinks, null)), /*#__PURE__*/

//     React.createElement("form", { id: "contact-form", action: "#" }, /*#__PURE__*/
//     React.createElement("input", { placeholder: "Name", name: "name", type: "text", required: true }), /*#__PURE__*/
//     React.createElement("input", { placeholder: "Email", name: "email", type: "email", required: true }), /*#__PURE__*/
//     React.createElement("textarea", { placeholder: "Message", type: "text", name: "message" }), /*#__PURE__*/
//     React.createElement("input", { className: "button", id: "submit", value: "Submit", type: "submit" })))));




// };



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
        title: "Link to author's Twitter profile"
      },

        ' ', /*#__PURE__*/
        React.createElement("i", { className: "fab fa-twitter" })), /*#__PURE__*/

      React.createElement("a", {
        id: "profile-link",
        href: "https://github.com/yagoestevez",
        target: "_blank",
        rel: "noopener noreferrer",
        title: "Link to author's GitHub Profile"
      },

        ' ', /*#__PURE__*/
        React.createElement("i", { className: "fab fa-github" })), /*#__PURE__*/

      React.createElement("a", {
        href: "https://codepen.io/yagoestevez",
        target: "_blank",
        rel: "noopener noreferrer",
        title: "Link to author's Codepen Profile"
      },

        ' ', /*#__PURE__*/
        React.createElement("i", { className: "fab fa-codepen" }))));



};



/***********************
  Main Component
 ***********************/

class App extends React.Component {
  constructor(...args) {
    super(...args); _defineProperty(this, "state",
      {
        menuState: false
      }); _defineProperty(this, "toggleMenu",


        () => {
          this.setState(state => ({
            menuState: !state.menuState ?
              'active' :
              state.menuState === 'deactive' ?
                'active' :
                'deactive'
          }));

        });
  }

  render() {
    return /*#__PURE__*/(
      React.createElement(React.Fragment, null, /*#__PURE__*/
        React.createElement(Menu, { toggleMenu: this.toggleMenu, showMenu: this.state.menuState }), /*#__PURE__*/
        React.createElement(Nav, { toggleMenu: this.toggleMenu, showMenu: this.state.menuState }), /*#__PURE__*/
        React.createElement(Header, null), /*#__PURE__*/
        React.createElement(About, null), /*#__PURE__*/
        React.createElement(Projects, null), /*#__PURE__*/
        // React.createElement(Contact, null), /*#__PURE__*/
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
        header.style.visibility = header.style.visibility === 'hidden' && 'visible'; else
        header.style.visibility = 'hidden';

      if (scrollPos + 100 >= window.innerHeight) navbar.classList.add('bg-active'); else
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
              behavior: 'smooth'
            });

          });
        }
      }
    })();
  }
}



ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));