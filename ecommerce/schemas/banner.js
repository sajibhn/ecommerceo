export default {
    name: 'banner',
    title: 'Banner',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: "Image",
            type: 'image',
            options: {
                hotspot: true,
            }
        },
        {
            name: 'heading',
            title: "Heading",
            type: 'string',
        },
        {
            name: 'description',
            title: "Description",
            type: 'string',
        },
    ]
}