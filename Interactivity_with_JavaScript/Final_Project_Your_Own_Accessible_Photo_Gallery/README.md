# Peer-graded Assignment: Final Project: Your Own Accessible Photo Gallery
## Instructions
The goal of the final project is to create your own accessible, interactive photo gallery. Building on concepts you have been learning in the course you will create your own HTML file with images and alternative text and then add the code to call functions to react to common events such page loads, mouse movement, and keyboard access. In addition to reusing the functions from the earlier homework you will want to write code to automatically add the tabindex attribute to your figures.

Throughout the process make sure to validate your code on W3, Wave, and aXe.

Once you have completed your assignment you will complete peer reviews. Because there are two or three challenging components to this assignment I hope you will learn from seeing the different approaches.

### Grading Criteria Overview
Your project will be graded by the careful examination of your code by a peer as well as the [W3C Markup Validation Service Tool](https://validator.w3.org/) and the [WAVE Web Accessibility Evaluation Tool](https://wave.webaim.org/). Your peers will look for the required functionality using both the mouse and a keyboard. 
### Step-By-Step Assignment Instructions
1. **Use the code from the Interactive Photo Gallery as your starting point**
2. Update the code to use six images of your choice, making sure to include alternative text for each.
3. Validate your site on the [W3C Markup Validation Service](https://validator.w3.org/).
4. Validate your site using the [Wave](https://wave.webaim.org/) validator site or browser extension.
5. Validate your site using the [aXe](https://www.deque.com/axe/) browser extension.
6. Add the listeners for [onfocus Event](https://www.w3schools.com/jsref/event_onfocus.asp) and [onblur Event](https://www.w3schools.com/jsref/event_onblur.asp) using the same pattern I gave you for the [onmouseover Event](https://www.w3schools.com/jsref/event_onmouseover.asp) and [onmouseleave Event](https://www.w3schools.com/jsref/event_onmouseleave.asp). (Don't delete those events though!)
7. Test your site's functionality for mouse movement.
8. Add the listener for onload – deciding what you want to call the new function
9. Add the new function for adding the tab focus attribute
   - Add a console.log message to make sure that your event triggers
   - Write a for loop to loop through each image
   - Add the tabindex attributes
10. Test your site's functionality for keyboard access.
11. Host and share your site
12. Complete your peer reviews.

### Examples of Good Feedback
Issues detected by your peer in the code review.
- Provide three or four expected mistakes. 
Issues detected by a validator and reported to you by your peer.
- W3 validator detected that your site is missing the title element. Add it to the head section.
- Both validators detected that your third image is missing the alt attribute
- Wave detected that you used an `<h1>` element and then an `<h3>` element. You can’t skip over heading levels.

### Examples Submissions
See the video in this week for an example.

### Frequently Asked Questions
**When peer grading how can I see the code?**

Click on the link that they provide. If you get a 404 error then they will need to submit a new valid link. If you see the page (but not the code) you can do a Right Click on the page and then View Page Source.

**Are warnings allowed in the validators?**

Do not deduct for validator warnings, just for errors.