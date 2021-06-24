var findJudge = function(n, trust) {

    let check = new Array(n).fill(true);
    let belief = new Array(n).fill(0);
    let judge;

    for (let i=0; i<trust.length; i++){
        check[trust[i][0]-1] = false;
        belief[trust[i][1]-1]++;
    }

    for (let i=0; i<check.length; i++){
        if (check[i] === true){
            judge = i;
            break;
        }   
    }
    
    if (belief[judge]+1 === n){
        return judge+1;
    }
    else {
        return -1;
    }
};
