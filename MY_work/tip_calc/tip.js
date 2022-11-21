//global access to all inputs
const billInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const numberOfPeopleDiv= document.getElementById('numberOfPeople')
const perPersonTotalDiv = document.getElementById('perPersonTotal')

// get no. of people
let numberOfPeople=Number(numberOfPeopleDiv.innerText)





//three functions to be used:
//increasePeople()
//decreasePeople()
//calculateBill()


const calculateBill=()=>
{

        const bill = Number(billInput.value)
        const tipPercentage = Number(tipInput.value)/100
        const tipAmount = bill * tipPercentage
        const total = tipAmount+bill
        const perPersonTotal = total/numberOfPeople
    //perPersonTotalDiv.innerText =` $${perPersonTotal.toLocaleString('en-US')}`
        perPersonTotalDiv.innerText =` ₹${perPersonTotal.toLocaleString('en-IN')}`

}

const increasePeople=()=>{

    //increment the no. of people
        numberOfPeople +=1
        numberOfPeopleDiv.innerText = numberOfPeople

    //re-calculate the bill
        calculateBill()

}

const decreasePeople=()=>{

    //not less than one 
         if(numberOfPeople<=1)
         {
            alert( " You can't have less than 1 person !!")
         return
         }

    //decrement the no. of people
        numberOfPeople -=1
        numberOfPeopleDiv.innerText = numberOfPeople

    //re-calculate the bill
            calculateBill()

}