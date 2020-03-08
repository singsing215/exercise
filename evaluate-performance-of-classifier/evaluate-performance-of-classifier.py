from twenty_newsgroups import load_20newsgroups
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.feature_extraction.text import TfidfTransformer
from sklearn.naive_bayes import MultinomialNB
from sklearn import metrics
import numpy as np
from sklearn.linear_model import LogisticRegression#we use Logisitic Regression11 classifier rather than Naïve Bayes, because the latter cannot handle negative features that are commonly seen after dimension reduction.
from sklearn.decomposition import TruncatedSVD
import matplotlib.pyplot as pt
from wordcloud import WordCloud


train_data = load_20newsgroups(data_home='./', subset='train', categories=['alt.atheism', 'comp.sys.mac.hardware', 'rec.sport.baseball', 'sci.med'])
test_data = load_20newsgroups(data_home='./', subset='test', categories=['alt.atheism', 'comp.sys.mac.hardware', 'rec.sport.baseball', 'sci.med'])
#print(len(train_data.data))#2249
#print(len(test_data.data))#1497

'''
# list out all the categories name in the dataset
print(train_data.target_names)#['alt.atheism', 'comp.sys.mac.hardware', 'rec.sport.baseball', 'sci.med']
print(train_data.target_names[train_data.target[2000]])#sci.med
print(train_data.data[2000])#content
print(train_data.target_names[0])#alt.atheism
print(train_data.target_names[1])#comp.sys.mac.hardware
print(train_data.target_names[2])#rec.sport.baseball
print(train_data.target_names[3])#sci.med
'''

# tokenizing text with sk-learn
count_vect = CountVectorizer()#class
X_train_counts = count_vect.fit_transform(train_data.data)#)#(doc, token): Occurrence--train

# tf–idf can be computed as follows:
tfidf_transformer = TfidfTransformer()#tf–idf function
X_train_tfidf = tfidf_transformer.fit_transform(X_train_counts)#(doc, token): tf–idf--train

# train classifier Naïve Bayes Classifier
clf1 = MultinomialNB().fit(X_train_tfidf, train_data.target)

# Prepare the testing data set
X_test_counts = count_vect.transform(test_data.data)#(doc, token): Occurrence--test
X_test_tfidf = tfidf_transformer.transform(X_test_counts)#(doc, token): tf–idf--test

# use the trained classifier to predict results for testing data set
predicted = clf1.predict(X_test_tfidf)

#test doc classified as train[category]
print('Accuracy: %.3f\n' % np.mean(predicted == test_data.target))#Accuracy: 0.957

# confusion martix
print('Confusion Martix:')
print(metrics.confusion_matrix(test_data.target, predicted))
print('\n')

# classifaction report: precision, recall, f1-score, support
print('Classification Report:')
print(metrics.classification_report(test_data.target, predicted, target_names=test_data.target_names))

#wordcloud
train_data1 = load_20newsgroups(data_home='./', subset='train', categories=['alt.atheism'])
train_data2 = load_20newsgroups(data_home='./', subset='train', categories=['comp.sys.mac.hardware'])
train_data3 = load_20newsgroups(data_home='./', subset='train', categories=['rec.sport.baseball'])
train_data4 = load_20newsgroups(data_home='./', subset='train', categories=['sci.med'])

print('alt.atheism wordcloud:')
wordcloud = WordCloud().generate(str(train_data1.data))
pt.imshow(wordcloud, interpolation='bilinear')
pt.axis('off')
pt.show()

print('comp.sys.mac.hardware wordcloud:')
wordcloud = WordCloud().generate(str(train_data2.data))
pt.imshow(wordcloud, interpolation='bilinear')
pt.axis('off')
pt.show()

print('rec.sport.baseball wordcloud:')
wordcloud = WordCloud().generate(str(train_data3.data))
pt.imshow(wordcloud, interpolation='bilinear')
pt.axis('off')
pt.show()

print('sci.med wordcloud:')
wordcloud = WordCloud().generate(str(train_data4.data))
pt.imshow(wordcloud, interpolation='bilinear')
pt.axis('off')
pt.show()

#bar chart
for n_components in [5,10,20,50,100]:
    svd = TruncatedSVD(n_components, n_iter=25, random_state=12)#n_components:dimension of reduced vectors 
    X_train = svd.fit_transform(X_train_counts)
    X_test = svd.transform(X_test_counts)
    clf2 = LogisticRegression().fit(X_train, train_data.target)
    predicted2 = clf2.predict(X_test)
    accurancy = np.mean(predicted2 == test_data.target)
    print('Accuracy: %.3f\n' % np.mean(predicted2 == test_data.target))
    pt.plot(n_components,accurancy, "ro-"),
    pt.bar(n_components,accurancy),
    pt.xlabel("K - Dimension"),
    pt.ylabel("Accuracy")







