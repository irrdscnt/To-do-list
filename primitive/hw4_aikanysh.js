// 1
var rammstein=['Mein herz brennt','Deutschland','Puppe','Du riechst so gut',
'Haifisch','Sonne','Ohne dich','Rosenrot','Du hast','Seeman']
console.log(rammstein[7])
// 2
var group=['movies',2,null,undefined,true]
console.log(group[4])
// 3
var example=[1,2,3,4,5,[6,7,8,9,['',true,NaN,undefined]]]
console.log(example[5][4][2])

let arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9];
let res = ''
for (let i = 0; i < arr.length; i++) {
res += '-' + arr[i]
}
console.log(res + '-');
