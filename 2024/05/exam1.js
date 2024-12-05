import { puzzle as data } from "./data.js";

function isCorrectlyOrdered(rules, update) {
  // Construire un graphe des dépendances
  const graph = {};
  rules.forEach((rule) => {
    const [X, Y] = rule.split("|").map(Number);
    if (!graph[X]) graph[X] = [];
    graph[X].push(Y);
  });

  // Extraire uniquement les règles qui concernent les pages présentes dans la mise à jour
  const pagesInUpdate = new Set(update);
  const filteredGraph = {};
  Object.keys(graph).forEach((page) => {
    const pageNum = Number(page);
    if (pagesInUpdate.has(pageNum)) {
      filteredGraph[pageNum] = graph[pageNum].filter((target) =>
        pagesInUpdate.has(target)
      );
    }
  });

  // Vérifier l'ordre correct avec un tri topologique
  const visited = new Set();
  const visiting = new Set();
  let isValid = true;

  const dfs = (node) => {
    if (visiting.has(node)) {
      isValid = false; // Cycle détecté
      return;
    }
    if (visited.has(node)) return;

    visiting.add(node);
    (filteredGraph[node] || []).forEach((neighbor) => dfs(neighbor));
    visiting.delete(node);
    visited.add(node);
  };

  update.forEach((page) => {
    if (!visited.has(page)) dfs(page);
  });

  // Si le graphe n'est pas valide, retourner faux
  if (!isValid) return false;

  // Vérifier si l'ordre respecte les relations d'ordre dans la mise à jour
  const indexMap = new Map();
  update.forEach((page, idx) => indexMap.set(page, idx));

  return Object.keys(filteredGraph).every((page) => {
    const source = Number(page);
    return (filteredGraph[source] || []).every(
      (target) => indexMap.get(source) < indexMap.get(target)
    );
  });
}

function solve(input) {
  const [rulesSection, updatesSection] = input.split("\n\n");
  const rules = rulesSection.split("\n");
  const updates = updatesSection
    .split("\n")
    .map((update) => update.split(",").map(Number));

  let totalMiddlePages = 0;

  updates.forEach((update) => {
    if (isCorrectlyOrdered(rules, update)) {
      const middleIndex = Math.floor(update.length / 2);
      totalMiddlePages += update[middleIndex];
    }
  });

  return totalMiddlePages;
}

console.log(solve(data.trim()));
