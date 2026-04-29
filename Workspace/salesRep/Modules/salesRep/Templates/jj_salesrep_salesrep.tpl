{{#if showRepresentative}}
<div class="salesrep-card">
    <div class="salesrep-card-container">
        <!-- Profile Image -->
        <div class="salesrep-image-column">
            {{#if image}}
                <img src="{{image}}" class="salesrep-image-round" alt="{{name}}">
            {{else}}
                <div class="salesrep-image-placeholder-round">{{#if name}}{{name.[0]}}{{else}}R{{/if}}</div>
            {{/if}}
        </div>

        <!-- Sales Rep Details -->
        <div class="salesrep-info-column">
            <h2 class="salesrep-card-name">{{name}}</h2>
            <p class="salesrep-card-title">{{title}}</p>
   {{#if comments}}
                <p class="salesrep-card-bio">{{comments}}</p>
            {{/if}}

            <div class="salesrep-card-contact-list">
                {{#if email}}
                    <p><strong>Email:</strong> <a href="mailto:{{email}}">{{email}}</a></p>
                {{/if}}
                {{#if phone}}
                    <p><strong>Phone:</strong> <a href="tel:{{phone}}">{{phone}}</a></p>
                {{/if}}
            </div>

            <div class="salesrep-card-button-wrapper">
                <a href="{{meetingLink}}" class="salesrep-card-teal-button" target="_blank">Schedule a Meeting</a>
            </div>
        </div>
    </div>
</div>
{{else}}
    {{#unless isLoading}}
        <div class="salesrep-unavailable">
            <p>Your account representative is currently unavailable. Please contact support for assistance.</p>
        </div>
    {{/unless}}
{{/if}}