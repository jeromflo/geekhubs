"use strict";
exports.__esModule = true;
var faker_1 = require("@faker-js/faker");
module.exports = [
    {
        cache: false,
        path: "/getItems",
        method: "POST",
        secure: false,
        template: function (params, query, body) {
            console.log(body);
            var items = [];
            if (body !== undefined) {
                for (var i = 0; i < body.getItems.cant; i++) {
                    var item = {
                        id: faker_1.faker.random.numeric(),
                        foto: faker_1.faker.image.cats(),
                        textHeader: faker_1.faker.lorem.word(10),
                        textBody: faker_1.faker.lorem.lines(5),
                        typeAnimal: faker_1.faker.lorem.word(5)
                    };
                    items.push(item);
                }
            }
            return items;
            /*             faker.image.
 */ 
        },
        delay: 1000
    },
    {
        cache: false,
        path: "/getItem",
        method: "POST",
        secure: false,
        template: function (params, query, body) {
            console.log(body);
            var item = {
                id: faker_1.faker.random.numeric(),
                foto: faker_1.faker.image.cats(),
                textHeader: faker_1.faker.lorem.word(10),
                textBody: faker_1.faker.lorem.lines(5),
                typeAnimal: faker_1.faker.lorem.word(5)
            };
            return item;
            /*             faker.image.
 */ 
        },
        delay: 2000
    },
];
