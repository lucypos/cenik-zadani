const selectPlan = (planNumber) => {
    document.getElementById('plan1').classList.remove('plan--selected')
    document.getElementById('plan2').classList.remove('plan--selected')
    document.getElementById('plan3').classList.remove('plan--selected')
    if (planNumber === plan1) {
    return document.getElementById('plan1').classList.add('plan--selected')
    }
    if (planNumber === plan2 ) {
        return document.getElementById('plan2').classList.add('plan--selected')
        }
    if (planNumber === plan3 ) {
        return document.getElementById('plan3').classList.add('plan--selected')
        }
    let alert = ('Prosím, vyberte číslo od 1 do 3') 
}

let plan1 = 1
let plan2 = 2
let plan3 = 3
