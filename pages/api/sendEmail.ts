import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        let { name, lastName, email, subject, message } = req.body;

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD
            }
        });

        let mailOptions = {
            from: email,
            to: 'jacob0leone@gmail.com',
            subject: subject,
            text: `From: ${name} ${lastName}\nEmail: ${email}\nMessage: ${message}`
        };

        try {
            await transporter.sendMail(mailOptions);
            res.status(200).send('Email sent successfully');
        } catch (error) {
            res.status(500).send('Error sending email');
        }
    } else {
        res.status(405).send('Method not allowed');
    }
}
