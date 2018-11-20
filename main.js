function multiplyInputRange(from, to){
    if(checkStartLessOrEqualEnd(from,to) || !checkStartAndEndinValidRange(from, to) || from==null || to==null){
        return null;
    }
    else{
        var tmpLastRowBoxLengthCount = [];
        var tmpString="";
        var resultString="";
        for(var i =from; i<=to; i++){
            tmpString = i+"*"+to+"="+i*to+"  ";
            tmpLastRowBoxLengthCount.push(tmpString.length);
        }
        for(var i = from; i<=to; i++){
            for(var j = from ; j<=to; j++){
                if(i==j){
                    resultString += j+"*"+i+"="+j*i+"\n";
                    break;
                }
                else if(j==to){
                    resultString += j+"*"+i+"="+j*i;
                }
                else{
                    var tmp = j+"*"+i+"="+j*i+"  ";
                    var padSpace = tmpLastRowBoxLengthCount[j-from]-tmp.length;
                    for(var k=0; k<padSpace; k++){
                        tmp+=" ";
                    }
                    resultString+=tmp;
                }
                
            }
            
        }
        return resultString; 
    }
    
}

function checkStartLessOrEqualEnd(from, to){
    if(from>to || from==to){
        return true;
    }
    else{
        return false;
    }

}
function checkStartAndEndinValidRange(from, to){
    if(from>1000 || from<1 || to>1000 || to<1){
        return false;
    }
    else{
        return true;
    }
}


module.exports = multiplyInputRange;