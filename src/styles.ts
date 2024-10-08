import { css } from 'lit';

export const styles = css`
  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }

  /* General macro for buttons with hover and click effects */
  .button-style {
      color: var(--remote-text-color);
      border-radius: calc(var(--remotewidth)/10);
      cursor: pointer;
      transition: transform 0.1s ease-in-out, box-shadow 0.1s ease-in-out, filter 0.1s ease-in-out;
  }

  /* Hover-Effekt */
  .button-style:hover {
      filter: brightness(1.1) saturate(1.2); /*Helligkeit und Sättigung der Hintergrundfarbe beim Hover erhöhen */
    /* filter: sepia(0.3) hue-rotate(10deg) brightness(1.2); */ 
      transform: scale(1.1);
      /* filter: invert(0.1) brightness(1.1); */ 
  }

  /* Klick-Effekt Active-state) */
  .button-style:active {
      transform: scale(0.95);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      filter: brightness(1.2) saturate(1.5); /* Noch stärkerer Effekt beim Klick */
  }

  .tv_title {
    width: fit-content;
    alig: -webkit-center;
    display: block;
    margin: auto;
    font-size: calc(var(--scale) * 22px); 
    font-weight: normal;
    padding: calc(var(--remotewidth)/52) calc(var(--remotewidth)/26);
    border-radius: calc(var(--remotewidth)/10);
    background-color: var(--remote-button-color);            
  }

  /* Button for actual activity above Power*/
  .btn-act-action {
      width: fit-content;
      text-align: center;
      display: list-item;
      align-items: center; /* Centers the content vertically */
      justify-content: center; /* Centers the content horentionaly */
      margin: auto;
      width: calc(var(--remotewidth)/1.1);
      margin-top: 8px;
      font-size: calc(var(--scale) * 22px); 
      font-weight: normal;
      padding: calc(var(--remotewidth)/52)  calc(var(--remotewidth)/26); 
      border: 0px solid transparent;
      border-radius: calc(var(--remotewidth)/10);
      background-color: var(--remote-button-color);  
      cursor: pointer;
      overflow: hidden; /* Ensures text stays within the defined area */
      white-space: nowrap;
      transition: background-color 0.2s ease-in-out, transform 0.1s ease-in-out, box-shadow 0.1s ease-in-out, filter 0.1s ease-in-out;
  }

 .ripple {
    position: relative;
    overflow: hidden;
    transform: translate3d(0, 0, 0);
  } 

  .ripple:after {
    content: "";
    display: block;
    position: absolute;
    border-radius: 50%;
    top: 0;
    left: 0;
    pointer-events: none;
    background-image: radial-gradient(circle, #7a7f87 2%, transparent 10.01%);
    background-repeat: no-repeat;
    background-position: 50%;
    transform: scale(10, 10);
    opacity: 0;
    transition: transform .5s, opacity 1s;
  }

  .ripple:active:after {
    transform: scale(0, 0);
    opacity: .3;
    transition: 0s;
  }

/* Position of the card itself on lovelance */
  .card, .ripple:after {
    width: 100%;
    height: 100%; }

  .card {
    display: flex;
    justify-content: center;
  } 

  .page {
    background-color: var(--remote-color);
    height: 100%;
    display: inline-block;
    flex-direction: row;
    border: var(--main-border-width) solid var(--main-border-color);
    border-radius: calc(var(--remotewidth)/7.5);
    padding: calc(var(--remotewidth)/37.5) calc(var(--remotewidth)/15.2) calc(var(--remotewidth)/11);
  }

  .grid-container-power {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    background-color: transparent;
    overflow: hidden;
    width: var(--remotewidth);
    height: calc(var(--remotewidth)/3); }

  .grid-container-cursor, .grid-container-keypad {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    overflow: hidden;
    height: var(--remotewidth);
  }
  .grid-container-cursor {
    grid-template-rows: 1fr 1fr 1fr;
    width: var(--remotewidth);
    grid-template-areas: "ctl up act""left ok right""back down exit";}

  .grid-container-keypad {
    grid-template-rows: 1fr 1fr 1fr 1fr;
    background-color: transparent;
    background-color: var(--remote-button-color);
    border-radius: 35px;
    width: calc(var(--remotewidth) - 10%);
    margin: auto;
  }
  .grid-container-act {
    display: grid;
    background-color: transparent;
    overflow: hidden;
    width: var(--remotewidth);
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: calc(var(--remotewidth)/2) calc(var(--remotewidth)/.5115);
  }

  .grid-container-color_btn {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
    background-color: transparent;
    width: calc(var(--remotewidth)/1.1);
    overflow: hidden;
    margin: auto;
    margin-top:8px;
    gap: 4px;
    padding: 5px;
  }

  .grid-container-extra {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
    background-color: transparent;
    width: calc(var(--remotewidth)/1.1);
    overflow: hidden;
    margin: auto;
    margin-top:8px;         
    gap: 4px;
    padding: 0px;
  }  

  .grid-container-extra_2 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
    background-color: transparent;
    width: calc(var(--remotewidth)/1.1);
    overflow: hidden;
    margin: auto;
    margin-top:8px;         
    gap: 4px;
    padding: 0px;
  }

  .btn-extra {
    font-size: calc(var(--scale) * 16px);
    height: calc(var(--remotewidth) / 8); 
    width: 100%;
    background-color: var(--remote-button-color);
    color: var(--remote-text-color);
    border-width: 0;
    border-radius: calc(var(--remotewidth)/10);
    margin: auto;
    margin-left: 0px;
    display: grid;
    place-items: center;
    display: inline-block;
    cursor: pointer;
  }
  
  .mdi-extra {
    --mdc-icon-size: calc(var(--scale) * 32px);
    justify-content: center;
    align-items: center;
  }            

  .grid-container-color_btn {          
    height: calc(var(--remotewidth)/10);
  }

  .grid-container-media-control {
    /* grid-template-rows: 1fr 1fr;
    height: calc(var(--remotewidth)/2.85);*/
      display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 Spalten */
  grid-template-rows: 1fr 1fr; /* 2 Reihen */
  height: calc(var(--remotewidth)/4);
  }

  .grid-container-media-control, .grid-container-volume-channel-control {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    background-color: transparent;
    width: var(--remotewidth);
    height: calc(var(--remotewidth)/1.4);
    overflow: hidden;
    margin-top: calc(var(--remotewidth)/12);
  }
  .grid-container-media-control {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3 Spalten */
    grid-template-rows: 1fr 1fr; /* 2 Reihen */
    height: calc(var(--remotewidth)/2.85);
  }

  /* Overlay Action selector */
  .grid-item-act {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 3;
    display: grid;
    grid-template-columns: auto;
    background-color: var(--remote-button-color);
    margin: auto;
    margin-top: calc(var(--remotewidth)/2.6);
    overflow: scroll;
    height: calc(var(--remotewidth)*2.01);
    width: calc(var(--remotewidth) - 9%);
    border-radius: calc(var(--remotewidth)/12); }

  .grid-item-act::-webkit-scrollbar {
    display: none;
    -ms-overflow-style: none;}

  .shape, .shape-act, .act_text {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 1; }

  .shape {
    grid-row-end: 4;
    padding: 5px; }

  .shape-act {
    grid-row-end: 3; }

  .item_guide {
    grid-area: ctl; }

  .item_up {
    grid-area: up; }

  .item_act {
    grid-area: act; }

  .item_2_sx {
    grid-area: left; }

  .item_2_c {
    grid-area: ok;  }

  .item_right {
    grid-area: right;  }

  .item_back {
    grid-area: back;  }

  .item_down {
    grid-area: down;  }

  .item_exit {
    grid-area: exit; }

  ha-icon {
    width: calc(var(--remotewidth)/10.8);
    height: calc(var(--remotewidth)/10.8);
  }

  .bnt-act-back, .bnt-sound-back, .btn {
    font-size: calc(var(--remotewidth)/14.75);
    border-radius: 50%;
    place-items: center;
    display: inline-block;
    cursor: pointer;
  }

  .btn {
    background-color: var(--remote-button-color);
    color: var(--remote-text-color);
    width: 70%;
    height: 70%;
    /*transform: scale(0.9);*/         
    border-width: 0;
    margin: auto;
  }

  .bnt-act-back {
    background-color: transparent;
    margin-top: calc(var(--remotewidth)/21);
  }

  .bnt-act-back {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 2;
    color: var(--remote-text-color);
    width: 70%;
    height: 50%;
    border-width: 0;
    margin-left: calc(var(--remotewidth)/21);
  }

  .btn-keypad {
    color: var(--remote-text-color);
    border-width: 0; }

  .btn-extra {
    text-align: center;
    float: none;
    margin-right: -10px; }

  .btn-keypad {
    background-color: transparent;
    font-size: calc(var(--remotewidth)/10);
    width: 100%;
    height: 100%; }

  .btn-color {
    background-color: var(--remote-button-color);
    border-radius: calc(var(--remotewidth)/9);
    border-width: 0;
    place-items: center;
    cursor: pointer;
    }

  .btn-color {
    width: 85%;
    height: 100%
    margin: auto;
    background-color: inherit;
  }

  .btn-red {
      background-color: red;
  }

  .btn-blue {
      background-color: blue;
  }

  .btn-green {
      background-color: green;
  }

  .btn-yellow {
      background-color: yellow;
  }

  /* ACT Text */
  .btn-act, .btn-act-on {
      font-size: calc(var(--remotewidth)/10.5);
      height: calc(var(--remotewidth)/7.2226);
      border-width: 0;
      border-radius: calc(var(--remotewidth)/20);
      margin: calc(var(--remotewidth)/47);
      place-items: center;
      display: list-item;
      cursor: pointer;
      text-wrap: nowrap;
      display: inline-block;
      max-width: 100%;
  }

  .btn-act-scroll {
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    animation: scroll-text 5s linear infinite alternate;
  }

  @keyframes scroll-text {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(calc(-100% + 100px)); /* Adjust 100px to the width of the container */
    }
  }

  .btn-act {
      background-color: var(--remote-button-color);
      color: var(--remote-text-color);
      border: solid 2px var(--remote-color);
      transition: background-color 0.2s ease-in-out, transform 0.1s ease-in-out, box-shadow 0.1s ease-in-out, filter 0.1s ease-in-out;
  }

  /* Effect on Hover */
  .btn-act:hover {
      filter: brightness(1.1) saturate(1.2); /* Helligkeit und Sättigung der Hintergrundfarbe und des Rahmens beim Hover erhöhen */
  }

  /* Effekt on activfation (click) */
  .btn-act:active {
      transform: scale(0.95);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      filter: brightness(1.2) saturate(1.5); /* Noch stärkerer Effekt beim Klick */
  }

  .btn-act-on {
      /* background-color: var(--primary-color); */
      background-color: var(--remote-button-color);
      /*color: #fff;*/
      filter: invert(1);
  }

  .overlay {
    background-color: rgba(0, 0, 0, .02);
  }

  .flat-high {
    width: 70%;
    height: 47%;
  }

  .flat-low {
    width: 70%;
    height: 85%;
  }

  .btn-flat {
    background-color: var(--remote-button-color);
    color: var(--remote-text-color);
    /*font-size: calc(var(--remotewidth)/18.75);*/
    font-size: calc(var(--remotewidth)/14.75);
    border-width: 0;
    border-radius: calc(var(--remotewidth)/10);
    margin: auto;
    display: grid;
    place-items: center;
    display: inline-block;
    cursor: pointer;
  }

  .msc {
    --mdc-icon-size: calc(var(--scale) * 34px); }


  .ok_button {
    display: flex;
    color: var(--remote-text-color);
    justify-content: center;
    align-items: center;
    border: solid 3px var(--ha-card-background);
    border-radius: 100%;
    font-size: calc(var(--remotewidth)/12.6);
    cursor: pointer;
  }

  /********************* Editor.ts *******************/
    .heading {
      font-weight: bold; 
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 10px;
    }

    .color-item {
      display: inline-block;
      margin-right: 10px; 
      white-space: nowrap;
      margin-right: 10px; 
      word-wrap: nowrap; 
      margin-bottom: 14px; 
    }
    

    .form-group {
      margin-bottom: 16px;
    }

    .form-group label {
      display: block;
      margin-bottom: 4px;
      font-weight: bold;
    }

    .form-group input[type="number"],
    .form-group input[type="number"] {
      padding: 8px;
      box-sizing: border-box;
    }

    .activity-container {
      margin-bottom: 16px;
      padding: 16px;
      border: 1px solid #ccc;
      border-radius: 8px;
      filter: brightness(0.9); 
      width: 100%; 
      max-width: 280px;
      box-sizing: border-box; 
    }

    .outer-container {
      border: 1px solid #ccc;
      padding: 16px; */
      border-radius: 8px;
      background-color: #fefefe; 
      width: 50%; 
      max-width: 300px; 
      box-sizing: border-box;
      margin-top: 0px;
    }

    .activity-identifier {
      font-weight: bold;
      width: 150px; 
    }

    .activity-input {
      margin-left: 8px;
      width: 9ch; 
      box-sizing: border-box;
    }

    .import-activities {
      display: flex;
      align-items: center;
      margin: 12px; }

    .import-activities label {
      margin-left: 8px; }

    .import-activities .mdi-file-restore-outline {
      margin-right: 8px; }

    .info {
      padding: 16px; 
      border-radius: 8px; 
      border: 1px solid #eeeeee; }

  /************** Popop window ****************/
  .popup-container {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    max-width: 100%;
    justify-content: center; }

  .popup-dialog {
    --mdc-theme-surface: var(--popup-color); /* Hintergrundfarbe */
    --ha-dialog-border-radius: 10px; /* Optional: Rundungen des Dialogs */
    --mdc-dialog-content-padding: 0px;
    --mdc-dialog-min-width: 20vw;
    --mdc-dialog-max-width: 90vw; }

  .popup-dialog img:hover {
    transform: scale(1.1); 
  }   `;