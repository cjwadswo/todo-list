import { compareAsc, format } from "date-fns";

default export const todos = function (
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
