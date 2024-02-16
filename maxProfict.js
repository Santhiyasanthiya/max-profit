let unit = 13;
let maxtotal = 0;
let maxsol = [];
let buildtime = [4,5,10];
let eachProfit= [1000,1500,3000];
let sol = {
    "P":0,
    "T":0,
    "C":0
}

let maxProfit = (flag) => {
    let unitcopy = unit;
    let profit = 0;
    while(unitcopy>buildtime[0]){
        if(flag==3){
            if(unitcopy>buildtime[2]){
                unitcopy-=buildtime[2];
                profit+=(eachProfit[2]*unitcopy);
                sol.C+=1;
            }else if(unitcopy>buildtime[1]){
                unitcopy-=buildtime[1];
                profit+=(eachProfit[1]*unitcopy);
                sol.T+=1;
            }else{
                unitcopy-=buildtime[0];
                profit+=(eachProfit[0]*unitcopy);
                sol.P+=1;
            }
        }else if(flag==2){
            if(unitcopy>buildtime[1]){
                unitcopy-=buildtime[1];
                profit+=(eachProfit[1]*unitcopy); 
                sol.T+=1;
            }else{
                unitcopy-=buildtime[0];
                profit+=(eachProfit[0]*unitcopy);
                sol.P+=1;
            }
        }else{
            unitcopy-=buildtime[0];
            profit+=(eachProfit[0]*unitcopy);
            sol.P+=1;
        }
    }
    if(maxsol.includes(sol)){
        return;
    }
    if(maxtotal<profit){
        maxtotal=profit;
        maxsol=[]
        maxsol.push(sol);
    }
    sol = {
    "P":0,
    "T":0,
    "C":0
}
}

maxProfit(3);
maxProfit(2);
maxProfit(1);
console.log("Earnings: "+maxtotal);
console.log("Solutions");
for(let i=0;i<maxsol.length;i++){
    console.log("P: "+maxsol[i].P+" T: "+maxsol[i].T+" C: "+maxsol[i].C);
}
