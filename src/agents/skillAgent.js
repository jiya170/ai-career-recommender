export const skillAgent = (career) => {
  if (career === "AI Engineer") {
    return ["Python", "Machine Learning", "Deep Learning"];
  }

  if (career === "Full Stack Developer") {
    return ["React", "Node.js", "MongoDB"];
  }

  if (career === "Data Scientist") {
    return ["Python", "Statistics", "Pandas"];
  }

  return ["Basic Programming", "Problem Solving"];
};