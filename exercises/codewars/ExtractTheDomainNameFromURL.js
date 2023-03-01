// Write a function that when given a URL as a string, parses out just
// the domain name and returns it as a string. For example:
function domainName(url){
    //your code here
    let pattern = /(\/\/)?(www.)?(?<domain>[a-z\-_]+)\./i
    return url.match(pattern).groups['domain']
}

console.log(domainName("http://google.com"), "google");
console.log(domainName("http://google.co.jp"), "google");
console.log(domainName("www.xakep.ru"), "xakep");
console.log(domainName("https://youtube.com"), "youtube");