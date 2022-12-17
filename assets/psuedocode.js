//***      Psuedocode to get you rolling: ******\\
// ✅ The total number of months included in the dataset.
// figure out how many rows there are in the finances variable

// ✅ The net total amount of Profit/Losses over the entire period.
// add everything together
// probably a loop 

// The average of the changes in Profit/Losses over the entire period.
// calculate each change by subtracting the previous month from the current month
/*You will need to track what the total change in profits is from month to 
    month and then find the average.*/
// (Total/total number of changes) ===> total change/(months - 1)
// maybe put all the changes into an array? using .push(...) ?

// The greatest increase in profits (date and amount) over the entire period.
// start with 0
//   check the last increase. If it's bigger than 0, keep track of the new biggest one.
//   in a loop
// The greatest decrease in losses (date and amount) over the entire period.
// console output format!
// Financial Analysis
// ----------------------------
// Total Months: 25
// Total: $2561231
// Average  Change: $-2315.12
// Greatest Increase in Profits: Feb-2012 ($1926159)
// Greatest Decrease in Profits: Sep-2013 ($-2196167)