import requests




movie = 'https://www.imdb.com/chart/moviemeter/?ref_=nv_mv_mpm' 
html = requests.get(movie) # connect to the server 
print(html.text)
