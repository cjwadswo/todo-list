const projectList = function () {
  let projects = [];
  let currentProject = 0;

  const addProject = function (project) {
    projects.push(project);
  };

  const editProject = function (index, project) {};

  const deleteProject = function (index) {
    projects.splice(index, 1);
  };
  const changeProject = function (index) {
    currentProject = 1;
  };
  const getCurrentProject = function () {
    return projects[currentProject];
  };

  return {
    addProject,
    editProject,
    getCurrentProject,
    deleteProject,
    changeProject,
  };
};

export default projectList;
