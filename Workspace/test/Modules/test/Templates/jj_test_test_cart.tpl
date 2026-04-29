<div class="test-info-card" style="margin-top: 10px; border: 1px solid #ddd; padding: 10px; background: #f9f9f9; border-radius: 4px;">
    <h5 style="margin-top: 0; font-size: 14px; text-transform: uppercase; color: #333; border-bottom: 1px solid #eee; padding-bottom: 5px; margin-bottom: 8px;">Custom Delivery Details</h5>
    
    <p style="margin-bottom: 5px; font-size: 13px;"><strong>Expected Delivery:</strong> {{expectedDelivery}}</p>
    <p style="margin-bottom: 10px; font-size: 13px;"><strong>Special Note:</strong> {{specialNote}}</p>
    
    <div style="margin-bottom: 10px;">
        <label style="display: block; font-size: 13px; font-weight: bold; margin-bottom: 5px;">Delivery Note Instructions:</label>
        <input type="text" data-action="update-delivery-note-cart" value="{{deliveryNote}}" placeholder="Enter note (min 5 characters)" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px; font-size: 13px; background: #fff;">
    </div>
    
    <button class="test-cart-warranty-button" data-action="show-warranty-info" style="background-color: #007bff; color: white; border: none; padding: 6px 12px; border-radius: 4px; cursor: pointer; font-size: 12px; font-weight: bold;">
        View Warranty Info
    </button>
</div>
