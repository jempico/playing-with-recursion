function digital_root(num) {

    function root(n) {
        let str = (`${n}`);
      if (n < 9) 
      {
        return n;
      } 
      else 
      {
        return parseInt(str[0]) + root(parseInt(str.slice(1))) ;
    }  
    }
    
    let currentRoot = root(num);
  
    while (currentRoot > 9) {
    currentRoot = root(currentRoot);
    };
  
    return currentRoot;
    
    }
    
    digital_root(13);