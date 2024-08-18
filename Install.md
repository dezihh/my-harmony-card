# Install Howto

If you like to install [**My-Harmony-Card**](https://github.com/dezihh/my-harmony-card/) in a manual way, there a two options:

## HACS Card install

### 1\. Access HACS

*   Open your Home Assistant interface.
*   Navigate to the sidebar and click on **HACS**.

### 2\. Open Frontend Section

*   In HACS, go to the **Frontend** tab.

### 3\. Add a Custom Repository

*   Click on the three dots (menu) in the upper right corner of the HACS Frontend page.
*   Select **Custom repositories** from the dropdown menu.

### 4\. Add My Harmony Card Repository

*   In the dialog that appears, you will see a text field labeled **"Repository"**.
*   Paste the following URL into this field: `https://github.com/dezihh/my-harmony-card`.
*   Set the **Category** to `Lovelace` from the dropdown menu.
*   Press the **Add** button.

### 5\. Install My Harmony Card

*   After adding the repository, close the custom repositories dialog.
*   Return to the HACS Frontend page, and you should now see **My-Harmony-Card** listed.
*   Click on **My-Harmony-Card**.
*   Press the **Download** button to install it.

### 6\. Configure Lovelace

*   Once the card is installed, you need to add it to your Lovelace dashboard.
*   Go to your Lovelace dashboard.
*   Click on the three dots (menu) in the upper right corner of the dashboard and select **Edit Dashboard**.
*   Click on **Add Card**.
*   Search for **My-Harmony-Card** and select it.
*   Configure the card settings as per your requirements and save it.

### Post-Installation

*   After installing and configuring My-Harmony-Card, you may need to refresh your Home Assistant page or restart Home Assistant to ensure the card loads correctly.
*   Refer to the documentation provided in the repository for any additional configuration options or troubleshooting tips.

By following these steps, you should have My-Harmony-Card successfully installed and running in your Home Assistant setup.

## Manual install

To do a complte manual install without HACS, please follow these steps:

### 1\. Navigate to Your Home Assistant Root Directory

*   Open a terminal window.
*   Navigate to the root directory of your Home Assistant installation. This is the directory where you find `configuration.yaml`.

```
cd /path/to/your/homeassistant/
```

*   Change to the www/community/ directory
*   Create a new directory for My Harmony Card ``mkdir my-harmony-card``
*   Download most actual version and verify Download
*   Unzip the my-harmony-card.zip
*   Make sure that "my-harmony-card.js" resides in your new created directory "my-harmony-card"
*   _Please note, you have to look to the releases to find the latest version id. Please enter the most recent version_

### 2\. Add the Resource in Home Assistant

*   Open your Home Assistant interface.
*   Go to a dashboard in the frontend and switch to edit mode by clicking the pencil icon in the upper right corner.
*   Click on the three dots (menu) in the upper right corner.
*   Select Resources or Manage Resources (the exact wording might vary).

### 3\. Add the JavaScript Module

*   Click on the blue Add Resource button.
*   In the URL field, enter: `/hacsfiles/my-harmony-card/my-harmony-card.js?hacstag=1718527325`

           --> HINT: `1718527325" is a unique number. If you do an update, you have to increment this number`

*   Set the Resource Type to JavaScript Module using the radio button.
*   Click Save.

### 4\. Refresh your broser

*   Reload your browser window by pressing Shift + F5 to ensure the new resource is loaded.

### Post-Installation

*   After completing these steps, My Harmony Card should be available for use in your Lovelace dashboard.  
    By following these steps, you should have My-Harmony-Card successfully installed and running in your Home Assistant setup  
    I recomand HACS setup, because of updatemangement
