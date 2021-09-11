function body(pounds, inches){
    this.pounds = pounds;
    this.inches = inches;
    
    const kilogram = 0.453592;
    const meter = 0.0254;

    this.cal = function(){
        this.kg = this.pounds * kilogram;
        this.m = this.inches * meter;
        console.log("BMI = " + this.kg/(this.m**2));
    }
}

let body1 = new body(40.25, 40.75);

body1.cal();
console.log(body1.kg);
console.log(body1.m);