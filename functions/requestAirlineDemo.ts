import { createClientFromRequest } from 'npm:@base44/sdk@0.8.4';

Deno.serve(async (req) => {
    try {
        const base44 = createClientFromRequest(req);
        
        const {
            contactName,
            contactEmail,
            contactPhone,
            airlineName,
            position,
            companySize,
            currentCaseVolume,
            mainChallenges,
            preferredDate
        } = await req.json();

        // Validate required fields
        if (!contactName || !contactEmail || !airlineName || !position) {
            return Response.json(
                { error: 'Campos obrigatórios faltando' },
                { status: 400 }
            );
        }

        // Generate demo request ID
        const demoId = `DEMO-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;

        // Send notification to sales team
        await base44.integrations.Core.SendEmail({
            from_name: 'AeroConciliador Brasil - Sistema',
            to: 'comercial@aeroconciliador.com.br',
            subject: `Nova Solicitação de Demonstração: ${airlineName}`,
            body: `
                <h2>Nova Solicitação de Demonstração</h2>
                <p><strong>ID da Solicitação:</strong> ${demoId}</p>
                <hr>
                <h3>Dados de Contato</h3>
                <p><strong>Nome:</strong> ${contactName}</p>
                <p><strong>Email:</strong> ${contactEmail}</p>
                ${contactPhone ? `<p><strong>Telefone:</strong> ${contactPhone}</p>` : ''}
                <p><strong>Cargo:</strong> ${position}</p>
                <hr>
                <h3>Dados da Companhia</h3>
                <p><strong>Companhia Aérea:</strong> ${airlineName}</p>
                ${companySize ? `<p><strong>Porte:</strong> ${companySize}</p>` : ''}
                ${currentCaseVolume ? `<p><strong>Volume de Casos Atual:</strong> ${currentCaseVolume}/mês</p>` : ''}
                <hr>
                ${mainChallenges ? `
                    <h3>Principais Desafios</h3>
                    <p>${mainChallenges.replace(/\n/g, '<br>')}</p>
                    <hr>
                ` : ''}
                ${preferredDate ? `<p><strong>Data Preferencial:</strong> ${preferredDate}</p>` : ''}
                <hr>
                <p><strong>⚠️ AÇÃO NECESSÁRIA:</strong> Entrar em contato em até 24 horas</p>
            `
        });

        // Send confirmation to airline contact
        await base44.integrations.Core.SendEmail({
            from_name: 'AeroConciliador Brasil',
            to: contactEmail,
            subject: 'Demonstração Agendada - AeroConciliador Brasil',
            body: `
                <h2>Olá ${contactName},</h2>
                <p>Obrigado pelo interesse na AeroConciliador Brasil!</p>
                <p><strong>ID da Solicitação:</strong> ${demoId}</p>
                <p>Nossa equipe comercial entrará em contato em até 24 horas para agendar uma demonstração executiva personalizada.</p>
                <hr>
                <h3>O que você verá na demonstração:</h3>
                <ul>
                    <li>Dashboard executivo em tempo real</li>
                    <li>Fluxo completo de conciliação assistida por IA</li>
                    <li>Análise de ROI baseada no perfil da ${airlineName}</li>
                    <li>Integrações com seus sistemas atuais</li>
                    <li>Cases de sucesso no setor aéreo</li>
                </ul>
                <p>Enquanto isso, se tiver alguma dúvida urgente, pode responder este email ou ligar para +55 (11) 99999-9999.</p>
                <br>
                <p><strong>Equipe AeroConciliador Brasil</strong></p>
            `
        });

        return Response.json({
            success: true,
            demoId,
            message: 'Solicitação de demonstração enviada com sucesso'
        });

    } catch (error) {
        console.error('Error in requestAirlineDemo:', error);
        return Response.json(
            { error: error.message },
            { status: 500 }
        );
    }
});