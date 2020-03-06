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

