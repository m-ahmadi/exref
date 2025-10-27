import nltk # pip install --user -U nltk

# nltk.download() # on first run

para = "Hello World. It's good to see you. Thanks for buying this book."

nltk.tokenize.sent_tokenize(para)
nltk.tokenize.word_tokenize(para)

syn = nltk.corpus.wordnet.synsets('cookbook')[0]
lemmas = syn.lemmas()
len(lemmas)

nltk.corpus.webtext.words('file.txt')

nltk.corpus.stopwords.words('english')