dir                  # all
dir path/to          # list under path only
dir -Directory       # list dirs only
dir -dir             # ...
dir -File            # list files only
dir | select Name    # filter result

dir | select -ExpandProperty Name      # dir /b
dir -dir | select -ExpandProperty Name # dir /a:d /b