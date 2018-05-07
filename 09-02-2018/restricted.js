const age = 19;
const restricted = ( age < 18 ) ? 'yes' :
                   ( age === 18) ? 'not sure' : 
                   'no';
  console.log( restricted );