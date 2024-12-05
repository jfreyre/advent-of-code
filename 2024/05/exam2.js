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

function reorderUpdate(rules, update) {
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

  // Tri topologique pour réordonner les pages
  const visited = new Set();
  const result = [];

  const dfs = (node) => {
    if (visited.has(node)) return;
    visited.add(node);
    (filteredGraph[node] || []).forEach((neighbor) => dfs(neighbor));
    result.push(node);
  };

  [...pagesInUpdate].forEach((page) => {
    if (!visited.has(page)) dfs(page);
  });

  return result.reverse(); // Le tri topologique donne l'ordre inverse
}

function solve(input) {
  const [rulesSection, updatesSection] = input.split("\n\n");
  const rules = rulesSection.split("\n");
  const updates = updatesSection
    .split("\n")
    .map((update) => update.split(",").map(Number));

  let totalMiddlePagesCorrect = 0;
  let totalMiddlePagesReordered = 0;

  updates.forEach((update) => {
    if (isCorrectlyOrdered(rules, update)) {
      // Mise à jour correcte
      const middleIndex = Math.floor(update.length / 2);
      totalMiddlePagesCorrect += update[middleIndex];
    } else {
      // Mise à jour incorrecte
      const reordered = reorderUpdate(rules, update);
      const middleIndex = Math.floor(reordered.length / 2);
      totalMiddlePagesReordered += reordered[middleIndex];
    }
  });

  return {
    totalMiddlePagesCorrect,
    totalMiddlePagesReordered,
    grandTotal: totalMiddlePagesCorrect + totalMiddlePagesReordered,
  };
}

const result = solve(data.trim());
console.log(
  "Total des pages centrales des mises à jour correctes:",
  result.totalMiddlePagesCorrect
);
console.log(
  "Total des pages centrales des mises à jour réordonnées:",
  result.totalMiddlePagesReordered
);
console.log("Grand total:", result.grandTotal);
