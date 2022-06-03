import { faker } from '@faker-js/faker';

module.exports = [
    {
        cache: false,
        path: "/getItems",
        method: "POST",
        secure: false,
        template: (params: any, query: any, body: any) => {
            console.log(body);
/*             faker.image.
 */        },
        delay: 1000,
    },
]