var str = 'adfsdfdsaffasfaaaaasfsfasfdsf';
var n = 'a';
var result = 0;
var i = 0;



for (i = 0; i <= str.length; i++) {
    if (str[i] == n) {
        result ++;
    } 
} 
console.log(result);

      

while (i <= str.length) {
    if (str[i] == n) {
        result++;
    } i++;
} 
console.log(result);



do {if (str[i] == n) {
    result++;
    } i++;
} while (i <= str.length);
console.log(result);
  
      

function letterStr() {
    result = 0;
    for (i = 0; i <= str.length; i++) {
        if (str[i] == n) {
            result ++;
        }
    } return result;
}
console.log(letterStr("adfsdfdsaffasfaaaaasfsfasfdsf", "a"));
