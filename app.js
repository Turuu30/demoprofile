let TuruuAnimatiom=new TimelineLite();
let controller=new ScrollMagic.Controller();

TuruuAnimatiom
.fromTo(
     "#tomMod" ,  8 , {
          width: 0  + "%" , height:0  + "%" , bottom: 5 + "vh" 
     } , {
          width: 100 +"%", height: 90 + "%" ,bottom: 5 + "vh" 
     } , "-=1"
)