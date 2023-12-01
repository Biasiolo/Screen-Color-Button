# SCREEN COLOR PLUGIN
![Downloads](https://img.shields.io/npm/dm/screen_color_plugin)

Enhance your website's visual appeal with the Screen Color Plugin – a powerful jQuery tool that allows developers to effortlessly integrate a screen color change button into their web pages.

**Check out the live application example at [Screen Color Button](https://screen-color-button.vercel.app/).**

If you find this plugin valuable, consider contributing to support its continuous improvement. Your donation helps us maintain and enhance the plugin for the community.

[![Donate](https://img.shields.io/badge/Donate-$2-brightgreen)](https://www.paypal.com/donate/?hosted_button_id=9LNPLZ6BQ74YS)

[![Donation Counter](https://img.shields.io/badge/Donations-35-brightgreen)](https://www.paypal.com/donate/?hosted_button_id=9LNPLZ6BQ74YS)

### 🚀 New Feature - GRADIENT COLORS!!
Now, experience enhanced customization as the plugin not only changes the background color but also dynamically adjusts the text color for improved contrast. Elevate the visual aesthetics of your websites effortlessly!

## Description
The Screen Color Plugin offers an easy-to-use solution for developers seeking to add a screen color change button to their web pages. With this plugin, users can seamlessly customize the background colors and incorporate engaging visual effects for an interactive user experience.

## Features
- **Dynamic Color Change:** Choose from a variety of pre-defined colors to personalize your page's appearance.
- **Button Sink Effect:** Add a subtle and stylish button animation to captivate your audience.

## Installation

1. **NPM:**
   - Run `npm install screen_color_plugin` to install the plugin.

2. **Initialization:**
   - Include jQuery and the plugin script in your HTML.
   - Select the desired button using jQuery and call the `scrollColorChange()` method to activate the plugin.

   ```html
   <script src="path/to/jquery.min.js"></script>
   <script src="path/to/my-plugin.js"></script>
   <script>
     $(document).ready(function () {
       $("#scrollDownButton").scrollColorChange({
         colors: [
           { name: "blue", color: "rgb(43, 174, 226)" },
           { name: "green", color: "rgb(43, 226, 113)" },
           // Add more colors as needed
         ],
       });
     });
   </script>
   
## Customization
This plugin is highly customizable—tweak the colors to your liking, play with button effects, and more to create a unique user experience.

## User Experience
Immerse your users in an engaging journey with the Screen Color Plugin. Create an interactive and visually appealing website that leaves a lasting impression.

## Contribution
Feel free to contribute with improvements, bug fixes, or new features. Open an issue or submit a pull request! Send a message and let us know how you're using it! Let's collaborate!

## Support
Send me an email.

## License
This project is licensed under the MIT License, by Biasiolo.