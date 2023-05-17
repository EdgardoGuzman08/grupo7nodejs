const {Router} = require('express');
const controladorEntre = require('../controladores/controladorEntre');
const {body} = require('express-validator');
const router = Router();

router.get('',controladorEntre.Login);
router.post('',controladorEntre.IniLogin);
router.post('',controladorEntre.Logout);
module.exports=router;