function multiplyInputRange(a, b){
    if(a<b && a<=1000 && b<=1000 && a!=null && a!=null && a>=1 && b>=1){
        var from = a;
        var to = b;
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
    else {
        return null;
    }
    
}
module.exports = multiplyInputRange;