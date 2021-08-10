export class Payment {
        
    paymentId: number | undefined ;
    ticketId: number | undefined ;
    cardType: string = '';
    cardNo: string = '';
    dateOfBooking: Date | undefined;
    cardHolderName:  string = '';
    expirationDate: Date | undefined;
    totalFare:  number | undefined ;
    cvv:  number | undefined ;

constructor(paymentId: number | undefined , ticketId: number | undefined , cardType: string , cardNo: string, dateOfBooking: Date | undefined, cardHolderName:  string = '', expirationDate: Date | undefined, totalFare:  number | undefined , cvv:  number | undefined  )
  {
    this.paymentId=paymentId;
    this.ticketId=ticketId;
    this.cardType=cardType;
    this.cardNo=cardNo;
    this.dateOfBooking=dateOfBooking;
    this.cardHolderName=cardHolderName;
    this.expirationDate=expirationDate;
    this.totalFare=totalFare;
    this.cvv=cvv;
  }}