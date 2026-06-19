export const careerAgent = (answers) => {
  const interest = answers["What interests you the most?"];

  if (interest === "AI / Machine Learning") {
    return "AI Engineer";
  }

  if (interest === "Web Development") {
    return "Full Stack Developer";
  }

  if (interest === "Data Science") {
    return "Data Scientist";
  }

  return "Software Developer";
};