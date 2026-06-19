export const roadmapAgent = (career) => {
  if (career === "AI Engineer") {
    return [
      "Learn Python",
      "Learn Statistics",
      "Master Machine Learning",
      "Build AI Projects",
    ];
  }

  if (career === "Full Stack Developer") {
    return [
      "Learn HTML/CSS/JS",
      "Learn React",
      "Learn Node.js",
      "Build Full Stack Projects",
    ];
  }

  return ["Start Learning Basics", "Build Projects"];
};