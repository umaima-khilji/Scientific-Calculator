function getNum(num){
    console.log(num)
    document.getElementById('result').value+=num;
}

function clearSrc(){
    document.getElementById('result').value="";
}

function removeNum(){
    var res = document.getElementById('result').value;
    document.getElementById('result').value = document.getElementById('result').value.slice(0,res.Length-1)
  //  console.log(document.getElementById('result').value.slice(0,res.Length-1));
}

function getAns(){
    document.getElementById('result').value = eval(document.getElementById('result').value)
    console.log(document.getElementById('result').value)
}

// function getNum(){
    
// }

function percentage(num, per)
{
  return (num/100)*per;
}
console.log(percentage)