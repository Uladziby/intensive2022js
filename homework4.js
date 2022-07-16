function concatStrings(str, separator = null) {
    let resultStr = '';
    if (!str) { return () => console.log('incoorect input data') }

    function concat(strInner) {
        if (typeof strInner != 'string') {
            return () => resultStr
        }
        typeof separator === 'string' && resultStr.length > 0 ? resultStr += separator + strInner : resultStr += strInner;
        return concat
    }
    return concat(str)
}