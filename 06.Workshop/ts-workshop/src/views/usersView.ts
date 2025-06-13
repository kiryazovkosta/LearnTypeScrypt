import type { Address } from "../interfaces/Address";
import type { User } from "../interfaces/User";
import { UsersService } from "../services/usersService";
import { HtmlRenderer } from "../utils/html";

const usersService = new UsersService();

export async function usersTemplate() : Promise<void> {
    const users = await usersService.getAll();

    const template = `
        <h1>Users</h1>
        <ul>
            ${users.map(u => userTemplate(u)).join('')}
        </ul>
    `;

    HtmlRenderer.render(template);
}

function userTemplate(user: User) {
    return `
        <li>
            <h3>${user.name}</h3>
            <h4>${user.username}</h4>
            <h4>${user.email}</h4>
            <p>${addressTemplate(user.address)}</p>

        </li>
    `;
}

function addressTemplate(address: Address) {
    return `
        <ol>
            <li>${address.city}</li>
            <li>${address.street}</li>
            <li>${address.suite}</li>
            <li>${address.zipcode}</li>
            <li>${address.geo.lat}</li>
            <li>${address.geo.lng}</li>
        </ol>
    `;
}