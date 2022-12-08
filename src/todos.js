// import { compareAsc, format } from "date-fns";

const todo = function (
  title,
  desc = "no description",
  dueDate = "none",
  priority = "none",
  completed = "false"
) {
  if (title === undefined) {
    throw new Error("No title");
  }

  return { title, desc, dueDate, priority, completed };
};

export default todo;
