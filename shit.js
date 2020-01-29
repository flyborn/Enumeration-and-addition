var mass = [];
var person = {
        name : "vlad",
        age: 4,
        family:[
         {
          brothers:[
          {
           name : "Yarik",
           age: 2,
          },
          {
           name : "Andrey",
           age: 1,
           friends:[
            {
             name: 'sssss',
             age: 33
            }
           ]
          },
         ],
         sisters: [],
         mother: {
          name : "Katya",
          age: 15,
          friends:[
           {
            name: 'sssss1',
            age: 3,
            friends:[
             {
              name: 'Katya',
              age: 31
             }
            ]
           }
          ]
         },
         father:{
          name : "Roman",
          age: 16,
         }
         }
        ]
       };

function Search(tru) {
        var i;
        for (var age in tru) {
          i = tru[age];
          if (typeof i === 'number') {
            console.log(i);
            mass.push(i)
          } else if (typeof i === 'object') {
            Search(i);
          }
        }
      }
      Search(person);
      console.log(mass);

function arraySum(array){
        var sum = 0;
        for(var i = 0; i < array.length; i++){
            sum += array[i];
            }
        console.log(sum);
        }
        arraySum(mass);
        