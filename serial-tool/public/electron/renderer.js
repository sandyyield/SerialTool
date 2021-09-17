var edge = require('electron-edge-js');

const fun = () =>{
    console.log('hello');
    const func = edge.func({
        assemblyFile: './public/Resources/PrintDemo.dll',
        typeName: 'PrintDemo.Class1',
        methodName: 'PrintView' // This must be Func<object,Task<object>>
    });


    func(null,(err,res)=>{
        if(err)
        throw err;
        console.log(res);
    })
}

window.fun = fun;