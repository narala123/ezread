import { Component, ViewChild } from '@angular/core';
import { Nav, Platform,MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { PhonicimagesComponent } from '../components/phonicimages/phonicimages';
import { BookmarksComponent } from '../components/bookmarks/bookmarks';
import { PhonicimageServiceProvider } from '../providers/phonicimage-service/phonicimage-service';
import { SideMenuContentComponent } from '../components/side-menu-content/side-menu-content';
import { MenuOptionModel } from "../components/side-menu-content/side-menu-content";
import { SideMenuSettings } from '../components/side-menu-content/side-menu-content';
@Component({
  templateUrl: 'app.html',
  styleUrls: ['/src/app/app.scss']

})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  @ViewChild(SideMenuContentComponent) sideMenu: SideMenuContentComponent;

  rootPage: any = HomePage;
  //public options: Array<MenuOptionModel>;
  pages: Array<{title: string, component: any}>;
  public listenWord;

  ///////////////////submenu//////////////////////
  public options: Array<MenuOptionModel>;

  // Settings for the SideMenuComponent
  public sideMenuSettings: SideMenuSettings = {
    accordionMode: true,
    showSelectedOption: true,
    selectedOptionClass: 'my-selected-option',
    subOptionIndentation: {
      md: '56px',
      ios: '64px',
      wp: '56px'
    }
  };
  //////////////////////////////////////

  constructor(public platform: Platform, public statusBar: StatusBar,
              public splashScreen: SplashScreen,private toggleService:PhonicimageServiceProvider,
              public menuCtrl:MenuController
  ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
   /* this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'BookMarksList', component: BookmarksComponent}

    ];*/

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.initializeOptions();
      //this.options = this.getSideMenuOptions();
    });
  }

/*  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }*/
  listenVOice(value){
    this.listenWord = value;
    this.toggleService.gettogglevalue(this.listenWord);
  }
  ///////submenucontent/////

  private initializeOptions(): void {
    this.options = new Array<MenuOptionModel>();

    // Load simple menu options
    // ------------------------------------------
   /* this.options.push({
      iconName: 'home',
      displayName: 'Home',
      component: HomePage,

      // This option is already selected
      selected: true
    });

    this.options.push({
      iconName: 'analytics',
      displayName: 'Option 1',
      component: ListPage
    });

    this.options.push({
      iconName: 'apps',
      displayName: 'Option 2',
      component: BookmarksComponent
    });

    this.options.push({
      displayName: 'Sub options with icons',
      subItems: [
        {
          iconName: 'basket',
          displayName: 'Sub Option 1',
          component: ListPage
        },
        {
          iconName: 'bookmark',
          displayName: 'Sub Option 2',
          component: BookmarksComponent
        }
      ]
    });*/
    this.options.push({
      iconName: 'home',
      displayName: 'Home',
      component: HomePage,

      // This option is already selected
      selected: true
    });

    this.options.push({
      iconName: 'analytics',
      displayName: 'family list',
      component: ListPage,
    });
    this.options.push({
      displayName: 'LESSON-1',
      subItems: [
        {
          iconName: 'basket',
          displayName: 'Intro-1',
          component: BookmarksComponent
        },
        {
          iconName: 'basket',
          displayName: 'Video',
          component: BookmarksComponent
        },

      /*  {
          iconName: 'bookmark',
          displayName: 'Sub Option 2',
          component: ListPage
        }*/
      ]
    });
    this.options.push({
      iconName: 'analytics',
      displayName: 'AudioData',
     // component: ,
    });

  /*  this.options.push({
      iconName: 'analytics',
      displayName: 'Favourites',
      component: BookmarksComponent,
    });*/

    /*this.options.push({
      displayName: 'componentLIst',
      subItems: [
        {
          displayName: 'LIST',
          component: ListPage
        },
        {
          displayName:'BMS',
          component:BookmarksComponent
        },
        {
          displayName: 'HOmePage',
          component: HomePage
        },

      ]
    });*/
  }
 /* public selectOption(option: MenuOptionModel): void {
    this.menuCtrl.close().then(() => {

       if (option.custom && option.custom.isLogin) {
       this.presentAlert('You\'ve clicked the login option!');
       } else if (option.custom && option.custom.isLogout) {
       this.presentAlert('You\'ve clicked the logout option!');
       } else if(option.custom && option.custom.isExternalLink) {
       let url = option.custom.externalUrl;
       window.open(url, '_blank');
       } else {
      // Redirect to the selected page
      this.nav.setRoot(option.component || HomePage, {'title': option.displayName});
    }
    });
  }
*/
  public selectOption(option: MenuOptionModel): void {
    console.log(option);
    this.menuCtrl.close().then(() => {

        this.nav.setRoot(option.component || ListPage, {'title': option.displayName});

    });
  }

  public collapseMenuOptions(): void {
    // Collapse all the options
    this.sideMenu.collapseAllOptions();
  }

}
