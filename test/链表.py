class ListNode(object):
    def __init__(self,val=None,next=None):
        self.val = val
        self.next = next

def f(array):
    tem_node = ListNode()
    node = ListNode()
    for i in array:       
        if not tem_node.val:
            tem_node.val =i
            node = tem_node
        else:
            tem_node.next = ListNode(i)
            tem_node = tem_node.next
    return node

############################################################################################

# 反转链表
def reverseList(head):
    if not head: return None
    pre = None
    while head:
        head.next, pre, head = pre, head, head.next
    return pre
# res=reverseList(f([1,2,3,4,5]))
# print(res.val, "->", res.next.val, "->", res.next.next.val, "->", res.next.next.next.val, "->", res.next.next.next.next.val)

# 合并两个有序链表
def mergeTwoLists(l1, l2):
    if l1 is None:
        return l2
    elif l2 is None:
        return l1
    elif l1.val < l2.val:
        l1.next = mergeTwoLists(l1.next, l2)
        return l1
    else:
        l2.next = mergeTwoLists(l1, l2.next)
        return l2
# res=mergeTwoLists(f([1,2,4]),f([1,3,4]))
# print(res.val, "->", res.next.val, "->", res.next.next.val, "->", res.next.next.next.val, "->", res.next.next.next.val, "->", res.next.next.next.val)

# 链表的中间结点  
def middleNode(head):
    A = [head]
    while A[-1].next:
        A.append(A[-1].next)
    return A[len(A) // 2]
# res=middleNode(f([1,2,3,4,5]))
# print(res.val, "->", res.next.val, "->", res.next.next.val)

# 链表中倒数第k个节点
def getKthFromEnd(head, k):
    res = []
    while head:
        res.append(head)  #将节点存入列表中
        head = head.next
    return res[-k]
# res=getKthFromEnd(f([1,2,3,4,5]),2)
# print(res.val, "->", res.next.val)

# 回文链表
def isPalindrome(head):
    res = []
    while head:
        res.append(head.val)
        head = head.next
    return  res==res[::-1]  #反转
# print(isPalindrome(f([1,2])))

# 删除排序链表中的重复元素
def deleteDuplicates(head):
    if head:
        head.next = deleteDuplicates(head.next)
        if head.next and head.val == head.next.val: #head.next TRUE, head.val == head.next.val
            return head.next
        else: 
            return head
# res=deleteDuplicates(f([1, 2, 3, 3, 2, 1]))
# print(res.val, "->", res.next.val, "->", res.next.next.val)

# 移除链表元素
def removeElements(head, delete):
    res=ListNode()
    res.next=head
    pre=res
    cur=res.next
    while cur:
        if cur.val==delete:
            pre.next=cur.next
        else:
            pre=pre.next
        cur=cur.next
    return res.next
# res=removeElements(f([1,2,6,3,4,5,6]),6)
# print(res.val, "->", res.next.val, "->", res.next.next.val, "->", res.next.next.next.val, "->", res.next.next.next.next.val)
