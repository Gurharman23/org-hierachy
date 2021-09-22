export const employees = [
  { id: 1, name: "Stella Payne Diaz", title: "CEO" },
  { id: 2, name: "Luke Warm", title: "VP Marketing/Sales", parent: 1 },
  { id: 3, name: "Meg Meehan Hoffa", title: "Sales", parent: 2 },
  { id: 4, name: "Peggy Flaming", title: "VP Engineering", parent: 1 },
  { id: 5, name: "Saul Wellingood", title: "Manufacturing", parent: 4 },
  { id: 6, name: "Al Ligori", title: "Marketing", parent: 2 },
  { id: 7, name: "Dot Stubadd", title: "Sales Rep", parent: 3 },
  { id: 8, name: "Les Ismore", title: "Project Mgr", parent: 5 },
  { id: 9, name: "April Lynn Parris", title: "Events Mgr", parent: 6 },
  { id: 10, name: "Xavier Breath", title: "Engineering", parent: 4 },
  { id: 11, name: "Anita Hammer", title: "Process", parent: 5 },
  { id: 12, name: "Billy Aiken", title: "Software", parent: 10 },
  { id: 13, name: "Stan Wellback", title: "Testing", parent: 10 },
  { id: 14, name: "Marge Innovera", title: "Hardware", parent: 10 },
  { id: 15, name: "Evan Elpus", title: "Quality", parent: 5 },
  { id: 16, name: "Lotta B. Essen", title: "Sales Rep", parent: 3 },
  {
    name: "Gurharmanjit Singh",
    title: "Process",
    parent: 13,
    id: 18,
  },
];