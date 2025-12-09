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

        // Save passenger case to database
        await base44.asServiceRole.entities.PassengerCase.create({
            caseNumber,
            passengerName,
            passengerEmail,
            passengerPhone: passengerPhone || null,
            airline,
            flightNumber: flightNumber || null,
            flightDate: flightDate || null,
            issueType,
            description,
            documentUrls: documentUrls || [],
            status: 'registrado'
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