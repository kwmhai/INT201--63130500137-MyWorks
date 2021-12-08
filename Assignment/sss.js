// Higher Order Function รับ parameter ที่เป็น function
function menu(){
    const menu = `
MENU
1: หาพื้นที่รูปสี่เหลี่ยมผืนผ้า
2: หาความยาวรอบรูปสี่เหลี่ยมผืนผ้า`;
    return menu;
}

function findArea(length, width){
    let area = length * width;
    return area;
}

function findPerimeter(length, width){
    let perimeter = 2 * (length + width);
    return perimeter;
}

  function calculator(length, width, fn) {
    console.log(`
length: ${length}
width: ${width}`);
    return fn(length, width);
  }
  
  console.log(menu());
  //let chooseMenu = 1;
  
  let length = 4;
  let width = 2;
function sw(chooseMenu = "ไม่มีการเลือกเมนู กรุณาเลือก menu"){
    console.log(`Menu ที่เลือก : ${chooseMenu }`);
  switch (chooseMenu) {
    case 1:
      console.log(`Area = ${calculator(length, width, findArea)}`) ;
      break;
    case 2:
      console.log(`Perimeter = ${calculator(length, width, findPerimeter)}`);   
      break;   
  }
}
sw(1);

function sortRestArgs(...theArgs) {
    let sortedArgs = theArgs.sort()
    return sortedArgs
  }
  
  console.log(sortRestArgs(5, 3, 7, 1))

// Higher Order Function รับ parameter ที่เป็น function
function menu() {
    const menu = `
MENU
1: หาพื้นที่รูปสี่เหลี่ยมผืนผ้า
2: หาความยาวรอบรูปสี่เหลี่ยมผืนผ้า`;
    return menu;
}

function findArea(fLength, fWidth) {
    let area = fLength * fWidth;
    return `Area = ${area}`;
}

function findPerimeter(fLength, fWidth) {
    let perimeter = 2 * (fLength + fWidth);
    return `Perimeter = ${perimeter}`;
}

function calculate(length, width){
    
    let fLength = length;
    let fWidth = width;

    function chooseMenu(cm = "ไม่มีการเลือกเมนู กรุณาเลือก menu"){
        
        function show(fn) {
            console.log(`Menu ที่เลือก: ${cm}
        length: ${fLength}
        width: ${fWidth}
        ${fn(fLength, fWidth)}`);
        }

        console.log(menu());
        console.log(cm);
        switch (cm) {
            case 1:
                return show(findArea);
            case 2:
                return show(findPerimeter);
        }
    }
    
    return chooseMenu;
}

let triangle = calculate(4, 2);

triangle(2);

// triangle(4, 2, 2);