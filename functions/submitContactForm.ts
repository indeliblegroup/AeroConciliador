import { createClientFromRequest } from 'npm:@base44/sdk@0.8.4';

Deno.serve(async (req) => {
    try {
        const base44 = createClientFromRequest(req);
        
        const { name, email, company, phone, subject, message } = await req.json();

        if (!name || !email || !subject || !message) {
            return Response.json(
                { error: 'Campos obrigatórios faltando' },
                { status: 400 }
            );
        }

        await base44.asServiceRole.entities.ContactSubmission.create({
            name,
            email,
            company: company || null,
            phone: phone || null,
            subject,
            message,
            status: 'novo'
        });

        return Response.json({
            success: true,
            message: 'Mensagem enviada com sucesso'
        });

    } catch (error) {
        console.error('Error in submitContactForm:', error);
        return Response.json(
            { error: error.message },
            { status: 500 }
        );
    }
});