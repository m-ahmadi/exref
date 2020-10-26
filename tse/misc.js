InstrumentsState
	InsCode
	LVal18AFC     // کد 18 رقمي فارسي نماد
	LVal30        // نام 30 رقمي فارسي نماد
	LBoard        // 	نام تابلو
	StateTypeDesc // دلیل توقف
	CEtaVal       // 	وضعیت نماد
		'I ', 'ممنوع'
		'A ', 'مجاز'
		'AG', 'مجاز-مسدود'
		'AS', 'مجاز-متوقف'
		'AR', 'مجاز-محفوظ'
		'IG', 'ممنوع-مسدود'
		'IS', 'ممنوع-متوقف'
		'IR', 'ممنوع-محفوظ'

StaticThresholds
	InsCode
	DEven
	PSGelStaMax 'بیشترین'
	PSGelStaMin 'کمترین'

BestLimitsAllIns
	number     // رديف - براي هر نماد تا 5 مظنه برتر نمايش داده مي شود که اين عدد معرف شماره رديف مظنه است
	InsCode
	QTitMeDem  // حجم تقاضا
	ZOrdMeDem  // تعداد تقاضا
	PMeDem     // قیمت تقاضا
	PMeOf      // قیمت عرضه
	ZOrdMeOf   // تعداد عرضه
	QTitMeOf   // حجم عرضه