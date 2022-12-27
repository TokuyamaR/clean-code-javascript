// BAD:同じ意味合いの単語を複数使わない。違う処理が行われているのか考慮しないといけなくなる
const removeHeader = () => {};
const deleteFooter = () => {};

// GOOD:
const removeHeader = () => {};
const removeFooter = () => {};
