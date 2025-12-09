import { createClientFromRequest } from 'npm:@base44/sdk@0.8.4';

Deno.serve(async (req) => {
    try {
        const base44 = createClientFromRequest(req);
        
        const {
            issueType,
            airline,
            description,
            flightDelay,
            bagageIssue,
            cancellation
        } = await req.json();

        if (!issueType || !description) {
            return Response.json(
                { error: 'Tipo de problema e descrição são obrigatórios' },
                { status: 400 }
            );
        }

        const analysisPrompt = `
Você é um especialista em direito aeronáutico brasileiro e conciliação de conflitos aéreos.

Analise o seguinte caso:
- Tipo de Problema: ${issueType}
- Companhia Aérea: ${airline || 'Não especificada'}
- Descrição: ${description}
${flightDelay ? `- Tempo de Atraso: ${flightDelay} horas` : ''}
${bagageIssue ? `- Problema com Bagagem: ${bagageIssue}` : ''}
${cancellation ? `- Cancelamento: ${cancellation}` : ''}

Com base na Resolução ANAC 400/2016 e jurisprudência recente, forneça:

1. Classificação de urgência (alta, média, baixa)
2. Probabilidade de acordo (0-100%)
3. Valor justo de indenização sugerido (em R$)
4. Fundamento legal principal
5. Tempo estimado de resolução (em dias)
6. Principais argumentos para negociação

Responda em formato JSON estruturado.
`;

        const aiAnalysis = await base44.integrations.Core.InvokeLLM({
            prompt: analysisPrompt,
            response_json_schema: {
                type: 'object',
                properties: {
                    urgency: { type: 'string', enum: ['alta', 'média', 'baixa'] },
                    settlementProbability: { type: 'number' },
                    suggestedValue: { type: 'number' },
                    legalBasis: { type: 'string' },
                    estimatedDays: { type: 'number' },
                    negotiationPoints: { 
                        type: 'array',
                        items: { type: 'string' }
                    }
                }
            }
        });

        return Response.json({
            success: true,
            analysis: aiAnalysis,
            timestamp: new Date().toISOString()
        });

    } catch (error) {
        console.error('Error in analyzeCase:', error);
        return Response.json(
            { error: error.message },
            { status: 500 }
        );
    }
});