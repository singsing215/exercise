import requests
from bs4 import BeautifulSoup
import pandas as pd


movie = 'https://www.imdb.com/chart/moviemeter/?ref_=nv_mv_mpm' 
html = requests.get(movie) # connect to the server 
#print(html.text)

bs = BeautifulSoup(html.text, 'lxml') # manage tags in HTML document

table = bs.find('tbody', {'class': 'lister-list'})
movie_list = table.find_all('tr')


movie_name_list=[]
release_year_list=[]
rank_moving_list=[]
movie_rate_list=[]
for ml in movie_list:
    movie_name = ml.find('td', {'class': 'titleColumn'}).find('a').get_text()
    movie_name_list.append(movie_name)
    release_year = ml.find('span', {'class': 'secondaryInfo'}).get_text()
    release_year_list.append(release_year)
    rank_moving = ml.find('span', {'class': 'global-sprite'})
    rank_moving_list.append(rank_moving)
    movie_rate = ml.find('td', {'class': 'ratingColumn imdbRating'}).get_text().strip()
    movie_rate_list.append(movie_rate)
    

test=pd.DataFrame({'movie name':movie_name_list,'release year':release_year_list,'rank moving':rank_moving_list,'movie rate':movie_rate_list})
test.to_csv('C:\\Users\\SingSing\\Documents\\GitHub\\exercise\\extract-top-100-movies\\test.csv')






