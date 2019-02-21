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

  const nameSort = (a,b) => {
    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  // names must be equal
  return 0;}

  let sorted = arr.sort(nameSort);
    console.log ({... sorted});
