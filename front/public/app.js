if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __metadata !== "function") __metadata = function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// <reference path="../typings/tsd.d.ts" />
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var topbar_1 = require('./src/components/topbar');
var navigation_1 = require('./src/components/navigation');
var login_1 = require('./src/controllers/login');
var logout_1 = require('./src/controllers/logout');
var comingsoon_1 = require('./src/controllers/comingsoon');
var newsfeed_1 = require('./src/controllers/newsfeed/newsfeed');
var capture_1 = require('./src/controllers/capture/capture');
var discovery_1 = require('./src/controllers/discovery/discovery');
var channel_1 = require('./src/controllers/channels/channel');
var gatherings_1 = require('./src/plugins/gatherings/gatherings');
var Minds = (function () {
    function Minds() {
        this.name = 'Minds';
    }
    Minds = __decorate([
        angular2_1.Component({
            selector: 'minds-app',
        }),
        router_1.RouteConfig([
            { path: '/login', component: login_1.Login, as: 'login' },
            { path: '/logout', component: logout_1.Logout, as: 'logout' },
            { path: '/newsfeed', component: newsfeed_1.Newsfeed, as: 'newsfeed' },
            { path: '/capture', component: capture_1.Capture, as: 'capture' },
            { path: '/discovery', component: discovery_1.Discovery, as: 'discovery' },
            { path: '/messenger', component: gatherings_1.Gatherings, as: 'messenger' },
            { path: '/notifications', component: comingsoon_1.ComingSoon, as: 'notifications' },
            { path: '/groups', component: comingsoon_1.ComingSoon, as: 'groups' },
            { path: '/:username', component: channel_1.Channel, as: 'channel' }
        ]),
        angular2_1.View({
            templateUrl: './templates/index.html',
            directives: [topbar_1.Topbar, navigation_1.Navigation, router_1.RouterOutlet, router_1.RouterLink]
        }), 
        __metadata('design:paramtypes', [])
    ], Minds);
    return Minds;
})();
angular2_1.bootstrap(Minds, [router_1.routerInjectables, angular2_1.httpInjectables]);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6WyJNaW5kcyIsIk1pbmRzLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDRDQUE0QztBQUM1Qyx5QkFBMEQsbUJBQW1CLENBQUMsQ0FBQTtBQUM5RSx1QkFBdUUsaUJBQWlCLENBQUMsQ0FBQTtBQUV6Rix1QkFBcUIseUJBQXlCLENBQUMsQ0FBQTtBQUMvQywyQkFBeUIsNkJBQTZCLENBQUMsQ0FBQTtBQUV2RCxzQkFBb0IseUJBQXlCLENBQUMsQ0FBQTtBQUM5Qyx1QkFBcUIsMEJBQTBCLENBQUMsQ0FBQTtBQUNoRCwyQkFBeUIsOEJBQThCLENBQUMsQ0FBQTtBQUN4RCx5QkFBdUIscUNBQXFDLENBQUMsQ0FBQTtBQUM3RCx3QkFBc0IsbUNBQW1DLENBQUMsQ0FBQTtBQUMxRCwwQkFBd0IsdUNBQXVDLENBQUMsQ0FBQTtBQUNoRSx3QkFBc0Isb0NBQW9DLENBQUMsQ0FBQTtBQUMzRCwyQkFBeUIscUNBQXFDLENBQUMsQ0FBQTtBQUUvRDtJQXlCRUE7UUFDRUMsSUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsT0FBT0EsQ0FBQ0E7SUFDdEJBLENBQUNBO0lBM0JIRDtRQUFDQSxvQkFBU0EsQ0FBQ0E7WUFDVEEsUUFBUUEsRUFBRUEsV0FBV0E7U0FDdEJBLENBQUNBO1FBQ0RBLG9CQUFXQSxDQUFDQTtZQUNYQSxFQUFFQSxJQUFJQSxFQUFFQSxRQUFRQSxFQUFFQSxTQUFTQSxFQUFFQSxhQUFLQSxFQUFFQSxFQUFFQSxFQUFFQSxPQUFPQSxFQUFFQTtZQUNqREEsRUFBRUEsSUFBSUEsRUFBRUEsU0FBU0EsRUFBRUEsU0FBU0EsRUFBRUEsZUFBTUEsRUFBRUEsRUFBRUEsRUFBRUEsUUFBUUEsRUFBRUE7WUFDcERBLEVBQUVBLElBQUlBLEVBQUVBLFdBQVdBLEVBQUVBLFNBQVNBLEVBQUVBLG1CQUFRQSxFQUFFQSxFQUFFQSxFQUFFQSxVQUFVQSxFQUFFQTtZQUMxREEsRUFBRUEsSUFBSUEsRUFBRUEsVUFBVUEsRUFBRUEsU0FBU0EsRUFBRUEsaUJBQU9BLEVBQUVBLEVBQUVBLEVBQUVBLFNBQVNBLEVBQUVBO1lBQ3ZEQSxFQUFFQSxJQUFJQSxFQUFFQSxZQUFZQSxFQUFFQSxTQUFTQSxFQUFFQSxxQkFBU0EsRUFBRUEsRUFBRUEsRUFBRUEsV0FBV0EsRUFBQ0E7WUFFNURBLEVBQUVBLElBQUlBLEVBQUVBLFlBQVlBLEVBQUVBLFNBQVNBLEVBQUdBLHVCQUFVQSxFQUFFQSxFQUFFQSxFQUFFQSxXQUFXQSxFQUFDQTtZQUU5REEsRUFBRUEsSUFBSUEsRUFBRUEsZ0JBQWdCQSxFQUFFQSxTQUFTQSxFQUFFQSx1QkFBVUEsRUFBRUEsRUFBRUEsRUFBRUEsZUFBZUEsRUFBQ0E7WUFDckVBLEVBQUVBLElBQUlBLEVBQUVBLFNBQVNBLEVBQUVBLFNBQVNBLEVBQUVBLHVCQUFVQSxFQUFFQSxFQUFFQSxFQUFFQSxRQUFRQSxFQUFDQTtZQUV2REEsRUFBRUEsSUFBSUEsRUFBRUEsWUFBWUEsRUFBRUEsU0FBU0EsRUFBRUEsaUJBQU9BLEVBQUVBLEVBQUVBLEVBQUVBLFNBQVNBLEVBQUVBO1NBQzFEQSxDQUFDQTtRQUNEQSxlQUFJQSxDQUFDQTtZQUNKQSxXQUFXQSxFQUFFQSx3QkFBd0JBO1lBQ3JDQSxVQUFVQSxFQUFFQSxDQUFDQSxlQUFNQSxFQUFFQSx1QkFBVUEsRUFBRUEscUJBQVlBLEVBQUVBLG1CQUFVQSxDQUFDQTtTQUMzREEsQ0FBQ0E7O2NBUURBO0lBQURBLFlBQUNBO0FBQURBLENBNUJBLElBNEJDO0FBRUQsb0JBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQywwQkFBaUIsRUFBRSwwQkFBZSxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG5pbXBvcnQge0NvbXBvbmVudCwgVmlldywgYm9vdHN0cmFwLCBodHRwSW5qZWN0YWJsZXN9IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcbmltcG9ydCB7Um91dGVDb25maWcsIFJvdXRlck91dGxldCwgUm91dGVyTGluaywgcm91dGVySW5qZWN0YWJsZXN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5cbmltcG9ydCB7VG9wYmFyfSBmcm9tICcuL3NyYy9jb21wb25lbnRzL3RvcGJhcic7XG5pbXBvcnQge05hdmlnYXRpb259IGZyb20gJy4vc3JjL2NvbXBvbmVudHMvbmF2aWdhdGlvbic7XG5cbmltcG9ydCB7TG9naW59IGZyb20gJy4vc3JjL2NvbnRyb2xsZXJzL2xvZ2luJztcbmltcG9ydCB7TG9nb3V0fSBmcm9tICcuL3NyYy9jb250cm9sbGVycy9sb2dvdXQnO1xuaW1wb3J0IHtDb21pbmdTb29ufSBmcm9tICcuL3NyYy9jb250cm9sbGVycy9jb21pbmdzb29uJztcbmltcG9ydCB7TmV3c2ZlZWR9IGZyb20gJy4vc3JjL2NvbnRyb2xsZXJzL25ld3NmZWVkL25ld3NmZWVkJztcbmltcG9ydCB7Q2FwdHVyZX0gZnJvbSAnLi9zcmMvY29udHJvbGxlcnMvY2FwdHVyZS9jYXB0dXJlJztcbmltcG9ydCB7RGlzY292ZXJ5fSBmcm9tICcuL3NyYy9jb250cm9sbGVycy9kaXNjb3ZlcnkvZGlzY292ZXJ5JztcbmltcG9ydCB7Q2hhbm5lbH0gZnJvbSAnLi9zcmMvY29udHJvbGxlcnMvY2hhbm5lbHMvY2hhbm5lbCc7XG5pbXBvcnQge0dhdGhlcmluZ3N9IGZyb20gJy4vc3JjL3BsdWdpbnMvZ2F0aGVyaW5ncy9nYXRoZXJpbmdzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWluZHMtYXBwJyxcbn0pXG5AUm91dGVDb25maWcoW1xuICB7IHBhdGg6ICcvbG9naW4nLCBjb21wb25lbnQ6IExvZ2luLCBhczogJ2xvZ2luJyB9LFxuICB7IHBhdGg6ICcvbG9nb3V0JywgY29tcG9uZW50OiBMb2dvdXQsIGFzOiAnbG9nb3V0JyB9LFxuICB7IHBhdGg6ICcvbmV3c2ZlZWQnLCBjb21wb25lbnQ6IE5ld3NmZWVkLCBhczogJ25ld3NmZWVkJyB9LFxuICB7IHBhdGg6ICcvY2FwdHVyZScsIGNvbXBvbmVudDogQ2FwdHVyZSwgYXM6ICdjYXB0dXJlJyB9LFxuICB7IHBhdGg6ICcvZGlzY292ZXJ5JywgY29tcG9uZW50OiBEaXNjb3ZlcnksIGFzOiAnZGlzY292ZXJ5J30sXG5cbiAgeyBwYXRoOiAnL21lc3NlbmdlcicsIGNvbXBvbmVudDogIEdhdGhlcmluZ3MsIGFzOiAnbWVzc2VuZ2VyJ30sXG5cbiAgeyBwYXRoOiAnL25vdGlmaWNhdGlvbnMnLCBjb21wb25lbnQ6IENvbWluZ1Nvb24sIGFzOiAnbm90aWZpY2F0aW9ucyd9LFxuICB7IHBhdGg6ICcvZ3JvdXBzJywgY29tcG9uZW50OiBDb21pbmdTb29uLCBhczogJ2dyb3Vwcyd9LFxuXG4gIHsgcGF0aDogJy86dXNlcm5hbWUnLCBjb21wb25lbnQ6IENoYW5uZWwsIGFzOiAnY2hhbm5lbCcgfVxuXSlcbkBWaWV3KHtcbiAgdGVtcGxhdGVVcmw6ICcuL3RlbXBsYXRlcy9pbmRleC5odG1sJyxcbiAgZGlyZWN0aXZlczogW1RvcGJhciwgTmF2aWdhdGlvbiwgUm91dGVyT3V0bGV0LCBSb3V0ZXJMaW5rXVxufSlcblxuY2xhc3MgTWluZHMge1xuICBuYW1lOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5uYW1lID0gJ01pbmRzJztcbiAgfVxufVxuXG5ib290c3RyYXAoTWluZHMsIFtyb3V0ZXJJbmplY3RhYmxlcywgaHR0cEluamVjdGFibGVzXSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=