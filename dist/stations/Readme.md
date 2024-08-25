## Icons for Favorite Stations Popup

You can use the provided icons for station logos or upload your own.

The pre-included icons can be easily utilized by adding the image name (e.g., `zdf.png`) as the image in your favorites.

If you'd like to use additional or custom icons, you have two options:

1. **Add Icons to the Stations Directory:**   
Place your custom icons in the stations directory located within the subdirectory of this card.

2. **Set a Custom Favicon Path:**   
Alternatively, you can configure the faviconpath parameter in your configuration file to point to a different directory. Ensure that the path is accessible via a URL by Home Assistant. For instance, you can set faviconpath to `/local/icons`, and make sure that all required icons are stored in the physical directory `~/www/icons`.

You can test the setup by accessing the icon directly in your browser, e.g., `http://<home-assistant-ip:8123>/local/icons/zdf.png`.

If the icon appears correctly, you can proceed with configuring your favorite icons in MyHarmony as described.

Enjoy!
