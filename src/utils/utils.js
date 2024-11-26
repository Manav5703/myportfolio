// src/utils.js
export function capitalizeWords(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
  }
  