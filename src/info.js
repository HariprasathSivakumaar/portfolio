const header = {
  homepage: "/",
  title: "</>",
};

const about = {
  name: "Hariprasath",
  role: "AI/ML Enthusiast",
  description:
    "a B.Tech Artificial Intelligence Engineering student at Amrita Vishwa Vidyapeetham. Proficient in Machine Learning and Deep Learning, I'm currently delving into Full Stack Web Development. I am passionate about creating innovative solutions to  address real-world challenges.",
  resume: require('./assets/resume.pdf'),
  social: {
    linkedin: "https://www.linkedin.com/in/hariprasath-s-b-4843b61aa/",
    github: "https://github.com/HariprasathSivakumaar",
  },
};

const projects = [
  {
    name: "Real-time Video Analytics for Industrial Safety",
    description:
      "Designed and deployed a real-time accident prevention system to enhance safety in industrial workplaces.",
    stack: ["TensorFlow", "Streamlit", "Twilio"],
    sourceCode:
      "https://github.com/HariprasathSivakumaar/SBSPS-Challenge-9874-SafeZone-Real-time-Video-Analytics-for-Industrial-Safety",
  },
  {
    name: "License Plate Recognition using Raspberry Pi",
    description:
      "Implemented a real-time vehicle license plate detection system to improve automated recognition.",
    stack: ["Python", "OpenCV", "Raspberry Pi"],
    sourceCode:
      "https://github.com/HariprasathSivakumaar/License-Plate-Recognition",
  },
  {
    name: "Real-time Image Enhancement Web Application",
    description:
      "Developed a web application for enhancing low-light images to improve image clarity and detail.",
    stack: ["Python", "NumPy", "OpenCV", "SciPy", "MERN Stack"],
    sourceCode:
      "https://github.com/HariprasathSivakumaar/MERN-ImageEnhancement",
    livePreview: "https://image-enhancement-six.vercel.app/",
  },
  {
    name: "ROS2 - Line following Car",
    description:
      "Developed an autonomous line-following car to improve navigation accuracy in robotics applications.",
    stack: [],
    sourceCode: "https://github.com/HariprasathSivakumaar/ROS2-Line-Follower",
  },
  {
    name: "Autocorrect",
    description:
      "Created an autocorrect tool to enhance typing accuracy and efficiency using natural language processing.",
    stack: [],
    sourceCode: "https://github.com/HariprasathSivakumaar/Autocorrect",
  },
];

const skills = [
  "Python",
  "SQL",
  "HTML",
  "CSS",
  "JavaScript",
  "scikit-learn",
  "React",
  "jQuery",
  "TensorFlow",
  "PyTorch",
  "Git",
  "MongoDB",
  "Matplotlib",
  "Node.js",
  "Express",
];

const contact = {
  email: "hariprasathsivakumaar@gmail.com",
};

export { header, about, projects, skills, contact };
