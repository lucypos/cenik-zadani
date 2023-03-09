const selectPlan = (planNumber) => {
    if (planNumber === plan1 ) {
    return plan1.classList.add('plan--selected')
    }
    if (planNumber === plan2 ) {
        return plan2.classList.add('plan--selected')
        }
}

let plan1 =1
let plan2 = 2
let plan3 = 3
