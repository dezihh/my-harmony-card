# Install Howto

There are two ways to install **My-Harmony-Card**. HACS is recommended, because
it handles updates for you.

## HACS (recommended)

My-Harmony-Card is part of the HACS default store – you do **not** need to add a
custom repository.

### 1. Open HACS

* Open your Home Assistant interface.
* Navigate to the sidebar and click on **HACS**.
* Open the search and search for **My-Harmony-Card**.

### 2. Download the card

* Click on **My-Harmony-Card**.
* Press **Download** and confirm.
* Reload your browser window (`Shift` + `F5`) or restart Home Assistant.

### 3. Add the card to a dashboard

* Open your dashboard, click the three dots and choose **Edit Dashboard**.
* Click **Add Card**, search for **My-Harmony-Card** and select it.
* Pick your Harmony entity (`remote.…`) – the visual editor creates a working
  configuration for you.
* Save.

## Manual install

If you don't use HACS:

### 1. Copy the file

* Download `my-harmony-card.js` from the latest
  [release](https://github.com/dezihh/my-harmony-card/releases).
* Copy it to `config/www/community/my-harmony-card/my-harmony-card.js`
  (create the directory if it does not exist).

### 2. Register the resource

* Open **Settings → Dashboards** and click the three dots in the upper right
  corner.
* Select **Resources**.
* Add `/local/community/my-harmony-card/my-harmony-card.js` with resource type
  **JavaScript module**.

In YAML mode the resource looks like this:

```yaml
lovelace:
  resources:
    - url: /local/community/my-harmony-card/my-harmony-card.js
      type: module
```

### 3. Reload

* Reload your browser window (`Shift` + `F5`).

## After installation

The card needs the [Logitech Harmony Hub](https://www.home-assistant.io/integrations/harmony/)
integration and works with the `remote.…` entity it creates.

* Configuration reference, examples and troubleshooting: [README.md](README.md)
* Problems with a specific button: see *Button Compatibility & Remapping* in the
  README.
* Bugs and feature requests: [Issues](https://github.com/dezihh/my-harmony-card/issues)
