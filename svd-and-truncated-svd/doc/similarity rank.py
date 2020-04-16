import numpy as np
import xlrd


data = xlrd.open_workbook('C:\\Users\\SingSing\\Documents\\GitHub\\SVD-and-Truncated-SVD\\tfidf\\tfidf_result.xlsx')
table = data.sheets()[0]

start=1  #start row
end=6  #end row
 
rows=end-start

list_values=[]
for x in range(start,end):
    values=[]
    row =table.row_values(x)
    for i in range(1,11):
        values.append(row[i])
    list_values.append(values)
X=np.array(list_values)
x=X[0:4]
q=X[4:5]
#print('\n X = \n', x) 
#print('\n q = \n', q) 

print("Dot product similarity =\n",np.dot(x, q.transpose()))
print("Cosine similarity =\n",np.dot(x, q.transpose())/(np.linalg.norm(x)*np.linalg.norm(q.transpose())))
