import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
class ServiceIcon extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
        /**
       * Hide the slotted content during edit mode. This must be here to work.
       */
        :host([edit-mode]) #slot {
          display: none;
        }

        #container {
          margin: 15px;
          padding: 5px;
        }

        #icon-wrap {
          border: solid 4px #e2801e;
          border-radius: 50%;
          padding: 25px;
          margin: 25px auto 0 auto;
          width: 100px;
        }

        iron-icon {
          width: 100px;
          height: 100px;
          fill: #e2801e;
        }

        #info-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 15px;
        }

        #title {
          text-transform: uppercase;
          text-align: center;
          font-size: 24px;
          margin: 0 0 5px 0;
          font-weight: 400;
        }

        #info {
          font-size: 16px;
          text-align: center;
          font-weight: 300;
          line-height: 1.4;
        }
      </style>
      <div id="container">
        <div id="icon-wrap">
          <div id="icon">
            <iron-icon icon="[[icon]]"></iron-icon>
          </div>
        </div>
        <div id="info-wrap">
          <div id="title">[[title]]</div>
          <div id="info">[[info]]</div>
        </div>
      </div>
    `;
  }
  static get tag() {
    return "service-icon";
  }
  static get properties() {
    return {
      /**
       * Icon source
       */
      icon: {
        type: String
      },
      /**
       * Title over icon
       */
      title: {
        type: String
      },
      /**
       * info text for icon
       */
      info: {
        type: String
      }
    };
  }
}
window.customElements.define(ServiceIcon.tag, ServiceIcon);
export { ServiceIcon };
