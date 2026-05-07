{{#if showDeliverySection}}
  <section class="testextension-delivery" style="margin-top: 15px; padding: 15px; border: 1px solid #e3e3e3; background: #fcfcfc;">
      <h4 class="testextension-delivery__title" style="margin-bottom: 10px;">Custom Delivery Details</h4>
      
      <p class="testextension-delivery__info">Expected Delivery: <strong>{{custitem_expected_delivery}}</strong></p>
      <p class="testextension-delivery__note">Special Note: <em>{{custcol_special_note}}</em></p>
      
      <div class="testextension-delivery__form-group" style="margin-top: 10px;">
        <label class="testextension-delivery__label" style="display:block; margin-bottom: 5px;">Delivery Note Instructions:</label>
        <input type="text" class="testextension-delivery__input" data-action="update-delivery-note" placeholder="Enter note (min 5 characters)" value="{{custcol_delivery_note}}" {{#if isReadOnly}}readonly{{/if}} style="width: 100%; border: 1px solid #ccc; padding: 8px; box-sizing: border-box;"/>
      </div>
      {{#if showWarrantyInfo}}
         <button class="testextension-delivery__button" data-action="show-warranty-info" style="margin-top: 15px; padding: 8px 15px; background: #007bff; color: white; border: none; cursor: pointer; border-radius: 3px;">
            View Warranty Info
         </button>
      {{/if}}
  </section>
{{/if}}