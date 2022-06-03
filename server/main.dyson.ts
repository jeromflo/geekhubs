import { faker } from '@faker-js/faker';

module.exports = [
    {
        cache: false,
        path: "/getItems",
        method: "POST",
        secure: false,
        template: (params: any, query: any, body: any): any[] => {
            console.log(body);
            let items: any[] = [];
            if (body !== undefined) {
                for (let i = 0; i < body.getItems!.cant; i++) {
                    let item = {
                        id: faker.random.numeric(),
                        foto: faker.image.cats(),
                        textHeader: faker.lorem.word(10),
                        textBody: faker.lorem.lines(5),
                        typeAnimal: faker.lorem.word(5)
                    }
                    items.push(item);
                }
            }

            return items;
            /*             faker.image.
 */        },
        delay: 2000,
    },
    {
        cache: false,
        path: "/getItem",
        method: "POST",
        secure: false,
        template: (params: any, query: any, body: any): any => {
            console.log(body);
            let item = {
                id: faker.random.numeric(),
                foto: faker.image.cats(),
                textHeader: faker.lorem.word(10),
                textBody: faker.lorem.lines(5),
                typeAnimal: faker.lorem.word(5)
            }
            return item;
            /*             faker.image.
 */        },
        delay: 2000,
    },
]