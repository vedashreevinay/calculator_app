
async function subtract(x,y){
    //await new Promise(resolve => setTimeout(resolve, 10000));
    return (x-y);
}

exports.handler = async (event) => {
    console.log(event);
    var x = event['pathParameters']['x']
    var y = event['pathParameters']['y']
    
    var z = await subtract(Number(x), Number(y));
    console.log(z)
    
    return z;
};
