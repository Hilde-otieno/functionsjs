function names(array){
    const names = ["Megan", "Agnes", "Nyabang", "Mwanasha"]

    console.log(names.reverse().sort());
}
names();


function check(arr1){
    let num = arr1;
    for(let a= 0;  arr1; a++){
        if(arr1[a]<0){
            console.log('negative');
            return {return: 'positive'};
        }else if(arr1[a]>0){
            console.log('positive');
            return {return: 'positive'};
        }else{
            console.log('zero');
            return{return:'zero'}
        }
        };
    }
    check([7,-23,56,-4,69]);


function sortEmployeesBySalary(array){
    const employees = [{id1: "Shalom", salary:80000},
                       {id2: "Cynthia", salary:50000},
                       {id3: "Rachel", salary:70000},
];
    const sortEmployees = sortEmployeesBySalary(employees);
    console.log(sortEmployees);
}
console.log(sortEmployeesBySalary);

function multiplyByTwo(number){
    let nums = number;
    number.forEach((num)=>
        {console.log(num*2);
    })
}
multiplyByTwo([6,9,2,5]);

