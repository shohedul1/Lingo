import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';



export async function POST(req: Request){
    if(req.method === 'POST'){
        const {first_name,last_name,email,phone_number,country,info} = await req.json();

        try{
            const transport = nodemailer.createTransport({
                host:'smtp.gmail.com',
                port: 465,
                secure: true,
                auth: {
                    user:'shohidulpramanik94@gmail.com',
                    pass:'wdpp xial itsy igjp'
                }

            });
           
            const mailOptions = {
                from: email,
                to: "shohidulpramanik94@gmail.com",
                html : `
                <h2>Contact form Submission<h2/>
                <p><strong>First Name:<strong/>${first_name}<p/>
                <p><strong>Last Name:<strong/>${last_name}<p/>
                <p><strong>Email:<strong/>${email}<p/>
                <p><strong>Phone Number:<strong/>${phone_number}<p/>
                <p><strong>Country:<strong/>${country}<p/>
                <p><strong>Info:<strong/>${info}<p/>
                `
            }
            
            await transport.sendMail(mailOptions);
            return NextResponse.json({message: 'email has ben sent'})

        }catch(error){
            console.log(error)
            return NextResponse.json({message:'mail has not been sent'})
        }
    }else{
        return NextResponse.json({message: 'Method is not allow'})

    }
}