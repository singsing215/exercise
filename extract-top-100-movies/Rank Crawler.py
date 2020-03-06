import requests
from bs4 import BeautifulSoup



movie = 'https://www.imdb.com/chart/moviemeter/?ref_=nv_mv_mpm' 
html = requests.get(movie) # connect to the server 
#print(html.text)

bs = BeautifulSoup(html.text, 'lxml') # manage tags in HTML document

# crawl movie description 
desc = bs.find_all('td', {'class': 'titleColumn'})
print(desc)



