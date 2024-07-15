import { Subjects } from './subjects';
import { OrderStatus } from './types/order-status';

export interface orderCreatedEvent {
    subject: Subjects.OrderCreated;
    body: {
        id: string;
        status: OrderStatus;
        userId: string;
        expiresAt: string;
        ticket: {
            id: string;
            price: number;
        };
    };
}
