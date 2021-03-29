// 10,000 emails with label "spam" or "not_spam"
emails = [
	['email_1', 'spam'],
	['email_2', 'not_spam'],
	...,
	['email_10000', 'spam']
]

// convert each email to feature vector (using "bag of words" method)
englishDictionary = ['a', 'abandon', ..., 'zero', 'zone']
englishDictionary.length // 3000

features = []
for (email of emails) features.push(
	englishDictionary.map(i => email.includes(i))
)

features // [  []2e4, []2e4, ..., ..., 9999, []2e4 ]

data = features.map((v,i) => [ v, emails[i][1] ])

data // [ [feature,label], [feature,label], ...1e4 ]