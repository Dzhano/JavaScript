function addAndSubstract(n1, n2, n3){
    function sum(n1, n2){
        return n1 + n2;
    }
    
    function substract(n1, n3){
        return n1 - n3
    }

    return substract(sum(n1, n2), n3);
}