import requests
from bs4 import BeautifulSoup



movie = 'http://www.imdb.com/title/tt2527336/' 
html = requests.get(movie) # connect to the server 
#print(html.text)
bs = BeautifulSoup(html.text, 'lxml') # manage tags in HTML document
# crawl movie description 
desc = bs.find('div', {'class': 'summary_text'})
movie_desc = desc.get_text().strip()
print(movie_desc)

# crawl the poster
poster = bs.find('div', {'class': 'poster'})
img = poster.find('img')
img_link = img['src'] # access the value of an attribute of a tag
print(img_link)
image = requests.get(img_link)
with open('star_war_poster.jpg', 'wb') as f:
    f.write(image.content) # writing the picture

