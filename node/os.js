const os = require('os');

os.EOL
// \n on POSIX
// \r\n on Windows

os.arch() 'arm'|'arm64'|'ia32'|'mips'|'mipsel'|'ppc'|'ppc64'|'s390'|'s390x'|'x32'|'x64'|'x86'