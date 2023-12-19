const express = require('express');
const router = express.Router();
const Contact = require('../Models/Contacts')
const { body, validationResult } = require('express-validator');



//creating a contact in DB using POST
router.post('/createcontact', body('firstname').notEmpty(), async (req, res) => {
    const errors = validationResult(req);

    let contact = await Contact.findOne({ cnum: req.body.cnum })
    if (contact) {
        return res.status(400).json({ error: "Contact with same number already exists." })
    }
    if (errors.isEmpty()) {
        const contact = Contact(req.body);
        try {
            await contact.save();
            res.send(req.body);
        }
        catch (error) {
            res.status(400).send(error);
        }
    }
    else {
        return res.send({ errors });
    }
})

//Fetching all contacts

router.get('/fetchall', async (req, res) => {
    try {
        const list = await Contact.find();
        res.send(list);
    } catch (error) {
        res.status(400).send(error)
    }
})


//update 
router.put('/updatecontact/:id', async (req, res) => {
    try {
        const { firstname, lastname, cnum, mail } = req.body;
        const newContact = {};
        if (firstname) { newContact.firstname = firstname };
        if (lastname) { newContact.lastname = lastname };
        if (cnum) {
            newContact.cnum = cnum

        };
        if (mail) { newContact.mail = mail };


        const contact = await Contact.findByIdAndUpdate(req.params.id, { $set: newContact }, { new: true });
        res.send(contact);

    } catch (error) {
        return res.send(error);
    }
})

//Delete
router.delete('/deletecontact/:id', async (req, res) => {
    try {

        let contact = await Contact.findById(req.params.id);

        if (!contact) { return res.status(404).send("Not Found2") }

        contact = await Contact.findByIdAndDelete(req.params.id);
        res.send(contact);
    } catch (error) {
        return res.send(error);
    }
})


module.exports = router;