class ORM {
    constructor(path) {
        this.path = path;
    }

    async getAll() {
        try {
            const response = await fetch(this.path);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error al cargar datos del ORM:', error);
            throw error;
        }
    }
}

