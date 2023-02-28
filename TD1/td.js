const fs = require('fs'); 
let rawdata = fs.readFileSync('user.json');
let users = JSON.parse(rawdata);
var i;
let donnees=[];

for(i=0;i<users.length;i++){

    const filtered = donnees.filter((compRes)=> compRes.company == users[i].company);
    
    switch (filtered.length){
        case(-1):
            donnees.push({'company' : users[i].company, 'count' : 1});
            break;
        default :
            donnees[index].count++;
            break;// test huu
    }   
}