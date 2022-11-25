const{ Router }=require("express");
const router=new Router();

const fooService=require("../service/foo.service");

router.get("/",fooService.getEmployees);
router.post("/",fooService.putEmployees);
router.get("/:role",fooService.getEmployeeByRole);
router.put("/:id",fooService.updateEmployeeById);
module.exports=router;