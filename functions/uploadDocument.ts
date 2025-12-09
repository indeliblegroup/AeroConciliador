import { createClientFromRequest } from 'npm:@base44/sdk@0.8.4';

Deno.serve(async (req) => {
    try {
        const base44 = createClientFromRequest(req);
        
        const formData = await req.formData();
        const file = formData.get('file');
        const caseId = formData.get('caseId');

        if (!file) {
            return Response.json(
                { error: 'Arquivo não fornecido' },
                { status: 400 }
            );
        }

        const maxSize = 10 * 1024 * 1024;
        if (file.size > maxSize) {
            return Response.json(
                { error: 'Arquivo muito grande. Tamanho máximo: 10MB' },
                { status: 400 }
            );
        }

        const allowedTypes = [
            'application/pdf',
            'image/jpeg',
            'image/png',
            'image/jpg',
            'application/msword',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        ];

        if (!allowedTypes.includes(file.type)) {
            return Response.json(
                { error: 'Tipo de arquivo não permitido. Use PDF, JPG, PNG ou DOC' },
                { status: 400 }
            );
        }

        const { file_url } = await base44.integrations.Core.UploadFile({
            file: file
        });

        return Response.json({
            success: true,
            fileUrl: file_url,
            fileName: file.name,
            fileSize: file.size,
            fileType: file.type,
            caseId: caseId || null
        });

    } catch (error) {
        console.error('Error in uploadDocument:', error);
        return Response.json(
            { error: error.message },
            { status: 500 }
        );
    }
});