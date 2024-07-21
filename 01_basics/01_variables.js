const accountId = 12345
let accountEmail = "Swap@07"
var accountPassword = "2456"
accountcity = "Pune"

console.log(accountId)
/*
Prefer not to use var 
because of issue in block scope & functional scope
*/



accountEmail = "swap_gmail.com"
accountPassword = "767676"
accountcity = "Noida"

console.table([accountId , accountEmail , accountPassword , accountcity])