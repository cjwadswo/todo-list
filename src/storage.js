let storage = function () {
  let projectData = [];
  const addProject = function (project) {
    projectData.push(project);
  };
  const removeProject = function (project) {
    let indexOfProject = projectData.indexOf(project);
    projectData = projectData.splice(indexOfProject, 1);
  };
  const getProjects = () => {
    return projectData;
  };

  return { projectData, addProject, removeProject };
};

export default storage;
