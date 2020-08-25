// 用户名正则，4到16位（字母，数字，下划线，减号）
var isUsername = /^[a-zA-Z0-9_-]{4,16}$/;
// console.log(isUsername.test("caibaojian"));

// 密码强度正则，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
var isPassword = /^.*(?=.{6,})(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*? ]).*$/;
// console.log(isPassword.test("Hk136623#"));

//Email正则
var isEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
// console.log(isEmail.test('19413238@life.hkbu.edu.hk'));

//QQ号正则，5至11位
var isQq = /^[1-9][0-9]{4,10}$/;
// console.log(isQq.test("65974040"));

// # 首字母，至少一字母一数字，只能字母数字 A1
function f(x) {
    if (/[A-Za-z]/.test(x[0])) {
        if (/^.*(?=.*\d).*$/.test(x)) {
            return true
        } else {
            return false
        }
    } else {
        return false
    }
}
console.log(f('aa22'))


////////////////转换
arr.length
    //len(arr)

Math.floor(num) //floor向下取整int, round四舍五入, ceil向上取整
    // int(num)

a = String(123)
b = parseInt("1234blue")
console.log(typeof b)