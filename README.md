# Console Finances - Challenge

## Description 
The task was to produce JavaScript code using an existing dataset that analyes the finacial records to calculate the following:

- Total number of months in dataset
- Net total amount of Profit/Loss throughout the entire period
- Average changes in Profit/Loss throughout the enire period 
- Greatest increase in profits (date & amount)
- Greatest decrease in profits (date & amount)
#

## Approach

- I started by calculating the total number of months using the .length property

- I then calculated the sum total by creating a for loop to loop through the dataset and add the 2nd indices in each array within the dataset.

- Next I worked out the total change from between the current month and the previous month and then divided the total change by the total number of months to give me the average. I needed to create 3x variables for this 1x to store the total change 1x to store the total months 1x to store the average change.

- Next I worked out the greatest increase in profit and console logged the results in month and amount format.
    - I created 1x variable for the date which stored a string  and 1x variable for the amount which stored a number.

- I did the same for the greatest decrease and changed the variables and used the less-than operator 
#
## Final Project Screenshot

![Alt text](assets/Console-finance%20screenshot.png)
#

## Credits
Some of the resources that help me were: 

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
- https://www.w3schools.com/js/default.asp
- https://www.freecodecamp.org/news/javascript-loops-explained-for-loop-for/

I also found infromation shared between the class on slack very helpful
#
## License
Please refer to the licence in the repo

