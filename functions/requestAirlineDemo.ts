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

        if (!contactName || !contactEmail || !airlineName || !position) {
            return Response.json(
                { error: 'Campos obrigatórios faltando' },
                { status: 400 }
            );
        }

        const demoId = `DEMO-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;

        await base44.asServiceRole.entities.DemoRequest.create({
            demoId,
            contactName,
            contactEmail,
            contactPhone: contactPhone || null,
            airlineName,
            position,
            companySize: companySize || null,
            currentCaseVolume: currentCaseVolume || null,
            mainChallenges: mainChallenges || null,
            preferredDate: preferredDate || null,
            status: 'pendente'
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