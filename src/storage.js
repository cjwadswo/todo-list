let storeData = function () {
  let projectData = [];
  let addProject = function (product) {
    projectData.push(product);
  };
  let removeProject = function (product) {
    let indexOfProduct = projectData.indexOf(product);
    projectData = projectData.splice(indexOfProduct, 1);
  };

  return { projectData, addProject, removeProject };
};

export default storeData;
