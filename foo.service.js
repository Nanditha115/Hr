var employees=require('./employee.json')

module.exports.getEmployees=async(req,res,next)=>{
    console.log("testing..");
    res.send(employees);
};

module.exports.putEmployees=async(req,res,next)=>{
    var body=req.body;
    console.log(req.body);
    var name=body.name;
    var id=body.id;
    var role=body.role;
    var employee={name:name,id:id,role:role};
    employees.push(employee);
    res.send(employee);
}

module.exports.getEmployeeByRole=async(req,res,next)=>{
    var role=req.params.role;
    var e=employees.find(x=>x.role==role);
    res.send(e);
}

module.exports.updateEmployeeById=async(req,res,next)=>{
    var id=req.params.id;
    var e=employees.find(x=>x.id==id);
    var body=req.body;
    if(body.name){
        e.name=body.name;
    }
    if(body.id){
        e.id=body.id;
    }
    if(body.role){
        e.role=body.role;
    }
    res.send(e);
}
