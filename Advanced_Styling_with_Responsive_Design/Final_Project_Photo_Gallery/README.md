# Peer-graded Assignment: Final Project: Photo Gallery
## Instructions
The goal of the final project is to create your own responsive website that not only adjusts to the screen size, but also to the user preferences.  Your site will support three distinct views - mobile, tablet, and large screens and react to the user settings of prefers-reduced motion and color scheme. 

The starter  is provided for you [as a zip file](https://intro-webdesign.com/v3/responsive_repo/week4/finalProject.zip). You will need to edit the style.css file to modify the mobile view and add four media queries.  You are free to make many personal choices in your submission, but you must fulfill the following requirements:

1. You must replace all of the images from the starter code. Make sure to include alt text.
2. You must replace all of the content in the paragraph tag from the starter code.
3. Check your code through the [w3validator](https://validator.w3.org/) and make necessary changes.
4. Your mobile view must use a mobile-first approach (so no media queries for the mobile view) and
    - Use a one column grid with a 10px gap between rows and columns.
5. Your tablet  view must trigger at 772px, not repeat unnecessary rules,  and:
    - Use  a  two column grid
    - Set the border radius on the figures to create a circular shape
    - Set the last figure  to take up both columns
6. Your large screen view must trigger at 992px, not repeat unnecessary rules,  and:
    - Set  every third figure  to take up both columns.
    - Remove the border radius from all of the figures.
        - Make sure not to use max-width!!
7. Your prefers-reduced-motion media query must:
    - Remove the scroll behavior
8. Assuming that your default color scheme is light, create a media query for dark colors that: 
    - Change the background-color of the figures to a dark color.
    - Change the font color of the figures  to a lighter (possibly yellow-ish) color
    - Change the border color of the figures  to black.
9.  Run your code through the [WAVE validator](https://wave.webaim.org/), particularly to check for color contrast error.  Fix any errors.

Your peer review is a great chance to see the different styling choices that your peers chose and how a little bit of CSS can create a really unique experience.  It will also be a chance to practice changing settings on your computer.   If you need a reminder on how to change your settings you can use these resources:
- [Change your Mac display’s Color Scheme](https://support.apple.com/guide/mac-help/change-your-displays-color-profile-mchlf3ddc60d/mac)
- [Change colors in Windows](https://support.microsoft.com/en-us/windows/change-colors-in-windows-d26ef4d6-819a-581c-1581-493cfcc005fe)
- [Turning on prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)

### Grading Criteria Overview
Your project will be graded by the careful examination of your code by a peer as well as the [W3C Markup Validation Service Tool](https://validator.w3.org/) and the [WAVE Web Accessibility Evaluation Tool](https://wave.webaim.org/). Your peers will look for any errors. 
### Step-By-Step Assignment Instructions
1. Review the video that describes the Homework
2. Download the starter code as a zip file from 
https://intro-webdesign.com/v3/responsive_repo/week4/finalProject.zip
3. Open the code in the editor of your choice and ensure that you can access all of the files
4. Open the index.html file and change the images, making sure to include alternative text.
5. Change the text in the paragraphs.
6. Run the [w3 validator](https://validator.w3.org/).
7. Update the mobile view.
8. Open the browser and check the style.
9. Write your first media query and  add the rules to adjust the style.
10. Check your site on the browser. 
11. Write your second media query and add the rules to adjust the style for the divs.
12. Check your site on the browser. 
13. Write your third  media query and  add the rules to adjust the style.
14. Check your site on the browser. 
15. Write your fourth media query and add the rules to adjust the style for the divs.
16. Check your site on the browser. 
17. Validate your site at https://wave.webaim.org/
18. Host and share your site
19. Peer review sites

### Examples of Good Feedback
Issues detected by your peer in the code review.
- You have the order of your media queries in the wrong order.  
- You have repeated display: grid in your media queries but that code is not necessary since the property is inherited from the mobile view.
- When I changed the preferences on my computer there was still a scroll animation.
Issues detected by a validator and reported to you by your peer.
- W3 validator detected that your site has unclosed tags.  Please check the validator again.
- Both validators detected that your third image is missing the alt attribute
- The colors you chose caused a color contrast error in the dark mode.

### Examples Submissions
 See the sample video.

### Frequently Asked Questions
**Are we grading on the attractiveness of a site?**

No.  

**When peer grading how can I see the code?**

Click on the link that they provide.  If you get a 404 error then they will need to submit a new valid link.  If you see the page (but not the code) you can do a Right Click on the page and then View Page Source.

**Are warnings allowed in the validators?**

Do not deduct for validator warnings, just for errors.