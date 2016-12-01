import { InMemoryDbService } from 'angular-in-memory-web-api';

export class ProductMemDb implements InMemoryDbService {
    createDb() {
        let products = [
            {
                "id": 1,
                "name": "Leaf Rake",
            },
            {
                "id": 2,
                "name": "Garden Cart",
            },
            {
                "id": 3,
                "name": "Hammer",
            },
            {
                "id": 4,
                "name": "Saw",
            },
            {
                "id": 5,
                "name": "Video Game Controller",
            }
        ];

        return {products};
    }
}
