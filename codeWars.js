var uniqueInOrder=function(iterable){

    return [...iterable].filter((a, i) => a !== iterable[i-1])

    // let uniques = []
    // if(typeof(iterable)=== 'string') {
    //     iterable.split('').map((item)=> {
    //         if(!(uniques[uniques.length-1]==item)){
    //           uniques.push(item);
    //         }
    //       })
        
    // }
    // iterable.map((item)=> {
    //   if(!(uniques[uniques.length-1]==item)){
    //     uniques.push(item);
    //   }
    // })
    // return uniques;
  }


  function addBinary( a, b ){ 
    return (a + b).toString(2)
    // binary = '';
    // while ( sum > 0 ) { 
    //   binary = ( sum % 2 ) + binary;
    //   console.log('.....', binary);
      
    //   sum = Math.floor( sum / 2 );
    // } 
    // return binary; 
    }

    function findEvenIndex(arr) {
        console.log(arr[7-1]);
        
      let leftSum = 0;
      let rightSum = 0;

      for (i = 0; i <= arr.lenth; i++) {
          leftSum = leftSum + arr[arr.length-i]
          rightSum = rightSum + arr[i]
      }
      console.log(`Left sum ===> ${leftSum}`);
      console.log(`Right sum ===> ${rightSum}`);

    }
  
 findEvenIndex([1,2,3,4,3,2,1]);

  