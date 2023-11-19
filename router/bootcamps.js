const express=require('express')


const{getbootcamps,getbootcamp,postbootcamp,updatebootcamp,deletebootcamp}=require('../controllers/bootcamps')

const router=express.Router()

router.route('/').get(getbootcamps).post(postbootcamp)

router.route('/:id').get(getbootcamp).put(updatebootcamp).delete(deletebootcamp)


module.exports=router