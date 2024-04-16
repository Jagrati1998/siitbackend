/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("(__webpack_require__(/*! dotenv */ \"dotenv\").config)();\nconst express = __webpack_require__(/*! express */ \"express\");\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst userRouter = __webpack_require__(/*! ./routes/UserRouter */ \"./routes/UserRouter.js\");\nconst cors = __webpack_require__(/*! cors */ \"cors\");\n\nconst app = express();\n\n// Middlware\napp.use(\n  cors({\n    origin: \"*\",\n  })\n);\napp.use(express.json());\napp.use(`/api`, userRouter);\n\napp.listen(3001, () => {\n  console.log(\"Application Serving at Port 3001\");\n});\n\n// Mongo DB Connection\nmongoose.connect(\n  `mongodb://${process.env.Mongo_IP}/${process.env.MOngo_DB}`,\n  {\n    useNewUrlParser: true,\n    useUnifiedTopology: true,\n  },\n  (err) => {\n    if (err) {\n      console.log(err);\n    } else {\n      console.log(\"Connected to MongoDB\");\n    }\n  }\n);\n\nmodule.exports = app;\n\n\n//# sourceURL=webpack://demo-backend/./app.js?");

/***/ }),

/***/ "./controllers/UserController.js":
/*!***************************************!*\
  !*** ./controllers/UserController.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("const userService = __webpack_require__(/*! ../services/UserService */ \"./services/UserService.js\");\nconst User = __webpack_require__(/*! ../modals/User */ \"./modals/User.js\");\nexports.getAllUsers = async (req , res) => {\n    try {\n        const users = await userService.getAllUsers();\n        res.json(users);\n      } catch (err) {\n        res.status(500).json({ error: err.message });\n      }\n};\n\nexports.addUser = async (req , res) => {\n  \n    try {\n        const user = await userService.addUser(req.body);\n        res.json({status: \"success\"});\n      } catch (err) {\n        res.status(500).json({ error: err.message });\n      }\n};\n\n\nexports.getUserById = async (req , res) => {\n    try {\n        const user = await userService.getUserById(req.params.id,req.params.name);\n        res.json(user);\n      } catch (err) {\n        res.status(500).json({ error: err.message });\n      }\n};\n\nexports.deleteUserById = async (req , res) => {\n    try {\n        const user = await userService.deleteUserById(req.params.id);\n        res.json({status: \"success\"});\n      } catch (err) {\n        res.status(500).json({ error: err.message });\n      }\n};\n\n\n\nexports.updateUserById = async (req , res) => {\n    try {\n        const user = await userService.updateUserById(req.params.id, req.body);\n        res.json({status: \"success\"});\n      } catch (err) {\n        res.status(500).json({ error: err.message });\n      }\n};\n\n\n\n\n\n\n//# sourceURL=webpack://demo-backend/./controllers/UserController.js?");

/***/ }),

/***/ "./modals/User.js":
/*!************************!*\
  !*** ./modals/User.js ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst Schema = mongoose.Schema;\n\nconst userSchema = new Schema({\n   \n  registrationNo: {\n        type: String,\n        required: true,\n        unique: true ,\n        \n      },\n   \n}, {strict:false, minimize: false});\n\nmodule.exports = mongoose.model(`${process.env.Mongo_Collection}`, userSchema);\n\n//# sourceURL=webpack://demo-backend/./modals/User.js?");

/***/ }),

/***/ "./routes/UserRouter.js":
/*!******************************!*\
  !*** ./routes/UserRouter.js ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const express = __webpack_require__(/*! express */ \"express\");\n\nconst {\n    getAllUsers,\n    addUser,\n    getUserById,\n  \n    updateUserById,\n    \n   \n    \n   \n} = __webpack_require__(/*! ../controllers/UserController */ \"./controllers/UserController.js\");\n\nconst router = express.Router();\nrouter.route(\"/\").get(getAllUsers).post(addUser);\nrouter.route(\"/:id/:name\").get(getUserById).put(updateUserById);\n\n\n\n\nmodule.exports = router;\n\n//# sourceURL=webpack://demo-backend/./routes/UserRouter.js?");

/***/ }),

/***/ "./services/UserService.js":
/*!*********************************!*\
  !*** ./services/UserService.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("const User = __webpack_require__(/*! ../modals/User */ \"./modals/User.js\");\nconst userService = __webpack_require__(/*! ../services/UserService */ \"./services/UserService.js\");\n\nexports.getAllUsers = async () => {\n    return await User.find();\n};\n\nexports.addUser = async (user) => {\n   \n    // var newuser= new User(user)\n    return await  User.create(user);\n};\nexports.addBulkUser = async (user) => {\n    return await User.create(user);\n};\nexports.addBulkUserQuery = async (user,imsi) => {\n    \n    return await User.create(user);\n    \n};\n\n\n\nexports.getUserById = async (id,name ) => {\n    return await User.findOne({registrationNo:id , studentName:name});\n};\n\nexports.deleteUserById = async (id) => {\n    return await User.findByIdAndDelete(id);\n};\nexports.deleteAllQuery=async()=>{\n  return await User.deleteMany({})\n\n  \n}\n\nexports.deleteUserByImsi = async (id) => {\n    return await User.deleteOne({imsi:id});\n};\n\nexports.searchImsiQuery = async (id) => {\n    return await User.find({ imsi: { $regex: id } });\n};\nexports.searchDeviceTypeQuery = async (id) => {\n    return await User.find({ deviceType: id });\n};\n\nexports.deleteManyUserQuery =  async(imsi) => {\nreturn  await User.find({ }).limit(3).cursor().forEach(function (user) {\n    console.log(user.imsi)\n    user.delete({imsi:user.imsi})\n  \n  \n})\n\n    \n       \n};\n\n\n\nexports.updateUserById = async (id, user) => {\n    return await User.findByIdAndUpdate(id, user);\n};\n\n\n\n//# sourceURL=webpack://demo-backend/./services/UserService.js?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("cors");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./app.js");
/******/ 	
/******/ })()
;