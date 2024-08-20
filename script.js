let totalNetworth = 260000000000;
let countTourbillon = 0;
let countAirbus = 0;
let countMackBook = 0;
let countIsland = 0;
let countAntilia = 0;
let countIphone = 0;
let countYacht = 0;
let countSpectre = 0;
let countPc = 0;
let countRaptor = 0;
let countTesla = 0;
let countFocal = 0;
let percentage = 0;


function calcPercentage(){
  percentage = ((260000000000 - totalNetworth)/260000000000)*100;
  document.querySelector('.receiptHeadText').innerHTML = `You Spent ${percentage} % From Elons Networth !`
}


// buying option

function buyBtn(product , price){
 if (product == 'Tourbillon'){
  // let flagTourbillon = 0; 
  // if (flagTourbillon == 0){
    
  //   let TourbillonList = document.createElement('p');
  //   TourbillonList.classList.add('TourbillonList');
  //   receiptList.appendChild(TourbillonList);
  //   flagTourbillon = flagTourbillon ++;
  // }

  if (price > totalNetworth){
    alert('Sell Something..LOLL !');
  }else{

  totalNetworth = totalNetworth - price ;
  calcPercentage();
  document.querySelector('.balanceAmount').innerHTML = `BALANCE : ${totalNetworth}`
  countTourbillon = countTourbillon + 1 ;
  document.querySelector('.countSpaceTourbillon').innerHTML = countTourbillon ;

  }
 }
 if (product == 'Airbus'){

  if (price > totalNetworth){
    alert('Sell Something..LOLL !');
  }else{

  totalNetworth = totalNetworth - price ;
  calcPercentage();
  document.querySelector('.balanceAmount').innerHTML = `BALANCE : ${totalNetworth}`
  countAirbus = countAirbus + 1 ;
  document.querySelector('.countSpaceAirbus').innerHTML = countAirbus ;

  }
 }
 if (product == 'MackBook'){
 
  if (price > totalNetworth){
    alert('Sell Something..LOLL !');
  }else{
  totalNetworth = totalNetworth - price ;

  calcPercentage();


  document.querySelector('.balanceAmount').innerHTML = `BALANCE : ${totalNetworth}`
  countMackBook = countMackBook + 1 ;
  document.querySelector('.countSpaceMackBook').innerHTML = countMackBook ;
  }
 }
 if (product == 'Island'){
  
  if (price > totalNetworth){
    alert('Sell Something..LOLL !');
  }else{
  totalNetworth = totalNetworth - price ;

  calcPercentage();


  document.querySelector('.balanceAmount').innerHTML = `BALANCE : ${totalNetworth}`
  countIsland = countIsland + 1 ;
  document.querySelector('.countSpaceIsland').innerHTML = countIsland ;
  }
 }
 if (product == 'Antilia'){
  
  if (price > totalNetworth){
    alert('Sell Something..LOLL !');
  }else{
  totalNetworth = totalNetworth - price ;

  calcPercentage();


  document.querySelector('.balanceAmount').innerHTML = `BALANCE : ${totalNetworth}`
  countAntilia = countAntilia + 1 ;
  document.querySelector('.countSpaceAntilia').innerHTML = countAntilia ;
  }
 }
 if (product == 'Iphone'){
  
  if (price > totalNetworth){
    alert('Sell Something..LOLL !');
  }else{
  totalNetworth = totalNetworth - price ;

  calcPercentage();

  document.querySelector('.balanceAmount').innerHTML = `BALANCE : ${totalNetworth}`
  countIphone = countIphone + 1 ;
  document.querySelector('.countSpaceIphone').innerHTML = countIphone ;
  }
 }
 if (product == 'Yacht'){
 
  if (price > totalNetworth){
    alert('Sell Something..LOLL !');
  }else{
  totalNetworth = totalNetworth - price ;

  calcPercentage();


  document.querySelector('.balanceAmount').innerHTML = `BALANCE : ${totalNetworth}`
  countYacht = countYacht + 1 ;
  document.querySelector('.countSpaceYacht').innerHTML = countYacht ;
  }
 }
 if (product == 'Spectre'){
  
  if (price > totalNetworth){
    alert('Sell Something..LOLL !');
  }else{
  totalNetworth = totalNetworth - price ;

  calcPercentage();


  document.querySelector('.balanceAmount').innerHTML = `BALANCE : ${totalNetworth}`
  countSpectre = countSpectre + 1 ;
  document.querySelector('.countSpaceSpectre').innerHTML = countSpectre ;
  }
 }
 if (product == 'Pc'){
  
  if (price > totalNetworth){
    alert('Sell Something..LOLL !');
  }else{
  totalNetworth = totalNetworth - price ;

  calcPercentage();


  document.querySelector('.balanceAmount').innerHTML = `BALANCE : ${totalNetworth}`
  countPc = countPc + 1 ;
  document.querySelector('.countSpacePc').innerHTML = countPc ;
  }
 }
 if (product == 'Raptor'){
  
  if (price > totalNetworth){
    alert('Sell Something..LOLL !');
  }else{
  totalNetworth = totalNetworth - price ;

  calcPercentage();


  document.querySelector('.balanceAmount').innerHTML = `BALANCE : ${totalNetworth}`
  countRaptor = countRaptor + 1 ;
  document.querySelector('.countSpaceRaptor').innerHTML = countRaptor ;
  }
 }
 if (product == 'Tesla'){
 
  if (price > totalNetworth){
    alert('Sell Something..LOLL !');
  }else{
  totalNetworth = totalNetworth - price ;

  calcPercentage();


  document.querySelector('.balanceAmount').innerHTML = `BALANCE : ${totalNetworth}`
  countTesla = countTesla + 1 ;
  document.querySelector('.countSpaceTesla').innerHTML = countTesla ;
  }
 }
 if (product == 'Focal'){
 
  if (price > totalNetworth){
    alert('Sell Something..LOLL !');
  }else{
  totalNetworth = totalNetworth - price ;

  calcPercentage();

  
  document.querySelector('.balanceAmount').innerHTML = `BALANCE : ${totalNetworth}`
  countFocal = countFocal + 1 ;
  document.querySelector('.countSpaceFocal').innerHTML = countFocal ;
  }
 }
}

// selling option  


function sellBtn(product , price){
  if (product == 'Tourbillon'){
    if (countTourbillon !== 0){
      
      totalNetworth = totalNetworth + price ;

      calcPercentage();


      document.querySelector('.balanceAmount').innerHTML = `BALANCE : ${totalNetworth}`
      countTourbillon = countTourbillon - 1 ;
      document.querySelector('.countSpaceTourbillon').innerHTML = countTourbillon ;
    }
  }
  if (product == 'Airbus'){
    if (countAirbus !== 0){
    
      totalNetworth = totalNetworth + price ;

      calcPercentage();


      document.querySelector('.balanceAmount').innerHTML = `BALANCE : ${totalNetworth}`
      countAirbus = countAirbus - 1 ;
      document.querySelector('.countSpaceAirbus').innerHTML = countAirbus ;
    }
  }
  if (product == 'MackBook'){
    if (countMackBook !== 0){
     
      totalNetworth = totalNetworth + price ;

      calcPercentage();


      document.querySelector('.balanceAmount').innerHTML = `BALANCE : ${totalNetworth}`
      countMackBook = countMackBook - 1 ;
      document.querySelector('.countSpaceMackBook').innerHTML = countMackBook ;
    }
  }
  if (product == 'Island'){
    if (countIsland !== 0){
      
      totalNetworth = totalNetworth + price ;

      calcPercentage();


      document.querySelector('.balanceAmount').innerHTML = `BALANCE : ${totalNetworth}`
      countIsland = countIsland - 1 ;
      document.querySelector('.countSpaceIsland').innerHTML = countIsland ;
    }
  }
  if (product == 'Antilia'){
    if (countAntilia !== 0){
     
      totalNetworth = totalNetworth + price ;

      calcPercentage();


      document.querySelector('.balanceAmount').innerHTML = `BALANCE : ${totalNetworth}`
      countAntilia = countAntilia - 1 ;
      document.querySelector('.countSpaceAntilia').innerHTML = countAntilia ;
    }
  }
  if (product == 'Iphone'){
    if (countIphone !== 0){
      
      totalNetworth = totalNetworth + price ;

      calcPercentage();


      document.querySelector('.balanceAmount').innerHTML = `BALANCE : ${totalNetworth}`
      countIphone = countIphone - 1 ;
      document.querySelector('.countSpaceIphone').innerHTML = countIphone ;
    }
  }
  if (product == 'Yacht'){
    if (countYacht !==0){
      
      totalNetworth = totalNetworth + price ;

      calcPercentage();


      document.querySelector('.balanceAmount').innerHTML = `BALANCE : ${totalNetworth}`
      countYacht = countYacht - 1 ;
      document.querySelector('.countSpaceYacht').innerHTML = countYacht ;
    }
  }
  if (product == 'Spectre'){
    if (countSpectre !== 0){
      
      totalNetworth = totalNetworth + price ;

      calcPercentage();


      document.querySelector('.balanceAmount').innerHTML = `BALANCE : ${totalNetworth}`
      countSpectre = countSpectre - 1 ;
      document.querySelector('.countSpaceSpectre').innerHTML = countSpectre ;
    }
  }
  if (product == 'Pc'){
    if (countPc !== 0){
      
      totalNetworth = totalNetworth + price ;

      calcPercentage();


      document.querySelector('.balanceAmount').innerHTML = `BALANCE : ${totalNetworth}`
      countPc = countPc - 1 ;
      document.querySelector('.countSpacePc').innerHTML = countPc ;
    }
  }
  if (product == 'Raptor'){
    if (countRaptor !== 0){
     
      totalNetworth = totalNetworth + price ;

      calcPercentage();


      document.querySelector('.balanceAmount').innerHTML = `BALANCE : ${totalNetworth}`
      countRaptor = countRaptor - 1 ;
      document.querySelector('.countSpaceRaptor').innerHTML = countRaptor ;
    }
  }
  if (product == 'Tesla'){
    if (countTesla !== 0){
      
      totalNetworth = totalNetworth + price ;

      calcPercentage();


      document.querySelector('.balanceAmount').innerHTML = `BALANCE : ${totalNetworth}`
      countTesla = countTesla - 1 ;
      document.querySelector('.countSpaceTesla').innerHTML = countTesla ;
    }
  }
  if (product == 'Focal'){
    if (countFocal !== 0){
     
      totalNetworth = totalNetworth + price ;

      calcPercentage();

      
      document.querySelector('.balanceAmount').innerHTML = `BALANCE : ${totalNetworth}`
      countFocal = countFocal - 1 ;
      document.querySelector('.countSpaceFocal').innerHTML = countFocal ;
    }
  }
 }