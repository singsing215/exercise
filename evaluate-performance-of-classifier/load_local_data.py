from twenty_newsgroups import load_20newsgroups
import re
import os
import math
import pandas as pd
from pandas import ExcelWriter

# The reference of the data set 20 Newsgroups can be found here:
# http://qwone.com/~jason/20Newsgroups/
train_data = load_20newsgroups(data_home='./', subset='train')
test_data = load_20newsgroups(data_home='./', subset='test')

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


doc_name_list = []
for i in range(2249):
    print('Doc Number %d' % i)
    print('Target Index: %d' % train_data.target[i])#Target Index
    print('Doc Type: %s' % train_data.target_names[train_data.target[i]])#Doc Type
    print('Doc Name: %s' % train_data.filenames[i])

    print('')
    print(train_data.data[i])
    print('')
'''

def term_freq(word_list):  # words in a document
    word_dict = {}
    for w in word_list:
        if w in word_dict:
            word_dict[w] += 1
        else:
            word_dict[w] = 1
    # calculate #words in total and then calculate the frequency
    word_num = sum(word_dict.values())
    for w in word_dict.keys():
        word_dict[w] /= word_num
    return word_dict


def inv_doc_freq(term_set, doc_name2word_list):
    doc_num = len(doc_name2word_list)
    idf_dict = {}
    # term in all doc
    for w in term_set:
        doc_count = 0
        # find the appearing frenquency among all documents
        for word_list in doc_name2word_list.values():
            if w in word_list:
                doc_count += 1
        idf_dict[w] = math.log(doc_num / doc_count)
    return idf_dict


if __name__ == '__main__':
    doc_name2word_list = {}
    doc_name2tf_dict = {}
    term_set = set()
    '''read all txt files name from directory rootdir
    All the txt files should be put under the same directory as this python file'''
    #rootdir = os.path.dirname(os.path.abspath(__file__))
    doc_name_list = [item for item in train_data.filenames]
    #print(doc_name_list)
    content_list = [line for line in train_data.data]
    content = str(content_list)
    content = content.strip()
    content = re.sub('[^A-Za-z\s]', ' ', content)
    content = content.lower()
    word_list = content.split()
    doc_name2word_list = set(word_list)
    doc_name2tf_dict = term_freq(word_list)
    print(doc_name2tf_dict)
    '''
    term_set = term_set | set(word_list)

    #idf_dict = inv_doc_freq(term_set, doc_name2word_list)
    print(idf_dict)

    
    content = ''
    for line in train_data.data:
        content += line
    
    
    content = content.strip()
    content = re.sub('[^A-Za-z\s]', ' ', content)
    content = content.lower()
    word_list = content.split()
    doc_name2word_list = word_list
    doc_name2tf_dict = term_freq(word_list)
    # prepare the term list from all docs
    term_set = term_set | set(word_list)
    idf_dict = inv_doc_freq(term_set, doc_name2word_list)
    term_list = list(term_set)
    print(term_list)
    
    tf_idf = pd.DataFrame(columns=doc_name_list, index=term_list)
    for (doc_name, word_list) in doc_name2word_list.items():
        for w in term_set:
            if w in word_list:
                tf_idf.loc[w, doc_name] = doc_name2tf_dict[doc_name][w] * idf_dict[w]
            else:
                tf_idf.loc[w, doc_name] = 0

    # output
    writer = ExcelWriter('tfidf_result.xlsx')
    tf_idf.to_excel(writer, 'tfidf')
    writer.save()
    print('File Output Success')
    '''














