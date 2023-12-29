# SCREEN COLOR PLUGIN

![Downloads](https://img.shields.io/npm/dm/screen_color_plugin)

Elevate your website's aesthetics with the Screen Color Plugin – a robust jQuery tool that seamlessly integrates a screen color change button, bringing an engaging visual element to your web pages.

**Explore the live example at [Screen Color Button](https://screen-color-button.vercel.app/).**

If you find value in this plugin, consider contributing to support ongoing enhancements. Your donation helps us maintain and improve the plugin for the community.

[![Donate](https://img.shields.io/badge/Donate-$2-brightgreen)](https://www.paypal.com/donate/?hosted_button_id=9LNPLZ6BQ74YS)

[![Donation Counter](https://img.shields.io/badge/Donations-42-brightgreen)](https://www.paypal.com/donate/?hosted_button_id=9LNPLZ6BQ74YS)

### 🚀 New Feature - TEXT CONTRAST!!

Experience heightened customization with the latest plugin update! Now, not only can you change the background color dynamically, but the plugin also adjusts text color for improved contrast. Elevate your website's visual appeal effortlessly!

## Description

The Screen Color Plugin provides a user-friendly solution for developers seeking to add a screen color change button to their web pages. With this plugin, users can effortlessly customize background colors and incorporate captivating visual effects for an interactive user experience.

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

This plugin is highly customizable—tweak the colors, experiment with button effects, and more to craft a unique user experience.

## User Experience

Immerse your users in an interactive journey with the Screen Color Plugin. Create a visually appealing website that leaves a lasting impression.

## Contribution

Feel free to contribute with improvements, bug fixes, or new features. Open an issue or submit a pull request! Drop a message and let us know how you're using it! Let's collaborate!

## Support

For support, send me an email.

## License

This project is licensed under the MIT License, by Biasiolo.