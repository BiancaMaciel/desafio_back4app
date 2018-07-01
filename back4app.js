var myMap = new Map();

function duplicated(string){
    for(var i = 0; i < string.length; i++){
        if(myMap.has(string[i]))
            addValueKey(string[i]);
        else
            myMap.set(string[i], 1);
    }
    print();
}

function addValueKey(valuePosition){
    for (var key of myMap.keys()) {
        if(key === valuePosition){
            var value = myMap.get(valuePosition);
            myMap.set(key,value+=1);
        }
    }
}

function print(){
    myMap.forEach(function(value, key) {
        if(value > 1)
            console.log(key + " : " + value);
    });    
}

var string = 'Programming';
console.log('In the word ' + string + ' the duplicated letters are: ');

duplicated(string);