const nodemailer = require('nodemailer');
const { google } = require('googleapis');
require('dotenv').config()

const sendEmail = async (usuario, token) => {
    try {
        const contentHtml = `<div class="container card">
    	<div class="card-header text-center"><h1>Restablecer contraseña</h1></div>
        <hr></hr>
    	<div class="card-body">
    		<p style="text-size: 15px;">Haz solicitado restablecer tu contraseña de Taller Car.R, da click en el boton siguiente para crear una nueva contraseña. <b>Este solo sera valido durante 1 hora</b>, despues de transcurrido dicho tiempo debera realizar una nueva solicitud</p>
    		<div class="row"> 
    		<div class="row p-3 "><br></br><a href="#" class="btn btn-success ml-2" style="padding: .375rem .75rem;
            border-radius: .25rem;
            background-color: #20c997;
            color: #fff;
            text-transform: none;
            width: 20%;
            high: 45%;
            transition: background-color .15s ease-in-out;">Restablecer contraseña</a></div>
    		</div>
    		<p class="fst-italic"><i>En caso que el boton no funcione, copia el siguiente enlace en tu navegador web:
    		<a href="#">${token}</i></p></a>
    		<p>Si no ha hecho dicha peticion, porfavor ignore este correo</p> 
    		
    		Cordialmente,
    		
    		<p>- Taller Car.R</p>
    		</p>
    	</div>
    </div>`
        const CLIENT_ID = process.env.CLIENT_ID
        const CLIENT_SECRET = process.env.CLIENT_SECRET
        const REFRESH_TOKEN = process.env.REFRESH_TOKEN
        const REDIRECT_URI = process.env.REDIRECT_URI
        const MAIL_USER = process.env.MAIL_USER

        const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI)

        oAuth2Client.setCredentials({
            refresh_token: REFRESH_TOKEN
        })

        const accessToken = await oAuth2Client.getAccessToken();
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                type: "oAuth2",
                user: MAIL_USER,
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accessToken
            }
        })
        const mailOptions = {
            from: `Correo de prueba <${MAIL_USER}>`,
            to: usuario,
            subject: "Restablecer contraseña de Taller Car.R",
            html: contentHtml
        }

        const result = await transporter.sendMail(mailOptions);
        return result
    } catch (error) {
        console.log(error)
    }
}

module.exports = sendEmail