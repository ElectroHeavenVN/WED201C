# Peer-graded Assignment: Homework Two: Advanced Selectors and Display
## Instructions
The goal of this assignment is to provide additional practice styling your website. Your job is to modify some existing CSS rules and add new ones. To improve accessibility you will also add a "Skip to Main Content" capability to each page. While creating your style, make sure to run the page through the Wave validator to check for color contrast errors.

When you are done you will host your site and then complete peer reviews. The reviews not only provide feedback for your peers, but are a great way for you to see how CSS can generate such different looks for identical HTML code.

### Grading Criteria Overview
Your project will be graded by the careful examination of your code by a peer as well as the [W3C Markup Validation Service Tool](https://validator.w3.org/) and the [WAVE Web Accessibility Evaluation Tool](https://wave.webaim.org/). Your peers will look for syntactically correct CSS rules. Did you include the selectors, properties, and values? Did you check your site for color contrast issues? Did you link the CSS file correctly in all three HTML pages?

### Instructions
1. Create a NEW copy of your work from Homework 1.
2. Add a working "Skip to Main Content" link to each page by adding an id to the main tag and then adding an anchor (a tag) earlier in the file that will link to it.
3. Comment out the existing styling for the li element.
4. Change the nav element to use inline-block and have a width of about 80%.
5. Use a descendent selector to style only the image in the nav to have a width of about 10%.
6. Style the grid class to use a two column grid where each column is approximately 40%. Don't forget that to style a class element your selector should start with a period.
7. There is a good chance that your site will not look like mine. Use the descendent selector to style only the images in the grid class to have a width of 100% (Check the parks page to make sure this change doesn't affect any images in the flex class).
8. Go back and adjust the grid class again. Play with the justify-content, align-items, and row-gap property values to copy the look of the screenshots above.
9. Style the flex class to use flex. Play with the flex-wrap and justify-content property values to copy the look of the screenshots above.
10. Validate your code using https://wave.webaim.org/ or the wave browser extension.
11. Submit your link
12. Complete three peer reviews.

### Examples of Good Feedback
Issues detected by your peer in the code review.
- The css file is not linked correctly
- You are missing a semicolon in one of your rules
- You forget opening or closing brackets in one of your rules
- You have a typo in a selector
- You have an invalid property name (usually from a typo).
- You have an invalid property value (usually from a typo).

Issues detected by a validator and reported to you by your peer.
- Wave detected that you have a color contrast error.

### Frequently Asked Questions
**Are we grading on the attractiveness of a site?**

No. This is an early assignment and we are only looking for the ability to connect the style sheet and write basic CSS rules. As long as the style fulfills the requirements above and passes the Wave validator, give full credit. 

**When peer grading how can I see the code?**

Click on the link that they provide. If you get a 404 error then they will need to submit a new valid link. If you see the page (but not the code) you can do a Right Click on the page and then View Page Source.

**Are warnings allowed in the validators?**

Do not deduct for validator warnings, just for errors.