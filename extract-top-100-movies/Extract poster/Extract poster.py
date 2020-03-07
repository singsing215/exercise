import requests
from bs4 import BeautifulSoup



movie = 'https://www.imdb.com/chart/moviemeter/?ref_=nv_mv_mpm' 
html = requests.get(movie) # connect to the server 
#print(html.text)

bs = BeautifulSoup(html.text, 'lxml') # manage tags in HTML document

table = bs.find('tbody', {'class': 'lister-list'})
movie_list = table.find_all('tr')


for ml in movie_list:
    movie_name = ml.find('td', {'class': 'titleColumn'}).find('a').get_text()
    
    movie_id= ml.find('td', {'class': 'titleColumn'}).find('a')['href']
    #print(movie_id)
    movie_link = 'http://www.imdb.com' + movie_id 
    print(movie_link)
    new = requests.get(movie_link)
    bs = BeautifulSoup(new.text, 'lxml')
    poster = bs.find('div', {'class': 'poster'}).find('a').find('img')
    img_link = poster['src']
    image = requests.get(img_link)
    name = movie_name + '.jpg'
    with open(name, 'wb') as f:
        f.write(image.content) # writing the picture
print('Poster Output Success')
















