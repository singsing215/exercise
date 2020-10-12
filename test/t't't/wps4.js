function num(str) {
    var set = {};
    var maxNum = -1;
    var maxStr = []; tr
    for(i = 0; i < str.length; i++) {
        var s = str[i];
        if ( set[s] ) set[s]++;
        else set[s] = 1;
    }
    for( key in set) {
        if ( set[key] > maxNum) maxNum = set[key];
        if ( set[key] == maxNum) maxStr.push(key);
    }
    return {maxStr,maxNum}
}
console.log(num("111iiiw2shhfel000"))