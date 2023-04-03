function convertHTML(str) {
  const entities = [
    { "<": "&lt;" },
    { ">": "&gt;" },
    { "&": "&amp;" },
    { '"': "&quot;" },
    { "'": "&apos;" },
    { "¢": "&cent;" },
    { "£": "&pound;" },
    { "¥": "&yen;" },
    { "€": "&euro;" },
    { "©": "&copy;" },
    { "®": "&reg;" },
  ];

  function entityValue(entity) {
    for (let k = 0; k < entities.length; k++) {
      const key = Object.keys(entities[k])[0];
      if (key === entity) {
        return entities[k][key];
      }
    }

    return;
  }

  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    if (entityValue(str[i])) {
      newStr += entityValue(str[i]);
    } else {
      newStr += str[i];
    }
  }

  return newStr;
}

convertHTML("Dolce & Gabbana");
