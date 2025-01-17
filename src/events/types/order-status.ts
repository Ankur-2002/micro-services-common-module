export enum OrderStatus {
    // When the order has been created, but the ticktet it is trying to order has not been reserved
    Create = 'created',

    // The ticket the order is trying to reserver has already been reserved, or when the user has cancelled the order. The order expires before payment.

    Cancelled = 'cancelled',

    // The order has sucessfully reserved the ticket
    AwaitingPayment = 'awaiting:payment',

    // The order has reserved the ticket and the user has provided payment successfully
    Complete = 'complete',
}
