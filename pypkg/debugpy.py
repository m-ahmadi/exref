# pip install debugpy
import debugpy as dbg

dbg.listen(5678)
print("Waiting for debugger attach")
dbg.wait_for_client()
dbg.breakpoint()
print('break on this line')