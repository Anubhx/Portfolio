
import uem_logo from '../images/uem_logo.png';
import school1 from '../images/school1.png';
import school2 from '../images/school2.png';
import HeroImg from '../images/HeroImage.jpg';
import language_talk from '../images/language_talk.png';
import Employee from '../images/Employee.png';
import figma from '../images/icons8-figma-48.png';
import xd from '../images/icons8-adobe-xd-48.png';
import miro from '../images/icons8-miro-64.png';
import git from '../images/icons8-git-48.png';
import expo from '../images/icons8-adobe-xd-48.png';
import illustrater from '../images/icons8-adobe-illustrator-48.png';

  /**
   * Array of project objects.
   * @typedef {Object[]} Project
   * @property {number} id - The unique identifier of the project.
   * @property {string} title - The title of the project.
   * @property {string} date - The duration of the project.
   * @property {string} description - The description of the project.
   * @property {string} image - The URL of the project image.
   * @property {string[]} tags - The tags associated with the project.
   * @property {string} category - The category of the project.
   * @property {string} github - The URL of the project's GitHub repository.
   * @property {string} webapp - The URL of the project's web application.
   * @property {Object[]} member - The members associated with the project.
   * @property {string} member.name - The name of the member.
   * @property {string} member.img - The URL of the member's image.
   * @property {string} member.linkedin - The URL of the member's LinkedIn profile.
   * @property {string} member.github - The URL of the member's GitHub profile.
   */

export const Bio = {
    name: "Anubhav",
    roles: [
      "Frontend Developer",
      "Android Developer",
      "UI/UX Designer",
      "Programmer",
    ],
    description:
      "Hey! 👋 As a UX enthusiast with a B.Tech in CSE, I wield Adobe XD, Figma, React Native, React and Android Studio  like a pro. I'm all about user research and design thinking, channeling my inner Sherlock Holmes. Let's team up and create innovative, rockstar experiences! 🚀🎨",
    github: "https://github.com/Anubhx",
    resume:
      "https://drive.google.com/file/d/19U2vQvmAc6UEUjvx75QESBXSzFeZk1_6/view?usp=sharing",
    linkedin: "https://www.linkedin.com/in/anubhax/",
    twitter: "https://twitter.com/anubhavRaj0",
    insta: "https://www.instagram.com/anubhax.27/",
    facebook: "https://www.facebook.com/anubhax/",
  };
  
  export const skills = [
    {
      title: "Frontend",
      skills: [
        {
          name: "React Js",
          image:
            "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
        },
        {
          name: "HTML",
          image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
        },
        {
          name: "CSS",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
        },
        {
          name: "JavaScript",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
        },
        {
          name: "Bootstrap",
          image:
            "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
        },
        {
          name: "Material UI",
          image:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADgCAMAAAAt85rTAAAAh1BMVEX///8Af/8Ad/8AfP8Aev/v+P8Adf8Ae/+Puv8Adv+72P8Ac/87k/8Agf/t9f/6/f/U5v+lyf/m8f+10//H3v/C2/9Tnf9npv/e7P+w0P9+s/9Il/+Ywf8rjP8xkP/A2f8ch//Q4/9zrf94r/+HuP+dxP8JhP9aoP/a6f9Mmv+py/+Tv/8Ab/9IeMWVAAAHEElEQVR4nO2d6XqqMBBAJUQodcG1tlqpS2tre9//+W6oWgWyTAiB4DfnNwaOZiQkk6HTQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQZCm2X5Pu3Wda/Y91zl8Mhoan3KY9AghD8btQJgeAhL5YMVtEgTRp+GXHx9Cj0EGU7N2AHz1g/RUXm8EOry76PnsaHqIjc76SrwTQQI7b1nO18vw+5Djx4SeDifvRuc9ns/KzhsszDu8kFcSXk7kRerfZLsmf9e1MTpx8ifoeSH5MWpLzOOBXE/jEVVYxX+/9q+h0alvBW2F4tcq8DwNwb/eWb0g6z79qkOxuwty55ALjtYke3i1gp7fW1R6V/ygNHcGqWA30zttCLJQjF6Nmrzl7UAK7csEx1FYOLxyQXYFhzejRi8854JPKbjjHW9BkN0VV89GzabE+3zwqQTnPd7hVgRZKO4MQzH3XwgRXBT7pzVBNkaiHwbtzjec4FMJ9rkXY0vQJBQnT4X/QhcF2eitVCjGS5meS4Kp4l47FMe+KPgcFNQPxVl+INKw4FolmIYi/ClcHnyOCrJ+eoSFYvweAZpzTzBVXAKeq79VweeuYBqKY0VL23UEa0pXMKxFkF3WeiZpZ/gpGJeZCw5qEmSjt6eJqJl3zlNARYJ0UZdgqsgPxRdg8JUR9CPht1q9IPs6ve9CE9sEGnwlBKm/NfLTFfS8KBeKw+IjeHWCoi5jU5Cd9POm0zwEGsGnKxj1zZ9K9QXT6cX38/c6HSjHZeUFqfdirFdO8DcUmeKsz52RqEawgt5pIMgukhwoKftZkeDq2mAVcyZGgiYIBZeXu001vfOXTf1+YsHJqctX1TvdE+zMCQ1pZb3TQcHO8Gex11oDbptg9aAgCrZX0De5Rco+7IYgJUk/LDPSPH14nRTXBZ0SjH4nfKHTSFnYjZp9OP4RPSa6IEjPuRvxkug+DvnBZWZjKjB0QfA60TN5gs8m/V795vpAfOR/0gHBcHdzyEyyEpYnO9H/zf+gA4I0m7umXE45k1+qeXRA8AARVC6InSiMktsjyELxqFLkLJe2SVC+KJ0GHyf3ZNoqQW5OzxlB9lDbBDvxjt9Pg/4X9/jWCfJTe8QZfC0UZH8cuanQMBDnYLZSMJvbyoJPkkXbUsFOd3EZvUXyPGhTwfnuacmPbjhlBDudUcIUfeIrZi/NBFm8hz7tmeRbdcoKsms/HhJlArSJYPfyj92TLSyrGZQUBGEgeL3n+k9G1+CmYHbUZHQNVgVfygk+Z8e9Zmkk7gnG+1w20Z0JFp8970qQN3twT4LchIY7Elxwj78fwck/7uH3Iyg4/H4EBbOMZoLcJlEQxvNKb2a7ZYLCnT13Iije2XMXgtL1DJHguDWCis0FbRdULmS0XFC9FFWrIP+7Li8I2NkjFuR/My4Jgnb2tFcwfodlkLZVEJySUatg2XnRAjPwzh5hLQsrgntuo9qCk0/45gJ/JWjEiuCQcrfTaApq7ewR1pP5sCHYeeYNqvQEtXb2UF84FW9HkHtn1hEc6ezs8SNJOrYtQc7YCi6otbNHtn/NpmDxBg0W1NrZI9+BaFUw/3wDFNTa2UND1R5Sq4Lpn/S1fQqpfTRKNHb2QPZCWBZkofi36hEAUvvn/zSCD7SP27Zgmq91mkYJ14CDBXlaPMgGtBfCvmAaigGlwQZSfwwsSAlwmb0OQfbHsVzCKnMBBf0AXJimHkEwMMFgBc8DeW2foF6dNn5BIIcFQ16KpZihYETrqqA8y4sDvw6Cs4KKLK8CbwPRoM9JQV+zSGK+/KHrgv5Ga49qV7hO46og0coRFKdKuyroJxrtyJPd3RQM4RVSLsPfdgn6R2AboA0nDgp6FDb8HMuDz2FBUB+FrNO4KugRZf1v2DqNs4Kqis/xErwr0bAMdXlUY1HZk8TYg08V11Smvoj6aUJUfF1nx6VH9QZFFQJ4HuQWX59oVGBLW2jKD/ZEHxY6mNY6TbQ2rMllAnBOJlv7Rm+dprqyOWUAz6pFyeVngJc/9G5LYzXEF7dmNI/zs73OImmuuFkzaJSDCnv9Rb/XluC7MNGJJz/UKDfAKzDYBJzC+1VQac0qQ0YlS8dJ9aSLpLVTrvifGNUiaQP86Px5KKBEtUjaBJWFIqxUchNoJVqI9Y5OBV+WqWcaijrlyhvhQbt00C00NNyLXAPDhV7poBvKvDKgCbTSLm7oVVqt0Spl7orOB18W3VA0e/FKE2gmr5m+OqcJ4APUakul1sgLKBTJ4bHpCy2PeoAaBtW9gKwJFKHYzuDLIhugRoIiUC1jKpigr+ONqjXBuyvaexFnExQGqHZfpdoE2ddt2H4ZbiNcB6hk0OhcvD1OoRhGD47OSJjDQrF3d8GXw+H5FgRBEARBEARBEARBEARBEARBEARBEARBEMZ/Z7h0SlKcxhsAAAAASUVORK5CYII=",
        },
        {
          name: "Flutter",
          image:
            "https://cdn-images-1.medium.com/max/1200/1*5-aoK8IBmXve5whBQM90GA.png",
        },
        {
          name: "EXPO",
          image:
            expo,
        },
      ],
    },
    // {
    //   title: "Backend",
    //   skills: [
    //     {
    //       name: "Node Js",
    //       image: "https://nodejs.org/static/images/logo.svg",
    //     },
    //     {
    //       name: "Express Js",
    //       image:
    //         "data:image/png;base64,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",
    //     },
    //     {
    //       name: "Graph Ql",
    //       image: "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg",
    //     },
    //     {
    //       name: "Python",
    //       image:
    //         "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
    //     },
    //     {
    //       name: "MySQL",
    //       image:
    //         "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
    //     },
    //     {
    //       name: "Postgresql",
    //       image: "https://www.postgresql.org/media/img/about/press/elephant.png",
    //     },
    //     {
    //       name: "MongoDB",
    //       image:
    //         "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
    //     },
    //     {
    //       name: "Firebase",
    //       image: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
    //     },
    //   ],
    // },


    {
      title: "Design",
      skills: [
        {
          name: "Figma",
          image: figma,
        },
        {
          name: "Adobe XD",
          image: xd,
          
        },
        {
          name: "Miro",
          image: miro, 
          },

        {
           name: "Adobe Illustrator",
           image: illustrater, 
        },
     
   

      ],
    },
    {
      title: "Android",
      skills: [
        {
          name: "Java",
          image:
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
        },
        {
          name: "React-Native",
          image:
            "https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg",
        },
        // {
        //   name: "XML",
        //   image:
        //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBMw6_RdwKQ9bDFfnKDX1iwMl4bVJEvd9PP53XuIw&s",
        // },
        {
          name: "Android Studio",
          image:
            "https://developer.android.com/static/studio/images/new-studio-logo-1_1920.png",
        },
      ],
    },
    {
      title: "Others",
      skills: [
        {
          name: "Git",
          image: git,
         },
        {
          name: "GitHub",
          image:
            "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
        },
        {
          name: "MySQL",
          image:
           "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
        },

        {
          name: "Netlify",
          image:
            "https://seeklogo.com/images/N/netlify-logo-BD8F8A77E2-seeklogo.com.png",
        },
        {
          name: "VS Code",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
        },
      ],
    },
  ];
  
  export const experiences = [
    {
      id: 0,
      img: "https://yt3.ggpht.com/a/AATXAJyMa1Do0gFwcjdCWGAOMekO0n6n6tcxO1EvDQ=s900-c-k-c0xffffffff-no-rj-mo",
      role: "Web developer Intern",
      company: "Vedantu",
      date: "Jan 2023 - June 2023",
      desc: "Enhanced website functionality and UI/UX using JavaScript, CSS, and modern frameworks, creating engaging animations and optimizing team collaboration and adaptability to current web development trends.",
      skills: [
        "UX/UI Design",
        "JavaScript",
        "CSS",
      ],
      doc: "https://media.licdn.com/dms/image/D4D2DAQFlp60ZqHuaFQ/profile-treasury-image-shrink_1280_1280/0/1691180828512?e=1692381600&v=beta&t=mM5Y_NE5EPlQhez5FAN6NLVSKcO_Ojt_9Gq3mnFGkAQ",
    },
    
  ];
  
  export const education = [
    {
      id: 0,
      img: uem_logo,
        school: "University Of Engineering & Management (UEM), Kolkata",
      date: "Oct 2021 - Sep 2025",
      grade: "8.1 CGPA",
      desc: "I am currently pursuing a Bachelor's degree in Computer Science and Engineering at University Of Engineering & Management (UEM), Kolkata. I have completed 4 semesters and have a CGPA of 8.1. I have taken courses in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks, among others. ",
      degree: "Bachelor of Technology - BTech, Computer Science and Engineering",
    },
    {
      id: 1,
      img: school1,
      school: "S.S. Govt. School, Muzzafarpur",
      date: "Apr 2019 - Apr 2021",
      grade: "70.2%",
      desc: "I completed my class 12 high school education at S.S. Govt. School, Muzzafarpur, where I studied Science .",
      degree: "BSEB(XII), Science",
    },
    {
      id: 2,
      img: school2,
      school: "Asian School, Muzzafarpur",
      date: "Apr 2017 - Apr 2019",
      grade: "75.3%",
      desc: "I completed my class 10 education at Asian School, Muzzafarpur, where I studied Science.",
      degree: "CBSE(X), Science with Computer",
    },
  ];
  

  export const projects = [
    {
      id: 10,
      title: "Smart ATS Analyzer",
      date: "July 2024",
      description:
        "The Smart ATS Analyzer is an automated tool engineered for comprehensive resume evaluations and keyword analysis using Google Gemini Pro. It features a user-friendly interface built with Streamlit and includes PDF processing functionality to extract text from uploaded resumes and generate detailed evaluation reports. Additionally, it implements secure environment management by handling API keys and environment variables using the dotenv package.",
      image:
        "https://github.com/Anubhx/Smart-ATS-Analyzer/raw/main/image01.png?raw=true",
      tags: [
        "Python",
        "Streamlit",
        "Google Gemini Pro",
        "PyPDF2",
        "FPDF",
        "dotenv"
      ],
      category: "web app",
      webapp: "https://smart-ats-analyzer-by-anubhav.streamlit.app/",
      github: "https://github.com/Anubhx/Smart-ATS-Analyzer"
    },
    
    {
      id: 9,
      title: "React Native AirBnB Clone with Clerk",
      date: "April 2024 - Jul 2024",
      description:
      "The React Native AirBnB Clone with Clerk is a mobile app that mimics AirBnB's core features using React Native and Expo, integrating Clerk for authentication and including OAuth, mapping, and advanced UI components. It offers a practical example for building sophisticated mobile apps.",
      image:
        "https://github.com/Anubhx/AirBnB-Clone-using-React-Native-and-Expo-/blob/main/screenshots/PIC01.png?raw=true",
      tags: [
        "Android",
        "typescript",
        "React Native",
        "Expo",
        "Clerk",
      ],
      category: "android app",
      github: "https://github.com/Anubhx/AirBnB-Clone-using-React-Native-and-Expo-",
      webapp: "https://github.com/Anubhx/AirBnB-Clone-using-React-Native-and-Expo-",
    },
    {
      id: 0,
      title: "Language Talk ( Language learning App ) Case Study",
      date: "Apr 2023 - May 2023",
      description:
       "I conceptualized LanguageTalk, a user-friendly language learning app equipped with AI-driven features for grammar and pronunciation correction, showcasing my proficiency in UX/UI design. For the development of this project, I utilized design tools such as Figma and FigJam, and managed the workflow and documentation using Notion, demonstrating both my design expertise and project management skills.",
           image: language_talk,
        tags: [
          "Figma",
          "Miro",
          "UI/UX Design",
          "Wireframing",
        ],      
        category: "design",
      github: "https://www.behance.net/gallery/167171313/Language-Talk-(-Language-learning-App-)-Case-Study",
      webapp: "https://www.behance.net/gallery/167171313/Language-Talk-(-Language-learning-App-)-Case-Study",
      member: [
        {
          name: "Anubhav Raj",
          img: HeroImg,
          linkedin: "https://www.linkedin.com/in/anubhax/",
          github: "https://github.com/Anubhx/",
        },
      ],
    },
    {
      id: 1,
      title: "VirtuStore -An AR shopping app (UI/UX CASE STUDY)",
      date: "Oct 2023 - Oct- 2023",
      description:
      "I designed VirtuStore, a mobile application that addresses the challenge of limited access to physical stores by enabling users to conveniently shop from home using their mobile devices. The app features an augmented reality (AR) visualization tool that allows for realistic viewing of products, aiding users in making informed purchase decisions. Additionally, I developed an in-store check feature utilizing AR technology, which allows users to virtually navigate and explore the entire store, significantly enhancing the shopping experience.",
      image:
        "https://mir-s3-cdn-cf.behance.net/projects/404/68fabb168030969.Y3JvcCw0MzIwLDMzNzksMCww.png",
      tags: [
        "Figma",
        "Miro",
        "UI/UX Design",
        "Wireframing",
      ],
      category: "design",
      github: "https://www.behance.net/gallery/167171313/Language-Talk-(-Language-learning-App-)-Case-Study",
      webapp: "https://www.behance.net/gallery/167171313/Language-Talk-(-Language-learning-App-)-Case-Study",
    },
    {
      id: 2,
      title: "EmployeePro-Workforce-Management-System",
      date: "Nov 2023 - Nov 2023",
      description:
      "Employee Pro is a Workforce Management System that I developed using Java, Swing, and MySQL, designed to enhance organizational efficiency. The system features a user-friendly interface with intuitive design for easy navigation and data entry. It includes dynamic employee ID generation for automatic assignment of unique identifiers, facilitating efficient employee tracking. Additionally, the system offers seamless database connectivity with MySQL, ensuring robust data management and operational reliability.",
      image: Employee,      
      tags: [
        "Java",
        "MySQL",
        "Swing",
        "Database Management",
      ],
      category: "Web App",
      github: "https://github.com/Anubhx/-EmployeeManagementSystem/tree/master",
      webapp: "https://github.com/Anubhx/-EmployeeManagementSystem/tree/master",
    },
  ];
  
  export const TimeLineData = [
    // { year: 2017, text: "Started my journey" },
    { year: 2020, text: "Started my journey as a UX designer" },
    { year: 2022, text: "Started Freelancing as a UX dsigner" },
    { year: 2023, text: "Started as a Web Dev Intern" },
    // { year: 2021, text: "Started my own platform" },
  ];
  export const BlogData = [
    {
      id: 0,
      title: "What are Dark Patterns and Ethical Design (UX)",
      date: "13 Feb 2024",
      description:
      "Dark patterns are design practices crafted to deceive or manipulate users into making choices they might not have made if given clear and straightforward options.",
            image:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/0*RIo_n3KsrUdD8xf8.png",
      tags: [
        "UX/UI Design",
        "Ethical Design",
        "Dark Patterns",
      ],
      category: "uxui",
      link: "https://medium.com/@anubhxv/what-are-dark-patterns-and-ethical-design-ux-ceb3346f565a",
    },

    {
      id: 1,
      title: "AI vs Data Analysts in the World of Data Analysis",
      date: "Aug 28, 2023",
      description:
      "The integration of AI into data analysis has revolutionized the way we process, interpret, and extract insights from vast datasets. AI algorithms can sift through immense volumes of data at speeds human analysts could only dream of, identifying patterns, anomalies, and correlations that might go unnoticed by the human eye.",
                 image:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/1*B3Y6selInjGZ9KbFyqO7fg.jpeg",
      tags: [
        "UX/UI Design",
        "Ethical Design",
        "Dark Patterns",
      ],
      category: "tech",
      link: "https://medium.com/@anubhxv/ai-vs-data-analysts-in-the-world-of-data-analysis-82f005b40b5e",
    },

    {
      id: 3,
      title: "Unveiling the 60–30–10 Rule in UX/UI Design",
      date: "Jan 4, 2024",
      description:
      "As a budding UX designer hailing from the vibrant city of Kolkata, India, with a year of hands-on experience in the field, I’ve come to appreciate the nuanced artistry behind creating visually appealing and user-centric interfaces. One principle that has significantly shaped my approach to design is the 60–30–10 rule,",
                 image:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/0*tMQNKkqpCPl6eD3S.jpg",
      tags: [
        "UX/UI Design",
        "Ethical Design",
        "Dark Patterns",
      ],
      category: "uxui",
      link: "https://medium.com/@anubhxv/unveiling-the-60-30-10-rule-in-ux-ui-design-5b7c16fa6e3f",
    },

    {
      id: 4,
      title: "Top 6 UX Case Studies That Redefined User Experiences",
      date: "Jan 6, 2024",
      description:
      "Crafting impactful UX case studies is an art that balances meticulous inclusion and intentional exclusion of details. Delving into UX courses can offer valuable insights into the essential components of a compelling case study. A successful case study not only outlines the problem at hand but also incorporates numerical data and statistics, presenting practical solutions that directly tackle the identified issues.",
                 image:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/0*ZS8bnIppAumy8sMv.jpg",
      tags: [
        "UX/UI Design",
        "Case Studies",
      ],
      category: "uxui",
      link: "https://medium.com/@anubhxv/top-6-ux-case-studies-that-redefined-user-experiences-137cfe58d6a1",
    },

    {
      id: 5,
      title: "A Beginner’s Guide to React Native for UX Designers",
      date: "02 Feb 2024",
      description:
      "In the swiftly evolving realm of mobile app development, React Native emerges as a beacon for developers and UX designers aiming to craft seamless and efficient cross-platform applications. As a skilled UX designer diving into the technical facets of React and React Native, I’ve embarked on a journey to master these tools, enhancing my ability to deliver more cohesive user experiences across platforms. This article aims to demystify React Native for UX designers who are new to the platform, providing a practical guide through its core components, styling, and more",
            image:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/1*Sjkbmpu_77dkrM5dO-Creg.png",
      tags: [
        "UX/UI Design",
        "React Native",
        "Guide",
      ],
      category: "dev",

      link: "https://anubhxv.medium.com/a-beginners-guide-to-react-native-for-ux-designers-55b268992e35",
    },

    
  ];

  