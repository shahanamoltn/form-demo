{{#unless isLoading}}
    {{#if showRepresentative}}
        <div class="salesrepe-card">
            <div class="salesrepe-card-container">
                
                {{!-- Left side: Large circular image --}}
                <div class="salesrepe-image-column">
                    {{#if image}}
                        <img src="{{image}}" alt="{{name}}" class="salesrepe-image-round">
                    {{else}}
                        <div class="salesrepe-image-placeholder-round">
                            <span>{{name.[0]}}</span>
                        </div>
                    {{/if}}
                </div>

                {{!-- Right side: Information and Action --}}
                <div class="salesrepe-info-column">
                    <h2 class="salesrepe-card-name">{{name}}</h2>
                    <p class="salesrepe-card-title">{{title}}</p>
                    
                    {{#if comments}}
                        <p class="salesrepe-card-bio">{{comments}}</p>
                    {{/if}}

                    <div class="salesrepe-card-contact-list">
                        <p><strong>Email:</strong> <a href="mailto:{{email}}">{{email}}</a></p>
                        <p><strong>Phone:</strong> <a href="tel:{{phone}}">{{phone}}</a></p>
                        {{#if meetingLink}}
                            <p><strong>LinkedIn:</strong> <a href="{{meetingLink}}" target="_blank">Connect with {{name}}</a></p>
                        {{/if}}
                    </div>

                    {{#if meetingLink}}
                        <div class="salesrepe-card-button-wrapper">
                            <a href="{{meetingLink}}" class="salesrepe-card-green-button" target="_blank">
                                Schedule a Meeting
                            </a>
                        </div>
                    {{/if}}
                </div>

            </div>
        </div>
    {{else}}
        <div class="salesrepe-unavailable">
            <p>{{translate 'Your representative information is currently unavailable.'}}</p>
        </div>
    {{/if}}
{{/unless}}