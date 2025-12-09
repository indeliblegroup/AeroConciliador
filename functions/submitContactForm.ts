import { createClientFromRequest } from 'npm:@base44/sdk@0.8.4';

Deno.serve(async (req) => {
    try {
        const base44 = createClientFromRequest(req);
        
        // Parse request body
        const { name, email, company, phone, subject, message } = await req.json();

        // Validate required fields
        if (!name || !email || !subject || !message) {
            return Response.json(
                { error: 'Campos obrigatórios faltando' },
                { status: 400 }
            );
        }

        // Send email notification to admin
        await base44.integrations.Core.SendEmail({
            from_name: 'AeroConciliador Brasil',
            to: 'contato@aeroconciliador.com.br',
            subject: `Novo Contato: ${subject}`,
            body: `
                <h2>Nova Mensagem de Contato</h2>
                <p><strong>Nome:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                ${company ? `<p><strong>Empresa:</strong> ${company}</p>` : ''}
                ${phone ? `<p><strong>Telefone:</strong> ${phone}</p>` : ''}
                <p><strong>Assunto:</strong> ${subject}</p>
                <p><strong>Mensagem:</strong></p>
                <p>${message.replace(/\n/g, '<br>')}</p>
            `
        });

        // Send confirmation email to user
        await base44.integrations.Core.SendEmail({
            from_name: 'AeroConciliador Brasil',
            to: email,
            subject: 'Recebemos sua mensagem',
            body: `
                <h2>Olá ${name},</h2>
                <p>Recebemos sua mensagem e retornaremos em até 24 horas.</p>
                <p>Obrigado pelo contato!</p>
                <br>
                <p><strong>Equipe AeroConciliador Brasil</strong></p>
            `
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