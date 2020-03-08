# -*- coding: utf-8 -*-
import re
import os
import math
import pandas as pd
from pandas import ExcelWriter
from twenty_newsgroups import load_20newsgroups

train_data = load_20newsgroups(data_home='./', subset='train')
test_data = load_20newsgroups(data_home='./', subset='test')

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


doc_name_list = []
for i in range(2249):
    doc_name = train_data.filenames[i]
    doc_name_list.append(doc_name)


if __name__ == '__main__':
    term_set = set()
    doc_name2word_list = {}
    
    doc_name2tf_dict = {}
    '''read all txt files name from directory rootdir
    All the txt files should be put under the same directory as this python file'''
    rootdir = os.path.dirname(os.path.abspath(__file__))
    for doc_name in doc_name_list:
        content = ''
        for line in train_data.data :
            content += line
        content = content.strip()
        content = re.sub('[^A-Za-z\s]', ' ', content)
        content = content.lower()
        word_list = content.split()
        doc_name2word_list[doc_name] = word_list
        doc_name2tf_dict[doc_name] = term_freq(word_list)
        # prepare the term list from all docs
        term_set = term_set | set(word_list)
    idf_dict = inv_doc_freq(term_set, doc_name2word_list)
    term_list = list(term_set)
    
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




