# compute-tf-idf-values-with-bigram-list
Use the corpus in the folder of tfidf to compute a bigram list and use this list as the term list to compute the tf-idf values and output the result to an excel file tfidf_result

# identify-similar-documents-with-similarity
Use the corpus in the folder of tfidf to identify the 5 most similar documents to doc_0.txt ( try both dot product and cosine similarity) and display the document IDs for the two methods

# crawler-to-collect-data
Use the link of Star Wars VIII (http://www.imdb.com/title/tt2527336/) to crawl movie description, poster and extract movie links.

# extract-top-100-movies
a. Extract from the 100 popular movies found at https://www.imdb.com/chart/moviemeter/?ref_=nv_mv_mpm the following items: i) movie name, ii) release year, iii) rank moving “up” or “down” or “no change”, and iv) overall rating. 

b. Export the results as a CSV file.

c. Extract all the summary text and the poster for each movie.

# evaluate-performance-of-classifier
a. Read in the datasets of four newsgroups in a folder named “WI2020_Data”.

b. Compute the td-idf representation for each text sample.

c. Train a Support Vector Machine using the training data for classification.

d. Use test data to evaluate the performance of the classifier in terms of accuracy, precision, recall, F1-score, and confusion matrix.

e. Apply Truncated Singular Value Decomposition to the four datasets and set the truncated dimension of the representation to 5, 10, 20, 50, and 100.

f. Based on the results of e), for each of the dimensions (5, 10, 20, 50, 100), train a Support Vector Machine using the training data and evaluate its performance in term of accuracy using the corresponding test data.

g. Based on the results of f), plot the classification accuracy values given the different dimensions using bar chat. The y-axis should be “Accuracy” and the x-axis should be “Dimension”.

h. Visualize the word cloud for each category.
