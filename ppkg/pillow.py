from PIL import Image # pip install pillow

# webp -> png
with Image.open('image.webp') as im:
	im.save('converted_image.png', 'PNG')



# webp -> png - in batch
import os
src = 'webp'
out = 'png'
for file in os.listdir(src):
	with Image.open(src+'/'+file) as im:
		im.save(out+'/'+file.replace('.webp','.png'), 'PNG')



# png,jpg -> pdf
Image.open('image.png').convert('RGB').save('out.pdf')
Image.open('image.jpg').convert('RGB').save('out.pdf')
