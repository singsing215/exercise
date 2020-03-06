import requests
from bs4 import BeautifulSoup



movie = 'https://www.imdb.com/chart/moviemeter/?ref_=nv_mv_mpm' 
html = requests.get(movie) # connect to the server 
#print(html.text)

bs = BeautifulSoup(html.text, 'lxml') # manage tags in HTML document

table = bs.find('tbody', {'class': 'lister-list'})
movie_list = table.find_all('tr')

#print(movie_list)
'''
def rename():
    for w in rank_moving:
        if w == '<span class="global-sprite titlemeter up"></span>':
            w = 'up'
        elif w == '<span class="global-sprite titlemeter down"></span>':
            w = 'down'
        else : w = 'unchange'
    return w
'''

for ml in movie_list:
    #movie_id = ml['data-tconst']
    #name = movie_list.find('span', {'class': 'secondaryInfo'})
    movie_name = ml.find('td', {'class': 'titleColumn'}).find('a').get_text()
    print(movie_name)
    release_year = ml.find('span', {'class': 'secondaryInfo'}).get_text()
    print(release_year)
    rank_moving = ml.find('span', {'class': 'global-sprite'})
    print(rank_moving)
    movie_rate = ml.find('td', {'class': 'ratingColumn imdbRating'}).get_text().strip()
    print(movie_rate)
#print(movie_list)
