import numpy as np
import xlrd #reading excel


data = xlrd.open_workbook('C:\\Users\\SingSing\\Documents\\tfidf_data.xlsx') #Read data
table = data.sheets()[0] #Obtained in index order
h= table.ncols#The number of columns in the table

#Use the following method to read the table into the matrix a at once
a1=table.col_values(0)#Read the first column of code data
for i in range (1,h): #Since the previous row has the first column, you only need to start reading from the second column
   a0=table.col_values(i)#Read the first column of code data  
   a1=np.vstack((a1,a0))#Merge two columns, merge them horizontally, transpose them
a=np.transpose(a1)#matrix transpose
print("TF-IDF =\n",a)
b=np.hsplit(a, 21)
#print (b)
A=b[0]
print("Dot product similarity =\n",np.dot(A.transpose(), a))
print("Cosine similarity =\n",np.dot(A.transpose(), a)/(np.linalg.norm(A.transpose())*np.linalg.norm(a)))
