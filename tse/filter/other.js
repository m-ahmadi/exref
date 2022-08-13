// https://meisam-mohammadi.com/bourse-filters/
t=[...document.querySelectorAll('code')].map(i=>[ '// '+i.previousSibling.previousSibling.previousSibling.nodeValue, i.innerText ]).slice(0,602)
t.map(i=> i.join('QWEQWEQWE') ).join('ASDASDASD')
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// lol
(tvol) > (
	(
		[ih][0].QTotTran5J  + [ih][1].QTotTran5J  + [ih][2].QTotTran5J  + [ih][3].QTotTran5J  + [ih][4].QTotTran5J  + [ih][5].QTotTran5J +
		[ih][6].QTotTran5J  + [ih][7].QTotTran5J  + [ih][8].QTotTran5J  + [ih][9].QTotTran5J  + [ih][10].QTotTran5J + [ih][11].QTotTran5J +
		[ih][12].QTotTran5J + [ih][13].QTotTran5J + [ih][14].QTotTran5J + [ih][15].QTotTran5J + [ih][16].QTotTran5J + [ih][17].QTotTran5J +
		[ih][18].QTotTran5J + [ih][19].QTotTran5J + [ih][20].QTotTran5J + [ih][21].QTotTran5J + [ih][22].QTotTran5J + [ih][23].QTotTran5J +
		[ih][24].QTotTran5J + [ih][25].QTotTran5J + [ih][26].QTotTran5J + [ih][27].QTotTran5J + [ih][28].QTotTran5J + [ih][29].QTotTran5J
	) / 30 )
	&& ((ct).Buy_I_Volume / (ct).Buy_CountI) >= ((ct).Sell_I_Volume/(ct).Sell_CountI)
	&& (pl) >= (pc)
	&& (plp) > 0
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// فیلتر ورود پول هوشمند (فیلتر طلایی 1):
(tvol)>(([ih][0].QTotTran5J+[ih][1].QTotTran5J+[ih][2].QTotTran5J+[ih][3].QTotTran5J+[ih][4].QTotTran5J+[ih][5].QTotTran5J+[ih][6].QTotTran5J+[ih][7].QTotTran5J+[ih][8].QTotTran5J+[ih][9].QTotTran5J+[ih][10].QTotTran5J+[ih][11].QTotTran5J+[ih][12].QTotTran5J+[ih][13].QTotTran5J+[ih][14].QTotTran5J+[ih][15].QTotTran5J+[ih][16].QTotTran5J+[ih][17].QTotTran5J+[ih][18].QTotTran5J+[ih][19].QTotTran5J+[ih][20].QTotTran5J+[ih][21].QTotTran5J+[ih][22].QTotTran5J+[ih][23].QTotTran5J+[ih][24].QTotTran5J+[ih][25].QTotTran5J+[ih][26].QTotTran5J+[ih][27].QTotTran5J+[ih][28].QTotTran5J+[ih][29].QTotTran5J)/30)&&((ct).Buy_I_Volume/(ct).Buy_CountI)>=((ct).Sell_I_Volume/(ct).Sell_CountI)&&(pl)>=(pc)&&(plp)>0
// فیلتر ورود پول هوشمند (فیلتر طلایی 2):
(tvol)>1.25*[is5]&&((ct).Buy_I_Volume/(ct).Buy_CountI)>=((ct).Sell_I_Volume/(ct).Sell_CountI)&&(pl)>=(pc)&&(plp)>0
// فیلتر ورود پول هوشمند (فیلتر طلایی 3):
(tvol)>1.5*[is6]&&((ct).Buy_I_Volume/(ct).Buy_CountI)>=((ct).Sell_I_Volume/(ct).Sell_CountI)&&(pl)>=(pc)&&(plp)>0
// فیلتر ورود پول هوشمند و کد به کد حقوقی به حقیقی (فیلتر طلایی 4):
(tvol)>(([ih][0].QTotTran5J+[ih][1].QTotTran5J+[ih][2].QTotTran5J+[ih][3].QTotTran5J+[ih][4].QTotTran5J+[ih][5].QTotTran5J+[ih][6].QTotTran5J+[ih][7].QTotTran5J+[ih][8].QTotTran5J+[ih][9].QTotTran5J+[ih][10].QTotTran5J+[ih][11].QTotTran5J+[ih][12].QTotTran5J+[ih][13].QTotTran5J+[ih][14].QTotTran5J+[ih][15].QTotTran5J+[ih][16].QTotTran5J+[ih][17].QTotTran5J+[ih][18].QTotTran5J+[ih][19].QTotTran5J+[ih][20].QTotTran5J+[ih][21].QTotTran5J+[ih][22].QTotTran5J+[ih][23].QTotTran5J+[ih][24].QTotTran5J+[ih][25].QTotTran5J+[ih][26].QTotTran5J+[ih][27].QTotTran5J+[ih][28].QTotTran5J+[ih][29].QTotTran5J)/30)&&((ct).Buy_I_Volume/(ct).Buy_CountI)>=((ct).Sell_I_Volume/(ct).Sell_CountI)&&(pl)>=(pc)&&(plp)>0&&(ct).Buy_I_Volume>0.5*(tvol)&&(ct).Sell_N_Volume>0.5*(tvol)
// فیلتر ورود پول هوشمند و کد به کد حقوقی به حقیقی (فیلتر طلایی 5):
(tvol)>1.25*[is5]&&((ct).Buy_I_Volume/(ct).Buy_CountI)>=((ct).Sell_I_Volume/(ct).Sell_CountI)&&(pl)>=(pc)&&(plp)>0&&(ct).Buy_I_Volume>0.5*(tvol)&&(ct).Sell_N_Volume>0.5*(tvol)
// فیلتر ورود پول هوشمند و کد به کد حقوقی به حقیقی (فیلتر طلایی 6):
(tvol)>1.5*[is6]&&((ct).Buy_I_Volume/(ct).Buy_CountI)>=((ct).Sell_I_Volume/(ct).Sell_CountI)&&(pl)>=(pc)&&(plp)>0&&(ct).Buy_I_Volume>0.5*(tvol)&&(ct).Sell_N_Volume>0.5*(tvol)
// فیلتر پول داغ (1):
(tvol)>2*(([ih][0].QTotTran5J+[ih][1].QTotTran5J+[ih][2].QTotTran5J+[ih][3].QTotTran5J+[ih][4].QTotTran5J+[ih][5].QTotTran5J+[ih][6].QTotTran5J+[ih][7].QTotTran5J+[ih][8].QTotTran5J+[ih][9].QTotTran5J+[ih][10].QTotTran5J+[ih][11].QTotTran5J+[ih][12].QTotTran5J+[ih][13].QTotTran5J+[ih][14].QTotTran5J+[ih][15].QTotTran5J+[ih][16].QTotTran5J+[ih][17].QTotTran5J+[ih][18].QTotTran5J+[ih][19].QTotTran5J+[ih][20].QTotTran5J+[ih][21].QTotTran5J+[ih][22].QTotTran5J+[ih][23].QTotTran5J+[ih][24].QTotTran5J+[ih][25].QTotTran5J+[ih][26].QTotTran5J+[ih][27].QTotTran5J+[ih][28].QTotTran5J+[ih][29].QTotTran5J)/30)&&((ct).Buy_I_Volume/(ct).Buy_CountI)>=2*((ct).Sell_I_Volume/(ct).Sell_CountI)&&(pl)>=(pc)&&(plp)>0
// فیلتر پول داغ (2):
(tvol)>3*[is5]&&((ct).Buy_I_Volume/(ct).Buy_CountI)>=2*((ct).Sell_I_Volume/(ct).Sell_CountI)&&(pl)>=(pc)&&(plp)>0
// فیلتر پول داغ (3):
(tvol)>4*[is6]&&((ct).Buy_I_Volume/(ct).Buy_CountI)>=2*((ct).Sell_I_Volume/(ct).Sell_CountI)&&(pl)>=(pc)&&(plp)>0
// فیلتر پول داغ و کد به کد حقوقی به حقیقی (1):
(tvol)>2*(([ih][0].QTotTran5J+[ih][1].QTotTran5J+[ih][2].QTotTran5J+[ih][3].QTotTran5J+[ih][4].QTotTran5J+[ih][5].QTotTran5J+[ih][6].QTotTran5J+[ih][7].QTotTran5J+[ih][8].QTotTran5J+[ih][9].QTotTran5J+[ih][10].QTotTran5J+[ih][11].QTotTran5J+[ih][12].QTotTran5J+[ih][13].QTotTran5J+[ih][14].QTotTran5J+[ih][15].QTotTran5J+[ih][16].QTotTran5J+[ih][17].QTotTran5J+[ih][18].QTotTran5J+[ih][19].QTotTran5J+[ih][20].QTotTran5J+[ih][21].QTotTran5J+[ih][22].QTotTran5J+[ih][23].QTotTran5J+[ih][24].QTotTran5J+[ih][25].QTotTran5J+[ih][26].QTotTran5J+[ih][27].QTotTran5J+[ih][28].QTotTran5J+[ih][29].QTotTran5J)/30)&&((ct).Buy_I_Volume/(ct).Buy_CountI)>=2*((ct).Sell_I_Volume/(ct).Sell_CountI)&&(pl)>=(pc)&&(plp)>0&&(ct).Buy_I_Volume>0.5*(tvol)&&(ct).Sell_N_Volume>0.5*(tvol)
// فیلتر پول داغ و کد به کد حقوقی به حقیقی (2):
(tvol)>3*[is5]&&((ct).Buy_I_Volume/(ct).Buy_CountI)>=2*((ct).Sell_I_Volume/(ct).Sell_CountI)&&(pl)>=(pc)&&(plp)>0&&(ct).Buy_I_Volume>0.5*(tvol)&&(ct).Sell_N_Volume>0.5*(tvol)
// فیلتر پول داغ و کد به کد حقوقی به حقیقی (3):
(tvol)>4*[is6]&&((ct).Buy_I_Volume/(ct).Buy_CountI)>=2*((ct).Sell_I_Volume/(ct).Sell_CountI)&&(pl)>=(pc)&&(plp)>0&&(ct).Buy_I_Volume>0.5*(tvol)&&(ct).Sell_N_Volume>0.5*(tvol)
// فیلتر ورود پول (1):
(tvol)>([ih][0].QTotTran5J+[ih][1].QTotTran5J+[ih][2].QTotTran5J+[ih][3].QTotTran5J+[ih][4].QTotTran5J+[ih][5].QTotTran5J+[ih][6].QTotTran5J+[ih][7].QTotTran5J+[ih][8].QTotTran5J+[ih][9].QTotTran5J+[ih][10].QTotTran5J+[ih][11].QTotTran5J+[ih][12].QTotTran5J+[ih][13].QTotTran5J+[ih][14].QTotTran5J+[ih][15].QTotTran5J+[ih][16].QTotTran5J+[ih][17].QTotTran5J+[ih][18].QTotTran5J+[ih][19].QTotTran5J+[ih][20].QTotTran5J+[ih][21].QTotTran5J+[ih][22].QTotTran5J+[ih][23].QTotTran5J+[ih][24].QTotTran5J+[ih][25].QTotTran5J+[ih][26].QTotTran5J+[ih][27].QTotTran5J+[ih][28].QTotTran5J+[ih][29].QTotTran5J)/30&&((ct).Buy_I_Volume/(ct).Buy_CountI)>=((ct).Sell_I_Volume/(ct).Sell_CountI)
// فیلتر ورود پول (2):
(tvol)>[is5]&&((ct).Buy_I_Volume/(ct).Buy_CountI)>=((ct).Sell_I_Volume/(ct).Sell_CountI)
// فیلتر ورود پول (3):
(tvol)>[is6]&&((ct).Buy_I_Volume/(ct).Buy_CountI)>=((ct).Sell_I_Volume/(ct).Sell_CountI)
// فیلتر ورود پول و کد به کد حقوقی به حقیقی (1):
(tvol)>([ih][0].QTotTran5J+[ih][1].QTotTran5J+[ih][2].QTotTran5J+[ih][3].QTotTran5J+[ih][4].QTotTran5J+[ih][5].QTotTran5J+[ih][6].QTotTran5J+[ih][7].QTotTran5J+[ih][8].QTotTran5J+[ih][9].QTotTran5J+[ih][10].QTotTran5J+[ih][11].QTotTran5J+[ih][12].QTotTran5J+[ih][13].QTotTran5J+[ih][14].QTotTran5J+[ih][15].QTotTran5J+[ih][16].QTotTran5J+[ih][17].QTotTran5J+[ih][18].QTotTran5J+[ih][19].QTotTran5J+[ih][20].QTotTran5J+[ih][21].QTotTran5J+[ih][22].QTotTran5J+[ih][23].QTotTran5J+[ih][24].QTotTran5J+[ih][25].QTotTran5J+[ih][26].QTotTran5J+[ih][27].QTotTran5J+[ih][28].QTotTran5J+[ih][29].QTotTran5J)/30&&((ct).Buy_I_Volume/(ct).Buy_CountI)>=((ct).Sell_I_Volume/(ct).Sell_CountI)&&(ct).Buy_I_Volume>0.5*(tvol)&&(ct).Sell_N_Volume>0.5*(tvol)
// فیلتر ورود پول و کد به کد حقوقی به حقیقی (2):
(tvol)>[is5]&&((ct).Buy_I_Volume/(ct).Buy_CountI)>=((ct).Sell_I_Volume/(ct).Sell_CountI)&&(ct).Buy_I_Volume>0.5*(tvol)&&(ct).Sell_N_Volume>0.5*(tvol)
// فیلتر ورود پول و کد به کد حقوقی به حقیقی (3):
(tvol)>[is6]&&((ct).Buy_I_Volume/(ct).Buy_CountI)>=((ct).Sell_I_Volume/(ct).Sell_CountI)&&(ct).Buy_I_Volume>0.5*(tvol)&&(ct).Sell_N_Volume>0.5*(tvol)
// فیلتر سهم‌هایی که حجم خرید حقیقی‌ها بیش از 50% و حجم فروش حقوقی‌ها بیش از 50% معاملات و قدرت خریداران حقیقی بیشتر از قدرت فروشندگان حقیقی است (کد به کد حقوقی به حقیقی):
(ct).Buy_I_Volume>0.5*(tvol)&&(ct).Sell_N_Volume>0.5*(tvol)&&((ct).Buy_I_Volume/(ct).Buy_CountI)>((ct).Sell_I_Volume/(ct).Sell_CountI)
// فیلتر سهم‌هایی که حجم خرید حقیقی‌ها بیش از 70% و حجم فروش حقوقی‌ها بیش از 70% معاملات است (کد به کد حقوقی به حقیقی):
(ct).Buy_I_Volume>0.7*(tvol)&&(ct).Sell_N_Volume>0.7*(tvol)
// فیلتر سهم‌هایی که تعداد خریداران حقوقی بیش از 2 برابر تعداد فروشندگان حقوقی و قدرت خریداران حقیقی بیشتر از قدرت فروشندگان حقیقی است:
(ct).Buy_CountN>=2*((ct).Sell_CountN)&&((ct).Buy_I_Volume/(ct).Buy_CountI)>((ct).Sell_I_Volume/(ct).Sell_CountI)
// فیلتر سهم‌هایی که تعداد خریداران حقوقی بیش از 5 برابر تعداد فروشندگان حقوقی است:
(ct).Buy_CountN>=5*((ct).Sell_CountN)
// فیلتر خروج پول هوشمند (1):
(tvol)>(([ih][0].QTotTran5J+[ih][1].QTotTran5J+[ih][2].QTotTran5J+[ih][3].QTotTran5J+[ih][4].QTotTran5J+[ih][5].QTotTran5J+[ih][6].QTotTran5J+[ih][7].QTotTran5J+[ih][8].QTotTran5J+[ih][9].QTotTran5J+[ih][10].QTotTran5J+[ih][11].QTotTran5J+[ih][12].QTotTran5J+[ih][13].QTotTran5J+[ih][14].QTotTran5J+[ih][15].QTotTran5J+[ih][16].QTotTran5J+[ih][17].QTotTran5J+[ih][18].QTotTran5J+[ih][19].QTotTran5J+[ih][20].QTotTran5J+[ih][21].QTotTran5J+[ih][22].QTotTran5J+[ih][23].QTotTran5J+[ih][24].QTotTran5J+[ih][25].QTotTran5J+[ih][26].QTotTran5J+[ih][27].QTotTran5J+[ih][28].QTotTran5J+[ih][29].QTotTran5J)/30)&&((ct).Buy_I_Volume/(ct).Buy_CountI)<((ct).Sell_I_Volume/(ct).Sell_CountI)&&(pl)<=(pc)&&(plp)<0
// فیلتر خروج پول هوشمند (2):
(tvol)>1.25*[is5]&&((ct).Buy_I_Volume/(ct).Buy_CountI)<((ct).Sell_I_Volume/(ct).Sell_CountI)&&(pl)<=(pc)&&(plp)<0
// فیلتر خروج پول هوشمند (3):
(tvol)>1.5*[is6]&&((ct).Buy_I_Volume/(ct).Buy_CountI)<((ct).Sell_I_Volume/(ct).Sell_CountI)&&(pl)<=(pc)&&(plp)<0
// فیلتر خروج پول هوشمند و کد به کد حقیقی به حقوقی (1):
(tvol)>(([ih][0].QTotTran5J+[ih][1].QTotTran5J+[ih][2].QTotTran5J+[ih][3].QTotTran5J+[ih][4].QTotTran5J+[ih][5].QTotTran5J+[ih][6].QTotTran5J+[ih][7].QTotTran5J+[ih][8].QTotTran5J+[ih][9].QTotTran5J+[ih][10].QTotTran5J+[ih][11].QTotTran5J+[ih][12].QTotTran5J+[ih][13].QTotTran5J+[ih][14].QTotTran5J+[ih][15].QTotTran5J+[ih][16].QTotTran5J+[ih][17].QTotTran5J+[ih][18].QTotTran5J+[ih][19].QTotTran5J+[ih][20].QTotTran5J+[ih][21].QTotTran5J+[ih][22].QTotTran5J+[ih][23].QTotTran5J+[ih][24].QTotTran5J+[ih][25].QTotTran5J+[ih][26].QTotTran5J+[ih][27].QTotTran5J+[ih][28].QTotTran5J+[ih][29].QTotTran5J)/30)&&((ct).Buy_I_Volume/(ct).Buy_CountI)<((ct).Sell_I_Volume/(ct).Sell_CountI)&&(pl)<=(pc)&&(plp)<0&&(ct).Buy_N_Volume>0.5*(tvol)&&(ct).Sell_I_Volume>0.5*(tvol)
// فیلتر خروج پول هوشمند و کد به کد حقیقی به حقوقی (2):
(tvol)>1.25*[is5]&&((ct).Buy_I_Volume/(ct).Buy_CountI)<((ct).Sell_I_Volume/(ct).Sell_CountI)&&(pl)<=(pc)&&(plp)<0&&(ct).Buy_N_Volume>0.5*(tvol)&&(ct).Sell_I_Volume>0.5*(tvol)
// فیلتر خروج پول هوشمند و کد به کد حقیقی به حقوقی (3):
(tvol)>1.5*[is6]&&((ct).Buy_I_Volume/(ct).Buy_CountI)<((ct).Sell_I_Volume/(ct).Sell_CountI)&&(pl)<=(pc)&&(plp)<0&&(ct).Buy_N_Volume>0.5*(tvol)&&(ct).Sell_I_Volume>0.5*(tvol)
// فیلتر خروج پول (1):
(tvol)>([ih][0].QTotTran5J+[ih][1].QTotTran5J+[ih][2].QTotTran5J+[ih][3].QTotTran5J+[ih][4].QTotTran5J+[ih][5].QTotTran5J+[ih][6].QTotTran5J+[ih][7].QTotTran5J+[ih][8].QTotTran5J+[ih][9].QTotTran5J+[ih][10].QTotTran5J+[ih][11].QTotTran5J+[ih][12].QTotTran5J+[ih][13].QTotTran5J+[ih][14].QTotTran5J+[ih][15].QTotTran5J+[ih][16].QTotTran5J+[ih][17].QTotTran5J+[ih][18].QTotTran5J+[ih][19].QTotTran5J+[ih][20].QTotTran5J+[ih][21].QTotTran5J+[ih][22].QTotTran5J+[ih][23].QTotTran5J+[ih][24].QTotTran5J+[ih][25].QTotTran5J+[ih][26].QTotTran5J+[ih][27].QTotTran5J+[ih][28].QTotTran5J+[ih][29].QTotTran5J)/30&&((ct).Buy_I_Volume/(ct).Buy_CountI)<((ct).Sell_I_Volume/(ct).Sell_CountI)
// فیلتر خروج پول (2):
(tvol)>[is5]&&((ct).Buy_I_Volume/(ct).Buy_CountI)<((ct).Sell_I_Volume/(ct).Sell_CountI)
// فیلتر خروج پول (3):
(tvol)>[is6]&&((ct).Buy_I_Volume/(ct).Buy_CountI)<((ct).Sell_I_Volume/(ct).Sell_CountI)
// فیلتر خروج پول و کد به کد حقیقی به حقوقی (1):
(tvol)>([ih][0].QTotTran5J+[ih][1].QTotTran5J+[ih][2].QTotTran5J+[ih][3].QTotTran5J+[ih][4].QTotTran5J+[ih][5].QTotTran5J+[ih][6].QTotTran5J+[ih][7].QTotTran5J+[ih][8].QTotTran5J+[ih][9].QTotTran5J+[ih][10].QTotTran5J+[ih][11].QTotTran5J+[ih][12].QTotTran5J+[ih][13].QTotTran5J+[ih][14].QTotTran5J+[ih][15].QTotTran5J+[ih][16].QTotTran5J+[ih][17].QTotTran5J+[ih][18].QTotTran5J+[ih][19].QTotTran5J+[ih][20].QTotTran5J+[ih][21].QTotTran5J+[ih][22].QTotTran5J+[ih][23].QTotTran5J+[ih][24].QTotTran5J+[ih][25].QTotTran5J+[ih][26].QTotTran5J+[ih][27].QTotTran5J+[ih][28].QTotTran5J+[ih][29].QTotTran5J)/30&&((ct).Buy_I_Volume/(ct).Buy_CountI)<((ct).Sell_I_Volume/(ct).Sell_CountI)&&(ct).Buy_N_Volume>0.5*(tvol)&&(ct).Sell_I_Volume>0.5*(tvol)
// فیلتر خروج پول و کد به کد حقیقی به حقوقی (2):
(tvol)>[is5]&&((ct).Buy_I_Volume/(ct).Buy_CountI)<((ct).Sell_I_Volume/(ct).Sell_CountI)&&(ct).Buy_N_Volume>0.5*(tvol)&&(ct).Sell_I_Volume>0.5*(tvol)
// فیلتر خروج پول و کد به کد حقیقی به حقوقی (3):
(tvol)>[is6]&&((ct).Buy_I_Volume/(ct).Buy_CountI)<((ct).Sell_I_Volume/(ct).Sell_CountI)&&(ct).Buy_N_Volume>0.5*(tvol)&&(ct).Sell_I_Volume>0.5*(tvol)
// فیلتر سهم‌هایی که حجم خرید حقوقی‌ها بیش از 50% و حجم فروش حقیقی‌ها بیش از 50% معاملات و قدرت فروشندگان حقیقی بیشتر از قدرت خریداران حقیقی است (کد به کد حقیقی به حقوقی):
(ct).Buy_N_Volume>0.5*(tvol)&&(ct).Sell_I_Volume>0.5*(tvol)&&((ct).Buy_I_Volume/(ct).Buy_CountI)<((ct).Sell_I_Volume/(ct).Sell_CountI)
// فیلتر سهم‌هایی که حجم خرید حقوقی‌ها بیش از 70% و حجم فروش حقیقی‌ها بیش از 70% معاملات است (کد به کد حقیقی به حقوقی):
(ct).Buy_N_Volume>0.7*(tvol)&&(ct).Sell_I_Volume>0.7*(tvol)
// فیلتر سهم‌هایی که تعداد فروشندگان حقوقی بیش از 2 برابر تعداد خریداران حقوقی و قدرت فروشندگان حقیقی بیشتر از قدرت خریداران حقیقی است:
(ct).Sell_CountN>=2*((ct).Buy_CountN)&&((ct).Buy_I_Volume/(ct).Buy_CountI)<((ct).Sell_I_Volume/(ct).Sell_CountI)
// فیلتر سهم‌هایی که تعداد فروشندگان حقوقی بیش از 5 برابر تعداد خریداران حقوقی است:
(ct).Sell_CountN>=5*((ct).Buy_CountN)
// فیلتر سهم‌هایی که اختلاف قیمت آخرین معامله با قیمت پایانی حداقل مثبت 3% و قدرت خریداران حقیقی بیشتر از قدرت فروشندگان حقیقی است (الگوی ساعت مثبت یا تیک صعودی):
(pl)>=(pc)*1.03&&((ct).Buy_I_Volume/(ct).Buy_CountI)>((ct).Sell_I_Volume/(ct).Sell_CountI)
// فیلتر سهم‌هایی که درصد قیمت آخرین معامله حداقل 2% بیشتر از درصد قیمت پایانی و قدرت خریداران حقیقی بیشتر از قدرت فروشندگان حقیقی است (الگوی ساعت مثبت یا تیک صعودی):
(plp)-(pcp)>2&&(plc)<0&&(pmin)==(tmin)&&((ct).Buy_I_Volume/(ct).Buy_CountI)>((ct).Sell_I_Volume/(ct).Sell_CountI)
// فیلتر سهم‌هایی که اختلاف قیمت آخرین معامله با قیمت پایانی حداقل مثبت 3% است (الگوی ساعت یا تیک):
(pl)>=(pc)*1.03
// فیلتر سهم‌هایی که درصد قیمت آخرین معامله حداقل 2% بیشتر از درصد قیمت پایانی است (الگوی ساعت یا تیک):
(plp)-(pcp)>2&&(plc)<0&&(pmin)==(tmin)
// فیلتر سهم‌هایی که اختلاف قیمت آخرین معامله با قیمت پایانی حداقل منفی 3% و قدرت فروشندگان حقیقی بیشتر از قدرت خریداران حقیقی است (الگوی ساعت منفی یا تیک نزولی):
(pl)*1.03<=(pc)&&((ct).Buy_I_Volume/(ct).Buy_CountI)<((ct).Sell_I_Volume/(ct).Sell_CountI)
// فیلتر سهم‌هایی که درصد قیمت آخرین معامله حداقل 2% کمتر از درصد قیمت پایانی و قدرت فروشندگان حقیقی بیشتر از قدرت خریداران حقیقی است (الگوی ساعت منفی یا تیک نزولی):
(pcp)-(plp)>2&&((ct).Buy_I_Volume/(ct).Buy_CountI)<((ct).Sell_I_Volume/(ct).Sell_CountI)
// فیلتر سهم‌هایی که اختلاف قیمت آخرین معامله با قیمت پایانی حداقل منفی 3% است (الگوی ساعت یا تیک):
(pl)*1.03<=(pc)
// فیلتر سهم‌هایی که درصد قیمت آخرین معامله حداقل 2% کمتر از درصد قیمت پایانی است (الگوی ساعت یا تیک):
(pcp)-(plp)>2
// فیلتر سهم‌هایی که امروز حداقل 5 برابر میانگین حجم ماه معامله شده‌اند (حجم‌های مشکوک):
(tvol)>5*(([ih][0].QTotTran5J+[ih][1].QTotTran5J+[ih][2].QTotTran5J+[ih][3].QTotTran5J+[ih][4].QTotTran5J+[ih][5].QTotTran5J+[ih][6].QTotTran5J+[ih][7].QTotTran5J+[ih][8].QTotTran5J+[ih][9].QTotTran5J+[ih][10].QTotTran5J+[ih][11].QTotTran5J+[ih][12].QTotTran5J+[ih][13].QTotTran5J+[ih][14].QTotTran5J+[ih][15].QTotTran5J+[ih][16].QTotTran5J+[ih][17].QTotTran5J+[ih][18].QTotTran5J+[ih][19].QTotTran5J+[ih][20].QTotTran5J+[ih][21].QTotTran5J+[ih][22].QTotTran5J+[ih][23].QTotTran5J+[ih][24].QTotTran5J+[ih][25].QTotTran5J+[ih][26].QTotTran5J+[ih][27].QTotTran5J+[ih][28].QTotTran5J+[ih][29].QTotTran5J)/30)
// فیلتر افزایش حجم معاملات نسبت به 3 ماه و 12 ماه گذشته (حجم‌های مشکوک):
(tvol)>[is5]&&(tvol)>2*[is6]
// فیلتر سهم‌هایی که ورود یا خروج نقدینگی داشته‌اند و حجم معاملات 4 برابر میانگین حجم هفته گذشته است:
(tvol)>4*(([ih][0].QTotTran5J+[ih][1].QTotTran5J+[ih][2].QTotTran5J+[ih][3].QTotTran5J+[ih][4].QTotTran5J+[ih][5].QTotTran5J)/6)
// فیلتر سهم‌هایی که چند روز است منفی هستند و حجم معاملات بیشتر از میانگین ماه است:
(pc)<0.97*[ih][0].PClosing&&[ih][0].PClosing<0.97*[ih][1].PClosing&&[ih][1].PClosing<0.97*[ih][2].PClosing&&[ih][2].PClosing<0.97*[ih][3].PClosing&&(tvol)>=([ih][0].QTotTran5J+[ih][1].QTotTran5J+[ih][2].QTotTran5J+[ih][3].QTotTran5J+[ih][4].QTotTran5J+[ih][5].QTotTran5J+[ih][6].QTotTran5J+[ih][7].QTotTran5J+[ih][8].QTotTran5J+[ih][9].QTotTran5J+[ih][10].QTotTran5J+[ih][11].QTotTran5J+[ih][12].QTotTran5J+[ih][13].QTotTran5J+[ih][14].QTotTran5J+[ih][15].QTotTran5J+[ih][16].QTotTran5J+[ih][17].QTotTran5J+[ih][18].QTotTran5J+[ih][19].QTotTran5J+[ih][20].QTotTran5J+[ih][21].QTotTran5J+[ih][22].QTotTran5J+[ih][23].QTotTran5J+[ih][24].QTotTran5J+[ih][25].QTotTran5J+[ih][26].QTotTran5J+[ih][27].QTotTran5J+[ih][28].QTotTran5J+[ih][29].QTotTran5J)/30
// فیلتر سهم‌هایی که چند روز است منفی هستند و حجم معاملات بیشتر از 3 ماه است:
(pc)<0.97*[ih][0].PClosing&&[ih][0].PClosing<0.97*[ih][1].PClosing&&[ih][1].PClosing<0.97*[ih][2].PClosing&&[ih][2].PClosing<0.97*[ih][3].PClosing&&(tvol)>1.25*[is5]
// فیلتر سهم‌هایی که چند روز است منفی هستند و حجم معاملات بیشتر از 12 ماه است:
(pc)<0.97*[ih][0].PClosing&&[ih][0].PClosing<0.97*[ih][1].PClosing&&[ih][1].PClosing<0.97*[ih][2].PClosing&&[ih][2].PClosing<0.97*[ih][3].PClosing&&(tvol)>1.5*[is6]
// فیلتر سهم‌هایی که حجم معاملات افزایش یافته و قدرت خریداران حقیقی بیش از 3 برابر قدرت فروشندگان حقیقی است:
(tvol)>[is5]&&((ct).Buy_I_Volume/(ct).Buy_CountI)>3*((ct).Sell_I_Volume/(ct).Sell_CountI)
// فیلتر سهم‌هایی که صف فروش هستند و حجم معاملات بیشتر از میانگین حجم ماه و قدرت خریداران حقیقی بیشتر از قدرت فروشندگان حقیقی است (1):
(tvol)>([ih][0].QTotTran5J+[ih][1].QTotTran5J+[ih][2].QTotTran5J+[ih][3].QTotTran5J+[ih][4].QTotTran5J+[ih][5].QTotTran5J+[ih][6].QTotTran5J+[ih][7].QTotTran5J+[ih][8].QTotTran5J+[ih][9].QTotTran5J+[ih][10].QTotTran5J+[ih][11].QTotTran5J+[ih][12].QTotTran5J+[ih][13].QTotTran5J+[ih][14].QTotTran5J+[ih][15].QTotTran5J+[ih][16].QTotTran5J+[ih][17].QTotTran5J+[ih][18].QTotTran5J+[ih][19].QTotTran5J+[ih][20].QTotTran5J+[ih][21].QTotTran5J+[ih][22].QTotTran5J+[ih][23].QTotTran5J+[ih][24].QTotTran5J+[ih][25].QTotTran5J+[ih][26].QTotTran5J+[ih][27].QTotTran5J+[ih][28].QTotTran5J+[ih][29].QTotTran5J)/30&&((ct).Buy_I_Volume/(ct).Buy_CountI)>=((ct).Sell_I_Volume/(ct).Sell_CountI)&&(pl)==(tmin)&&(po1)==(tmin)
// فیلتر سهم‌هایی که صف فروش هستند و حجم معاملات بیشتر از میانگین حجم ماه و قدرت خریداران حقیقی بیشتر از قدرت فروشندگان حقیقی است (2):
(tvol)>1.25*[is5]&&((ct).Buy_I_Volume/(ct).Buy_CountI)>=((ct).Sell_I_Volume/(ct).Sell_CountI)&&(pl)==(tmin)&&(po1)==(tmin)
// فیلتر سهم‌هایی که صف فروش هستند و حجم معاملات بیشتر از میانگین حجم ماه و قدرت خریداران حقیقی بیشتر از قدرت فروشندگان حقیقی است (3):
(tvol)>1.5*[is6]&&((ct).Buy_I_Volume/(ct).Buy_CountI)>=((ct).Sell_I_Volume/(ct).Sell_CountI)&&(pl)==(tmin)&&(po1)==(tmin)
// فیلتر سهم‌هایی که در کف قیمتی دو ماهه، حجم معاملات بالایی دارند:
(Math.min([ih][1].PriceMin,[ih][2].PriceMin,[ih][3].PriceMin,[ih][4].PriceMin,[ih][5].PriceMin,[ih][6].PriceMin,[ih][7].PriceMin,[ih][8].PriceMin,[ih][9].PriceMin,[ih][10].PriceMin,[ih][11].PriceMin,[ih][12].PriceMin,[ih][13].PriceMin,[ih][14].PriceMin,[ih][15].PriceMin,[ih][16].PriceMin,[ih][17].PriceMin,[ih][18].PriceMin,[ih][19].PriceMin,[ih][20].PriceMin,[ih][21].PriceMin,[ih][22].PriceMin,[ih][23].PriceMin,[ih][24].PriceMin,[ih][25].PriceMin,[ih][26].PriceMin,[ih][27].PriceMin,[ih][28].PriceMin,[ih][29].PriceMin,[ih][30].PriceMin,[ih][31].PriceMin,[ih][32].PriceMin,[ih][33].PriceMin,[ih][34].PriceMin,[ih][35].PriceMin,[ih][36].PriceMin,[ih][37].PriceMin,[ih][38].PriceMin,[ih][39].PriceMin,[ih][40].PriceMin,[ih][41].PriceMin,[ih][42].PriceMin,[ih][43].PriceMin,[ih][44].PriceMin,[ih][45].PriceMin,[ih][46].PriceMin,[ih][47].PriceMin,[ih][48].PriceMin,[ih][49].PriceMin,[ih][50].PriceMin,[ih][51].PriceMin,[ih][52].PriceMin,[ih][53].PriceMin,[ih][54].PriceMin,[ih][55].PriceMin,[ih][56].PriceMin,[ih][57].PriceMin,[ih][58].PriceMin,[ih][59].PriceMin))>((Math.min((pmin),[ih][1].PriceMin,[ih][2].PriceMin,[ih][3].PriceMin)))&&(tvol)>=(bvol)&&(tvol)>200000
// فیلتر سهم‌هایی که حجم معاملات یک هفته گذشته‌شان بیشتر از حجم معاملات یک ماه اخیرشان است:
([ih][0].QTotTran5J+[ih][1].QTotTran5J+[ih][2].QTotTran5J+[ih][3].QTotTran5J+[ih][4].QTotTran5J+[ih][5].QTotTran5J)/6>([ih][0].QTotTran5J+[ih][1].QTotTran5J+[ih][2].QTotTran5J+[ih][3].QTotTran5J+[ih][4].QTotTran5J+[ih][5].QTotTran5J+[ih][6].QTotTran5J+[ih][7].QTotTran5J+[ih][8].QTotTran5J+[ih][9].QTotTran5J+[ih][10].QTotTran5J+[ih][11].QTotTran5J+[ih][12].QTotTran5J+[ih][13].QTotTran5J+[ih][14].QTotTran5J+[ih][15].QTotTran5J+[ih][16].QTotTran5J+[ih][17].QTotTran5J+[ih][18].QTotTran5J+[ih][19].QTotTran5J+[ih][20].QTotTran5J+[ih][21].QTotTran5J+[ih][22].QTotTran5J+[ih][23].QTotTran5J+[ih][24].QTotTran5J+[ih][25].QTotTran5J+[ih][26].QTotTran5J+[ih][27].QTotTran5J+[ih][28].QTotTran5J+[ih][29].QTotTran5J)/30
// فیلتر سهم‌هایی که حجم معاملات یک هفته گذشته‌شان بیشتر از حجم معاملات 3 ماه اخیرشان است:
([ih][0].QTotTran5J+[ih][1].QTotTran5J+[ih][2].QTotTran5J+[ih][3].QTotTran5J+[ih][4].QTotTran5J+[ih][5].QTotTran5J)/6>[is5]
// فیلتر سهم‌هایی که حجم معاملات یک هفته گذشته‌شان بیشتر از حجم معاملات 12 ماه اخیرشان است:
([ih][0].QTotTran5J+[ih][1].QTotTran5J+[ih][2].QTotTran5J+[ih][3].QTotTran5J+[ih][4].QTotTran5J+[ih][5].QTotTran5J)/6>[is6]
// فیلتر سهم‌هایی که قیمت آخرین معامله بیش از 1% مثبت و قیمت پایانی بیش از 1% منفی است:
(plp)>1&&(pcp)<-1
// فیلتر نوسان‌گیری: سهم‌هایی که در حال برگشت قیمتی از منفی به مثبت هستند و می‌توان برای نوسان‌گیری روزانه به کار برد:
(pcp)<-3&&(plp)>-3
// فیلتر سهم‌هایی حجم سه ردیف اول باکس خرید 4 برابر حجم سه ردیف اول باکس فروش است و قیمت آخرین معامله کمتر از قیمت پایانی است:
((qd1)+(qd2)+(qd3))>(4*((qo1)+(qo2)+(qo3)))&&(pl)<(pc)
// فیلتر سهم‌هایی که ارزش ریالی قسمت خریداران 5 برابر ارزش ریالی قسمت فروشندگان است:
(pd1)*(qd1)+(pd2)*(qd2)+(pd3)*(qd3)>5*( (po1)*(qo1)+(po2)*(qo2)+(po3)*(qo3))
// فیلتر سهم‌هایی که روند نزولی‌شان تمام شده و آماده‌ی روند صعودی هستند:
(pf)<(py)&&(plp)<1&&(tno)>10&&(pl)>(py)
// فیلتر صف فروش‌هایی که جمع شده‌اند و گارد صعودی گرفته‌اند:
(tvol)>(bvol)&&(pmin)==(tmin)&&(((pl)-(pc))/(pl))*100>1.5&&(ct).Sell_CountI>=(ct).Buy_CountI&&(tno)>20
// فیلتر سهم‌هایی که تراکم قیمت دارند و چندین روز درجا زده و خنثی بوده است:
([ih][5].PClosing/[ih][4].PClosing)<=0.98&&([ih][4].PClosing/[ih][3].PClosing)>=1.02&&([ih][3].PClosing/[ih][1].PClosing)<=0.98
// فیلتر سهم‌هایی که در روند صعودی تثبیت شده‌اند و صف خرید نیستند:
(pl)>1.01*(pf)&&(tno)>10&&(pf)>1.01*(py)&&(pl)!=(tmax)
// فیلتر سهم‌هایی که تقاضای بالایی در قیمت‌های مثبت دارند:
((qd1)+(qd2)+(qd3))>50*((qo1)+(qo2)+(qo3))&&(pl)==(pmax)
// فیلتر سهم‌هایی که از صف فروش به صف خرید رفته‌اند:
(pmin)==(tmin)&&(pl)==(tmax)
// فیلتر سهم‌هایی که در آستانه‌ی صف خرید هستند (1):
(po1)<=(tmax)&&(po1)>=(tmax)-1&&(pd1)<(tmax)
// فیلتر سهم‌هایی که در آستانه‌ی صف خرید هستند (2):
(pl)>=0.994*(tmax)&&(qo1)>0
// فیلتر سهم‌هایی که در آستانه‌ی صف خرید هستند (3):
(plp)>+4.6&&(qd1)>0
// فیلتر سهم‌هایی که در آستانه‌ی صف خرید هستند (4):
(pl)>=(tmax)-6&&(pl)<=(tmax)&&(po1)<=(tmax)&&(zo1)!=0
// فیلتر سهم‌هایی که کندل الگوی پوشای صعودی (انگالفینگ مثبت) دارند:
(pl)>(pf)&&((pl)-(pf))/((tmax)-(tmin))>0.7&&((pmax)-(pmin))/((tmax)-(tmin))>0.6
// فیلتر سهم‌هایی که کندل چکش یا مرد آویزان دارند (1):
(pl)>(pf)&&(pmax)-(pl)<0.2*((pmax)-(pmin))&&(pl)-(pf)>=0.25*((pmax)-(pmin))&&(pl)-(pf)<0.33*((pmax)-(pmin))
// فیلتر سهم‌هایی که کندل چکش یا مرد آویزان دارند (2):
(pl)>(pc)&&(pmax)>(pmin)&&(pl)>(py)&&(pmax)>(py)&&(pf)>=(py)&&(pl)>(pmin)&&(pl)>(pf)&&(pl)/(pf)<1.015&&(pl)/(pf)>1.005&&(pmax)==(pl)&&(tno)>1
// فیلتر سهم‌هایی که کندل دوجی سنجاقک دارند:
(pmin)<(pl)&&(pl)==(pf)&&(pl)/(pf)<1.005&&(pf)>(pc)&&(pl)>(pc)
// فیلتر سهم‌هایی که کندل ستاره ثاقب (ستاره صبحگاهی یا شامگاهی) یا چکش وارونه دارند (1):
(pc)>(pl)&&(pmax)>(pmin)&&(py)>(pl)&&(py)>=(pf)&&(pl)>(pmin)&&(pl)>(pf)&&(pl)/(pf)<1.015&&(pl)/(pf)>1.005&&(pmax)>(pl)&&(tno)>1
// فیلتر سهم‌هایی که کندل ستاره ثاقب (ستاره صبحگاهی یا شامگاهی) یا چکش وارونه دارند (2):
((pmin)==(pf))&&((pmax)-(pmin))*0.1 >(Math.abs((pl)-(pf)))&&(pl)!=(pf)
// فیلتر سهم‌هایی که کندل شوتینگ استار یا ستاره دنباله‌دار (ستاره صبحگاهی یا شامگاهی) دارند:
((pmax)-(pf))>=2*((pf)-(pl))&&(pl)<(pf)&&(pmax)>=1.02*(pf)&&((pf)-(pl))>((pl)-(pmin))
// فیلتر سهم‌هایی که کندل دوجی صلیب (پایه بلند یا ستاره) ساخته‌اند:
(pf)==(pl)&&(pmax)>(pl)&&(pmin)<(pl)
// فیلتر سهم‌هایی که در یک ماه گذشته بیش از 20% افت داشته‌اند:
([ih][20].PriceMax-(pl))/[ih][20].PriceMax>.20
// فیلتر سهم‌هایی که در 5 روز گذشته منفی معامله شده‌اند:
[ih][5].PClosing>[ih][4].PClosing&&[ih][4].PClosing>[ih][3].PClosing&&[ih][3].PClosing>[ih][2].PClosing&&[ih][2].PClosing>[ih][1].PClosing&&[ih][1].PClosing>[ih][0].PClosing
// فیلتر سهم‌هایی که حداقل 3 روز است بیش از 4% منفی هستند:
(pcp)<-4&&[ih][0].PClosing<0.96*[ih][1].PClosing&&[ih][1].PClosing<0.96*[ih][2].PClosing
// فیلتر سهم‌هایی که در یک ماه گذشته بیش از 30% افت داشته‌اند:
([ih][22].PriceMax-(pl))/[ih][22].PriceMax>0.30
// فیلتر سهم‌هایی که کم‌ترین قیمت را نسبت به 3 روز گذشته دارند:
(pl)<[ih][2].PriceMin&&(pl)<[ih][1].PriceMin&&(pl)<[ih][0].PriceMin
// فیلتر سهم‌های کوچک که حجم مبنای آن‌ها کم است:
((pf)>=1.02*(py))&&((pc)>=(py))&&(100*(((pmax)-(pmin))/(pc))>2)&&(bvol)<1000000&&(pcp)>0.5
// فیلتر سهم‌هایی که از صف فروش رنج مثبت کشیده‌اند (حرکت از صف فروش به مثبت):
(tmin)==(pmin)&&(plp)>=1
// فیلتر سهم‌هایی که صف خرید هستند (1):
(pd1)==(tmax)&&(qd1)>0
// فیلتر سهم‌هایی که صف خرید هستند (2):
(pd1)==(tmax)&&(zd1)>30&&(zo1)<100
// فیلتر سهم‌هایی که صف خرید کم حجم دارند:
(pd1)==(tmax)&&(qd1)>=.2*(bvol)&&(qd1)<=(bvol)
// فیلتر سهم‌هایی که حجم صف خرید آن‌ها بیشتر از حجم مبنا است:
(pd1)==(tmax)&&(qd1)>(bvol)
// فیلتر سهم‌هایی که حجم صف خرید آن‌ها بیش از 2 برابر حجم مبنا است:
(pd1)==(tmax)&&(qd1)>=2*(bvol)
// فیلتر سهم‌هایی که حجم صف خرید آن‌ها بیش 1 میلیون است:
(pd1)==(tmax)&&(qo1)==0&&(qd1)>=1000000
// فیلتر سهم‌هایی که حجم صف خرید آن‌ها زیر 1 میلیون است:
(po1)==(tmin)&&(qd1)==0&&(qo1)<1000000
// فیلتر سهم‌هایی که امروز از مثبت به منفی رفته‌اند:
(pf)>(py)&&(pl)<(py)
// فیلتر سهم‌هایی که امروز از منفی به مثبت رفته‌اند:
(pf)<(py)&&(pl)>(py)
// فیلتر سهم‌هایی که امروز مثبت بسته شده‌اند (1):
(pl)>(py)
// فیلتر سهم‌هایی که امروز مثبت بسته شده‌اند (2):
(plc)>0
// فیلتر سهم‌هایی که امروز مثبت بسته شده‌اند (3):
(plp)>0
// فیلتر سهم‌هایی که امروز منفی بسته شده‌اند (1):
(pl)<(py)
// فیلتر سهم‌هایی که امروز منفی بسته شده‌اند (2):
(plc)<0
// فیلتر سهم‌هایی که امروز منفی بسته شده‌اند (3):
(plp)<0
// فیلتر سهم‌هایی که امروز منفی بسته شده‌اند و احتمالاً فردا نیز منفی باشند:
(pl)<(py)&&(pc)>0
// فیلتر سهم‌هایی که سفارش‌های خریداران سنگین و تعداد خریداران حقیقی بیشتر از تعداد فروشندگان حقیقی است:
(qd1)*(pd1)+(qd2)*(pd2)+(qd3)*(pd3)>=2*((qo1)*(po1)+(qo2)*(po2)+(qo3)*(po3))&&(pl)>=(py)&&(pl)!=(tmax)&&(tno)>30&&(ct).Buy_CountI>=(ct).Sell_CountI
// فیلتر سهم‌هایی که در آستانه‌ی صف فروش هستند:
(pl)<=1.006*(tmin)&&(qd1)>0
// فیلتر سهم‌هایی که صف فروش هستند (1):
(pl)==(tmin)&&(po1)==(tmin)
// فیلتر سهم‌هایی که صف فروش هستند (2):
(po1)==(tmin)&&(zo1)>40&&(zd1)<50
// فیلتر سهم‌هایی که حجم صف فروش آن‌ها بیشتر از حجم مبنا است:
(pl)==(tmin)&&(po1)==(tmin)&&(qo1)>(bvol)
// فیلتر سهم‌هایی که حجم صف فروش آن‌ها بیش از 2 برابر حجم مبنا است:
(po1)==(tmin)&&(qo1)>=2*(bvol)
// فیلتر سهم‌هایی که حجم صف فروش آن‌ها زیر 1 میلیون است:
(po1)==(tmin)&&(qd1)==0&&(qo1)<1000000
// فیلتر سهم‌هایی که حجم صف فروش آن‌ها بیش 1 میلیون است:
(po1)==(tmin)&&(qd1)==0&&(qo1)>=1000000
// فیلتر سهم‌هایی که قیمت آخرین معامله آن‌ها بالاترین قیمت روزشان است:
(pmax)==(pl)
// فیلتر سهم‌هایی که قیمت آخرین معامله آن‌ها پایین‌ترین قیمت روزشان است:
(pmin)==(pl)
// فیلتر شرکت‌هایی که تعداد سهام‌شان بیش از 50 میلیارد است (بزرگ‌ترین شرکت‌های بورسی):
(z)>=50000000000
// فیلتر شرکت‌هایی که تعداد سهام‌شان زیر 100 میلیون است (کوچک‌ترین شرکت‌های بورسی):
(z)<=100000000
// فیلتر شرکت‌هایی که ارزش بازارشان بیش از 50 هزار میلیارد تومان است (شرکت‌های دارای بالاترین ارزش بازار در بورس و فرابورس 1):
(z)*(pc)>=500000000000000
// فیلتر شرکت‌هایی که ارزش بازارشان بیش از 20 هزار میلیارد تومان است (شرکت‌های دارای بالاترین ارزش بازار در بورس و فرابورس 2):
(mv)>=500000000000000
// فیلتر شرکت‌هایی که ارزش بازارشان زیر 700 میلیارد تومان است (شرکت‌های دارای پایین‌ترین ارزش بازار در بورس و فرابورس 1):
(z)*(pc)<=7000000000000
// فیلتر شرکت‌هایی که ارزش بازارشان زیر 700 میلیارد تومان است (شرکت‌های دارای پایین‌ترین ارزش بازار در بورس و فرابورس 2):
(mv)<=7000000000000
// فیلتر سهم‌هایی که قیمت‌شان زیر 800 تومان است (ارزان‌ترین سهام بازار بورس و فرابورس):
(pc)<8000
// فیلتر سهم‌هایی که قیمت‌شان زیر 1000 تومان است:
(pc)<10000
// فیلتر سهم‌هایی که قیمت‌شان بیش از 10000 تومان است (گران‌ترین سهام بازار بورس و فرابورس):
(pc)>=100000
// فیلتر سهم‌هایی که قیمت‌شان 500 تا 1000 تومان است:
(pc)>=5000&&(pc)<=10000
// فیلتر شرکت‌هایی که P/E بالای 300 دارند (شرکت‌های دارای بالاترین P/E بر مبنای TTM در بازار بورس و فرابورس):
(pe)>=300
// فیلتر شرکت‌هایی که P/E زیر 15 دارند (شرکت‌های دارای پایین‌ترین P/E بر مبنای TTM در بازار بورس و فرابورس):
(pe)<=15
// فیلتر شرکت‌هایی که EPS بالای 500 تومان دارند:
(eps)>=5000
// فیلتر سهم‌هایی که تعداد معاملات‌شان بیش از 5000 است:
(tno)>=5000
// فیلتر سهم‌هایی که تعداد معاملات‌شان زیر 100 است:
(tno)<=100
// فیلتر سهم‌هایی که حجم معاملات‌شان بیش از 50 میلیون است:
(tvol)>=50000000
// فیلتر سهم‌هایی که حجم معاملات‌شان زیر 100 هزار است:
(tvol)<=100000
// فیلتر سهم‌هایی که ارزش معاملات‌شان بیش از 5 میلیارد تومان است:
(tval)>=50000000000
// فیلتر سهم‌هایی که ارزش معاملات‌شان زیر 100 میلیون تومان است:
(tval)<=1000000000
// فیلتر سهم‌هایی که دیروز قیمت پایانی منفی و قیمت آخرین معامله مثبت بوده است:
[ih][0].PClosing<[ih][1].PClosing&&[ih][0].PDrCotVal>[ih][1].PClosing
// فیلتر سهم‌هایی که دیروز قیمت پایانی مثبت و قیمت آخرین معامله منفی بوده است:
[ih][0].PClosing>[ih][1].PClosing&&[ih][0].PDrCotVal<[ih][1].PClosing
// فیلتر سهم‌های مثبت دیروز:
[ih][0].PDrCotVal>[ih][1].PClosing
// فیلتر سهم‌هایی که دیروز صف خرید بوده‌اند:
[ih][0].PDrCotVal==Math.floor([ih][1].PClosing*1.05)
// فیلتر سهم‌هایی که دیروز صف فروش بوده‌اند:
[ih][0].PDrCotVal==Math.ceil([ih][1].PClosing*0.95)
// فیلتر سهم‌هایی که قیمت پایانی امروز بیش‌تر از قیمت دیروز است:
(pc)>(py)
// فیلتر سهم‌هایی که قیمت پایانی امروز کمتر از قیمت دیروز است:
(pc)<(py)
// فیلتر سهم‌هایی که نوسان امروز آن‌ها صفر است:
(pcp)==0
// فیلتر سهم‌هایی که میانگین قیمت 3 روزه آن‌ها از میانگین قیمت 14 روزه بیشتر است:
(([ih][0].PClosing+[ih][1].PClosing+[ih][2].PClosing)/3)>(([ih][0].PClosing+[ih][1].PClosing+[ih][2].PClosing+[ih][3].PClosing+[ih][4].PClosing+[ih][5].PClosing+[ih][6].PClosing+[ih][7].PClosing+[ih][8].PClosing+[ih][9].PClosing+[ih][10].PClosing+[ih][11].PClosing+[ih][12].PClosing+[ih][13].PClosing)/14)
// فیلتر سهم‌هایی که قدرت خریداران حقیقی بیشتر از قدرت فروشندگان حقیقی است:
((ct).Buy_I_Volume/(ct).Buy_CountI)>((ct).Sell_I_Volume/(ct).Sell_CountI)
// فیلتر سهم‌هایی که قدرت فروشندگان حقیقی بیشتر از قدرت خریداران حقیقی است:
((ct).Buy_I_Volume/(ct).Buy_CountI)<((ct).Sell_I_Volume/(ct).Sell_CountI)
// فیلتر سهم‌هایی که قدرت خریداران حقیقی بیش از 5 برابر قدرت فروشندگان حقیقی است:
((ct).Buy_I_Volume/(ct).Buy_CountI)>=5*((ct).Sell_I_Volume/(ct).Sell_CountI)
// فیلتر سهم‌هایی که حجم خرید حقوقی‌ها بیشتر از حجم خرید حقیقی‌ها است:
(ct).Buy_N_Volume>(ct).Buy_I_Volume
// فیلتر سهم‌هایی که حجم خرید حقوقی‌ها بیشتر از فروش‌شان است:
(ct).Buy_N_Volume>(ct).Sell_N_Volume
// فیلتر سهم‌هایی که حجم خرید حقوقی‌ها بیش از نصف حجم کل معاملات است:
(ct).Buy_N_Volume>(tvol)*0.5
// فیلتر سهم‌هایی که حجم خرید حقوقی‌ها بیشتر از میانگین حجم معاملات 3 ماه گذشته است:
(ct).Buy_N_Volume>[is5]
// فیلتر سهم‌هایی که حجم فروش حقوقی‌ها بیشتر از حجم فروش حقیقی‌ها است:
(ct).Sell_N_Volume>(ct).Sell_I_Volume
// فیلتر سهم‌هایی که حجم فروش حقوقی‌ها بیش از 10 برابر میزان خریدشان است:
(ct).Sell_N_Volume>10*(ct).Buy_N_Volume
// فیلتر سهم‌هایی که حجم فروش حقوقی‌ها بیشتر از میانگین حجم معاملات 3 ماه گذشته است:
(ct).Sell_N_Volume>[is5]
// فیلتر سهم‌هایی که حجم خرید حقیقی‌ها بیشتر از میانگین حجم معاملات 3 ماه گذشته است:
(ct).Buy_I_Volume>[is5]
// فیلتر سهم‌هایی که حجم فروش حقیقی‌ها بیشتر از میانگین حجم معاملات 3 ماه گذشته است:
(ct).Sell_I_Volume>[is5]
// فیلتر سهم‌هایی که تعداد خریداران حقیقی بیش از 2 برابر تعداد فروشندگان حقیقی است:
(ct).Buy_CountI>=2*((ct).Sell_CountI)
// فیلتر سهم‌هایی که تعداد فروشندگان حقیقی بیش از 2 برابر تعداد خریداران حقیقی است:
(ct).Sell_CountI>=2*((ct).Buy_CountI)
// فیلتر سهم‌هایی که حجم سفارش‌های خرید بیش از 10 برابر حجم سفارش‌های فروش است:
((qd1)+(qd2)+(qd3))>(10*((qo1)+(qo2)+(qo3)))
// فیلتر سهم‌هایی که حجم سفارش‌های فروش بیش از 10 برابر حجم سفارش‌های خرید است:
((qo1)+(qo2)+(qo3))>(10*((qd1)+(qd2)+(qd3)))
// فیلتر فشار فروش حقیقی و حقوقی:
(qd1)+(qd2)+(qd3)<((qo1)+(qo2)+(qo3))/10
// فیلتر افزایش حجم معاملات بیش از میانگین حجم 3 ماه گذشته:
(tvol)>[is5]
// فیلتر افزایش حجم معاملات بیش از 3 برابر میانگین حجم 3 ماه گذشته:
(tvol)>3*[is5]
// فیلتر افزایش حجم معاملات بیش از 5 برابر میانگین حجم 12 ماه گذشته:
(tvol)>5*[is6]
// فیلتر سهم‌هایی که نوسان بیش از 5% در روز داشته‌اند:
((pmax)-(pmin))/(pmin)>=0.05
// فیلتر سهم‌هایی که درصد تغییر قیمت آخرین معامله آن‌ها بیش از 3 درصد باشد:
(plp)>=3
// فیلتر سهم‌هایی که درصد تغییر قیمت آخرین معامله آن‌ها زیر 3 درصد باشد:
(plp)<=-3
// فیلتر سهم‌هایی که درصد تغییر قیمت پایانی آن‌ها بیش از 3 درصد باشد:
(pcp)>=3
// فیلتر سهم‌هایی که درصد تغییر قیمت پایانی آن‌ها زیر 3 درصد باشد:
(pcp)<=-3
// فیلتر سهم‌هایی که کم‌ترین قیمت امروز آن‌ها بیشتر از قیمت دیروز است:
(py)<(pmin)
// فیلتر سهم‌هایی که بیش‌ترین قیمت امروز آن‌ها کمتر از قیمت دیروز است:
(py)>(pmax)
// فیلتر سهم‌هایی که اولین قیمت امروز آن‌ها بیشتر یا مساوی قیمت دیروز است:
(pf)>=(py)
// فیلتر سهم‌هایی که اولین قیمت امروز آن‌ها کمتر یا مساوی قیمت دیروز است:
(pf)<=(py)
// فیلتر سهم‌هایی که قیمت آخرین معامله بیشتر یا مساوی قیمت پایانی است:
(pl)>=(pc)
// فیلتر سهم‌هایی که قیمت آخرین معامله کمتر یا مساوی قیمت پایانی است:
(pl)<=(pc)
// فیلتر سهم‌هایی که تغییر قیمت آخرین معامله بیش از 1000 ریال است:
(plc)>=1000
// فیلتر سهم‌هایی که تغییر قیمت آخرین معامله کمتر از 50 ریال است:
(plc)<=50
// فیلتر سهم‌هایی که تغییر قیمت پایانی بیش از 1000 ریال است:
(pcc)>=1000
// فیلتر سهم‌هایی که تغییر قیمت پایانی کمتر از 50 ریال است:
(pcc)<=50
// فیلتر سهم‌هایی که حجم معاملات‌شان بیشتر از حجم مبنا است:
(tvol)>(bvol)
// فیلتر نمایش معاملات بلوکی:
(l18)[(l18).length-1]=='2'
// فیلتر نمایش معاملات عمده:
(l18)[(l18).length-1]=='4'
// فیلتر شرکت‌های زیان‌ده:
(eps)<0
// فیلتر نمایش حق تقدم‌ها:
(l18)[(l18).length-1]=='ح'
// فیلتر سهم‌هایی که حجم مبنای آن‌ها 1 است:
(bvol)==1
// فیلتر دیده‌بان بازار فقط گروه خاصی را نمایش دهد (مثال: گروه زراعت – کد گروه‌ها در سایت بورس قابل مشاهده است):
(cs)==01
// فیلتر دیده‌بان بازار فقط سهم‌های پورتفوی شما را نمایش دهد (نماد سهم‌های خود را جایگزین کنید):
(l18).indexOf("شستا")==0
// null
(l18).indexOf("فولاد")==0   ||   (l18).indexOf("شستا")==0
// فیلتر سهم‌هایی که پایین‌ترین درصد قیمت آخرین معامله و پایانی را دارند:
(pd1)==(tmin)&&(pc)==(pl)
// فیلتر سهم‌هایی که بالاترین درصد قیمت آخرین معامله و پایانی را دارند:
(pd1)==(tmax)&&(pc)==(pl)
// فیلتر شرکت‌های کوچکی که خرید سهامداران حقوقی بیش از 30 درصد حجم معاملات است:
(z)*(pc)<=5000000000000&&(ct).Sell_N_Volume<=(ct).Buy_N_Volume&&(ct).Buy_N_Volume>=0.3*(tvol)
// فیلتر سهم‌هایی که قیمت آخرین معامله بالاترین قیمت روز است و صف خرید نیستند:
(pl)==(pmax)&&(pl)!=(tmax)
// فیلتر سهم‌هایی قیمت پایانی امروزشان بیشتر از دیروز، سفارش‌های خرید بیش از 3 برابر سفارش‌های فروش و حجم معاملات بیش از حجم مبنا است:
(pc)>(py)&&(tvol)>=(bvol)&&((qd1)+(qd2)+(qd3))>(3*((qo1)+(qo2)+(qo3)))
// فیلتر سهم‌هایی که سفارش‌های خرید بیش از 100 برابر سفارش‌های فروش است:
((qd1)+(qd2)+(qd3))>(100*((qo1)+(qo2)+(qo3)))
// فیلتر سهم‌هایی که پیش‌بینی می‌شود فردا مثبت باشند:
(tno)>50&&(tvol)>(bvol)&&(bvol)<=7000000&&(plp)>=(pcp)+1.5&&(eps)>0
// فیلتر سهم‌هایی که چندین روز منفی بوده‌اند و در حال برگشت روند از منفی به مثبت هستند:
((pl)<((pf)-((pf)-(pmin))/2)&&(pl)>((pmin)+((pf)-(pmin))/4)&&(plp)<=1&&(tno)>10&&(pf)>(pmin)&&(pf)>(py)) || ((pf)<(py)&&(plp)<1&&(tno)>10&&(pl)>(py)) || ((pl)>1.01*(pf)&&(tno)>10&&(pf)>1.01*(py)&&(pl)!=(tmax)) || ((pl)>1.02*(pf)&&(tno)>10&&(pl)!=(tmax)) || ((pf)<1.01*(pmin)&&(plp)<=1&&(tno)>10&&(pl)>1.02*(pmin))
// فیلتر سهم‌هایی که قیمت آخرین معامله 10 درصد کمتر از قیمت 21 روز پیش است:
[ih][21].PClosing<(pl)-((pl)*0.1)
// فیلتر سهم‌هایی که حداقل 3 روز اخیر صف فروش بوده‌اند:
(py)>(pf)&&(pmin)==(pmax)&&(pmin)==(pl)&&[ih][0].PriceYesterday>[ih][0].PriceFirst&&[ih][0].PriceMin==[ih][0].PriceMax&&[ih][0].PriceMin==[ih][0].PDrCotVal&&[ih][1].PriceYesterday>[ih][1].PriceFirst&&[ih][1].PriceMin==[ih][1].PriceMax&&[ih][1].PriceMin==[ih][1].PDrCotVal
// فیلتر سهم‌هایی که حداقل 3 روز اخیر صف خرید بوده‌اند:
(py)<(pf)&&(pmin)==(pmax)&&(pmin)==(pl)&&[ih][0].PriceYesterday<[ih][0].PriceFirst&&[ih][0].PriceMin==[ih][0].PriceMax&&[ih][0].PriceMin==[ih][0].PDrCotVal&&[ih][1].PriceYesterday<[ih][1].PriceFirst&&[ih][1].PriceMin==[ih][1].PriceMax&&[ih][1].PriceMin==[ih][1].PDrCotVal
// فیلتر سهم‌هایی که حداقل روز قبل صف خرید بوده است:
[ih][0].PDrCotVal==Math.floor([ih][1].PClosing*1.05)
// فیلتر سهم‌هایی که درصد قیمت آخرین معامله بین مثبت 2 تا 4 است:
(plp)<=4&&(plp)>=2
// فیلتر سهم‌هایی که قیمت آخرین معامله بیش از 4 درصد بیشتر از روز قبل است:
(plp)>(([ih][0].PDrCotVal-(pl))/[ih][0].PDrCotVal>.4)
// فیلتر سهم‌هایی که نسبت به 2 ماه قبل، 50 درصد افت داشته‌اند:
(([ih][59].PriceMax-(pl))/[ih][59].PriceMax>.50)
// فیلتر سهم‌هایی که قیمت اولین معامله بزرگتر و یا یا مساوی پایین‌ترین قیمت است:
(pf)>=(pmin)
// فیلتر سهم‌هایی که قیمت اولین معامله کوچکتر و یا مساوی بالاترین قیمت است:
(pf)<=(pmax)
// فیلتر سهم‌هایی که قیمت پایانی دیروز بیشتر از پایین‌ترین قیمت امروز است:
(py)>(pmin)
// فیلتر سهم‌هایی که قیمت پایانی دیروز کمتر از بالاترین قیمت امروز است:
(py)<(pmax)
// فیلتر سهم‌هایی که قیمت اولین معامله بیشتر از قیمت آخرین معامله است:
(pf)>(pl)
// فیلتر سهم‌هایی که قیمت اولین معامله کمتر از قیمت آخرین معامله است:
(pf)<(pl)
// فیلتر سهم‌هایی که قیمت اولین معامله بیشتر از قیمت پایانی است:
(pf)>(pc)
// فیلتر سهم‌هایی که قیمت اولین معامله کمتر از قیمت پایانی است:
(pf)<(pc)
// فیلتر سهم‌هایی که پایین‌ترین قیمت بیشتر از قیمت پایانی است:
(pmin)>(pc)
// فیلتر سهم‌هایی که پایین‌ترین قیمت با قیمت پایانی برابر است:
(pmin)==(pc)
// فیلتر سهم‌هایی که پایین‌ترین قیمت بزرگتر و یا مساوی قیمت پایانی است:
(pmin)>=(pc)
// فیلتر سهم‌هایی که بالاترین قیمت با پایین‌ترین قیمت برابر است:
(pmin)==(pmax)
// فیلتر سهم‌هایی که قیمت آخرین معامله کمتر از بالاترین قیمت است:
(pl)<(pmax)
// فیلتر سهم‌هایی که قیمت پایانی کمتر از بالاترین قیمت است:
(pc)<(pmax)
// فیلتر سهم‌هایی که قیمت پایانی با بالاترین قیمت برابر است:
(pc)==(pmax)
// فیلتر سهم‌هایی که بالاترین قیمت کمتر از قیمت پایانی است:
(pmax)<(pc)
// فیلتر سهم‌هایی که قیمت پایانی دیروز بیشتر از اولین، کم‌ترین و بیش‌ترین قیمت امروز است:
(py)>(pf)&&(py)>(pmin)&&(py)>(pmax)
// فیلتر سهم‌هایی که قیمت پایانی دیروز بیشتر از قیمت آخرین معامله و کمتر از اولین و کم‌ترین قیمت امروز است:
(py)>(pl)&&(py)<(pf)&&(py)<(pmin)
// فیلتر سهم‌هایی که قیمت پایانی دیروز کمتر بالاترین قیمت، قیمت آخرین معامله و قیمت پایانی امروز است:
(py)<(pmax)&&(py)<(pl)&&(py)<(pc)
// فیلتر سهم‌هایی که قیمت اولین معامله بیشتر از کم‌ترین، بیش‌ترین و قیمت آخرین معامله است:
(pf)>(pmin)&&(pf)>(pmax)&&(pf)>(pl)
// فیلتر سهم‌هایی که قیمت اولین معامله بیشتر از قیمت پایانی و کمتر از بالاترین قیمت است:
(pf)>(pc)&&(pf)<(pmax)
// فیلتر سهم‌هایی که قیمت اولین معامله کمتر از قیمت آخرین معامله و قیمت پایانی است:
(pf)<(pl)&&(pf)<(pc)
// فیلتر سهم‌هایی که پایین‌ترین قیمت کمتر از قیمت آخرین معامله و پایانی و بالاترین قیمت بیشتر از قیمت آخرین معامله است:
(pmin)<(pl)&&(pmin)<(pc)&&(pmax)>(pl)
// فیلتر سهم‌هایی که قیمت پایانی امروز بیشتر از قیمت پایانی دیروز است:
(pc)>[ih][0].PClosing
// فیلتر سهم‌هایی که قیمت پایانی امروز با قیمت پایانی برابر است:
(pc)==[ih][0].PClosing
// فیلتر سهم‌هایی که قیمت پایانی امروز بیشتر از قیمت پایانی 2 روز قبل است:
(pc)>[ih][1].PClosing
// فیلتر سهم‌هایی که قیمت پایانی دیروز بیشتر از قیمت پایانی 2 روز قبل است:
[ih][0].PClosing>[ih][1].PClosing
// فیلتر سهم‌هایی که قیمت پایانی امروز کمتر از قیمت پایانی دیروز است:
(pc)<[ih][0].PClosing
// فیلتر سهم‌هایی که قیمت پایانی امروز کمتر از قیمت پایانی 2 روز قبل است:
(pc)<[ih][1].PClosing
// فیلتر سهم‌هایی که قیمت پایانی دیروز کمتر از قیمت پایانی 2 روز قبل است:
[ih][0].PClosing<[ih][1].PClosing
// فیلتر سهم‌هایی که قیمت پایانی امروز بیشتر از قیمت آخرین معامله دیروز است:
(pc)>[ih][0].PDrCotVal
// فیلتر سهم‌هایی که قیمت پایانی امروز با قیمت آخرین معامله دیروز برابر است:
(pc)==[ih][0].PDrCotVal
// فیلتر سهم‌هایی که قیمت پایانی امروز بیشتر از قیمت آخرین معامله 2 روز قبل است:
(pc)>[ih][1].PDrCotVal
// فیلتر سهم‌هایی که قیمت پایانی دیروز بیشتر از قیمت آخرین معامله 2 روز قبل است:
[ih][0].PClosing>[ih][1].PDrCotVal
// فیلتر سهم‌هایی که قیمت پایانی امروز کمتر از قیمت آخرین معامله 2 روز قبل است:
(pc)<[ih][1].PDrCotVal
// فیلتر سهم‌هایی که قیمت پایانی دیروز کمتر از قیمت آخرین معامله 2 روز قبل است:
[ih][0].PClosing<[ih][1].PDrCotVal
// فیلتر سهم‌هایی که حجم معاملات امروز بیشتر از حجم معاملات دیروز است:
(tvol)>[ih][0].QTotTran5J
// فیلتر سهم‌هایی که حجم معاملات امروز بیشتر از حجم معاملات 2 روز قبل است:
(tvol)>[ih][1].QTotTran5J
// فیلتر سهم‌هایی که حجم معاملات دیروز بیشتر از حجم معاملات 2 روز قبل است:
[ih][0].QTotTran5J>[ih][1].QTotTran5J
// فیلتر سهم‌هایی که حجم معاملات امروز کمتر از حجم معاملات 2 روز قبل است:
(tvol)<[ih][1].QTotTran5J
// فیلتر سهم‌هایی که حجم معاملات دیروز کمتر از حجم معاملات 2 روز قبل است:
[ih][0].QTotTran5J<[ih][1].QTotTran5J
// فیلتر سهم‌هایی که تعداد معاملات دیروز بیشتر از 1000 است:
[ih][0].ZTotTran>1000
// فیلتر سهم‌هایی که تعداد معاملات امروز بیشتر از دیروز است:
(tno)>[ih][0].ZTotTran
// فیلتر سهم‌هایی که تعداد معاملات امروز بیشتر از 2 روز قبل است:
(tno)>[ih][1].ZTotTran
// فیلتر سهم‌هایی که تعداد معاملات دیروز بیشتر از 2 روز قبل است:
[ih][0].ZTotTran>[ih][1].ZTotTran
// فیلتر سهم‌هایی که تعداد معاملات دیروز کمتر از 100 است:
[ih][0].ZTotTran<100
// فیلتر سهم‌هایی که تعداد معاملات امروز کمتر از 2 روز قبل است:
(tno)<[ih][1].ZTotTran
// فیلتر سهم‌هایی که تعداد معاملات دیروز کمتر از 2 روز قبل است:
[ih][0].ZTotTran<[ih][1].ZTotTran
// فیلتر سهم‌هایی که ارزش معاملات امروز بیشتر از دیروز است:
(tval)>[ih][0].QTotCap
// فیلتر سهم‌هایی که ارزش معاملات دیروز بیشتر از 2 روز قبل است:
[ih][0].QTotCap>[ih][1].QTotCap
// فیلتر سهم‌هایی که ارزش معاملات امروز کمتر از دیروز است:
(tval)<[ih][0].QTotCap
// فیلتر سهم‌هایی که ارزش معاملات دیروز کمتر از 2 روز قبل است:
[ih][0].QTotCap<[ih][1].QTotCap
// فیلتر سهم‌هایی که پایین‌ترین قیمت امروز بیشتر از پایین‌ترین قیمت دیروز است:
(pmin)>[ih][0].PriceMin
// فیلتر سهم‌هایی که پایین‌ترین قیمت امروز با پایین‌ترین قیمت دیروز برابر است:
(pmin)==[ih][0].PriceMin
// فیلتر سهم‌هایی که پایین‌ترین قیمت دیروز بیشتر از پایین‌ترین قیمت 2 روز قبل است:
[ih][0].PriceMin>[ih][1].PriceMin
// فیلتر سهم‌هایی که پایین‌ترین قیمت امروز کمتر از پایین‌ترین قیمت دیروز است:
(pmin)<[ih][0].PriceMin
// فیلتر سهم‌هایی که پایین‌ترین قیمت دیروز کمتر از پایین‌ترین قیمت 2 روز قبل است:
[ih][0].PriceMin<[ih][1].PriceMin
// فیلتر سهم‌هایی که بالاترین قیمت امروز بیشتر از بالاترین قیمت دیروز است:
(pmax)>[ih][0].PriceMax
// فیلتر سهم‌هایی که بالاترین قیمت امروز با بالاترین قیمت دیروز برابر است:
(pmax)==[ih][0].PriceMax
// فیلتر سهم‌هایی که بالاترین قیمت دیروز بیشتر از بالاترین قیمت 2 روز قبل است:
[ih][0].PriceMax>[ih][1].PriceMax
// فیلتر سهم‌هایی که بالاترین قیمت امروز کمتر از بالاترین قیمت دیروز است:
(pmax)<[ih][0].PriceMax
// فیلتر سهم‌هایی که بالاترین قیمت دیروز کمتر از بالاترین قیمت 2 روز قبل است:
[ih][0].PriceMax<[ih][1].PriceMax
// فیلتر سهم‌هایی که قیمت آخرین معامله امروز بیشتر از قیمت آخرین معامله دیروز است:
(pl)>[ih][0].PDrCotVal
// فیلتر سهم‌هایی که قیمت آخرین معامله امروز با قیمت آخرین معامله دیروز برابر است:
(pl)==[ih][0].PDrCotVal
// فیلتر سهم‌هایی که قیمت آخرین معامله دیروز بیشتر از قیمت آخرین معامله 2 روز قبل است:
[ih][0].PDrCotVal>[ih][1].PDrCotVal
// فیلتر سهم‌هایی که قیمت آخرین معامله امروز کمتر از قیمت آخرین معامله دیروز است:
(pl)<[ih][0].PDrCotVal
// فیلتر سهم‌هایی که قیمت آخرین معامله دیروز کمتر از قیمت آخرین معامله 2 روز قبل است:
[ih][0].PDrCotVal<[ih][1].PDrCotVal
// فیلتر سهم‌هایی که قیمت اولین معامله امروز بیشتر از قیمت اولین معامله دیروز است:
(pf)>[ih][0].PriceFirst
// فیلتر سهم‌هایی که قیمت اولین معامله امروز با قیمت اولین معامله دیروز برابر است:
(pf)==[ih][0].PriceFirst
// فیلتر سهم‌هایی که قیمت اولین معامله دیروز بیشتر از قیمت اولین معامله 2 روز قبل است:
[ih][0].PriceFirst>[ih][1].PriceFirst
// فیلتر سهم‌هایی که قیمت اولین معامله امروز کمتر از قیمت اولین معامله دیروز است:
(pf)<[ih][0].PriceFirst
// فیلتر سهم‌هایی که قیمت اولین معامله دیروز کمتر از قیمت اولین معامله 2 روز قبل است:
[ih][0].PriceFirst<[ih][1].PriceFirst
// فیلتر افزایش ارزش معاملات بیش از میانگین 3 ماه گذشته:
(tval)>[is1]
// فیلتر افزایش ارزش معاملات بیش از میانگین 12 ماه گذشته:
(tval)>[is2]
// فیلتر کاهش ارزش معاملات زیر میانگین 3 ماه گذشته:
(tval)<[is1]
// فیلتر کاهش ارزش معاملات زیر میانگین 12 ماه گذشته:
(tval)<[is2]
// فیلتر سهم‌هایی که میانگین ارزش معاملا‌ت 3 ماه گذشته بیش از 5 میلیارد تومان است:
[is1]>50000000000
// فیلتر سهم‌هایی که میانگین ارزش معاملا‌ت 12 ماه گذشته بیش از 5 میلیارد تومان است:
[is2]>50000000000
// فیلتر سهم‌هایی که میانگین ارزش معاملا‌ت 3 ماه گذشته زیر 5 میلیارد تومان است:
[is1]<50000000000
// فیلتر سهم‌هایی که میانگین ارزش معاملا‌ت 12 ماه گذشته زیر 5 میلیارد تومان است:
[is2]<50000000000
// فیلتر افزایش حجم معاملات بیش از میانگین 12 ماه گذشته:
(tvol)>[is6]
// فیلتر افزایش حجم معاملات بیش از 2 برابر میانگین 12 ماه گذشته:
(tvol)>2*[is6]
// فیلتر سهم‌هایی که میانگین حجم معاملات 3 ماه گذشته بیش از 5 میلیون است:
[is5]>50000000
// فیلتر سهم‌هایی که میانگین حجم معاملات 12 ماه گذشته بیش از 5 میلیون است:
[is6]>50000000
// فیلتر سهم‌هایی که میانگین حجم معاملات 3 ماه گذشته زیر 200 هزار است:
[is5]<200000
// فیلتر سهم‌هایی که میانگین حجم معاملات 12 ماه گذشته زیر 200 هزار است:
[is6]<200000
// فیلتر افزایش تعداد معاملات بیش از میانگین 3 ماه گذشته:
(tno)>[is9]
// فیلتر افزایش تعداد معاملات بیش از میانگین 12 ماه گذشته:
(tno)>[is10]
// فیلتر کاهش تعداد معاملات زیر میانگین 3 ماه گذشته:
(tno)<[is9]
// فیلتر کاهش تعداد معاملات زیر میانگین 12 ماه گذشته:
(tno)<[is10]
// فیلتر سهم‌هایی که میانگین تعداد معاملات 3 ماه گذشته بیش از 5000 باشد:
[is9]>5000
// فیلتر سهم‌هایی که میانگین تعداد معاملات 12 ماه گذشته بیش از 2000 باشد:
[is10]>2000
// فیلتر سهم‌هایی که میانگین تعداد معاملات 3 ماه گذشته زیر 1000 باشد:
[is9]<1000
// فیلتر سهم‌هایی که میانگین تعداد معاملات 12 ماه گذشته زیر 3000 باشد:
[is10]<3000
// فیلتر سهم‌هایی که در 3 ماه گذشته بیش از 30 روز منفی داشته‌اند:
[is18]>30
// فیلتر سهم‌هایی که در 3 ماه گذشته زیر 20 روز منفی داشته‌اند:
[is18]<20
// فیلتر سهم‌هایی که در 12 ماه گذشته بیش از 100 روز منفی داشته‌اند:
[is19]>100
// فیلتر سهم‌هایی که در 12 ماه گذشته زیر 80 روز منفی داشته‌اند:
[is19]<80
// فیلتر سهم‌هایی که در روزهای منفی 3 ماه گذشته بیش از 50 درصد منفی داشته‌اند:
[is20]>50
// فیلتر سهم‌هایی که در روزهای منفی 3 ماه گذشته زیر 30 درصد منفی داشته‌اند:
[is20]<30
// فیلتر سهم‌هایی که در روزهای منفی 12 ماه گذشته بیش از 40 درصد منفی داشته‌اند:
[is21]>40
// فیلتر سهم‌هایی که در روزهای منفی 12 ماه گذشته زیر 35 درصد منفی داشته‌اند:
[is21]<35
// فیلتر سهم‌هایی که در 3 ماه گذشته بیش از 30 روز مثبت داشته‌اند:
[is26]>30
// فیلتر سهم‌هایی که در 3 ماه گذشته زیر 25 روز مثبت داشته‌اند:
[is26]<25
// فیلتر سهم‌هایی که در 12 ماه گذشته بیش از 100 روز مثبت داشته‌اند:
[is27]>100
// فیلتر سهم‌هایی که در 12 ماه گذشته زیر 80 روز مثبت داشته‌اند:
[is27]<80
// فیلتر سهم‌هایی که در روزهای مثبت 3 ماه گذشته بیش از 50 درصد مثبت داشته‌اند:
[is28]>50
// فیلتر سهم‌هایی که در روزهای مثبت 3 ماه گذشته زیر 30 درصد مثبت داشته‌اند:
[is28]<30
// فیلتر سهم‌هایی که در روزهای مثبت 12 ماه گذشته بیش از 55 درصد مثبت داشته‌اند:
[is29]>55
// فیلتر سهم‌هایی که در روزهای مثبت 12 ماه گذشته زیر 50 درصد مثبت داشته‌اند:
[is29]<50
// فیلتر سهم‌هایی که در 3 ماه گذشته میانگین حجم خرید حقیقی‌ها بیش از 10 میلیون است:
[is50]>10000000
// فیلتر سهم‌هایی که در 3 ماه گذشته میانگین حجم خرید حقیقی‌ها زیر 1 میلیون است:
[is50]<1000000
// فیلتر سهم‌هایی که در 12 ماه گذشته میانگین حجم خرید حقیقی‌ها بیش از 10 میلیون است:
[is51]>10000000
// فیلتر سهم‌هایی که در 12 ماه گذشته میانگین حجم خرید حقیقی‌ها زیر 1 میلیون است:
[is51]<1000000
// فیلتر سهم‌هایی که در 3 ماه گذشته میانگین حجم خرید حقوقی‌ها بیش از 8 میلیون است:
[is54]>8000000
// فیلتر سهم‌هایی که در 3 ماه گذشته میانگین حجم خرید حقوقی‌ها زیر 100 هزار است:
[is54]<100000
// فیلتر سهم‌هایی که در 12 ماه گذشته میانگین حجم خرید حقوقی‌ها بیش از 8 میلیون است:
[is55]>8000000
// فیلتر سهم‌هایی که در 12 ماه گذشته میانگین حجم خرید حقوقی‌ها زیر 100 هزار است:
[is55]<100000
// فیلتر سهم‌هایی که در 3 ماه گذشته میانگین تعداد خریداران حقیقی بیش از 2000 است:
[is58]>2000
// فیلتر سهم‌هایی که در 3 ماه گذشته میانگین تعداد خریداران حقیقی زیر 300 است:
[is58]<300
// فیلتر سهم‌هایی که در 12 ماه گذشته میانگین تعداد خریداران حقیقی بیش از 1000 است:
[is59]>1000
// فیلتر سهم‌هایی که در 12 ماه گذشته میانگین تعداد خریداران حقیقی زیر 200 است:
[is59]<200
// فیلتر سهم‌هایی که در 3 ماه گذشته میانگین تعداد خریداران حقوقی بیش از 10 است:
[is62]>10
// فیلتر سهم‌هایی که در 3 ماه گذشته میانگین تعداد خریداران حقوقی زیر 1 است:
[is62]<1
// فیلتر سهم‌هایی که در 12 ماه گذشته میانگین تعداد خریداران حقوقی بیش از 8 است:
[is63]>8
// فیلتر سهم‌هایی که در 12 ماه گذشته میانگین تعداد خریداران حقوقی زیر 1 است:
[is63]<1
// فیلتر سهم‌هایی که در 3 ماه گذشته میانگین تعداد خریداران بیش از 1000 است:
[is66]>1000
// فیلتر سهم‌هایی که در 3 ماه گذشته میانگین تعداد خریداران زیر 250 است:
[is66]<250
// فیلتر سهم‌هایی که در 12 ماه گذشته میانگین تعداد خریداران بیش از 1000 است:
[is67]>1000
// فیلتر سهم‌هایی که در 12 ماه گذشته میانگین تعداد خریداران زیر 200 است:
[is67]<200
// فیلتر سهم‌هایی که در 3 ماه گذشته میانگین حجم فروش حقیقی‌ها بیش از 10 میلیون است:
[is70]>10000000
// فیلتر سهم‌هایی که در 3 ماه گذشته میانگین حجم فروش حقیقی‌ها زیر 1 میلیون است:
[is70]<1000000
// فیلتر سهم‌هایی که در 12 ماه گذشته میانگین حجم فروش حقیقی‌ها بیش از 10 میلیون است:
[is71]>10000000
// فیلتر سهم‌هایی که در 12 ماه گذشته میانگین حجم فروش حقیقی‌ها زیر 1 میلیون است:
[is71]<1000000
// فیلتر سهم‌هایی که در 3 ماه گذشته میانگین حجم فروش حقوقی‌ها بیش از 8 میلیون است:
[is74]>8000000
// فیلتر سهم‌هایی که در 3 ماه گذشته میانگین حجم فروش حقوقی‌ها زیر 100 هزار است:
[is74]<100000
// فیلتر سهم‌هایی که در 12 ماه گذشته میانگین حجم فروش حقوقی‌ها بیش از 8 میلیون است:
[is75]>8000000
// فیلتر سهم‌هایی که در 12 ماه گذشته میانگین حجم فروش حقوقی‌ها زیر 100 هزار است:
[is75]<100000
// فیلتر سهم‌هایی که در 3 ماه گذشته میانگین تعداد فروشندگان حقیقی بیش از 2000 است:
[is78]>2000
// فیلتر سهم‌هایی که در 3 ماه گذشته میانگین تعداد فروشندگان حقیقی زیر 300 است:
[is78]<300
// فیلتر سهم‌هایی که در 12 ماه گذشته میانگین تعداد فروشندگان حقیقی بیش از 1000 است:
[is79]>1000
// فیلتر سهم‌هایی که در 12 ماه گذشته میانگین تعداد فروشندگان حقیقی زیر 200 است:
[is79]<200
// فیلتر سهم‌هایی که در 3 ماه گذشته میانگین تعداد فروشندگان حقوقی بیش از 10 است:
[is82]>10
// فیلتر سهم‌هایی که در 3 ماه گذشته میانگین تعداد فروشندگان حقوقی زیر 1 است:
[is82]<1
// فیلتر سهم‌هایی که در 12 ماه گذشته میانگین تعداد فروشندگان حقوقی بیش از 8 است:
[is83]>8
// فیلتر سهم‌هایی که در 12 ماه گذشته میانگین تعداد فروشندگان حقوقی زیر 1 است:
[is83]<1
// فیلتر سهم‌هایی که در 3 ماه گذشته میانگین تعداد فروشندگان بیش از 1000 است:
[is86]>1000
// فیلتر سهم‌هایی که در 3 ماه گذشته میانگین تعداد فروشندگان زیر 250 است:
[is86]<250
// فیلتر سهم‌هایی که در 12 ماه گذشته میانگین تعداد فروشندگان بیش از 1000 است:
[is87]>1000
// فیلتر سهم‌هایی که در 12 ماه گذشته میانگین تعداد فروشندگان زیر 200 است:
[is87]<200
// فیلتر کاهش حجم معاملات زیر میانگین حجم 3 ماه گذشته:
(tvol)<[is5]
// فیلتر کاهش حجم معاملات زیر میانگین حجم 12 ماه گذشته:
(tvol)<[is6]
// فیلتر سهم‌هایی که حجم خرید حقیقی‌ها بیشتر از میانگین حجم معاملات 12 ماه گذشته است:
(ct).Buy_I_Volume>[is6]
// فیلتر سهم‌هایی که حجم خرید حقوقی‌ها بیشتر از میانگین حجم معاملات 12 ماه گذشته است:
(ct).Buy_N_Volume>[is6]
// فیلتر سهم‌هایی که حجم فروش حقیقی‌ها بیشتر از میانگین حجم معاملات 12 ماه گذشته است:
(ct).Sell_I_Volume>[is6]
// فیلتر سهم‌هایی که حجم فروش حقوقی‌ها بیشتر از میانگین حجم معاملات 12 ماه گذشته است:
(ct).Sell_N_Volume>[is6]
// فیلتر سهم‌هایی که حجم خرید حقیقی‌ها کمتر از میانگین حجم معاملات 3 ماه گذشته است:
(ct).Buy_I_Volume<[is5]
// فیلتر سهم‌هایی که حجم خرید حقوقی‌ها کمتر از میانگین حجم معاملات 3 ماه گذشته است:
(ct).Buy_N_Volume<[is5]
// فیلتر سهم‌هایی که حجم فروش حقیقی‌ها کمتر از میانگین حجم معاملات 3 ماه گذشته است:
(ct).Sell_I_Volume<[is5]
// فیلتر سهم‌هایی که حجم فروش حقوقی‌ها کمتر از میانگین حجم معاملات 3 ماه گذشته است:
(ct).Sell_N_Volume<[is5]
// فیلتر سهم‌هایی که حجم خرید حقیقی‌ها کمتر از میانگین حجم معاملات 12 ماه گذشته است:
(ct).Buy_I_Volume<[is6]
// فیلتر سهم‌هایی که حجم خرید حقوقی‌ها کمتر از میانگین حجم معاملات 12 ماه گذشته است:
(ct).Buy_N_Volume<[is6]
// فیلتر سهم‌هایی که حجم فروش حقیقی‌ها کمتر از میانگین حجم معاملات 12 ماه گذشته است:
(ct).Sell_I_Volume<[is6]
// فیلتر سهم‌هایی که حجم فروش حقوقی‌ها کمتر از میانگین حجم معاملات 12 ماه گذشته است:
(ct).Sell_N_Volume<[is6]
// فیلتر سهم‌هایی که حجم خرید امروز حقیقی‌ها بیشتر از میانگین حجم خرید حقیقی‌ها در 3 ماه گذشته است:
(ct).Buy_I_Volume>[is50]
// فیلتر سهم‌هایی که حجم خرید امروز حقیقی‌ها کمتر از میانگین حجم خرید حقیقی‌ها در 3 ماه گذشته است:
(ct).Buy_I_Volume<[is50]
// فیلتر سهم‌هایی که حجم خرید امروز حقیقی‌ها بیشتر از میانگین حجم خرید حقیقی‌ها در 12 ماه گذشته است:
(ct).Buy_I_Volume>[is51]
// فیلتر سهم‌هایی که حجم خرید امروز حقیقی‌ها کمتر از میانگین حجم خرید حقیقی‌ها در 12 ماه گذشته است:
(ct).Buy_I_Volume<[is51]
// فیلتر سهم‌هایی که حجم خرید امروز حقیقی‌ها بیشتر از میانگین حجم فروش حقیقی‌ها در 3 ماه گذشته است:
(ct).Buy_I_Volume>[is70]
// فیلتر سهم‌هایی که حجم خرید امروز حقیقی‌ها کمتر از میانگین حجم فروش حقیقی‌ها در 3 ماه گذشته است:
(ct).Buy_I_Volume<[is70]
// فیلتر سهم‌هایی که حجم خرید امروز حقیقی‌ها بیشتر از میانگین حجم فروش حقیقی‌ها در 12 ماه گذشته است:
(ct).Buy_I_Volume>[is71]
// فیلتر سهم‌هایی که حجم خرید امروز حقیقی‌ها کمتر از میانگین حجم فروش حقیقی‌ها در 12 ماه گذشته است:
(ct).Buy_I_Volume<[is71]
// فیلتر سهم‌هایی که حجم فروش امروز حقیقی‌ها بیشتر از میانگین حجم فروش حقیقی‌ها در 3 ماه گذشته است:
(ct).Sell_I_Volume>[is70]
// فیلتر سهم‌هایی که حجم فروش امروز حقیقی‌ها کمتر از میانگین حجم فروش حقیقی‌ها در 3 ماه گذشته است:
(ct).Sell_I_Volume<[is70]
// فیلتر سهم‌هایی که حجم فروش امروز حقیقی‌ها بیشتر از میانگین حجم فروش حقیقی‌ها در 12 ماه گذشته است:
(ct).Sell_I_Volume>[is71]
// فیلتر سهم‌هایی که حجم فروش امروز حقیقی‌ها کمتر از میانگین حجم فروش حقیقی‌ها در 12 ماه گذشته است:
(ct).Sell_I_Volume<[is71]
// فیلتر سهم‌هایی که میانگین حجم خرید حقیقی‌ها در 3 ماه گذشته بیشتر از میانگین حجم فروش حقیقی‌ها در 3 ماه گذشته است:
[is50]>[is70]
// فیلتر سهم‌هایی که میانگین حجم خرید حقیقی‌ها در 3 ماه گذشته کمتر از میانگین حجم فروش حقیقی‌ها در 3 ماه گذشته است:
[is50]<[is70]
// فیلتر سهم‌هایی که میانگین حجم خرید حقیقی‌ها در 12 ماه گذشته بیشتر از میانگین حجم فروش حقیقی‌ها در 12 ماه گذشته است:
[is51]>[is71]
// فیلتر سهم‌هایی که میانگین حجم خرید حقیقی‌ها در 12 ماه گذشته کمتر از میانگین حجم فروش حقیقی‌ها در 12 ماه گذشته است:
[is51]<[is71]
// فیلتر سهم‌هایی که میانگین حجم خرید حقیقی‌ها در 3 ماه گذشته بیشتر از میانگین حجم خرید حقیقی‌ها در 12 ماه گذشته است:
[is50]>[is51]
// فیلتر سهم‌هایی که میانگین حجم خرید حقیقی‌ها در 3 ماه گذشته کمتر از میانگین حجم خرید حقیقی‌ها در 12 ماه گذشته است:
[is50]<[is51]
// فیلتر سهم‌هایی که میانگین حجم خرید حقیقی‌ها در 3 ماه گذشته بیشتر از میانگین حجم فروش حقیقی‌ها در 12 ماه گذشته است:
[is50]>[is71]
// فیلتر سهم‌هایی که میانگین حجم خرید حقیقی‌ها در 3 ماه گذشته کمتر از میانگین حجم فروش حقیقی‌ها در 12 ماه گذشته است:
[is50]<[is71]
// فیلتر سهم‌هایی که میانگین حجم فروش حقیقی‌ها در 3 ماه گذشته بیشتر از میانگین حجم فروش حقیقی‌ها در 12 ماه گذشته است:
[is70]>[is71]
// فیلتر سهم‌هایی که میانگین حجم فروش حقیقی‌ها در 3 ماه گذشته کمتر از میانگین حجم فروش حقیقی‌ها در 12 ماه گذشته است:
[is70]<[is71]
// فیلتر سهم‌هایی که حجم خرید امروز حقوقی‌ها بیشتر از میانگین حجم خرید حقوقی‌ها در 3 ماه گذشته است:
(ct).Buy_N_Volume>[is54]
// فیلتر سهم‌هایی که حجم خرید امروز حقوقی‌ها کمتر از میانگین حجم خرید حقوقی‌ها در 3 ماه گذشته است:
(ct).Buy_N_Volume<[is54]
// فیلتر سهم‌هایی که حجم خرید امروز حقوقی‌ها بیشتر از میانگین حجم خرید حقوقی‌ها در 12 ماه گذشته است:
(ct).Buy_N_Volume>[is55]
// فیلتر سهم‌هایی که حجم خرید امروز حقوقی‌ها کمتر از میانگین حجم خرید حقوقی‌ها در 12 ماه گذشته است:
(ct).Buy_N_Volume<[is55]
// فیلتر سهم‌هایی که حجم خرید امروز حقوقی‌ها بیشتر از میانگین حجم فروش حقوقی‌ها در 3 ماه گذشته است:
(ct).Buy_N_Volume>[is74]
// فیلتر سهم‌هایی که حجم خرید امروز حقوقی‌ها کمتر از میانگین حجم فروش حقوقی‌ها در 3 ماه گذشته است:
(ct).Buy_N_Volume<[is74]
// فیلتر سهم‌هایی که حجم خرید امروز حقوقی‌ها بیشتر از میانگین حجم فروش حقوقی‌ها در 12 ماه گذشته است:
(ct).Buy_N_Volume>[is75]
// فیلتر سهم‌هایی که حجم خرید امروز حقوقی‌ها کمتر از میانگین حجم فروش حقوقی‌ها در 12 ماه گذشته است:
(ct).Buy_N_Volume<[is75]
// فیلتر سهم‌هایی که حجم فروش امروز حقوقی‌ها بیشتر از میانگین حجم فروش حقوقی‌ها در 3 ماه گذشته است:
(ct).Sell_N_Volume>[is74]
// فیلتر سهم‌هایی که حجم فروش امروز حقوقی‌ها کمتر از میانگین حجم فروش حقوقی‌ها در 3 ماه گذشته است:
(ct).Sell_N_Volume<[is74]
// فیلتر سهم‌هایی که حجم فروش امروز حقوقی‌ها بیشتر از میانگین حجم فروش حقوقی‌ها در 12 ماه گذشته است:
(ct).Sell_N_Volume>[is75]
// فیلتر سهم‌هایی که حجم فروش امروز حقوقی‌ها کمتر از میانگین حجم فروش حقوقی‌ها در 12 ماه گذشته است:
(ct).Sell_N_Volume<[is75]
// فیلتر سهم‌هایی که میانگین حجم خرید حقوقی‌ها در 3 ماه گذشته بیشتر از میانگین حجم فروش حقوقی‌ها در 3 ماه گذشته است:
[is54]>[is74]
// فیلتر سهم‌هایی که میانگین حجم خرید حقوقی‌ها در 3 ماه گذشته کمتر از میانگین حجم فروش حقوقی‌ها در 3 ماه گذشته است:
[is54]<[is74]
// فیلتر سهم‌هایی که میانگین حجم خرید حقوقی‌ها در 12 ماه گذشته بیشتر از میانگین حجم فروش حقوقی‌ها در 12 ماه گذشته است:
[is55]>[is75]
// فیلتر سهم‌هایی که میانگین حجم خرید حقوقی‌ها در 12 ماه گذشته کمتر از میانگین حجم فروش حقوقی‌ها در 12 ماه گذشته است:
[is55]<[is75]
// فیلتر سهم‌هایی که میانگین حجم خرید حقوقی‌ها در 3 ماه گذشته بیشتر از میانگین حجم خرید حقوقی‌ها در 12 ماه گذشته است:
[is54]>[is55]
// فیلتر سهم‌هایی که میانگین حجم خرید حقوقی‌ها در 3 ماه گذشته کمتر از میانگین حجم خرید حقوقی‌ها در 12 ماه گذشته است:
[is54]<[is55]
// فیلتر سهم‌هایی که میانگین حجم خرید حقوقی‌ها در 3 ماه گذشته بیشتر از میانگین حجم فروش حقوقی‌ها در 12 ماه گذشته است:
[is54]>[is75]
// فیلتر سهم‌هایی که میانگین حجم خرید حقوقی‌ها در 3 ماه گذشته کمتر از میانگین حجم فروش حقوقی‌ها در 12 ماه گذشته است:
[is54]<[is75]
// فیلتر سهم‌هایی که میانگین حجم فروش حقوقی‌ها در 3 ماه گذشته بیشتر از میانگین حجم فروش حقوقی‌ها در 12 ماه گذشته است:
[is74]>[is75]
// فیلتر سهم‌هایی که میانگین حجم فروش حقوقی‌ها در 3 ماه گذشته کمتر از میانگین حجم فروش حقوقی‌ها در 12 ماه گذشته است:
[is74]<[is75]
// فیلتر سهم‌هایی که حجم خرید امروز حقیقی‌ها بیشتر از میانگین حجم خرید حقوقی‌ها در 3 ماه گذشته است:
(ct).Buy_I_Volume>[is54]
// فیلتر سهم‌هایی که حجم خرید امروز حقیقی‌ها کمتر از میانگین حجم خرید حقوقی‌ها در 3 ماه گذشته است:
(ct).Buy_I_Volume<[is54]
// فیلتر سهم‌هایی که حجم خرید امروز حقیقی‌ها بیشتر از میانگین حجم خرید حقوقی‌ها در 12 ماه گذشته است:
(ct).Buy_I_Volume>[is55]
// فیلتر سهم‌هایی که حجم خرید امروز حقیقی‌ها کمتر از میانگین حجم خرید حقوقی‌ها در 12 ماه گذشته است:
(ct).Buy_I_Volume<[is55]
// فیلتر سهم‌هایی که حجم خرید امروز حقیقی‌ها بیشتر از میانگین حجم فروش حقوقی‌ها در 3 ماه گذشته است:
(ct).Buy_I_Volume>[is74]
// فیلتر سهم‌هایی که حجم خرید امروز حقیقی‌ها کمتر از میانگین حجم فروش حقوقی‌ها در 3 ماه گذشته است:
(ct).Buy_I_Volume<[is74]
// فیلتر سهم‌هایی که حجم خرید امروز حقیقی‌ها بیشتر از میانگین حجم فروش حقوقی‌ها در 12 ماه گذشته است:
(ct).Buy_I_Volume>[is75]
// فیلتر سهم‌هایی که حجم خرید امروز حقیقی‌ها کمتر از میانگین حجم فروش حقوقی‌ها در 12 ماه گذشته است:
(ct).Buy_I_Volume<[is75]
// فیلتر سهم‌هایی که حجم فروش امروز حقیقی‌ها بیشتر از میانگین حجم فروش حقوقی‌ها در 3 ماه گذشته است:
(ct).Sell_I_Volume>[is74]
// فیلتر سهم‌هایی که حجم فروش امروز حقیقی‌ها کمتر از میانگین حجم فروش حقوقی‌ها در 3 ماه گذشته است:
(ct).Sell_I_Volume<[is74]
// فیلتر سهم‌هایی که حجم فروش امروز حقیقی‌ها بیشتر از میانگین حجم فروش حقوقی‌ها در 12 ماه گذشته است:
(ct).Sell_I_Volume>[is75]
// فیلتر سهم‌هایی که حجم فروش امروز حقیقی‌ها کمتر از میانگین حجم فروش حقوقی‌ها در 12 ماه گذشته است:
(ct).Sell_I_Volume<[is75]
// فیلتر سهم‌هایی که میانگین حجم خرید حقیقی‌ها در 3 ماه گذشته بیشتر از میانگین حجم فروش حقوقی‌ها در 3 ماه گذشته است:
[is50]>[is74]
// فیلتر سهم‌هایی که میانگین حجم خرید حقیقی‌ها در 3 ماه گذشته کمتر از میانگین حجم فروش حقوقی‌ها در 3 ماه گذشته است:
[is50]<[is74]
// فیلتر سهم‌هایی که میانگین حجم خرید حقیقی‌ها در 3 ماه گذشته بیشتر از میانگین حجم فروش حقوقی‌ها در 12 ماه گذشته است:
[is50]>[is75]
// فیلتر سهم‌هایی که میانگین حجم خرید حقیقی‌ها در 3 ماه گذشته کمتر از میانگین حجم فروش حقوقی‌ها در 12 ماه گذشته است:
[is50]<[is75]
// فیلتر سهم‌هایی که میانگین حجم خرید حقیقی‌ها در 12 ماه گذشته بیشتر از میانگین حجم فروش حقوقی‌ها در 12 ماه گذشته است:
[is51]>[is75]
// فیلتر سهم‌هایی که میانگین حجم خرید حقیقی‌ها در 12 ماه گذشته کمتر از میانگین حجم فروش حقوقی‌ها در 12 ماه گذشته است:
[is51]<[is75]
// فیلتر سهم‌هایی که میانگین حجم خرید حقیقی‌ها در 3 ماه گذشته بیشتر از میانگین حجم خرید حقوقی‌ها در 3 ماه گذشته است:
[is50]>[is54]
// فیلتر سهم‌هایی که میانگین حجم خرید حقیقی‌ها در 3 ماه گذشته کمتر از میانگین حجم خرید حقوقی‌ها در 3 ماه گذشته است:
[is50]<[is54]
// فیلتر سهم‌هایی که میانگین حجم خرید حقیقی‌ها در 3 ماه گذشته بیشتر از میانگین حجم خرید حقوقی‌ها در 12 ماه گذشته است:
[is50]>[is55]
// فیلتر سهم‌هایی که میانگین حجم خرید حقیقی‌ها در 3 ماه گذشته کمتر از میانگین حجم خرید حقوقی‌ها در 12 ماه گذشته است:
[is50]<[is55]
// فیلتر سهم‌هایی که میانگین حجم خرید حقیقی‌ها در 12 ماه گذشته بیشتر از میانگین حجم خرید حقوقی‌ها در 12 ماه گذشته است:
[is51]>[is55]
// فیلتر سهم‌هایی که میانگین حجم خرید حقیقی‌ها در 12 ماه گذشته کمتر از میانگین حجم خرید حقوقی‌ها در 12 ماه گذشته است:
[is51]<[is55]
// فیلتر سهم‌هایی که میانگین حجم فروش حقیقی‌ها در 3 ماه گذشته بیشتر از میانگین حجم فروش حقوقی‌ها در 3 ماه گذشته است:
[is70]>[is74]
// فیلتر سهم‌هایی که میانگین حجم فروش حقیقی‌ها در 3 ماه گذشته کمتر از میانگین حجم فروش حقوقی‌ها در 3 ماه گذشته است:
[is70]<[is74]
// فیلتر سهم‌هایی که میانگین حجم فروش حقیقی‌ها در 3 ماه گذشته بیشتر از میانگین حجم فروش حقوقی‌ها در 12 ماه گذشته است:
[is70]>[is75]
// فیلتر سهم‌هایی که میانگین حجم فروش حقیقی‌ها در 3 ماه گذشته کمتر از میانگین حجم فروش حقوقی‌ها در 12 ماه گذشته است:
[is70]<[is75]
// فیلتر سهم‌هایی که میانگین حجم فروش حقیقی‌ها در 12 ماه گذشته بیشتر از میانگین حجم فروش حقوقی‌ها در 12 ماه گذشته است:
[is71]>[is75]
// فیلتر سهم‌هایی که میانگین حجم فروش حقیقی‌ها در 12 ماه گذشته کمتر از میانگین حجم فروش حقوقی‌ها در 12 ماه گذشته است:
[is71]<[is75]
// فیلتر سهم‌هایی که میانگین حجم خرید حقیقی‌ها در 3 ماه گذشته بیشتر از میانگین حجم معاملات در 3 ماه گذشته است:
[is50]>[is5]
// فیلتر سهم‌هایی که میانگین حجم خرید حقیقی‌ها در 3 ماه گذشته کمتر از میانگین حجم معاملات در 3 ماه گذشته است:
[is50]<[is5]
// فیلتر سهم‌هایی که میانگین حجم خرید حقیقی‌ها در 12 ماه گذشته بیشتر از میانگین حجم معاملات در 12 ماه گذشته است:
[is51]>[is6]
// فیلتر سهم‌هایی که میانگین حجم خرید حقیقی‌ها در 12 ماه گذشته کمتر از میانگین حجم معاملات در 12 ماه گذشته است:
[is51]<[is6]
// فیلتر سهم‌هایی که میانگین حجم خرید حقیقی‌ها در 3 ماه گذشته بیشتر از میانگین حجم معاملات در 12 ماه گذشته است:
[is50]>[is6]
// فیلتر سهم‌هایی که میانگین حجم خرید حقیقی‌ها در 3 ماه گذشته کمتر از میانگین حجم معاملات در 12 ماه گذشته است:
[is50]<[is6]
// فیلتر سهم‌هایی که میانگین حجم فروش حقیقی‌ها در 3 ماه گذشته بیشتر از میانگین حجم معاملات در 3 ماه گذشته است:
[is70]>[is5]
// فیلتر سهم‌هایی که میانگین حجم فروش حقیقی‌ها در 3 ماه گذشته کمتر از میانگین حجم معاملات در 3 ماه گذشته است:
[is70]<[is5]
// فیلتر سهم‌هایی که میانگین حجم فروش حقیقی‌ها در 12 ماه گذشته بیشتر از میانگین حجم معاملات در 12 ماه گذشته است:
[is71]>[is6]
// فیلتر سهم‌هایی که میانگین حجم فروش حقیقی‌ها در 12 ماه گذشته کمتر از میانگین حجم معاملات در 12 ماه گذشته است:
[is71]<[is6]
// فیلتر سهم‌هایی که میانگین حجم فروش حقیقی‌ها در 3 ماه گذشته بیشتر از میانگین حجم معاملات در 12 ماه گذشته است:
[is70]>[is6]
// فیلتر سهم‌هایی که میانگین حجم فروش حقیقی‌ها در 3 ماه گذشته کمتر از میانگین حجم معاملات در 12 ماه گذشته است:
[is70]<[is6]
// فیلتر سهم‌هایی که تعداد خریداران حقیقی امروز بیشتر از میانگین تعداد خریداران حقیقی در 3 ماه گذشته است:
(ct).Buy_CountI>[is58]
// فیلتر سهم‌هایی که تعداد خریداران حقیقی امروز کمتر از میانگین تعداد خریداران حقیقی در 3 ماه گذشته است:
(ct).Buy_CountI<[is58]
// فیلتر سهم‌هایی که تعداد خریداران حقیقی امروز بیشتر از میانگین تعداد خریداران حقیقی در 12 ماه گذشته است:
(ct).Buy_CountI>[is59]
// فیلتر سهم‌هایی که تعداد خریداران حقیقی امروز کمتر از میانگین تعداد خریداران حقیقی در 12 ماه گذشته است:
(ct).Buy_CountI<[is59]
// فیلتر سهم‌هایی که تعداد خریداران حقیقی امروز بیشتر از میانگین تعداد فروشندگان حقیقی در 3 ماه گذشته است:
(ct).Buy_CountI>[is78]
// فیلتر سهم‌هایی که تعداد خریداران حقیقی امروز کمتر از میانگین تعداد فروشندگان حقیقی در 3 ماه گذشته است:
(ct).Buy_CountI<[is78]
// فیلتر سهم‌هایی که تعداد خریداران حقیقی امروز بیشتر از میانگین تعداد فروشندگان حقیقی در 12 ماه گذشته است:
(ct).Buy_CountI>[is79]
// فیلتر سهم‌هایی که تعداد خریداران حقیقی امروز کمتر از میانگین تعداد فروشندگان حقیقی در 12 ماه گذشته است:
(ct).Buy_CountI<[is79]
// فیلتر سهم‌هایی که تعداد فروشندگان حقیقی امروز بیشتر از میانگین تعداد فروشندگان حقیقی در 3 ماه گذشته است:
(ct).Sell_CountI>[is78]
// فیلتر سهم‌هایی که تعداد فروشندگان حقیقی امروز کمتر از میانگین تعداد فروشندگان حقیقی در 3 ماه گذشته است:
(ct).Sell_CountI<[is78]
// فیلتر سهم‌هایی که تعداد فروشندگان حقیقی امروز بیشتر از میانگین تعداد فروشندگان حقیقی در 12 ماه گذشته است:
(ct).Sell_CountI>[is79]
// فیلتر سهم‌هایی که تعداد فروشندگان حقیقی امروز کمتر از میانگین تعداد فروشندگان حقیقی در 12 ماه گذشته است:
(ct).Sell_CountI<[is79]
// فیلتر سهم‌هایی که تعداد خریداران حقوقی امروز بیشتر از میانگین تعداد خریداران حقوقی در 3 ماه گذشته است:
(ct).Buy_CountN>[is62]
// فیلتر سهم‌هایی که تعداد خریداران حقوقی امروز کمتر از میانگین تعداد خریداران حقوقی در 3 ماه گذشته است:
(ct).Buy_CountN<[is62]
// فیلتر سهم‌هایی که تعداد خریداران حقوقی امروز بیشتر از میانگین تعداد خریداران حقوقی در 12 ماه گذشته است:
(ct).Buy_CountN>[is63]
// فیلتر سهم‌هایی که تعداد خریداران حقوقی امروز کمتر از میانگین تعداد خریداران حقوقی در 12 ماه گذشته است:
(ct).Buy_CountN<[is63]
// فیلتر سهم‌هایی که تعداد خریداران حقوقی امروز بیشتر از میانگین تعداد فروشندگان حقوقی در 3 ماه گذشته است:
(ct).Buy_CountN>[is82]
// فیلتر سهم‌هایی که تعداد خریداران حقوقی امروز کمتر از میانگین تعداد فروشندگان حقوقی در 3 ماه گذشته است:
(ct).Buy_CountN<[is82]
// فیلتر سهم‌هایی که تعداد خریداران حقوقی امروز بیشتر از میانگین تعداد فروشندگان حقوقی در 12 ماه گذشته است:
(ct).Buy_CountN>[is83]
// فیلتر سهم‌هایی که تعداد خریداران حقوقی امروز کمتر از میانگین تعداد فروشندگان حقوقی در 12 ماه گذشته است:
(ct).Buy_CountN<[is83]
// فیلتر سهم‌هایی که تعداد فروشندگان حقوقی امروز بیشتر از میانگین تعداد فروشندگان حقوقی در 3 ماه گذشته است:
(ct).Sell_CountN>[is82]
// فیلتر سهم‌هایی که تعداد فروشندگان حقوقی امروز کمتر از میانگین تعداد فروشندگان حقوقی در 3 ماه گذشته است:
(ct).Sell_CountN<[is82]
// فیلتر سهم‌هایی که تعداد فروشندگان حقوقی امروز بیشتر از میانگین تعداد فروشندگان حقوقی در 12 ماه گذشته است:
(ct).Sell_CountN>[is83]
// فیلتر سهم‌هایی که تعداد فروشندگان حقوقی امروز کمتر از میانگین تعداد فروشندگان حقوقی در 12 ماه گذشته است:
(ct).Sell_CountN<[is83]
// فیلتر سهم‌هایی که تعداد خریداران حقیقی امروز بیشتر از میانگین کل تعداد خریداران در 3 ماه گذشته است:
(ct).Buy_CountI>[is66]
// فیلتر سهم‌هایی که تعداد خریداران حقیقی امروز کمتر از میانگین کل تعداد خریداران در 3 ماه گذشته است:
(ct).Buy_CountI<[is66]
// فیلتر سهم‌هایی که تعداد خریداران حقیقی امروز بیشتر از میانگین کل تعداد خریداران در 12 ماه گذشته است:
(ct).Buy_CountI>[is67]
// فیلتر سهم‌هایی که تعداد خریداران حقیقی امروز کمتر از میانگین کل تعداد خریداران در 12 ماه گذشته است:
(ct).Buy_CountI<[is67]
// فیلتر سهم‌هایی که تعداد خریداران حقیقی امروز بیشتر از میانگین کل تعداد فروشندگان در 3 ماه گذشته است:
(ct).Buy_CountI>[is86]
// فیلتر سهم‌هایی که تعداد خریداران حقیقی امروز کمتر از میانگین کل تعداد فروشندگان در 3 ماه گذشته است:
(ct).Buy_CountI<[is86]
// فیلتر سهم‌هایی که تعداد خریداران حقیقی امروز بیشتر از میانگین کل تعداد فروشندگان حقیقی در 12 ماه گذشته است:
(ct).Buy_CountI>[is87]
// فیلتر سهم‌هایی که تعداد خریداران حقیقی امروز کمتر از میانگین کل تعداد فروشندگان در 12 ماه گذشته است:
(ct).Buy_CountI<[is87]
// فیلتر سهم‌هایی که تعداد فروشندگان حقیقی امروز بیشتر از میانگین کل تعداد فروشندگان در 3 ماه گذشته است:
(ct).Sell_CountI>[is86]
// فیلتر سهم‌هایی که تعداد فروشندگان حقیقی امروز کمتر از میانگین کل تعداد فروشندگان در 3 ماه گذشته است:
(ct).Sell_CountI<[is86]
// فیلتر سهم‌هایی که تعداد فروشندگان حقیقی امروز بیشتر از میانگین کل تعداد فروشندگان در 12 ماه گذشته است:
(ct).Sell_CountI>[is87]
// فیلتر سهم‌هایی که تعداد فروشندگان حقیقی امروز کمتر از میانگین کل تعداد فروشندگان در 12 ماه گذشته است:
(ct).Sell_CountI<[is87]
// فیلتر سهم‌هایی که تعداد خریداران حقوقی امروز بیشتر از میانگین کل تعداد خریداران در 3 ماه گذشته است:
(ct).Buy_CountN>[is66]
// فیلتر سهم‌هایی که تعداد خریداران حقوقی امروز کمتر از میانگین کل تعداد خریداران در 3 ماه گذشته است:
(ct).Buy_CountN<[is66]
// فیلتر سهم‌هایی که تعداد خریداران حقوقی امروز بیشتر از میانگین کل تعداد خریداران در 12 ماه گذشته است:
(ct).Buy_CountN>[is67]
// فیلتر سهم‌هایی که تعداد خریداران حقوقی امروز کمتر از میانگین کل تعداد خریداران در 12 ماه گذشته است:
(ct).Buy_CountN<[is67]
// فیلتر سهم‌هایی که تعداد خریداران حقوقی امروز بیشتر از میانگین کل تعداد فروشندگان در 3 ماه گذشته است:
(ct).Buy_CountN>[is86]
// فیلتر سهم‌هایی که تعداد خریداران حقوقی امروز کمتر از میانگین کل تعداد فروشندگان در 3 ماه گذشته است:
(ct).Buy_CountN<[is86]
// فیلتر سهم‌هایی که تعداد خریداران حقوقی امروز بیشتر از میانگین کل تعداد فروشندگان در 12 ماه گذشته است:
(ct).Buy_CountN>[is87]
// فیلتر سهم‌هایی که تعداد خریداران حقوقی امروز کمتر از میانگین کل تعداد فروشندگان در 12 ماه گذشته است:
(ct).Buy_CountN<[is87]
// فیلتر سهم‌هایی که تعداد فروشندگان حقوقی امروز بیشتر از میانگین کل تعداد فروشندگان در 3 ماه گذشته است:
(ct).Sell_CountN>[is86]
// فیلتر سهم‌هایی که تعداد فروشندگان حقوقی امروز کمتر از میانگین کل تعداد فروشندگان در 3 ماه گذشته است:
(ct).Sell_CountN<[is86]
// فیلتر سهم‌هایی که تعداد فروشندگان حقوقی امروز بیشتر از میانگین کل تعداد فروشندگان در 12 ماه گذشته است:
(ct).Sell_CountN>[is87]
// فیلتر سهم‌هایی که تعداد فروشندگان حقوقی امروز کمتر از میانگین کل تعداد فروشندگان در 12 ماه گذشته است:
(ct).Sell_CountN<[is87]
// فیلتر سهم‌هایی که میانگین تعداد خریداران حقیقی در 3 ماه گذشته بیشتر از میانگین تعداد فروشندگان حقیقی در 3 ماه گذشته است:
[is58]>[is78]
// فیلتر سهم‌هایی که میانگین تعداد خریداران حقیقی در 3 ماه گذشته کمتر از میانگین تعداد فروشندگان حقیقی در 3 ماه گذشته است:
[is58]<[is78]
// فیلتر سهم‌هایی که میانگین تعداد خریداران حقیقی در 12 ماه گذشته بیشتر از میانگین تعداد فروشندگان حقیقی در 12 ماه گذشته است:
[is59]>[is79]
// فیلتر سهم‌هایی که میانگین تعداد خریداران حقیقی در 12 ماه گذشته کمتر از میانگین تعداد فروشندگان حقیقی در 12 ماه گذشته است:
[is59]<[is79]
// فیلتر سهم‌هایی که میانگین تعداد خریداران حقیقی در 3 ماه گذشته بیشتر از میانگین تعداد فروشندگان حقیقی در 12 ماه گذشته است:
[is58]<[is79]
// فیلتر سهم‌هایی که میانگین تعداد خریداران حقیقی در 3 ماه گذشته کمتر از میانگین تعداد فروشندگان حقیقی در 12 ماه گذشته است:
[is58]<[is79]
// فیلتر سهم‌هایی که میانگین تعداد خریداران حقیقی در 3 ماه گذشته بیشتر از میانگین تعداد خریداران حقیقی در 12 ماه گذشته است:
[is58]>[is59]
// فیلتر سهم‌هایی که میانگین تعداد خریداران حقیقی در 3 ماه گذشته کمتر از میانگین تعداد خریداران حقیقی در 12 ماه گذشته است:
[is58]<[is59]
// فیلتر سهم‌هایی که میانگین تعداد فروشندگان حقیقی در 3 ماه گذشته بیشتر از میانگین تعداد فروشندگان حقیقی در 12 ماه گذشته است:
[is78]>[is79]
// فیلتر سهم‌هایی که میانگین تعداد فروشندگان حقیقی در 3 ماه گذشته کمتر از میانگین تعداد فروشندگان حقیقی در 12 ماه گذشته است:
[is78]<[is79]
// فیلتر سهم‌هایی که میانگین تعداد خریداران حقوقی در 3 ماه گذشته بیشتر از میانگین تعداد فروشندگان حقوقی در 3 ماه گذشته است:
[is62]>[is82]
// فیلتر سهم‌هایی که میانگین تعداد خریداران حقوقی در 3 ماه گذشته کمتر از میانگین تعداد فروشندگان حقوقی در 3 ماه گذشته است:
[is62]<[is82]
// فیلتر سهم‌هایی که میانگین تعداد خریداران حقوقی در 12 ماه گذشته بیشتر از میانگین تعداد فروشندگان حقوقی در 12 ماه گذشته است:
[is63]>[is83]
// فیلتر سهم‌هایی که میانگین تعداد خریداران حقوقی در 12 ماه گذشته کمتر از میانگین تعداد فروشندگان حقوقی در 12 ماه گذشته است:
[is63]<[is83]
// فیلتر سهم‌هایی که میانگین تعداد خریداران حقوقی در 3 ماه گذشته بیشتر از میانگین تعداد فروشندگان حقوقی در 12 ماه گذشته است:
[is62]>[is83]
// فیلتر سهم‌هایی که میانگین تعداد خریداران حقوقی در 3 ماه گذشته کمتر از میانگین تعداد فروشندگان حقوقی در 12 ماه گذشته است:
[is62]<[is83]
// فیلتر سهم‌هایی که میانگین تعداد خریداران حقوقی در 3 ماه گذشته بیشتر از میانگین تعداد خریداران حقوقی در 12 ماه گذشته است:
[is62]>[is63]
// فیلتر سهم‌هایی که میانگین تعداد خریداران حقوقی در 3 ماه گذشته کمتر از میانگین تعداد خریداران حقوقی در 12 ماه گذشته است:
[is62]<[is63]
// فیلتر سهم‌هایی که میانگین تعداد فروشندگان حقوقی در 3 ماه گذشته بیشتر از میانگین تعداد فروشندگان حقوقی در 12 ماه گذشته است:
[is82]>[is83]
// فیلتر سهم‌هایی که میانگین تعداد فروشندگان حقوقی در 3 ماه گذشته کمتر از میانگین تعداد فروشندگان حقوقی در 12 ماه گذشته است:
[is82]<[is83]
// فیلتر سهم‌هایی که میانگین تعداد خریداران حقیقی در 3 ماه گذشته بیشتر از میانگین کل تعداد فروشندگان در 3 ماه گذشته است:
[is58]>[is86]
// فیلتر سهم‌هایی که میانگین تعداد خریداران حقیقی در 3 ماه گذشته کمتر از میانگین کل تعداد فروشندگان در 3 ماه گذشته است:
[is58]<[is86]
// فیلتر سهم‌هایی که میانگین تعداد خریداران حقیقی در 12 ماه گذشته بیشتر از میانگین کل تعداد فروشندگان در 12 ماه گذشته است:
[is59]>[is87]
// فیلتر سهم‌هایی که میانگین تعداد خریداران حقیقی در 12 ماه گذشته کمتر از میانگین کل تعداد فروشندگان در 12 ماه گذشته است:
[is59]<[is87]
// فیلتر سهم‌هایی که میانگین تعداد خریداران حقیقی در 3 ماه گذشته بیشتر از میانگین کل تعداد فروشندگان در 12 ماه گذشته است:
[is58]>[is87]
// فیلتر سهم‌هایی که میانگین تعداد خریداران حقیقی در 3 ماه گذشته کمتر از میانگین کل تعداد فروشندگان در 12 ماه گذشته است:
[is58]<[is87]
// فیلتر سهم‌هایی که میانگین تعداد خریداران حقیقی در 3 ماه گذشته بیشتر از میانگین کل تعداد خریداران در 3 ماه گذشته است:
[is58]>[is66]
// فیلتر سهم‌هایی که میانگین تعداد خریداران حقیقی در 3 ماه گذشته کمتر از میانگین کل تعداد خریداران در 3 ماه گذشته است:
[is58]<[is66]
// فیلتر سهم‌هایی که میانگین تعداد خریداران حقیقی در 3 ماه گذشته بیشتر از میانگین کل تعداد خریداران در 12 ماه گذشته است:
[is58]>[is67]
// فیلتر سهم‌هایی که میانگین تعداد خریداران حقیقی در 3 ماه گذشته کمتر از میانگین تعداد کل تعداد خریداران در 12 ماه گذشته است:
[is58]<[is67]
// فیلتر سهم‌هایی که میانگین تعداد خریداران حقیقی در 12 ماه گذشته بیشتر از میانگین کل تعداد خریداران در 12 ماه گذشته است:
[is59]>[is67]
// فیلتر سهم‌هایی که میانگین تعداد خریداران حقیقی در 12 ماه گذشته کمتر از میانگین تعداد کل تعداد خریداران در 12 ماه گذشته است:
[is59]<[is67]
// فیلتر سهم‌هایی که میانگین تعداد فروشندگان حقیقی در 3 ماه گذشته بیشتر از میانگین کل تعداد فروشندگان در 3 ماه گذشته است:
[is78]>[is86]
// فیلتر سهم‌هایی که میانگین تعداد فروشندگان حقیقی در 3 ماه گذشته کمتر از میانگین کل تعداد فروشندگان در 3 ماه گذشته است:
[is78]<[is86]
// فیلتر سهم‌هایی که میانگین تعداد فروشندگان حقیقی در 3 ماه گذشته بیشتر از میانگین کل تعداد فروشندگان در 12 ماه گذشته است:
[is78]>[is87]
// فیلتر سهم‌هایی که میانگین تعداد فروشندگان حقیقی در 3 ماه گذشته کمتر از میانگین کل تعداد فروشندگان در 12 ماه گذشته است:
[is78]<[is87]
// فیلتر سهم‌هایی که میانگین تعداد فروشندگان حقیقی در 12 ماه گذشته بیشتر از میانگین کل تعداد فروشندگان در 12 ماه گذشته است:
[is79]>[is87]
// فیلتر سهم‌هایی که میانگین تعداد فروشندگان حقیقی در 12 ماه گذشته کمتر از میانگین کل تعداد فروشندگان در 12 ماه گذشته است:
[is79]<[is87]
// فیلتر سهم‌هایی که میانگین تعداد خریداران حقوقی در 3 ماه گذشته بیشتر از میانگین کل تعداد فروشندگان در 3 ماه گذشته است:
[is62]>[is86]
// فیلتر سهم‌هایی که میانگین تعداد خریداران حقوقی در 3 ماه گذشته کمتر از میانگین کل تعداد فروشندگان در 3 ماه گذشته است:
[is62]<[is86]
// فیلتر سهم‌هایی که میانگین تعداد خریداران حقوقی در 12 ماه گذشته بیشتر از میانگین کل تعداد فروشندگان در 12 ماه گذشته است:
[is63]>[is87]
// فیلتر سهم‌هایی که میانگین تعداد خریداران حقوقی در 12 ماه گذشته کمتر از میانگین کل تعداد فروشندگان در 12 ماه گذشته است:
[is63]<[is87]
// فیلتر سهم‌هایی که میانگین تعداد خریداران حقوقی در 3 ماه گذشته بیشتر از میانگین کل تعداد فروشندگان در 12 ماه گذشته است:
[is62]>[is87]
// فیلتر سهم‌هایی که میانگین تعداد خریداران حقوقی در 3 ماه گذشته کمتر از میانگین کل تعداد فروشندگان در 12 ماه گذشته است:
[is62]<[is87]
// فیلتر سهم‌هایی که میانگین تعداد خریداران حقوقی در 3 ماه گذشته بیشتر از میانگین کل تعداد خریداران در 3 ماه گذشته است:
[is62]>[is66]
// فیلتر سهم‌هایی که میانگین تعداد خریداران حقوقی در 3 ماه گذشته کمتر از میانگین کل تعداد خریداران در 3 ماه گذشته است:
[is62]<[is66]
// فیلتر سهم‌هایی که میانگین تعداد خریداران حقوقی در 3 ماه گذشته بیشتر از میانگین کل تعداد خریداران در 12 ماه گذشته است:
[is62]>[is67]
// فیلتر سهم‌هایی که میانگین تعداد خریداران حقوقی در 3 ماه گذشته کمتر از میانگین تعداد کل تعداد خریداران در 12 ماه گذشته است:
[is62]<[is67]
// فیلتر سهم‌هایی که میانگین تعداد خریداران حقوقی در 12 ماه گذشته بیشتر از میانگین کل تعداد خریداران در 12 ماه گذشته است:
[is63]>[is67]
// فیلتر سهم‌هایی که میانگین تعداد خریداران حقوقی در 12 ماه گذشته کمتر از میانگین تعداد کل تعداد خریداران در 12 ماه گذشته است:
[is63]<[is67]
// فیلتر سهم‌هایی که میانگین تعداد فروشندگان حقوقی در 3 ماه گذشته بیشتر از میانگین کل تعداد فروشندگان در 3 ماه گذشته است:
[is82]>[is86]
// فیلتر سهم‌هایی که میانگین تعداد فروشندگان حقوقی در 3 ماه گذشته کمتر از میانگین کل تعداد فروشندگان در 3 ماه گذشته است:
[is82]<[is86]
// فیلتر سهم‌هایی که میانگین تعداد فروشندگان حقوقی در 3 ماه گذشته بیشتر از میانگین کل تعداد فروشندگان در 12 ماه گذشته است:
[is82]>[is87]
// فیلتر سهم‌هایی که میانگین تعداد فروشندگان حقوقی در 3 ماه گذشته کمتر از میانگین کل تعداد فروشندگان در 12 ماه گذشته است:
[is82]<[is87]
// فیلتر سهم‌هایی که میانگین تعداد فروشندگان حقوقی در 12 ماه گذشته بیشتر از میانگین کل تعداد فروشندگان در 12 ماه گذشته است:
[is83]>[is87]
// فیلتر سهم‌هایی که میانگین تعداد فروشندگان حقوقی در 12 ماه گذشته کمتر از میانگین کل تعداد فروشندگان در 12 ماه گذشته است:
[is83]<[is87]
// فیلتر سهم‌هایی که قدرت خریداران حقیقی امروز بیشتر از میانگین قدرت خریداران حقیقی در 3 ماه گذشته است:
((ct).Buy_I_Volume/(ct).Buy_CountI)>([is50]/[is58])
// فیلتر سهم‌هایی که قدرت خریداران حقیقی امروز کمتر از میانگین قدرت خریداران حقیقی در 3 ماه گذشته است:
((ct).Buy_I_Volume/(ct).Buy_CountI)<([is50]/[is58])
// فیلتر سهم‌هایی که قدرت خریداران حقیقی امروز بیشتر از میانگین قدرت خریداران حقیقی در 12 ماه گذشته است:
((ct).Buy_I_Volume/(ct).Buy_CountI)>([is51]/[is59])
// فیلتر سهم‌هایی که قدرت خریداران حقیقی امروز کمتر از میانگین قدرت خریداران حقیقی در 12 ماه گذشته است:
((ct).Buy_I_Volume/(ct).Buy_CountI)<([is51]/[is59])
// فیلتر سهم‌هایی که قدرت خریداران حقیقی امروز بیشتر از میانگین قدرت فروشندگان حقیقی در 3 ماه گذشته است:
((ct).Buy_I_Volume/(ct).Buy_CountI)>([is70]/[is78])
// فیلتر سهم‌هایی که قدرت خریداران حقیقی امروز کمتر از میانگین قدرت فروشندگان حقیقی در 3 ماه گذشته است:
((ct).Buy_I_Volume/(ct).Buy_CountI)<([is70]/[is78])
// فیلتر سهم‌هایی که قدرت خریداران حقیقی امروز بیشتر از میانگین قدرت فروشندگان حقیقی در 12 ماه گذشته است:
((ct).Buy_I_Volume/(ct).Buy_CountI)>([is71]/[is79])
// فیلتر سهم‌هایی که قدرت خریداران حقیقی امروز کمتر از میانگین قدرت فروشندگان حقیقی در 12 ماه گذشته است:
((ct).Buy_I_Volume/(ct).Buy_CountI)<([is71]/[is79])
// فیلتر سهم‌هایی که میانگین قدرت خریداران حقیقی در 3 ماه گذشته بیشتر از میانگین قدرت خریداران حقیقی در 12 ماه گذشته است:
([is50]/[is58])>([is51]/[is59])
// فیلتر سهم‌هایی که میانگین قدرت خریداران حقیقی در 3 ماه گذشته کمتر از میانگین قدرت خریداران حقیقی در 12 ماه گذشته است:
([is50]/[is58])<([is51]/[is59])
// فیلتر سهم‌هایی که میانگین قدرت خریداران حقیقی در 3 ماه گذشته بیشتر از میانگین قدرت فروشندگان حقیقی در 3 ماه گذشته است:
([is50]/[is58])>([is70]/[is78])
// فیلتر سهم‌هایی که میانگین قدرت خریداران حقیقی در 3 ماه گذشته کمتر از میانگین قدرت فروشندگان حقیقی در 3 ماه گذشته است:
([is50]/[is58])<([is70]/[is78])
// فیلتر سهم‌هایی که میانگین قدرت خریداران حقیقی در 3 ماه گذشته بیشتر از میانگین قدرت فروشندگان حقیقی در 12 ماه گذشته است:
([is50]/[is58])>([is71]/[is79])
// فیلتر سهم‌هایی که میانگین قدرت خریداران حقیقی در 3 ماه گذشته کمتر از میانگین قدرت فروشندگان حقیقی در 12 ماه گذشته است:
([is50]/[is58])<([is71]/[is79])
// فیلتر سهم‌هایی که میانگین قدرت خریداران حقیقی در 12 ماه گذشته بیشتر از میانگین قدرت فروشندگان حقیقی در 12 ماه گذشته است:
([is51]/[is59])>([is71]/[is79])
// فیلتر سهم‌هایی که میانگین قدرت خریداران حقیقی در 12 ماه گذشته کمتر از میانگین قدرت فروشندگان حقیقی در 12 ماه گذشته است:
([is51]/[is59])<([is71]/[is79])
// فیلتر سهم‌هایی که قدرت فروشندگان حقیقی امروز بیشتر از میانگین قدرت فروشندگان حقیقی در 3 ماه گذشته است:
((ct).Sell_I_Volume/(ct).Sell_CountI)>([is70]/[is78])
// فیلتر سهم‌هایی که قدرت فروشندگان حقیقی امروز کمتر از میانگین قدرت فروشندگان حقیقی در 3 ماه گذشته است:
((ct).Sell_I_Volume/(ct).Sell_CountI)<([is70]/[is78])
// فیلتر سهم‌هایی که قدرت فروشندگان حقیقی امروز بیشتر از میانگین قدرت فروشندگان حقیقی در 12 ماه گذشته است:
((ct).Sell_I_Volume/(ct).Sell_CountI)>([is71]/[is79])
// فیلتر سهم‌هایی که قدرت فروشندگان حقیقی امروز کمتر از میانگین قدرت فروشندگان حقیقی در 12 ماه گذشته است:
((ct).Sell_I_Volume/(ct).Sell_CountI)<([is71]/[is79])
// فیلتر سهم‌هایی که قدرت فروشندگان حقیقی امروز بیشتر از میانگین قدرت خریداران حقیقی در 3 ماه گذشته است:
((ct).Sell_I_Volume/(ct).Sell_CountI)>([is50]/[is58])
// فیلتر سهم‌هایی که قدرت فروشندگان حقیقی امروز کمتر از میانگین قدرت خریداران حقیقی در 3 ماه گذشته است:
((ct).Sell_I_Volume/(ct).Sell_CountI)<([is50]/[is58])
// فیلتر سهم‌هایی که قدرت فروشندگان حقیقی امروز بیشتر از میانگین قدرت خریداران حقیقی در 12 ماه گذشته است:
((ct).Sell_I_Volume/(ct).Sell_CountI)>([is51]/[is59])
// فیلتر سهم‌هایی که قدرت فروشندگان حقیقی امروز کمتر از میانگین قدرت خریداران حقیقی در 12 ماه گذشته است:
((ct).Sell_I_Volume/(ct).Sell_CountI)<([is51]/[is59])
// فیلتر سهم‌هایی که میانگین قدرت فروشندگان حقیقی در 3 ماه گذشته بیشتر از میانگین قدرت فروشندگان حقیقی در 12 ماه گذشته است:
([is70]/[is78])>([is71]/[is79])
// فیلتر سهم‌هایی که میانگین قدرت فروشندگان حقیقی در 3 ماه گذشته کمتر از میانگین قدرت فروشندگان حقیقی در 12 ماه گذشته است:
([is70]/[is78])<([is71]/[is79])
// فیلتر سهم‌هایی که حجم معاملات‌شان کمتر از حجم مبنا است:
(tvol)<(bvol)
// فیلتر سهم‌هایی که میانگین حجم ماه بیشتر از حجم مبنا است:
(bvol)<(([ih][0].QTotTran5J+[ih][1].QTotTran5J+[ih][2].QTotTran5J+[ih][3].QTotTran5J+[ih][4].QTotTran5J+[ih][5].QTotTran5J+[ih][6].QTotTran5J+[ih][7].QTotTran5J+[ih][8].QTotTran5J+[ih][9].QTotTran5J+[ih][10].QTotTran5J+[ih][11].QTotTran5J+[ih][12].QTotTran5J+[ih][13].QTotTran5J+[ih][14].QTotTran5J+[ih][15].QTotTran5J+[ih][16].QTotTran5J+[ih][17].QTotTran5J+[ih][18].QTotTran5J+[ih][19].QTotTran5J+[ih][20].QTotTran5J+[ih][21].QTotTran5J+[ih][22].QTotTran5J+[ih][23].QTotTran5J+[ih][24].QTotTran5J+[ih][25].QTotTran5J+[ih][26].QTotTran5J+[ih][27].QTotTran5J+[ih][28].QTotTran5J+[ih][29].QTotTran5J)/30)
// فیلتر سهم‌هایی که میانگین حجم ماه کمتر از حجم مبنا است:
(bvol)>(([ih][0].QTotTran5J+[ih][1].QTotTran5J+[ih][2].QTotTran5J+[ih][3].QTotTran5J+[ih][4].QTotTran5J+[ih][5].QTotTran5J+[ih][6].QTotTran5J+[ih][7].QTotTran5J+[ih][8].QTotTran5J+[ih][9].QTotTran5J+[ih][10].QTotTran5J+[ih][11].QTotTran5J+[ih][12].QTotTran5J+[ih][13].QTotTran5J+[ih][14].QTotTran5J+[ih][15].QTotTran5J+[ih][16].QTotTran5J+[ih][17].QTotTran5J+[ih][18].QTotTran5J+[ih][19].QTotTran5J+[ih][20].QTotTran5J+[ih][21].QTotTran5J+[ih][22].QTotTran5J+[ih][23].QTotTran5J+[ih][24].QTotTran5J+[ih][25].QTotTran5J+[ih][26].QTotTran5J+[ih][27].QTotTran5J+[ih][28].QTotTran5J+[ih][29].QTotTran5J)/30)
// فیلتر سهم‌هایی که میانگین حجم معاملات 3 ماه گذشته بیشتر از حجم مبنا است:
(bvol)<[is5]
// فیلتر سهم‌هایی که میانگین حجم معاملات 3 ماه گذشته کمتر از حجم مبنا است:
(bvol)>[is5]
// فیلتر سهم‌هایی که میانگین حجم معاملات 12 ماه گذشته بیشتر از حجم مبنا است:
(bvol)<[is6]
// فیلتر سهم‌هایی که میانگین حجم معاملات 12 ماه گذشته کمتر از حجم مبنا است:
(bvol)>[is6]
// فیلتر سهم‌هایی که در کف قیمتی هستند:
true == function () {
	var min = (pmin)
	for (i = 0; i < 22; i++) {
		if ([ih][i].PriceMin < min)
			min = [ih][i].PriceMin
	}
	if ((Math.round(((pl) - min) / min * 100)) < 1)
		return true;
	else
		return false;
}()
// فیلتر سهم‌هایی که حجم معاملات نسبت به روزهای قبل افزایش یافته است:
true == function () {
	var tv6 = function () {
		var vol1 = [ih][0].QTotTran5J;
		var n;
		for (n = 1; n < 5; n++)
			vol1 = vol1 + [ih][n].QTotTran5J;
		return vol1;
	}
	var tv14 = function () {
		var vol2 = [ih][6].QTotTran5J;
		var m;
		for (m = 7; m < 14; m++)
			vol2 = vol2 + [ih][m].QTotTran5J;
		return vol2;
	}
	var minv14 = function () {
		var min = [ih][0].QTotTran5J;
		var a;
		for (a = 1; a < 14; a++) {
			if (min > [ih][a].QTotTran5J)
				min = [ih][a].QTotTran5J;
		}
		return min;
	}
	var maxp52 = function () {
		var max1 = [ih][0].PriceMax;
		var b;
		for (b = 1; b < 52; b++) {
			if (max1 < [ih][b].PriceMax)
				max1 = [ih][b].PriceMax;
		}
		return max1;
	};
	if (tv6() > tv14() &&
		(pc) < 0.9 * maxp52() &&
		minv14() > 0) {
		return true;
	} else {
		return false;
	}
}()
// فیلتر سهم‌هایی که حجم خرید حقیقی‌ها بیشتر از میانگین حجم ماه است:
true == function () {
	var ave_month = function () {
		var sum = 0;
		var ipos;
		for (i = 0; i < 22; i++) {
			sum = sum + [ih][i].QTotTran5J
		}
		ave = sum / 22
		return ave;
	};
	if ((ct).Buy_I_Volume > ave_month()) {
		return true;
	} else {
		return false;
	}
}()
// فیلتر سهم‌هایی که بیش از 20 میلیارد تومان ورود پول حقوقی دارد و حجم معاملات بیشتر از میانگین حجم ماه است:
var x = (ct).Buy_N_Volume
var y = (ct).Buy_CountN
var z = (ct).Sell_N_Volume
var t = (ct).Sell_CountN
x > z
t > y
x / y > z / t &&
	(x - z) * (pc) > 200000000000
// فیلتر سهم‌هایی که حجم معاملات 2 برابر میانگین حجم ماه است:
true == function () {
	var i
	var sum30 = 0
	var avg30
	for (i = 0; i < 30; i++) {
		sum30 = sum30 + [ih][i].QTotTran5J
	}
	avg30 = Math.round(sum30 / 30) if ((tvol) > 2 * avg30 && (tvol) != 0) return (1)
}()
// فیلتر شرکت‌های کوچکی که در چند روز اخیر با حجم بالایی معامله می‌شوند و استوکاستیک آن‌ها کف است:
true == function () {
	// Calculate the Min Price of Month
	var MinPriceOfMonth = function () {
		var minimum = [ih][0].PriceMin;
		var n;
		for (n = 1; n < 29; n++)
			if (minimum > [ih][n].PriceMin)
				minimum = [ih][n].PriceMin;
		return minimum;
	};
	// Calculation Volume of 3 days
	var VolumeOf3Days = function () {
		var V3D = [ih][0].QTotTran5J;
		var n;
		for (n = 1; n < 2; n++)
			V3D = (V3D + [ih][n].QTotTran5J) / 2;
		return V3D;
	};
	// Calculation Volume of 14 days
	var VolumeOf14Days = function () {
		var V14D = [ih][0].QTotTran5J;
		var n;
		for (n = 1; n < 13; n++)
			V3D = (V14D + [ih][n].QTotTran5J) / 2;
		return V14D;
	};
	// Calculation Stochastic
	var Stochastic = function () {
		var HighestHigh = 0;
		var LowestLow = 0;
		var x;
		var Stoch = 0;
		for (x = 0; x < 14; x++) {
			if ([ih][x].PriceMax > HighestHigh) {
				HighestHigh = [ih][x].PriceMax;
			}
			if ([ih][x].PriceMin > LowestLow) {
				LowesLow = [ih][x].PriceMin;
			}
		}
		Stoch = 100 * ((pc) - LowesLow) / (HighestHigh - LowesLow);
		return Stoch;
	};
	if (
		// Price
		(((pl) - MinPriceOfMonth()) / MinPriceOfMonth() * 100) < 4 // Volume && VolumeOf3Days() >= VolumeOf14Days()
		// Stoch
		&&
		Stochastic() <= 20 // tno && (tno)>20
		// bvol
		&&
		(bvol) <= 100000) {
		return true;
	} else {
		return false;
	}
}()
// فیلتر سهم‌هایی که قیمت آخرین معامله کم‌ترین قیمت 21 روز اخیر است:
true == function () {
	var MinPrice = function () {
		var min = [ih][0].PriceMin;
		var ipos;
		for (ipos = 0; ipos < 21; ipos++)
			if (min > [ih][ipos].PriceMin)
				min = [ih][ipos].PriceMin;
		return min;
	};
	if ((pl) < MinPrice()) {
		return true;
	} else {
		return false;
	}
}()
// فیلتر سهم‌هایی که مجموع حجم معاملات‌ در 3 روز اخیر بیشتر از 30 میلیون است:
true == function () {
	var i;
	var a = 0;
	for (i = 0; i <= 2; i++) {
		a = a + [ih].QTotTran5J;
	}
	if (a > 10000000) {
		return true;
	} else {
		return false;
	}
}()
// فیلتر سهم‌هایی که در 6 روز اخیر، کم‌ترین قیمت‌ از قیمت آخرین معامله‌ی امروز کمتر است:
var a = 0
var i = 0
true == function () {
	for (i = 0; i <= 5; i++) {
		if ((pl) <= [ih].PriceMin) {
			a++
		}
	}
	if (a == 6) {
		return true;
	} else {
		return false;
	}
}()
// فیلتر سهم‌هایی که بالای میانگین متحرک 14 روزه قرار دارند:
true == function () {
	var PriceN = function () {
		var price = [ih][0].PClosing;
		var D = 14;
		var N = D - 1;
		var n;
		for (n = 1; n <= N; n++) price = [ih][n].PClosing + price;
		if (n = N) {
			price = price / (n + 1);
		}
		return price;
	};
	if ((pl) > PriceN()) {
		return true;
	} else {
		return false;
	}
}()
// فیلتر سهم‌هایی که پس از اصلاح چند روزه، با حجم بالایی معامله شده‌اند:
true == function () {
	var MaxPriceOfMonth = function () {
		var maximum = [ih][0].PriceMax;
		var n;
		for (n = 1; n < 29; n++)
			if (maximum < [ih][n].PriceMax) maximum = [ih][n].PriceMax;
		return maximum;
	};
	var IncrementalVolume = function () {
		var V3D = [ih][1].QTotTran5J;
		var n;
		for (n = 1; n < 4; n++) V3D = (V3D + [ih][n].QTotTran5J) / 2;
		if ([ih][0].QTotTran5J >= 3 * V3D) {
			return 1;
		}
	};
	if (IncrementalVolume() == 1 && (tvol) >= (bvol) && ((MaxPriceOfMonth() - (pl)) / MaxPriceOfMonth() * 100) >= 6 && ((MaxPriceOfMonth() - (pl)) / MaxPriceOfMonth() * 100) <= 12 && (py) <= [ih][1].PriceYesterday) {
		return true;
	} else {
		return false;
	}
}()
// فیلتر MFI (سهم‌هایی که MFI بالای 80 و یا زیر 50 دارند):
true == function () {
	var i = 0
	var monyflow
	var monyflow2
	var pmonyflow = 0
	var nmonyflow = 0
	var mfi
	//
	for (i = 0; i < 14; i++) {
		monyflow = [ih].QTotTran5J * ([ih].PClosing + [ih].PriceMax + [ih].PriceMin) / 3 monyflow2 = [ih][i + 1].QTotTran5J * ([ih][i + 1].PClosing + [ih][i + 1].PriceMax + [ih][i + 1].PriceMin) / 3
		if (monyflow > monyflow2) pmonyflow = pmonyflow + monyflow
		if (monyflow < monyflow2) nmonyflow = nmonyflow + monyflow
	}
	mfi = 100 - (100 / (1 + (pmonyflow / nmonyflow)))
	//
	if ((tvol) != 0 && mfi <= 50 && [is9] > 80) return (1)
}()
// فیلتر RSI (سهم‌هایی که RSI بالای 80 و یا زیر 20 دارند):
true == function () {
	var CalculateRSI = function (period) {
		var len = 20;
		for (var i = 0; i < len; i++) {
			var rec = [ih][len - 1 - i];
			var change = rec.PClosing - rec.PriceYesterday;
			if (change > 0) {
				rec.gain = change;
				rec.loss = 0;
			} else {
				rec.gain = 0;
				rec.loss = -change;
			}
		}
		// Calculate first "average gain" and "average loss"
		var gainSum = 0;
		var lossSum = 0;
		for (var i = 0; i < period; i++) {
			var rec = [ih][len - 1 - i];
			gainSum += rec.gain;
			lossSum += rec.loss;
		}
		var averageGain = gainSum / period;
		var averageLoss = lossSum / period;
		// Calculate subsequent "average gain" and "average loss" values
		for (var i = period + 1; i < len; i++) {
			var rec = [ih][len - 1 - i];
			averageGain = (averageGain * (period - 1) + rec.gain) / period;
			averageLoss = (averageLoss * (period - 1) + rec.loss) / period;
			rec.averageGain = averageGain;
			rec.averageLoss = averageLoss;
		}
		// Calculate RSI
		var RS = 0; // Relative strength
		var RSIndex = 0; // Relative strength index
		for (var i = period + 1; i < len; i++) {
			var rec = [ih][len - 1 - i];
			RS = rec.averageGain / rec.averageLoss;
			RSIndex = 100 - 100 / (1 + RS);
			rec.rsi = RSIndex;
		}
	};
	if (typeof [ih][0].rsi == "undefined") CalculateRSI(14);
	if ([ih][0].rsi > 80 || [ih][0].rsi < 20)
		return true;
	else
		return false;
}()