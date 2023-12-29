# SCREEN COLOR PLUGIN

![Downloads](https://img.shields.io/npm/dm/screen_color_plugin)

Elevate your website's aesthetics with the Screen Color Plugin – a robust jQuery tool that seamlessly integrates a screen color change button, bringing an engaging visual element to your web pages. he plugin now includes a button for automatic color change, cycling through colors every 2 seconds.

**Explore the live example at [Screen Color Button](https://screen-color-button.vercel.app/).**

If you find value in this plugin, consider contributing to support ongoing enhancements. Your donation helps us maintain and improve the plugin for the community.

[![Donate](https://img.shields.io/badge/Donate-$2-brightgreen)](https://www.paypal.com/donate/?hosted_button_id=9LNPLZ6BQ74YS)

[![Donation Counter](https://img.shields.io/badge/Donations-42-brightgreen)](https://www.paypal.com/donate/?hosted_button_id=9LNPLZ6BQ74YS)

## New Features
Automatic Color Change Button
The plugin now includes a button for automatic color change, cycling through colors every 2 seconds.

### Code Refactoring and Cleanup
The code has been reviewed and optimized for improved readability and performance.

## General Features
### Manual Color Change Button
The plugin provides an interactive button allowing manual change of background colors.

### Automatic Color Change Button
In addition to manual control, the plugin now includes a button to start or stop automatic color transition.

### Text Color Change for Contrast
Text automatically adjusts to ensure proper contrast with the selected background color.

## Customization
### Background Color Adjustment
Personalize background colors to suit your preferences by adding or removing options.

### Transition Time Adjustment
Configure transition times to control the speed of the animation.

### Text Color Adjustment
Modify text colors to ensure optimal visibility and contrast with the selected background color.

## Installation

1. **NPM:**
   - Run `npm install screen_color_plugin` to install the plugin.

2. **Initialization:**
   - Include jQuery and the plugin script in your HTML.
   - Select the desired button using jQuery and call the `screenColorChange()` method to activate the plugin.

   ```html
   <script src="path/to/jquery.min.js"></script>
   <script src="path/to/my-plugin.js"></script>
   <script>
    $(document).ready(function () {
      $("#scrollDownButton").screenColorChange({
        colors: [
          { name: "blue", color: "rgb(43, 174, 226)" },
          { name: "green", color: "rgb(43, 226, 113)" },
          { name: "yellow", color: "rgb(177, 226, 43)" },
          { name: "purple", color: "rgb(159, 43, 226)" },
          { name: "red", color: "rgb(214, 40, 40)" },
          { name: "black", color: "#080808" },
        ],
      });

      var autoChangeEnabled = false;

      $("#autoColorChangeSwitch").on("click", function () {
        autoChangeEnabled = !autoChangeEnabled;

        if (autoChangeEnabled) {
          // Inicie a mudança automática de cor
          startAutoColorChange();
        } else {
          // Pare a mudança automática de cor
          stopAutoColorChange();
        }
      });

      function autoChangeColor() {
        setInterval(function () {
          $("#scrollDownButton").click();
        }, 2000); // Mude a cor a cada 2 segundos
      }

      // Adicione esta função para parar a mudança automática de cor
      function stopAutoColorChange() {
        console.log("Parando a mudança automática de cor");
      }
    });
  </script>
   


## User Experience

Immerse your users in an interactive journey with the Screen Color Plugin. Create a visually appealing website that leaves a lasting impression.

## Contribution

Feel free to contribute with improvements, bug fixes, or new features. Open an issue or submit a pull request! Drop a message and let us know how you're using it! Let's collaborate!

## Support

For support, send me an email.

## License

This project is licensed under the MIT License, by Biasiolo.