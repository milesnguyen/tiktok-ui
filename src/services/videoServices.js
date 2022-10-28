import * as httpRequest from 'src/utils/httpRequest';

export const loadVideo = async (type, page = '1') => {
    try {
        const response = await httpRequest.get('videos', {
            params: {
                type,
                page,
            },
        });

        return response.data;
    } catch (error) {
        console.log(error);
    }
};
