const bp = {
    small: 300,
    large: 700
  };
  
  const mq = n => {
    const bpArray = Object.keys(bp).map(key => [key, bp[key]]);
  
    const [result] = bpArray.reduce((acc, [name, size]) => {
      if (n === name) return [...acc, `@media (min-width: ${size}px)`];
      return acc;
    }, []);
  
    return result;
  };

  
  export default mq