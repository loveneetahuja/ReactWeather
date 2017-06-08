var names = ['Love','Xyz', 'Jen'];

names.forEach(function(name){
  console.log('forEach', name);
});


names.forEach((name) => {
  console.log('arrow-func', name);
});

names.forEach((name) => console.log(name));

var returnMe = (name) => name + '!';

console.log(returnMe('Loveneet'));

var person = {
  name:'Loveneet',
  greet: function(){
      names.forEach((name) => {
        console.log(this.name + 'says hi to' + name);
      });
  }
};

person.greet();

function add(a,b) {
  return a + b;
}

var addStatement =(a, b) => {
  return a + b;
}

console.log(addStatement(2, 3));

var addExpression = (a, b) => a + b;
console.log(addExpression(1, 9));
