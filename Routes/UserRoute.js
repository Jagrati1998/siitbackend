const express = require("express");

const {
    getAllUsers,
    addUser,
    getUserById,
  
    updateUserById,
    deleteUserById
   
    
   
} = require("../controllers/UserController");

const router = express.Router();
router.route("/").get(getAllUsers).post(addUser);
router.route("/:id/:name").get(getUserById);
router.route("/:id").put(updateUserById).delete(deleteUserById);




module.exports = router;