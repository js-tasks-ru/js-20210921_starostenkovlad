/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
    let newObj = Object.assign({}, obj);
  	
    for (const [key, value] of Object.entries(newObj)) {
      	let counter = 0;
        for (let field in fields) {
            if (fields[field] === key) delete newObj[`${key}`];
            console.log(1);
          }
        
    }
  	if(JSON.stringify(newObj) === JSON.stringify(obj)) return obj;
    	else return newObj;
};


