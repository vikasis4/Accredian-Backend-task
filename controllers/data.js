const { PrismaClient } = require('@prisma/client')
const sendEmail = require('../services/email')

const prisma = new PrismaClient();

const postData = async (req, res) => {
    try {
        var data = await prisma.refferals.create({
            data: {
                course_id: req.body.course_id,
                course_name: req.body.course_name,
                referrer_name: req.body.referrer_name,
                referrer_email: req.body.referrer_email,
                referee_name: req.body.referee_name,
                referee_email: req.body.referee_email,
            }
        });
        var result = await sendEmail(req.body.referee_email,req.body.referee_name, req.body.referrer_name, req.body.course_name, data.coupon_code)
        res.json({ status: result })
    } catch (error) {
        console.log(error);
        res.json({ status: false })
    }
};

const getData = async (req, res) => {
    try {
        var data = await prisma.refferals.findUnique({
            where: {
                referee_email: req.body.referee_email
            }
        });
        res.json({ status: true, data })
    } catch (error) {
        console.log(error);
        res.json({ status: false })
    }
};

module.exports = { postData, getData }