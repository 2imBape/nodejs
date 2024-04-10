import joi from "joi"

const productObject = joi.object({
    Name:joi.string().required().min(6).empty().message({
        "any.required":"Tên tối thiểu 6 kí tự",
        "string.empty":"Tên không đúng định dạng"
    }),
    Age:joi.number().required().min(0).empty().message({
        "any.required":"Không được số âm",
        "number.empty":"Tuổi không đúng định dạng"
    }),
    email:joi.string().required().email().empty().message({
        "any.required":"Email không được để trống",
        "string.empty":"Email không đúng định dạng"
    }),
    Phone:joi.string().required().min(0).max(10).empty().message({
        "any.required":"Số không được để trống",
        "string.empty":"Số không đúng định dạng"
    })
})
export const validate = (req,res,next)=> {
    const{Name,Age,email,Phone} = req.body;
    const{error} = productObject.validate({Name,Age,email,Phone})
    if(error){
        res.status(400).json({message:error.message})
    }else{
        next();
    }
}