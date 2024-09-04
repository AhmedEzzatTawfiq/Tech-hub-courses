import { Resend } from "resend";
import { EmailTemplate } from "../../_components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
    const body = await req.json();

    try {
        const data = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: ["ahmedezzat672001@gmail.com"],
            subject: "Orders Ezzat TechHub courses",
            react: EmailTemplate({ body }),
        });

        return Response.json(data);
    } catch (error) {
        return Response.json({ error });
    }
}