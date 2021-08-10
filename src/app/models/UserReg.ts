export class UserReg {
    
    uId: number| undefined;
    title:	string = '';
    fname:	string = '';
    lname:  string = '';
    emailId: string = '';
    dob: Date | undefined;
    phoneNo: string = '';
    password: string = '';
    

constructor(uId: number| undefined, title:	string,  fname:	string ,  lname:  string,  emailId: string, dob: Date | undefined, phoneNo: string, password: string )
  {
    this.uId=uId;
    this.title=title;
    this.fname=fname;
    this.lname=lname;
    this.emailId=emailId;
    this.dob=dob;
    this.phoneNo=phoneNo;
    this.password=password;

  }}