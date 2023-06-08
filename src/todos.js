// import { compareAsc, format } from "date-fns";

const todo = function (
  title,
  desc = "no description",
  dueDate = "none",
  priority = "none",
  completed = false
) {
  // if (title.trim() === "") {
  //   throw new Error("No title");
  // }

  title = title.trim();
  function toggleComplete() {}
  return { title, desc, dueDate, priority, completed };
};

export default todo;
