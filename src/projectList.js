const projectList = function () {
  let projects = [[]];
  let currentProject = 0;

  const addProject = function (project) {
    projects.push(project);
  };

  const editProject = function (index, project) {};

  const deleteProject = function (index) {
    projects.splice(index, 1);
  };
  const changeProject = function (index) {
    currentProject = index;
  };
  const getCurrentProject = function () {
    return projects[currentProject];
  };

  const getProjects = function () {
    return projects;
  };

  return {
    addProject,
    editProject,
    getProjects,
    getCurrentProject,
    deleteProject,
    changeProject,
    projects,
  };
};

export default projectList;
