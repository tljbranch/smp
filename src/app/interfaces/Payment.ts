export interface Payment {
    PAYMENTS_ID: number;
    TRANSACTION_ID: number;
    COMPANIES_ID: number;
    PAYMENT_TYPE: string;
    AMOUNT: number;
    CAMPAIGN_FUNDS_PURCHASED: number;
    PAYMENT_STATUS: string;

}
export class PaymentModel implements Payment {
    PAYMENTS_ID: number;
    TRANSACTION_ID: number;
    COMPANIES_ID: number;
    PAYMENT_TYPE: string;
    AMOUNT: number;
    CAMPAIGN_FUNDS_PURCHASED: number;
    PAYMENT_STATUS: string;
    constructor() {
    }
}