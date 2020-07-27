money                 = A18
price                 = B18
money_rl              = money*10000000
money_rl_vol          = money_rl_vol / price
money_rl_vol_round    = ROUNDDOWN(money_rl_vol,0)
money_possible_shares = money_rl_vol_round / price
total_plus_fee        = money_possible_shares * price
total_minus_fee       = total_plus_fee - (_fee %* total_plus_fee)
final_shares          = ROUNDDOWN(total_minus_fee, 0)

=ROUNDDOWN((((ROUNDDOWN(A18*10000000/B18,0)/B18)*B18)-(IF(F17="بورس",0.464,0.454)%*((ROUNDDOWN(A18*10000000/B18,0)/B18)*B18))), 0)

money                 = A18
price                 = B18
money_rl              = money*10000000
money_rl_minus_fee    = money_rl - (_fee %* money_rl)
final_shares          = ROUNDDOWN(money_rl_minus_fee / price,0)
'or
final_shares          = money_rl_minus_fee / price

=((A18*10000000) - (IF(F17="بورس",0.464,0.454) %* (A18*10000000))) / B18


_fee = VLOOKUP(F17,fee!A$2:C$3,IF($F$19="خرید",2,3)) 'dropdown + separate fee sheet
_fee = IF(F17="بورس",0.464,0.454)