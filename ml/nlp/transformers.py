# pip install transformers
# https://huggingface.co/docs/transformers/index

#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
from transformers import pipeline

summarizer = pipeline('summarization', model='facebook/bart-large-cnn') # https://huggingface.co/models
text = ''
summary = summarizer(text, max_length=50, min_length=20, do_sample=False)
print(summary[0]['summary_text'])

#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
import torch # pip install torch torchvision
from transformers import AutoTokenizer, AutoModelWithLMHead

tokenizer = AutoTokenizer.from_pretrained('t5-base')
model = AutoModelWithLMHead.from_pretrained('t5-base', return_dict=True)
text = ''
inputs = tokenizer.encode('summarize: ' + text, return_tensors='pt', max_length=512, truncation=True)
summary_ids = model.generate(inputs, max_length=150, min_length=80, length_penalty=5., num_beams=2)
summary = tokenizer.decode(summary_ids[0])
print(summary)

#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
