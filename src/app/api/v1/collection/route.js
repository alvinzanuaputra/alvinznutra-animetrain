import prisma from "@/libs/prisma";

export async function POST(request) {
    try {
        const { anime_mal_id, user_email, anime_image, anime_title } = await request.json();
        const data = { anime_mal_id, user_email, anime_image, anime_title };

        console.log("Request data:", data);

        const createCollection = await prisma.collection.create({ data });

        console.log("Collection created:", createCollection);

        if (!createCollection) {
            return new Response(JSON.stringify({ status: 500, isCreated: false }), { status: 500 });
        } else {
            return new Response(JSON.stringify({ status: 200, isCreated: true }), { status: 200 });
        }
    } catch (error) {
        console.error('Error creating collection:', error);
        return new Response(JSON.stringify({ status: 500, isCreated: false, error: error.message }), { status: 500 });
    }
}
