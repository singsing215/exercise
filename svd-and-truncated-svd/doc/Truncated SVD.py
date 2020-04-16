import numpy as np
import xlrd
from scipy.linalg import svd 
import pandas as pd
from pandas import ExcelWriter



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
print('\n X = \n', X[0:4]) 
print('\n q = \n', X[4:5]) 

U, s, VT = svd(X)
# Truncated SVD: to 2 dim 
k=2
recovered_X= U[:,:k].dot(np.diag(s)[:k,:k]).dot(VT [:k, :])
print("\n X_%d = \n" %k , recovered_X[0:4]) 
print("\n q_%d = \n" %k , recovered_X[4:5]) 


# output
writer = pd.ExcelWriter('Truncated SVD_result.xlsx')
pd.DataFrame(recovered_X).to_excel(writer, 'Truncated SVD')
writer.save()
print('File Output Success')
