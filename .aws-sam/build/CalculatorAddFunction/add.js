
async function add(x,y){
    //await new Promise(resolve => setTimeout(resolve, 10000));
    return (x+y);
}

exports.handler = async (event) => {
    console.log(event);
    var x = event['pathParameters']['x']
    var y = event['pathParameters']['y']
    
    var z = await add(Number(x), Number(y));
    console.log(z)
    
    return z;
};
