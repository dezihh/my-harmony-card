import { css } from 'lit';

export const styles = css`
  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }
          .tv_title {
            width: fit-content;
            alig: -webkit-center;
            display: block;
            margin: auto;
            padding: calc(var(--remotewidth)/52) calc(var(--remotewidth)/26);
            border-radius: calc(var(--remotewidth)/10);
            background-color: var(--remote-button-color);
          }
          button:focus {
            outline: 0;
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
          .blink {
            animation: blinker 1.5s linear infinite;
            color: red;
          }
          .card, .ripple:after {
            width: 100%;
            height: 100%}
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
            height: calc(var(--remotewidth)/3);
          }
          .grid-container-cursor, .grid-container-keypad {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            overflow: hidden;
            height: var(--remotewidth);
          }
          .grid-container-cursor {
            grid-template-rows: 1fr 1fr 1fr;
            width: var(--remotewidth);
            grid-template-areas: "ctl up act""left ok right""back down exit"}
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

          .grid-container-color_btn, .grid-container-extra {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            grid-template-rows: auto;
            background-color: transparent;
            width: calc(var(--remotewidth)/1.1);
            overflow: hidden;
            margin: auto;
            gap: 4px;
            padding: 10px;
          }
          .grid-container-color_btn {
            height: calc(var(--remotewidth)/10);
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
            grid-template-rows: 1fr 1fr;
            height: calc(var(--remotewidth)/2.85);
          }
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
            border-radius: calc(var(--remotewidth)/12);
          }
          .grid-item-act::-webkit-scrollbar {
            display: none;
            -ms-overflow-style: none;
          }
          .shape, .shape-act, .act_text {
            grid-column-start: 1;
            grid-column-end: 4;
            grid-row-start: 1;
          }
          .shape {
            grid-row-end: 4;
            padding: 5px;
          }
          .shape-act {
            grid-row-end: 3;
          }
          .item_guide {
          grid-area: ctl;
          }
          .item_up {
            grid-area: up;
          }
          .item_act {
            grid-area: act;
          }
          .item_2_sx {
            grid-area: left;
          }
          .item_2_c {
            grid-area: ok;
          }
          .item_right {
            grid-area: right;
          }
          .item_back {
            grid-area: back;
          }
          .item_down {
            grid-area: down;
          }
          .item_exit {
            grid-area: exit;
          }
          ha-icon {
            width: calc(var(--remotewidth)/10.8);
            height: calc(var(--remotewidth)/10.8);
          }
          .bnt-act-back, .bnt-sound-back, .btn {
            font-size: calc(var(--remotewidth)/18.75);
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
            border-width: 0;
          }

          .btn-keypad {
            background-color: transparent;
            font-size: calc(var(--remotewidth)/10);
            width: 100%;
            height: 100%}
          .btn-color {
            background-color: var(--remote-button-color);
            border-radius: calc(var(--remotewidth)/10);
            place-items: center;
            cursor: pointer;
          }
          .btn-color {
            width: 70%;
            height: 55%;
            margin: auto;
          }
          .btn-act, .btn-act-on {
            font-size: calc(var(--remotewidth)/18.5);
            height: calc(var(--remotewidth)/7.2226);
            border-width: 0;
            border-radius: calc(var(--remotewidth)/20);
            margin: calc(var(--remotewidth)/47);
            place-items: center;
            display: list-item;
            cursor: pointer;
          }
          .btn-act {
            background-color: var(--remote-button-color);
            color: var(--remote-text-color);
            border: solid 2px var(--remote-color);
          }
          .btn-act-on {
            background-color: var(--primary-color);
            color: #fff;
          }
          .overlay {
            background-color: rgba(0, 0, 0, .02);
          }
          .flat-high {
            width: 70%;
            height: 37%}
          .flat-low {
            width: 70%;
            height: 85%}
          .btn-flat {
            background-color: var(--remote-button-color);
            color: var(--remote-text-color);
            font-size: calc(var(--remotewidth)/18.75);
            border-width: 0;
            border-radius: calc(var(--remotewidth)/10);
            margin: auto;
            display: grid;
            place-items: center;
            display: inline-block;
            cursor: pointer;
          }


          .ok_button {
            display: flex;
            color: var(--remote-text-color);
            justify-content: center;
            align-items: center;
            border: solid 3px var(--ha-card-background);
            border-radius: 100%;
            font-size: calc(var(--remotewidth)/16.6);
            cursor: pointer;

          }
        `;
