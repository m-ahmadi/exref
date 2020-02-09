// proper way:
process.exitCode = 1; // exit with a failure code


// not recommended (due to force exit and leaving async tasks that could finish later on and mess up stuff)
process.exit()  // exit with a 'success' code (default: 0)
process.exit(1) // exit with a 'failure' code