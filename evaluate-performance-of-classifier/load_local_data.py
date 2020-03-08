from twenty_newsgroups import load_20newsgroups

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
'''

doc_name_list = []
for i in range(2249):
    print('Doc Number %d' % i)
    print('Target Index: %d' % train_data.target[i])#Target Index
    print('Doc Type: %s' % train_data.target_names[train_data.target[i]])#Doc Type
    print('Doc Name: %s' % train_data.filenames[i])

    print('')
    print(train_data.data[i])
    print('')












