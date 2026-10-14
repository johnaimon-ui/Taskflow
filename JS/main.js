const tasks = [
  // To Do
  { id: 1, title: "Write homepage copy", label: "Content", priority: "medium", due: "Oct 14", subtasksDone: 0, subtasksTotal: 3, column: "todo" },
  { id: 2, title: "Build responsive pages", label: "Development", priority: "high", due: "Oct 16", subtasksDone: 0, subtasksTotal: 5, column: "todo" },
  { id: 3, title: "QA the launch experience", label: "Review", priority: null, due: "Oct 19", subtasksDone: 0, subtasksTotal: 4, column: "todo" },

  // Doing
  { id: 4, title: "Design homepage", label: "Design", priority: "high", due: "Oct 12", subtasksDone: 2, subtasksTotal: 4, attachments: 2, comments: 2, column: "doing" },
  { id: 5, title: "Create component library", label: "Design", priority: "medium", due: "Oct 13", subtasksDone: 3, subtasksTotal: 6, column: "doing" },

  // Done
  { id: 6, title: "Audit the current website", label: "Research", priority: null, due: "Oct 3", subtasksDone: 4, subtasksTotal: 4, column: "done" },
  { id: 7, title: "Define sitemap", label: "Planning", priority: null, due: "Oct 6", subtasksDone: 3, subtasksTotal: 3, column: "done" },
];

console.log(tasks.length); // should print 7

const todoTasks = tasks.filter(task => task.column === "todo");
console.log(todoTasks.length); // should print 3