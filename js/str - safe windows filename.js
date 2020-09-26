function safeWinFilename(str) {
  return str
    .replace('\\', ' ')
    .replace('/', ' ')
    .replace('*', ' ')
    .replace(':', ' ')
    .replace('>', ' ')
    .replace('<', ' ')
    .replace('?', ' ')
    .replace('|', ' ')
    .replace('^', ' ')
    .replace('"', ' ');
}