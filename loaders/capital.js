// loader2，大写
module.exports = function (source, other) {
    console.log('source: ', source)
    console.log('other: ', other)
    // src = src.toUpperCase()
    // 希望将处理后的结果（不止一个）返回给下一个 Loader
    this.callback(null, source, other);
}