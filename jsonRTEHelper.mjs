import { v4 } from "uuid";

const generateParagraph = () => {
  return {
    uid: generateUid(),
    type: "p",
    children: [
      {
        text: "Frequently data mining is confused with terms like machine learning and data analysis, but these terms are very different and unique. Data mining and machine learning both use patterns and analytics. Data mining looks for patterns already present in data and brings it out for human intervention to make decisions. Data mining gets this information from large datasets, and data analytics is when organizations decide to take this information and dive into it to learn more. Frequently data mining is confused with terms like machine learning and data analysis, but these terms are very different and unique. Data mining and machine learning both use patterns and analytics. Data mining looks for patterns already present in data and brings it out for human intervention to make decisions. Data mining gets this information from large datasets, and data analytics is when organizations decide to take this information and dive into it to learn more. Frequently data mining is confused with terms like machine learning and data analysis, but these terms are very different and unique. Data mining and machine learning both use patterns and analytics. Data mining looks for patterns already present in data and brings it out for human intervention to make decisions. Data mining gets this information from large datasets, and data analytics is when organizations decide to take this information and dive into it to learn more. Frequently data mining is confused with terms like machine learning and data analysis, but these terms are very different and unique. Data mining and machine learning both use patterns and analytics. Data mining looks for patterns already present in data and brings it out for human intervention to make decisions. Data mining gets this information from large datasets, and data analytics is when organizations decide to take this information and dive into it to learn more. Frequently data mining is confused with terms like machine learning and data analysis, but these terms are very different and unique. Data mining and machine learning both use patterns and analytics. Data mining looks for patterns already present in data and brings it out for human intervention to make decisions. Data mining gets this information from large datasets, and data analytics is when organizations decide to take this information and dive into it to learn more. Frequently data mining is confused with terms like machine learning and data analysis, but these terms are very different and unique. Data mining and machine learning both use patterns and analytics. Data mining looks for patterns already present in data and brings it out for human intervention to make decisions. Data mining gets this information from large datasets, and data analytics is when organizations decide to take this information and dive into it to learn more. Frequently data mining is confused with terms like machine learning and data analysis, but these terms are very different and unique. Data mining and machine learning both use patterns and analytics. Data mining looks for patterns already present in data and brings it out for human intervention to make decisions. Data mining gets this information from large datasets, and data analytics is when organizations decide to take this information and dive into it to learn more. Frequently data mining is confused with terms like machine learning and data analysis, but these terms are very different and unique. Data mining and machine learning both use patterns and analytics. Data mining looks for patterns already present in data and brings it out for human intervention to make decisions. Data mining gets this information from large datasets, and data analytics is when organizations decide to take this information and dive into it to learn more. Frequently data mining is confused with terms like machine learning and data analysis, but these terms are very different and unique. Data mining and machine learning both use patterns and analytics. Data mining looks for patterns already present in data and brings it out for human intervention to make decisions. Data mining gets this information from large datasets, and data analytics is when organizations decide to take this information and dive into it to learn more. Frequently data mining is confused with terms like machine learning and data analysis, but these terms are very different and unique. Data mining and machine learning both use patterns and analytics. Data mining looks for patterns already present in data and brings it out for human intervention to make decisions. Data mining gets this information from large datasets, and data analytics is when organizations decide to take this information and dive into it to learn more. Frequently data mining is confused with terms like machine learning and data analysis, but these terms are very different and unique. Data mining and machine learning both use patterns and analytics. Data mining looks for patterns already present in data and brings it out for human intervention to make decisions. Data mining gets this information from large datasets, and data analytics is when organizations decide to take this information and dive into it to learn more. Frequently data mining is confused with terms like machine learning and data analysis, but these terms are very different and unique. Data mining and machine learning both use patterns and analytics. Data mining looks for patterns already present in data and brings it out for human intervention to make decisions. Data mining gets this information from large datasets, and data analytics is when organizations decide to take this information and dive into it to learn more.",
      },
    ],
    attrs: {
      dirty: true,
    },
  };
};

/**
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

const generateUid = () => {
  const uid = [
    v4()
      .slice(0, 11)
      .replace("-", Math.floor(Math.random() * 10)),
    "%{*:1-9223372036854775800}",
    "{{{uid}}}",
  ];
  return shuffle(uid).join("-");
};

export const jsonRteGenerator = (size) => {
  const count = Math.floor(size / 5000);
  let json = {
    uid: generateUid(),
    type: "doc",
    attrs: {
      dirty: true,
    },
    children: [],
  };
  for (let i = 0; i < count; i++) {
    json.children.push(generateParagraph());
  }
  return json;
};

export const generateEntry = (count, size) => {
  let entry = {
    title:
      "Entry %{*:1-9223372036854775800} {{{uid}}} %{*:1-9223372036854775800}",
  };
  for (let i = 1; i <= count; i++) {
    entry[`json_rte_${i}`] = jsonRteGenerator(size);
  }
  return { entry: entry };
};

export const fastEqual = (a, b) => {
    if (a === b) return true;
  
    if (a && b && typeof a == 'object' && typeof b == 'object') {
      if (a.constructor !== b.constructor) return false;
  
      var length, i, keys;
      if (Array.isArray(a)) {
        length = a.length;
        if (length != b.length) return false;
        for (i = length; i-- !== 0;)
          if (!fastEqual(a[i], b[i])) return false;
        return true;
      }
  
  
  
      if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
      if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
      if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();
  
      keys = Object.keys(a);
      length = keys.length;
      if (length !== Object.keys(b).length) return false;
  
      for (i = length; i-- !== 0;)
        if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
  
      for (i = length; i-- !== 0;) {
        var key = keys[i];
  
        if (!fastEqual(a[key], b[key])) return false;
      }
  
      return true;
    }
  
    // true if both NaN, false otherwise
    return a!==a && b!==b;
  };
  