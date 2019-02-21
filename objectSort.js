let obj = {
    one:{
        name: 'Diana',
        born: 1373925600000, // Mon, Jul 15 2013
        num: 4,
        sex: 'female'
    },
    two:{

        name: 'Beyonce',
        born: 1366832953000, // Wed, Apr 24 2013
        num: 2,
        sex: 'female'
    },
    three:{
        name: 'Albert',
        born: 1370288700000, // Mon, Jun 3 2013
        num: 3,
        sex: 'male'
    },
    four:{
        name: 'Doris',
        born: 1354412087000, // Sat, Dec 1 2012
        num: 1,
        sex: 'female'
    }
  };

    let arr = Object.values(obj);
    console.log(arr);
    console.log (arr.length);

    function dynamicSort(property) {
      var sortOrder = 1;
      if(property[0] === "-") {
          sortOrder = -1;
          property = property.substr(1);
      }
      return function (a,b) {
          var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
          return result * sortOrder;
      }
  }

  let sorted = arr.sort(dynamicSort('-name'));
    console.log ({... sorted});
