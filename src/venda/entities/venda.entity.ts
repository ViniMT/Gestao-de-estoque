import { StatusVenda } from "@prisma/client";

export class VendaEntity {
    dataVenda: Date | string;
    idUsuario: number;
    idCliente: number;
    valorTotal: number;
    status: StatusVenda;
}
