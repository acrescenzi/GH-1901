# EXTRA CREDIT

There are no tests for the extra credit!! We will look over your code manually to grade it.

First, STOP AND COMMIT YOUR WORK. It is possible depending on your extra credit implementation that some of your other specs will break. Please commit right before starting with a message that clearly states that you've finished the other specs and are ready to move on to the extra credit. This will help us grade more easily.

To get a total of 6 extra points, you may hook up the <CampusList /> component and <CampusInput /> component to the store.

You may use vanilla redux OR react-redux bindings to do this. More details found below!

YOU MUST HAVE FINISHED TIER 01, 02, and 03 BEFORE ATTEMPTING THE EXTRA CREDIT.

## CampusList - 2.5 pts

Defined in `../client/components/CampusList.js`

Use the `fetchCampuses` thunk creator to fetch all the campuses and update your store, and then render those campuses from your store into the list of campuses

## CampusInput - 3.5 pts

`../client/components/CampusInput.js`

Add a submit button with click handler. Write a handleSubmit function that will invoke your thunk creator `postCampus` with the data from your form. `handleSubmit` should be invoked when the button is clicked.

Have fun!
