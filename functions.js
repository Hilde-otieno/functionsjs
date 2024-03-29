const names = ["Megan", "Agnes", "Shalom", "Mwanasha"]

function namesSort(arr){
    names.sort((a,b)=>a-b);
    names.reverse();
    return names;
}
