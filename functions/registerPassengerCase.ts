import { createClientFromRequest } from 'npm:@base44/sdk@0.8.4';

Deno.serve(async (req) => {
    try {
        const base44 = createClientFromRequest(req);
        
        const {
            passengerName,
            passengerEmail,
            passengerPhone,
            airline,
            flightNumber,
            flightDate,
            issueType,
            description,
            documentUrls
        } = await req.json();

        // Validate required fields
        if (!passengerName || !passengerEmail || !airline || !issueType || !description) {
            return Response.json(
                { error: 'Campos obrigatórios faltando' },
                { status: 400 }
            );
        }

        // Generate case number
        const caseNumber = `AERO-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;

        // Send notification to admin team
        await base44.integrations.Core.SendEmail({
            from_name: 'AeroConciliador Brasil - Sistema',
            to: 'casos@aeroconciliador.com.br',
            subject: `Novo Caso Registrado: ${caseNumber}`,
            body: `
                <h2>Novo Caso de Passageiro Registrado</h2>
                <p><strong>Número do Caso:</strong> ${caseNumber}</p>
                <hr>
                <h3>Dados do Passageiro</h3>
                <p><strong>Nome:</strong> ${passengerName}</p>
                <p><strong>Email:</strong> ${passengerEmail}</p>
                ${passengerPhone ? `<p><strong>Telefone:</strong> ${passengerPhone}</p>` : ''}
                <hr>
                <h3>Dados do Voo</h3>
                <p><strong>Companhia Aérea:</strong> ${airline}</p>
                ${flightNumber ? `<p><strong>Número do Voo:</strong> ${flightNumber}</p>` : ''}
                ${flightDate ? `<p><strong>Data do Voo:</strong> ${flightDate}</p>` : ''}
                <hr>
                <h3>Problema Reportado</h3>
                <p><strong>Tipo:</strong> ${issueType}</p>
                <p><strong>Descrição:</strong></p>
                <p>${description.replace(/\n/g, '<br>')}</p>
                ${documentUrls && documentUrls.length > 0 ? `
                    <hr>
                    <h3>Documentos Anexados</h3>
                    <ul>
                        ${documentUrls.map(url => `<li><a href="${url}">${url}</a></li>`).join('')}
                    </ul>
                ` : ''}
            `
        });

        // Send confirmation to passenger
        await base44.integrations.Core.SendEmail({
            from_name: 'AeroConciliador Brasil',
            to: passengerEmail,
            subject: `Caso Registrado: ${caseNumber}`,
            body: `
                <h2>Olá ${passengerName},</h2>
                <p>Seu caso foi registrado com sucesso!</p>
                <p><strong>Número do Caso:</strong> ${caseNumber}</p>
                <p>Nossa equipe analisará seu caso e entrará em contato em até 48 horas.</p>
                <hr>
                <h3>Próximos Passos</h3>
                <ol>
                    <li>Análise inicial do seu caso (1-2 dias)</li>
                    <li>Contato da companhia aérea (2-3 dias)</li>
                    <li>Proposta de acordo (3-4 dias)</li>
                    <li>Finalização e compensação</li>
                </ol>
                <p>Você receberá atualizações por email em cada etapa.</p>
                <br>
                <p><strong>Equipe AeroConciliador Brasil</strong></p>
            `
        });

        return Response.json({
            success: true,
            caseNumber,
            message: 'Caso registrado com sucesso'
        });

    } catch (error) {
        console.error('Error in registerPassengerCase:', error);
        return Response.json(
            { error: error.message },
            { status: 500 }
        );
    }
});