search()    # show currently loaded pkgs
library()   # show all installed pkg
.libPaths() # show library location

install.packages('QuantTools')         # install pkg
install.packages(c('vioplot', 'MASS')) # ... multiple

library(QuantTools) # load pkg