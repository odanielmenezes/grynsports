import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

declare module 'nodemailer';

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Email route
app.post('/send-email', async (req, res) => {
    const { name, to, subject, text } = req.body;

    if (!to || !subject || !text) {
        return res.status(400).json({ message: 'Missing required fields: to, subject, text' });
    }

    try {
        // Configure Nodemailer transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail', // Use your email provider
            auth: {
                user: process.env.EMAIL_USER, // Replace with your email
                pass: process.env.EMAIL_PASS, // Replace with your email password
            },
        });

        transporter.verify((error, success) => {
            if (error) {
                console.error('Erro de autenticação:', error);
            } else {
                console.log('Autenticação bem-sucedida:', success);
            }
        });

        console.log('Enviando e-mail para:', req.body);

        // Ajustar o destinatário para o e-mail do cliente
        const recipientEmail = process.env.EMAIL_USER; // Seu e-mail

        // Corpo do e-mail estilizado
        const htmlContent = `
            <!DOCTYPE html>
            <html>
            <head>
            <meta charset="UTF-8" />
            <title>Nova Mensagem de Contato</title>
            </head>
            <body style="margin:0; padding:0; background-color:#f4f6f8; font-family: Arial, Helvetica, sans-serif;">

            <table width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#f4f6f8">
                <tr>
                <td align="center" style="padding: 40px 20px;">

                    <!-- Container -->
                    <table width="600" cellpadding="0" cellspacing="0" border="0" style="background:#ffffff; border-radius:10px; overflow:hidden; box-shadow:0 4px 12px rgba(0,0,0,0.08);">

                    <!-- Header -->
                    <tr>
                        <td align="center" bgcolor="#111827" style="padding:30px;">
                        <h1 style="color:#ffffff; margin:0; font-size:22px;">
                            GRYN Sports
                        </h1>
                        <p style="color:#9ca3af; margin:5px 0 0; font-size:14px;">
                            Nova mensagem recebida
                        </p>
                        </td>
                    </tr>

                    <!-- Body -->
                    <tr>
                        <td style="padding:30px; color:#374151; font-size:15px; line-height:1.6;">

                        <p style="margin-top:0;">
                            Você recebeu uma nova mensagem através da Landing Page:
                        </p>

                        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:20px;">
                            <tr>
                            <td style="padding:8px 0;"><strong>Nome:</strong></td>
                            <td style="padding:8px 0;">${name}</td>
                            </tr>
                            <tr>
                            <td style="padding:8px 0;"><strong>Email:</strong></td>
                            <td style="padding:8px 0;">${to}</td>
                            </tr>
                            <tr>
                            <td style="padding:8px 0;"><strong>Assunto:</strong></td>
                            <td style="padding:8px 0;">${subject}</td>
                            </tr>
                        </table>

                        <!-- Mensagem -->
                        <div style="margin-top:25px;">
                            <p style="margin-bottom:8px;"><strong>Mensagem:</strong></p>
                            <div style="background:#f9fafb; border:1px solid #e5e7eb; padding:15px; border-radius:6px; font-size:14px;">
                            ${text}
                            </div>
                        </div>

                        <!-- CTA -->
                        <div style="text-align:center; margin-top:30px;">
                            <a href="mailto:${to}"
                            style="background:#2563eb; color:#ffffff; text-decoration:none; padding:12px 25px; border-radius:6px; display:inline-block; font-weight:bold;">
                            Responder Cliente
                            </a>
                        </div>

                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td align="center" bgcolor="#f3f4f6" style="padding:20px; font-size:12px; color:#6b7280;">
                        Esta mensagem foi enviada pelo formulário de contato da<br>
                        <strong>GRYN Sports</strong><br><br>
                        © ${new Date().getFullYear()} GRYN Sports. Todos os direitos reservados.
                        </td>
                    </tr>

                    </table>

                </td>
                </tr>
            </table>

            </body>
            </html>
        `;

        // Enviar e-mail com HTML estilizado
        await transporter.sendMail({
            from: `${req.body.name} <${req.body.email}>`,
            to: recipientEmail,
            subject: "Novo e-mail de contato da Landing Page",
            html: htmlContent, // Corpo do e-mail estilizado
        });

        res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Failed to send email', error });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});