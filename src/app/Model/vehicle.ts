import { Client } from "./client"

export class Vehicle {
    make!: string
    model!: string
    year!: string
    license!: string
    client!: Client
}
