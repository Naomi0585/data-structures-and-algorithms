
function breadthFirst(tree) {
  if (!tree || !tree.root) {
    return [];
  }

  const result = [];
  const queue = [tree.root];
  let front = 0;

  while (front < queue.length) {
    const current = queue[front];
    front++;

    result.push(current.value);

    if (current.left) {
      queue.push(current.left);
    }

    if (current.right) {
      queue.push(current.right);
    }
  }

  return result;
}

module.exports = breadthFirst;


