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


            React.createElement("h4", { className: "subtitle" }, "What is my background and how does it align with Kearney?"), /*#__PURE__*/
            React.createElement("p", null, "I grew up in Michigan and both my parents work for GM as engineers. My mom is environmental and my dad is Product Development. And looking back, my parents essentially had the same lifestyle that I hear and read consultants have– my dad flew and drove often for work (Mexico, DC, + Arlington) and my mom worked M-F once my brothers and I were old enough to have a babysitter and she hired a maid. We grew up in suburbia and a mixture of; teenage angst + desire to escape monotony + having average high school grades + high ambitions == me packing up two suitcases and…. at 18 I left for Seattle to pursue an associates degree at North Seattle College. I didn’t know anyone in Seattle or much about it. Just wanted change! The associates degree paid off and the experiences + my grades from it propelled me to getting accepted into a Bachelors of Science in Information (BSI) at the University of Michigan School of Information (UMSI)-- so back to Michigan I went!"), /*#__PURE__*/

            React.createElement("p", null, " One of the core classes in my BSI curriculum was taught by Professor John Leslie King, the ‘founding father’ of the Bachelors degree program I was in. This class taught us the importance of absorbing a lot of information and writing concise reports on the info we absorbed– I didn’t know it then, but we basically were writing ‘case studies’ that consulting company’s use in their interview process. We wrote about subjects such as; Arab Spring, the Dabbawalas delivery system in Mumbai, and Ford Fiesta’s Marketing campaign. This teaching methodology of processing, analyzing, and summarizing large amounts of data is rooted in UMSI’s history. It used to be the ‘School of Library Science’ till 1996 when it evolved to the School of Information, and then in 2015 they offered bachelor's degrees for the first time. In 2017 when I attended, it was the first time the School of Information ever accepted transfer students into their degree. I was in this first cohort of external transfer students along with ~20 others. Then when I graduated in 2019, I was awarded the John Leslie King award….!")), /*#__PURE__*/


          // React.createElement("p", null, "(the pic of me in the background is me and Professor King) "), /*#__PURE__*/
          React.createElement("div", { className: "title" }, /*#__PURE__*/
            React.createElement("p", null, "(this pic of me in the background is me and Professor King)")), /*#__PURE__*/

          React.createElement("div", { className: "desc" }, /*#__PURE__*/

            React.createElement("p", null, "After graduating I went on to work at Ford Motor Company in spring of 2019 in their rotational program for college graduates (FCGs) --This is where I began interacting with different types of consultants professionally. I worked with ‘tech consultants’ from Accenture to implement CRM technology at Ford, and then felt consequences from ’management consultants’ decisions like BCG – who were in charge of Ford's ‘smart redesign’ which I came to know as .. deciding who gets fired. One of the consequences I felt by ‘smart redesign’ was my ‘manager to be’ was fired 3 weeks before I started at the company... and I ended up having to choose a different role for my first rotation from ‘leftover rotations’ (since the other FCG’s in the cohort chose their rotations for the year already). Then a year and a half later the CPU chip shortage happened and my assigned mentor was fired along with all the shift workers in the plant I was at (Flat Rock Assembly), and then 6 months after that I was ‘terminated’ from Ford too.. But every ending is a beginning in disguise and my experiences from Ford taught me that I would like to explore careers outside of the automotive industry. "), /*#__PURE__*/

            React.createElement("p", null, "While I was at Ford I was nominated by the ‘FCG co-president’ into a leadership role for all 300 FCGs in the IT org. I was in the dinkiest role compared to the rest of the people on the council--, the ‘Volunteer lead’. My major documented responsibility was to put on a giant Christmas gift wrapping party to wrap gifts crowdsourced by IT FCG’s for foster children. I also had to make powerpoints once a month and present to 100+ people once a month to communicate what my committee of one was up to during a global pandemic. Pre-pandemic, this volunteer lead would organize 'volunteer events' once a month, but that wasn’t really happening with covid and HR + executives not being clear on what was allowed/not in 2020. However, this role did come with the unwritten perk of me being put to the top of the list for any event I wanted to attend.... and because of this I was able to shake both Bill Ford's and Jim Farley's hands! I organized some in person events (my biggest one was getting people to paint over a rusted bridge overpass near Ford's newest campus in Corktown), but then in April of 2020 I got an odd email from one of John Leslie King’s coworkers-- "), /*#__PURE__*/

            React.createElement("p", null, "Dr Paul Resnick (who was known by my peers as one of the tougher- but also very talented –coding teachers in UMSI) was now in my inbox saying Dr King referred me to him for a role. UMSI was tapped by the Michigan Governor's office to build a ‘covid dashboard’, and they wanted silly ol’ me to help out! I learned so much about how web development in this project and worked with multiple company’s. I even heard a whisper in one meeting that McKinsey was involved with this dashboard, but I am not sure why or how. It would make sense given that Google, Apple, Ford, and UM faculty all were working together on this dashboard too.")), /*#__PURE__*/







          React.createElement("div", { className: "title" }, /*#__PURE__*/
            React.createElement("h3", null, "What roles am I interested in?"), /*#__PURE__*/
            React.createElement("p", { className: "separator" })), /*#__PURE__*/

          React.createElement("div", { className: "desc" }, /*#__PURE__*/
            React.createElement("h4", { className: "subtitle" }, ""), /*#__PURE__*/
            React.createElement("p", null, "This marketing intern position I’m applying to seems up my alley, but I am open to more traditional consulting roles as well. Not entirely sure ‘where I fit’ right now… I can build landing pages like this one fairly quickly though!")) /*#__PURE__*/




            
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
            React.createElement("u", null, "some"), " of the projects I've been involved with that utilize communication skills in; graphic design, content creation, publishing, and research-backed guidance for founders.",
            ' ', /*#__PURE__*/
            React.createElement("a", { href: "https://www.kessenma.com/", target: "_blank", rel: "noopener noreferrer" }, ""), "")), /*#__PURE__*/






        React.createElement("div", { className: "projects-wrapper" }, /*#__PURE__*/


          React.createElement(Project, {
            title: "North Star Advertising",
            img: 'https://lh3.googleusercontent.com/77K1Zg6eDmUIVGiC8Iotdmso49RsIQ8kTLyUdeq6OWpVzi9jhePNi7EubogJjnXc3l-WW2Oh9hJkO6sJ_XhZXYYoXMJcUF3hZZnpfzA-_-Bc3lkEo9E6NbjBsOCs_JUGodrcNvf3P1PfSSDlcDCYENRlkLw_tH3UWUDRon2BntzTG8m8rVocmyo8s_v1UpbBLFY46CR8eSw_fWcKe31eSd7CSW7_Uum3sDxnu48DcGemNiTsYTReJkyoAYhHt3OrcFUnXITppY1MtXcLt7Queu7AFwTrxwqZNgIEbJULNb_URJT8CHZ3gmyblKy4HQtj-_UmXZscQHBxkrEaEf__TotQTOzNbbvPf9JQIdE8vhBDFpd9vpAx-6MElsJf5Gsji0kRI22PUvueIaSaWFsq4ePJrsI9wAeexxHjnTVOZLb1wMnyLGpKZLkS_Ghs2rlwXGmF8B8BfFlLjTNJ_KKTcNhb7u9aSHeB8mOYHsKfbHAbjPSN-NujsocspoExkVzqv3QjUZ_hMdesXIbydvLgkZM2mCymrEDiqxUZdJKGMVzItfIwXVo4duSAqgsez0kd7g7kmYWNslX3X6mUdlojI2rzAR9AnEfGi6emVhjWdLE2NwwJ4yLN-kHvivgXF_bO4UoBTeAeMp2RDE5vxs478EzmDHIcwsEGHp0IJMDd6-uIuEUZ4WtXfHfF1LIKYK2_0HzOLativ36CA7YNkg3SNsnYZfHLUq-JZof2MMdQcw506CV1iSHAzz9LZOVsfc4c2qBF3QC-IhH9hCVQHtand_bZxqiyyUPw9A=w2424-h1872-no?authuser=1',
            tech: "photoshop",
            link: "https://www.facebook.com/northstarseattle/photos/653489701477152"
          }, /*#__PURE__*/
            React.createElement("small", null, "Built using photoshop"), /*#__PURE__*/
            React.createElement("p", null, "When I was a bus boy at North Star Diner I ended up making some ads for their facebook and instagram pages. The ad pictured here even got copied by a bar down the street"), /*#__PURE__*/
            React.createElement("a", { href: "https://lh3.googleusercontent.com/sMFVKIxJW7zlYpn7Y1C110Z7rIfKU_IT96EpwH64kRhTZpksmFtPMawuLF4jDXcYllDg04yzzGbBP6ZYKNSM4znHdzRYz6rB1JG1hz21TdvRoF0phiFd6XWCONbSVMQj7eSiJP5-Bn15frJx6n5OO2o4j6trRMg5i0bPB2hZQc7nOiPQ3wOOJiPEMqPoso7plZRkEHhbpleD4shuM4V_UPK35Mmihi21QT8KZWUOKaAitBW9Xmo3uhDlqYfo6JUvNBiOdok5jLY2dYAtA_BWnAtRTtaaZeOrX2bKyVOSBnGBMWw1XCFF8UCvfQ-YC234TFoI8Z70VlZTh6ErenqV2HNzm4cRkPQ1atcT97qi1hDporT8qorbgAH9zAyd0xfdX94szc7pU6f50oXD8tzFcRJX3dd7osTogXpcl3Ib34EkvAYAUBcQp6fnaFRO8OwwQn5oTmjec-5jl9d-x1LLGrw2Ak7F4IcTzqpaQS-oNi_7gmi8gPaXHy-z6kmi3GXDj13I16UHeo2UcrTo4DyfJc3RJImbIQnOngYrMSOzLwtKGqVZbns3TA458M3nicgffHbzyjOrJ277CfE3UGCmCHer9JeJ-grSWokaLkPbf7tFR4D4LCR0Qu-q9hYzbOTMgXXYdu_y0PsyUXYsTFlnoNWdF3VfD3Yx2udq9S3sYopGbtfluEuxit0Dtx9QxjOu_JuJ1sjwmNScQ-jSp_NZYYmm7Z3LZuEcs5a7plkZhMWEeeyaZR-ePc2_I_fjgM11jIip_CETs-1lEtnWbo40Sp9t6FexltATtQ=w1404-h1872-no?authuser=1", target: "_blank", rel: "noopener noreferrer" }, "click here to see the copy-cat")), /*#__PURE__*/
          React.createElement(Project, {
            img: 'https://scontent.fdet1-1.fna.fbcdn.net/v/t1.18169-9/14563388_660585904100865_6253591999265702647_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=9267fe&_nc_ohc=qoFFRlh_kJQAX8IEgao&_nc_ht=scontent.fdet1-1.fna&oh=00_AT_Vg1tgEdf3kw7QZm0X0jgMaw2MP9KIa762dCBytNYOJw&oe=625DFF58',
            tech: "photoshop",
            link: "https://www.facebook.com/northstarseattle/photos/a.474863476006443/660585904100865"
          }, /*#__PURE__*/
            React.createElement("small", null, "Built using photoshop"), /*#__PURE__*/
            React.createElement("p", null, "here is another ad I made for North Star Diner to promote the Sunday-brunch-time performer, Country Dave")), /*#__PURE__*/



          React.createElement(Project, {
            title: "Sound and Silence Photography",
            img: 'https://scontent.fdet1-1.fna.fbcdn.net/v/t31.18172-8/14258288_1753253244927357_8505274590803320220_o.jpg?_nc_cat=100&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=ZtjoEndInUgAX9ZQ_aV&_nc_ht=scontent.fdet1-1.fna&oh=00_AT_7qR46yL14Gdx30oHRVjYytKJy8vN8ez6Cs194foKpQQ&oe=625C95F0',
            tech: "",
            link: "https://www.instagram.com/p/BKgznE8AfKN"
          }, /*#__PURE__*/
            React.createElement("small", null, "Captured with a Canon EoS SL 2 + 50mm"), /*#__PURE__*/
            React.createElement("p", null, "...It began with sneaking into photo pits, press stands, and backstage in all sorts of ways,  Picured here is Halsey from Seattle's Bumbershoot in 2016 -- where I had an offical 'press pass' for 'day 1' of a three day music festival .... Halsey performed on 'day 3' ... but I had some whiteout + pretty handwriting to forge passes ;)")), /*#__PURE__*/

          React.createElement(Project, {
            img: 'https://scontent.fdet1-1.fna.fbcdn.net/v/t31.18172-8/14311247_1753252961594052_3925691536731196128_o.jpg?_nc_cat=101&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=AsB6ffJsPFAAX8zRN8J&_nc_ht=scontent.fdet1-1.fna&oh=00_AT8_bdnP395zTG1QW1v27pxr1P--mPC7fCoK_WIeztswcQ&oe=625D8FC4',
            tech: "",
            link: "https://www.facebook.com/soundandsilencemedia/photos/1753252961594052"
          }, /*#__PURE__*/
            React.createElement("small", null, "Captured with a Canon EoS SL 2 + 50mm"), /*#__PURE__*/
            React.createElement("p", null, "Fetty Wap, Bumbershoot, Seattle , WA, 2016")), /*#__PURE__*/
          React.createElement(Project, {
            img: 'https://lh3.googleusercontent.com/G3_ezjGqzNI3TNsngwQbZXKPE70rqwzzxhSlukUJxgYHHAENAvuUYZJHhSOZE5RZ49h0EV7ZRQNvprUwrJneUjfVuMc9fPKkAF2aoukpcJ-tOJT6Mfl-t_-LJlYyxm8UpeKMGY9gwbjYas0IxlMFIR5Xk8cuZZcm4_lTSj8DUEn2V-9Jz5gdiYgv547q_eELURH9X7sX7Yn96-7XnGlCgGwPMo6JWc82F9rXSQcQiNwhqYT4Ho8QTGHhOMx6WRwwTmRn04XQ2OGjoDjhPyx5LQJHuN1-tEGKBngCbxJmlBF7-VX8KzrVSB09_xwD4mSvMY9tLL8LGBw7abA_FPME_ejMSelPYTowiqYiiK3ormFg4iiAYogMbvnSRza544EjlMKIRC8WuRiLaEoi-ob6G2YHfS7HzwmTCoYDQVZP5IWI_A2dH0BAek7OTm-2kYomnHAnqtwSGDEZ2CByfShtDN0FEUYfVaDoHS43U5IHtPjI5CMxEJ6mRWtCzzz0weLWB8HQ6aTGDc6Z8-BAoSp6C6NVQFvg8SNiW7P7vig2VGgI_IzvlWcE00rrleA8RzWWtz33hCIm5Xrn6nOqPOiLdR9OaWKQlw9gXbSnwKmdzch5H4JfL0pXZrJbA_l9nx1I6MjisMGum3Xn3LDvD4flnBrGqF6DHC1sINuHI5VtoKkwP5rID2RZwH6fHTNcA47dYp_PGCD9zl3lU7fTrDmA3_Js3VMjDDT2DlZVZDrYj_5O15z3G_rzzX-vRh8iROJ5szw5EsRDgqYIxrszRLYgajTfeyJsrs2MQg=w2686-h1790-no?authuser=1',
            tech: "",
            link: "https://photos.google.com/u/1/photo/AF1QipPfRy_p8PT4qALDipQsSDQLkkVb1KWniodlunyJ"
          }, /*#__PURE__*/
            React.createElement("small", null, "Captured with a Canon EoS SL 2 + 75-300mm"), /*#__PURE__*/
            React.createElement("p", null, "Matt and Kim, MoPop, Detroit, MI, 2016")), /*#__PURE__*/

          React.createElement(Project, {
            img: 'https://lh3.googleusercontent.com/IK5wL0DNBU2KqBCBohhV6RNraZVVffCMc51eGlS6GxfHIHkjiqkjcYqtSukwXp4CC8lqSS8RhSSVobiGGpUyA0dsueu8gxoWyp7IsbtdteuUNkw3odoVjeqi56pqmXHFzog-UEN04C2HRppSqV-zULJn3cKc3qC8Jf3P0NAyDQI-2VIbq8TiXml2VmXZy2rc21Nb9eXsBOwLDYblZmA9U13d9oYaM4DJUSOt6tTZhZKY9Ie9h2t6no4X39sYoA98m0FeLha0HI70cbPa7B5svbg5Hk8Hs51wD2g6rjFOGbFWM3FvaAKNlGHGMIttutUQqAp_Ymxc9ugZ7dFDJl5-pSImurjHA0p8qbyWdiEAuTs4wUiOaxxBCoqL8mWpzKFeK8JWQmHOA8e-2qFZlLeKNZH727BZ1QjVB1BU2ru2sX7ujkUMAUDlSacyINHS_WYenyGvvXLXAWHmEs4gUH3ajbzH4Vb_RLNR4WZmFxb6KIBAZ-P8fZ1xcf_8tMjL3hRH91ibf0wxiq1Z-P_-WFFYVVu2wY3Fr9tk56W1FbgTDLEfd8NPB_VY5dvfPTjfUmmDBmwBSbrZaMHRJLimPq9EX0waRI3tWMoEithE0hVw-HmZjaW0V-mIdRIZseEFdc1Vrp0E0OAfFUEFRaBL_FSH3TjuZG4jJ5wJwgLFIViwAWQc4QV3pkne9wFiwff6ECUZPL3zHlzDqy8I77Qn73sGVLD7r8g-ChnNFvtQQsQJKxjiIDcjEEa4ZAorIQPTCu7Lmri4Vczkdd0tjxRPlQBTa83TG8L2qSg5Rw=w2686-h1790-no?authuser=1',
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