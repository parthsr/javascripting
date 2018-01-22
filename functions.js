
console.log(banana);
var banana;
console.log(eat(banana = 'banana'));
function eat(food)
{
  (function e()
  {
    console.log(food);
    food = "kk";
    console.log(food);

  })();
return food + ' tasted really good.';
}
console.log(banana);
