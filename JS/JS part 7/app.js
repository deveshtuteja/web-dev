const student={
    name:"Devesh",
    age:"19",
    math:98,
    eng:95,
    chem:97,
    getAvg(){
        console.log(this);
        let avg=(this.math+this.eng+this.chem)/3;
        console.log(avg);
    }
};

//Arrow Function
const sum=(a,b)=>{
    return a+b;
}
const pow=(a,b)=>{
    return a**b;
}
const cube=n=>{
    return n*n*n;
}
//implicit return
const mul=(a,b)=>(a*b);