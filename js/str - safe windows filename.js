function safeWinFilename(str) {
  return str.replace(/[\\\/:*?"<>|]/g, ' ')
}

// or custom replacements
function safeWinFilename(str) {
  return str
    .replace(/\\/g, ' ')
    .replace(/\//g, ' ')
    .replace(/[*]/g, ' ')
    .replace(/:/g, ' ')
    .replace(/>/g, ' ')
    .replace(/</g, ' ')
    .replace(/?/g, ' ')
    .replace(/|/g, ' ')
    .replace(/"/g, ' ');
}