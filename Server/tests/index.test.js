const app = require('../src/app');
const session = require('supertest');
const agent = session(app);

describe("Test de Rutas", () => {
    describe('GET /rickandmorty/character/:id', () => {
        it('Responde con status: 200', async () => {
            await agent.get('/rickandmorty/character/1').expect(200);
        })
        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
            const response = (await agent
                .get("/rickandmorty/character/1")).body;
                expect(response).toHaveProperty("id");
                expect(response).toHaveProperty("name");
                expect(response).toHaveProperty("species");
                expect(response).toHaveProperty("gender");
                expect(response).toHaveProperty("status");
                expect(response).toHaveProperty("origin");
                expect(response).toHaveProperty("image");
            })
        })
        it('Si hay un error responde con status: 500', async () => {
            await agent.get('/rickandmorty/character/1000').expect(500);
        })
        it('Si recibe las credenciales correctas, retorna un objeto con la propiedad "access" en true.', async () => {
            const response = await agent.get("/rickandmorty/login?email=sarah.grommelt@gmail.com&password=123456");
            expect(response.body.access).toBe(true);
        })
        it('Si recibe las credenciales incorrectas, retorna un objeto con la propiedad "access" en false.', async () => {
            const response = await agent.get("/rickandmorty/login?email=sarah.grommelt@gmail.com&password=pass");
            expect(response.body.access).toBe(false);
        })
    })

    describe("POST /rickandmorty/fav", () => {
        const character1 = { id: "1", name:"Rick" };
        const character2 = { id: "2", name:"Morty" };

        it("Lo que envies por body debe ser devuelto en un arreglo", async () => {
            const response = await agent
                .post("/rickandmorty/fav")
                .send(character1);
            expect(response.body).toEqual([character1]);
        })
        it("Si vuelves a enviar un nuevo elemento por body, este debe ser devuelto en un arreglo que incluye un elemento enviado previamente.", async () => {
            const response = await agent
                .post("/rickandmorty/fav")
                .send(character2);
            expect(response.body).toContainEqual(character1);
            expect(response.body).toContainEqual(character2);
        })
    })
    
    describe("DELETE /rickandmorty/fav/:id", () => {
        const character1 = { id: "1", name:"Rick" };
        const character2 = { id: "2", name:"Morty" };
        
        it("En el caso de que no haya ningún personaje con el ID que envías, sea un arreglo con los elementos previos sin modificar.", async () => {
            const response = await agent.delete("/rickandmorty/fav/55");
            expect(response.body).toContainEqual(character1);
            expect(response.body).toContainEqual(character2);
            
        })
        it("Luego debes testear que cuando envías un ID válido se elimine correctamente al personaje.", async () => {
            const response = await agent.delete("/rickandmorty/fav/1");
            expect(response.body).not.toContainEqual(character1);
        })
    })