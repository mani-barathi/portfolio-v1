export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96,
            },
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
        },
        {
            name: 'technologies',
            title: "Technologies",
            type: 'array',
            of: [
                {
                    title: 'Technology',
                    type: 'string',
                    lists: [],
                },
            ],
        },
        {
            name: 'timestamp',
            title: 'Timestamp',
            type: 'datetime',
        },
        {
            name: 'githubLink',
            title: 'GitHub Link',
            type: 'string',
        },
        {
            name: 'liveLink',
            title: 'Live Link',
            type: 'string',
        },
        {
            name: 'show',
            title: 'Show',
            type: 'boolean'
        }
    ],

}
