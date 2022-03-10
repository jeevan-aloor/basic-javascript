/*
input = 10
Output = 2,4,6,8,10

input = 4
output = 2,4

input = 20
output = 2,4,6,8,10,12,14,16,18,20
*/

/*
input = 10
output = 1,2,3,4,5,6,7,8,9,10
*/
/*
const n = 10;
for (i = 0; i <= n; i++) {
  console.log(i);
}

const m = 10;
for (i = 0; i <= m; i++) {
    if(i%2==0){
console.log("even",i);
    }
  
}
*/ /*
const c=20;
for(i=1;i<=c;i++){
    console.log(i*3);
}*/
/*
n=4

m=20
*/
// function tables(n,m){
//     console.log("maggi",n);
//     console.log("maggi varig",m);
//     for(i=1;i<=m;i++)
//     console.log(n*i);
// }
// tables(4,20)

// tables(5,4)

// const a = 20;
// for(i=1;i<=a;i++){
//     console.log(i*4);
// }
// const k = 40;
// for(i=1;i<=k;i++){
//     console.log(i*5);
// }

// const l = 50;
// for(i=1;i<=l;i++){
//     console.log(i*6);
// }

function maggi(n, m) {
  const maggires = [];
  for (i = 1; i <= m; i++) {
    maggires.push(n * i);
  }
  return maggires;
}
const res = maggi(4, 20)

const arr = [20,34,56,87]


for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}