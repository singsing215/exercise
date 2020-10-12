function getQueryArgs(url) {
    var qs = url.length > 0 ? url.substring(url.indexOf("?")).substr(1) : ""
    var args = {}
    var items = qs.length ? qs.split("&") : []
    for (i = 0; i < items.length; i++) {
        var item = items[i].split("=")
        var key = decodeURIComponent(item[0]);
        var value = decodeURIComponent(item[1]);
        if (key.length) {
            args[key] = value;
        }
    }
    return args;
}
console.log(getQueryArgs("www.123.com/path?asdas=123123"));
