const button = document.getElementById("btn");
button.addEventListener("click", () => {
  const input = document.getElementById("input") as HTMLInputElement;
  const container = document.getElementById("result");
  renderTree(input.value, container);
});

function isBracesOrderCorrect(inputString: string) {
  if (inputString[0] !== "(" || inputString[inputString.length - 1] !== ")") {
    return false;
  }
  const braces = [];
  for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] === "(") {
      braces.push(inputString[i]);
      continue;
    }
    if (inputString[i] === ")" && !braces.length) {
      return false;
    }
    if (inputString[i] === ")" && braces.length) {
      braces.pop();
    }
  }
  return braces.length ? false : true;
}

function buildTree(inputString: string) {
  const arr = inputString.split(" ");
  const nodesStack = [];
  const topNodes = [];

  for (let i = 0; i < arr.length; i++) {
    const currentEl = arr[i];
    const elText = arr[i].replace(/[$\(\)]/g, "");
    if (elText.length <= 0) {
      throw new Error("Wrong input");
    }

    if (arr[i + 1]?.[0] === "(") {
      const target = nodesStack[nodesStack.length - 1];
      const node = document.createElement("li");
      const listNode = document.createElement("ul");
      const textEl = document.createElement("span");
      textEl.innerText = elText;
      node.appendChild(textEl);
      node.appendChild(listNode);
      target && target.appendChild(node);
      if (!nodesStack.length) topNodes.push(node);
      nodesStack.push(listNode);
    } else {
      const target = nodesStack[nodesStack.length - 1];
      const node = document.createElement("li");
      const textEl = document.createElement("span");
      textEl.innerText = elText;
      node.appendChild(textEl);
      target ? target.appendChild(node) : topNodes.push(node);
    }

    const closingBracesCount =
      currentEl.length - currentEl.replaceAll(")", "").length;

    for (let i = 0; i < closingBracesCount; i++) {
      nodesStack.pop();
    }
  }

  return topNodes.reduce((acc, el) => {
    acc.appendChild(el);
    return acc;
  }, document.createElement("ul"));
}

function renderTree(inputString: string, targetNode: HTMLElement) {
  try {
    if (isBracesOrderCorrect(inputString)) {
      targetNode.innerHTML = "";
      targetNode.appendChild(buildTree(inputString));
      return;
    }
    throw new Error("Wrong input");
  } catch (err) {
    targetNode.innerHTML = "";
    targetNode.innerHTML = `<span>${err.message}</span>`;
  }
}
