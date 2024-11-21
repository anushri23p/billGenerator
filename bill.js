function southIndianfooditemprint(vegOrNonveg, item, fooditem) {
  if (vegOrNonveg === 1) {
    switch (item) {
      case 1:
        fooditem += "\nIdali Sambhar         220 rupees";
        break;
      case 2:
        fooditem += "\nMasala Dosa            100 rupees";
        break;
      case 3:
        fooditem += "\nUttapam                100 rupees";
        break;
      case 4:
        fooditem += "\nMedu vada              70 rupees";
        break;
    }
  }

  if (vegOrNonveg === 2) {
    switch (item) {
      case 1:
        fooditem += "\nchicken Chettinad    260 rupees";
        break;
      case 2:
        fooditem += "\nMutton Curry           300 rupees";
        break;
      case 3:
        fooditem += "\nFish Fry               220 rupees";
        break;
      case 4:
        fooditem += "\nPrawn Masala           280 rupees";
        break;
    }
  }
  return fooditem;
}

function Bengolifooditemprint(vegOrNonveg, item, fooditem) {
  if (vegOrNonveg === 1) {
    switch (item) {
      case 1:
        fooditem += "\nShukto              220 rupees";
        break;
      case 2:
        fooditem += "\nAloo Posto          100 rupees";
        break;
      case 3:
        fooditem += "\nvegetable Chop      100 rupees";
        break;
      case 4:
        fooditem += "\nBeguni              70 rupees";
        break;
    }
  }

  if (vegOrNonveg === 2) {
    switch (item) {
      case 1:
        fooditem += "\nfishCurry            260 rupees";
        break;
      case 2:
        fooditem += "\nChicken Rezala         300 rupees";
        break;
      case 3:
        fooditem += "\nPrawn Malai Curry      220 rupees";
        break;
      case 4:
        fooditem += "\nMutton Kosha           280 rupees";
        break;
    }
  }
  return fooditem;
}

function maharastrianfooditemprint(vegOrNonveg, item, fooditem) {
  if (vegOrNonveg === 1) {
    switch (item) {
      case 1:
        fooditem += "\nPuran Poli               220 rupees";
        break;
      case 2:
        fooditem += "\nPital bhakari            100 rupees";
        break;
      case 3:
        fooditem += "\nModak                    100 rupees";
        break;
      case 4:
        fooditem += "\nchapati bhaji            70 rupees";
        break;
    }
  }

  if (vegOrNonveg === 2) {
    switch (item) {
      case 1:
        fooditem += "\nchicken Thali               260 rupees";
        break;
      case 2:
        fooditem += "\nMutton Thali                300 rupees";
        break;
      case 3:
        fooditem += "\nchicken biryani             220 rupees";
        break;
      case 4:
        fooditem += "\nMutton Biryani              280 rupees";
        break;
    }
  }
  return fooditem;
}

function makeBill(totalBill, vegOrNonveg, item) {
  if (vegOrNonveg === 1) {
    if (item === 1) {
      totalBill += 220;
    }
    if (item === 2) {
      totalBill += 100;
    }
    if (item === 3) {
      totalBill += 100;
    }
    if (item === 4) {
      totalBill += 70;
    }
  }

  if (vegOrNonveg === 2) {
    if (item === 1) {
      totalBill += 260;
    }
    if (item === 2) {
      totalBill += 300;
    }
    if (item === 3) {
      totalBill += 220;
    }
    if (item === 4) {
      totalBill += 280;
    }
  }

  return totalBill;
}

function checkPaymentMode(paymentMode) {
  switch (paymentMode) {
    case 1:
      console.log("\nYou Selected to pay via cash , pay at cash counter ");
      break;
    case 2:
      console.log("\nYou selected to pay via credit card, swap the card ");
      break;
    case 3:
      console.log("\nYou selected to pay via UPI, scan the QR");
      break;
    default:
      console.log("\nInvalid Input");
      break;
  }

  const Feedback = prompt("\n\nHow was the service of Anu's kitchen ❓:");

  console.log("\nYour Feedback is -----> ", Feedback);
  console.log("Thank you For your feedback 💕");

  return console.log("Visit Again 🤗");
}

function getFoodSrNo(howmanyItems, TypeOfFood, vegOrNonveg) {
  let totalBill = 0;
  let fooditem = "";

  for (let index = 1; index <= howmanyItems; index++) {
    const item = +prompt("\n Enter food item :");

    if (TypeOfFood === 1) {
      totalBill = makeBill(totalBill, vegOrNonveg, item);
      fooditem = maharastrianfooditemprint(vegOrNonveg, item, fooditem);
    }
    if (TypeOfFood === 2) {
      totalBill = makeBill(totalBill, vegOrNonveg, item);
      fooditem = southIndianfooditemprint(vegOrNonveg, item, fooditem);
    }
    if (TypeOfFood === 3) {
      totalBill = makeBill(totalBill, vegOrNonveg, item);
      fooditem = Bengolifooditemprint(vegOrNonveg, item, fooditem);
    }

  }
  console.clear();
  
  console.log("\n\n*********************** generated Bill **********************");
  console.log("__________________________________________________________");
  console.log("food item                     price");
  console.log("__________________________________________________________");
  console.log(fooditem);
  console.log("__________________________________________________________");
  const gst = Math.round(totalBill * (5 / 100));
  console.log("\nTotal : ", totalBill);
  console.log("GST : ", gst);
  console.log("Total With GST :", gst + totalBill);
  console.log("\n--------------------- Payment Mode ---------------------");
  console.log("1. Cash 💸");
  console.log("2. Credit Card 💳");
  console.log("3. UPI 📱");
  console.log("__________________________________________________________");
  const paymentMode = +prompt("\nEnter Payment Mode :");
  return checkPaymentMode(paymentMode);
}

function SelectvegOrNonveg() {
  console.log("\n******* Enter Number for veg or Non-veg accordingly *******");

  const vegOrNonveg = +prompt("\n 1. 🟢 veg \n\n 2. 🔴 Non-veg \n\n\n Enter your choice :");

  console.log("\n\n***********************************************************************");


  return vegOrNonveg;
}

function Bengalifood(TypeOfFood) {
  const vegOrNonveg = SelectvegOrNonveg();
  if (vegOrNonveg === 1) {
    console.log("\n\n-------------------------------------------------------------");
    console.log("Sr.No    Food Item 🍔🍡       💵 Price 💵");
    console.log("-------------------------------------------------------------");
    console.log("\n1.       Shukto              220");
    console.log("2.       Aloo Posto          100");
    console.log("3.       vegetable Chop      100");
    console.log("4.       Beguni              70");
    console.log("\n-------------------------------------------------------------");

  } else if (vegOrNonveg === 2) {
    console.log("\n\n-------------------------------------------------------------");
    console.log("Sr.No    Food Item 🍔🍡         💵 Price 💵");
    console.log("-------------------------------------------------------------");
    console.log("\n1.       fishCurry            260");
    console.log("2.       Chicken Rezala         300");
    console.log("3.       Prawn Malai Curry      220");
    console.log("4.       Mutton Kosha           280");
    console.log("\n-------------------------------------------------------------");

  } else {
    return console.log("Ivalid Number ❗️❗️❗️❗️");
  }

  const howmanyItems = prompt("\n\nEnter How many food Items do You Want ❓");

  return getFoodSrNo(howmanyItems, TypeOfFood, vegOrNonveg);
}

function southIndianfood(TypeOfFood) {
  const vegOrNonveg = SelectvegOrNonveg();
  if (vegOrNonveg === 1) {
    console.log("\n\n-------------------------------------------------------------");
    console.log("Sr.No    Food Item 🍔🍡       💵 Price 💵");
    console.log("-------------------------------------------------------------");
    console.log("\n1.    Idali Sambhar         220");
    console.log("2.    Masala Dosa            100");
    console.log("3.    Uttapam                100");
    console.log("4.    Medu vada              70");
    console.log("\n-------------------------------------------------------------");

  } else if (vegOrNonveg === 2) {
    console.log("\n\n-------------------------------------------------------------");
    console.log("Sr.No    Food Item 🍔🍡         💵 Price 💵");
    console.log("-------------------------------------------------------------");
    console.log("\n1.       chicken Chettinad    260");
    console.log("2.       Mutton Curry           300");
    console.log("3.       Fish Fry               220");
    console.log("4.       Prawn Masala           280");
    console.log("\n-------------------------------------------------------------");

  } else {
    return console.log("Ivalid Number ❗️❗️❗️❗️");
  }

  const howmanyItems = prompt("\n\nEnter How many food Items do You Want ❓");

  return getFoodSrNo(howmanyItems, TypeOfFood, vegOrNonveg);
}

function maharastrianfood(TypeOfFood) {
  const vegOrNonveg = SelectvegOrNonveg();

  if (vegOrNonveg === 1) {
    console.log("\n\n-------------------------------------------------------------");
    console.log("Sr.No    Food Item 🍔🍡       💵 Price 💵");
    console.log("-------------------------------------------------------------");
    console.log("\n1.    PuranPoli Thali         220");
    console.log("2.    Pital Bhakari           100");
    console.log("3.    Modak                   100");
    console.log("4.    chapati Bhaji           70");
    console.log("\n-------------------------------------------------------------");

  } else if (vegOrNonveg === 2) {
    console.log("\n\n-------------------------------------------------------------");
    console.log("Sr.No    Food Item 🍔🍡         💵 Price 💵");
    console.log("-------------------------------------------------------------");
    console.log("\n1.       chicken Thali            260");
    console.log("2.       Mutton Thali             300");
    console.log("3.       chicken Biryani          220");
    console.log("4.       Mutton Biryani           280");
    console.log("\n-------------------------------------------------------------");

  } else {
    return console.log("Ivalid Number ❗️❗️❗️❗️");
  }

  const howmanyItems = prompt("\n\nEnter How many food Items do You Want ❓");

  return getFoodSrNo(howmanyItems, TypeOfFood, vegOrNonveg);
}

function menuCardAccordingType(TypeOfFood) {
  switch (TypeOfFood) {
    case 1:
      return maharastrianfood(TypeOfFood);

    case 2:
      southIndianfood(TypeOfFood);
      break;

    case 3:
      Bengalifood(TypeOfFood);
      break;

    default:
      console.log("\n\nInvalid Choice ❗️❗️❗️❗️");
      break;
  }
}

function menuCard() {
  console.log("🫸🫷------------------ 💐💐💐 Welcome To Anu's Kitchen 💐💐💐------------------🫸🫷");

  const yesOrNo = confirm("\nDo You want to Order something❓");

  if (yesOrNo) {
    console.log("🍽----------------------------------------------------------🍽");
    console.log("Sr.NO     FoodType ");
    console.log("-------------------------------------------------------------");
    console.log("1.        Maharastrian food");
    console.log("2.        south Indian food");
    console.log("3.        Bengali food");
    console.log("🍽---------------------------------------------------------🍽");

    const TypeOfFood = +prompt("\n\n Enter Your choice : ");

    return menuCardAccordingType(TypeOfFood);

  } else {
    const reason = prompt("\nEnter the reason : ");
    console.log("Your reason is This : ", reason);

    return console.log(" 🫸🫷Thank You For Visting 🫸🫷 \n Please come Next  time 🫸🫷");
  }
}

menuCard();
