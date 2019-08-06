export class Product
{
    public details:Details[]
   public title?:String;
   public subtitle?:String;
   public pic?:any;
   

   constructor(title?:String,subtitle?:String, pic?:any,details?:Details[])
   {
       this.title = title;
       this.subtitle = subtitle;
       this.pic = pic;
       this.details = details;
       console.log("Value of pic Under Constructor ",pic);
   }

}

export class Details 
{
    public title:String;
    public value:Number;

    constructor(title?:String,value?:any)
    {
        this.title = title;
        this.value =parseInt(value);
    }
} 