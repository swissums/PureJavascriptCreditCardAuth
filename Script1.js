// Pure JavaScript source code
// A simple program to take in a string and see if it conforms to Amex/Visa/Mastercard specs
// © Yager Anderson 

var jsonccnum = '{"ccnum1" : "5123000000000000"}'; //Create the JSON File
var ccnum = JSON.parse(jsonccnum); //Parse the JSON to a Javascript Object
var ccnum = ccnum.ccnum1; // Reference the Object Atribute ccnum1
var gstyle = 'color: green;' //Style passed outputs green
var rstyle = 'color: red;' //Style failed outputs red

function main(ccnm) {
    //input string: output console log of various credit card spec rules

    //Flow Control for Rules Please see CardChecker.png for flow control mockup
    if (isNum(ccnm) === false) {
        console.log("%cisNum failed", rstyle)
        return null
    }

    else if (isNum(ccnm) === true) {
        console.log("%cisNum passed", gstyle)

        if (isAmex(ccnm) === true) {

            console.log("%cisAmex passed", gstyle)

            if (AmexLen(ccnm) === true){
                console.log("%cAmexLen passed", gstyle)
                return null
            }
            else {
                console.log("%cAmexLen failed", rstyle)
                return null
            }
            
        }

        else if (isAmex(ccnm) === false) {
            console.log("%cisAmex failed", rstyle)

            if (isVisa(ccnm) === true) {
                console.log("%cisVisa passed", gstyle)

                if (VisaLen(ccnm) === true) {
                    console.log("%cVisaLen passed", gstyle)
                    return null
                }
                else {
                    console.log("%cVisaLen failed", rstyle)
                    return null
                }
            }

            else if (isVisa(ccnm) === false) {
                console.log("%cisVisa failed", rstyle)

                if (isMaster(ccnm) === true) {
                    console.log("%cisMaster passed", gstyle)

                    if (MasterLen(ccnm) === true) {
                        console.log("%cMasterLen passed", gstyle)
                        return null
                    }

                    else {
                        console.log("%cMasterLen failed", rstyle)
                        return null
                    }
                }

                else {
                    console.log("%cisMaster failed", rstyle)
                    return null
                }
            }
        }
    }
}

function isNum(obj) {
    //input string output boolean
    //return true if all char[] in string are positive numbers else false  
    var i = 0
    while (i < obj.length){
        if (obj[i] >= '0' && obj[i] <= '9')
        {
            i++;
            return true
        }
        else
        {
            return false
            break
        }
    }
}
    

function isAmex(obj) {
    //input string ouput boolean
    //return true if first characters in string match Amex credit card specs else false
    if (obj[0] === '3' && (obj[1] === '4' || obj[1] === '7'))
        return true
    else
        return false
}

function AmexLen(obj) {
    //input string ouput boolean
    //return true if string length match Amex credit card specs else false
    if (obj.length === 15)
        return true
    else
        return false
}

function isVisa(obj) {
    //input string ouput boolean
    //return true if first characters in string match Visa credit card specs else false
    if (obj[0] === '4') 
        return true
    else
        return false
}

function VisaLen(obj) {
    //input string ouput boolean
    //return true if string length match Visa credit card specs else false
    if (obj.length === 13 || obj.length === 16)
        return true
    else
        return false
}

function isMaster(obj) {
    //input string ouput boolean
    //return true if first characters in string match Master credit card specs else false
    if (obj[0] === '5' && (obj[1] >= '1' && obj[1] <= '5')) 
        return true
    else
        return false
}

function MasterLen(obj) {
    //input string ouput boolean
    //return true if string length match Master credit card specs else false
    if (obj.length === 16)
        return true
    else
        return false
}

main(ccnum);

/*
//Test Paramaters below

console.log("\n")
main("ahj239"); //Testing isNum Rejection of Errors
console.log("\n")
main("34"); //isAmex & AmexLen != 15 Test
console.log("\n")
main("370980000000000"); //isAmex Test & AmexLen = 15 Test
console.log("\n")
main("40"); //isVisa & VisaLen != 13 or 16 Test
console.log("\n")
main("4782192837940"); //VisaLen = 13 Test
console.log("\n")
main("4782934756281964"); //VisaLen = 16 Test
console.log("\n")
main("51"); //isMaster & MasterLen != 16 Test
console.log("\n")
main("5500987645234567"); //isMaster & MasterLen = 16 Test

*/