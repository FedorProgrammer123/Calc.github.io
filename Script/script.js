var field = document.getElementById('fieldenter');
var seven = document.getElementById('seven');
var eight = document.getElementById('eight');
var nine = document.getElementById('nine');
var four = document.getElementById('four');
var five = document.getElementById('five');
var six = document.getElementById('six');
var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var zero = document.getElementById('zero');
var tochka = document.getElementById('tochka');
var equiv = document.getElementById('equiv');
var plus = document.getElementById('plus');
var minus = document.getElementById('minus');
var umn = document.getElementById('umn');
var del = document.getElementById('del');
var clear = document.getElementById('clear');
one.addEventListener('click',function(event){
    field.value += 1;
});
two.addEventListener('click',function(event){
    field.value += 2;
});
three.addEventListener('click',function(event){
    field.value += 3;
});
four.addEventListener('click',function(event){
    field.value += 4;
});
five.addEventListener('click',function(event){
    field.value += 5;
});
six.addEventListener('click',function(event){
    field.value += 6;
});
seven.addEventListener('click',function(event){
    field.value += 7;
});
eight.addEventListener('click',function(event){
    field.value += 8;
});
nine.addEventListener('click',function(event){
    field.value += 9;
});
zero.addEventListener('click',function(event){
    field.value += 0;
});
plus.addEventListener('click',function(event){
    field.value += '+';
});
minus.addEventListener('click',function(event){
    field.value += '-';
});
umn.addEventListener('click',function(event){
    field.value += '*';
});
del.addEventListener('click',function(event){
    field.value += '/';
});
tochka.addEventListener('click',function(event){
    field.value += '.';
});
clear.addEventListener('click',function(event){
    field.value = '';
});
equiv.addEventListener('click',function(event){
    var res = eval(field.value);
    field.value = res;
});