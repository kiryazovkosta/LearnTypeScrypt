export abstract class ApiService<T> {
    protected baseServiceUrl: string;

    constructor(url: string) {
        this.baseServiceUrl = url;
    }

    async getAll() : Promise<T[]> {
        const res = await fetch(this.baseServiceUrl);
        return await res.json();
    }

    async create(data: T) : Promise<T> {
        const res = await fetch(this.baseServiceUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        return await res.json();
    }

    async update(id: number, data: T) : Promise<T> {
        const res = await fetch(`${this.baseServiceUrl}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        return await res.json();
    }

    async delete(id: number) : Promise<void>{
        await fetch(`${this.baseServiceUrl}/${id}`, {
            method: 'DELETE'
        });
    }
}