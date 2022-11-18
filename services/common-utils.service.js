// import { Injectable,Inject, EventEmitter } from '@angular/core';
// import { environment } from '../../environments/environment';
// import { ServerInterfaceService, requestType } from './server-interface.service';

// export enum widgetTypes{
// 	TESTIMONIALS =<any>'testimonials',
// 	BLOCK_CONTENT = <any>'block-content',
// 	FEATURED_TRAINING = <any>'featured-training',
// 	LATEST_BLOGS = <any>'latest-blogs',
// 	SLIDER = <any>'slider',
// 	SPONSORS = <any>'sponsors',
// 	TAGS = <any>'tags',
// 	ABOUT_MINI = <any>'about-mini',
// 	LATEST_NEWS = <any>'latest-news',
// 	NEWSLETTER = <any>'newsletter',
// 	SOCIALLINKS = <any>'social-links',
// 	COPYRIGHT = <any>'copyright',
// 	TRAINING_SLIDER = <any>'training-slider',
// 	CLIENTS = <any>'clients'
// }

// @Injectable()
// export class CommonUtilsService {
// trainingDataLoaded = new EventEmitter()
// mediaServer:string =  environment.mediaServer;	
// 	activeMenu:any;
// 	curentPage:any = {
// 	}
// 	constructor(
// 		@Inject(ServerInterfaceService) private serverInterfaceService: ServerInterfaceService
// 	) { }
//   public urlResolver(file){
//   	return this.mediaServer+file;
//   }
//   public getCurrentPage(menu){
// 	  let request = {
// 		  URL: 'pages/' + menu._id,
// 		  method:requestType.GET
// 	  }
// 	  return this.serverInterfaceService.executeRequest(request);
//   }
//   public getrMenus(){
// 	  let request = {
// 		  URL: 'menus',
// 		  method: requestType.GET
// 	  }
// 	  return this.serverInterfaceService.executeRequest(request);
//   }
// 	public getPageDataUsingUrl(url){
// 		let request = {
// 			URL:'pages/'+url,
// 			method:requestType.GET,
// 		}
// 		return this.serverInterfaceService.executeRequest(request);
// 	}
// 	public getTrainingDataUsingUrl(url,params=null) {
// 		let request: any = {
// 			URL:  url,
// 			method: requestType.GET,
// 		}
// 		if (params){
// 			request.params = params
// 		}
// 		return this.serverInterfaceService.executeRequest(request).subscribe( (page:any) =>{
// 			this.curentPage.data = page;
// 			this.curentPage.data.showBreadcrumb = true;
// 			if (page.training && page.training.banner) {
// 				this.curentPage.data.bannerId = page.training.banner;
// 				this.curentPage.widgets.banner = [{
// 					imageUrl: page.imagesData[page.training.banner].imageUrl,
// 					published: true,
// 				}]
// 			}
// 			this.trainingDataLoaded.emit(page);
// 			return page;
// 		},error =>{
// 				this.curentPage.data = undefined;
// 		});
// 	}
// 	public getWidgets(){
// 		let request = {
// 			URL: 'widgets',
// 			method: requestType.GET,
// 		}
// 		return this.serverInterfaceService.executeRequest(request);
// 	}
// 	public getWidgetByType(type){
// 		const wid =  this.curentPage.widgets.filter((wid)=>{
// 			return wid.type==type;
// 		})
// 		return wid.length?wid[0]:null;
// 	}
// 	public getApplicationForm(id){
		
// 		let request = {
// 			URL: 'application-form/'+id,
// 			method: requestType.GET,
// 		}
// 		return this.serverInterfaceService.executeRequest(request);
// 	}
// 	public submitContactForm(payload){
// 		let request = {
// 			URL: 'contact/',
// 			method: requestType.POST,
// 			payload:payload
// 		}
// 		return this.serverInterfaceService.executeRequest(request);
// 	}
// 	public submitApplicationForm(payload){
// 		let request = {
// 			URL: 'application',
// 			method: requestType.POST,
// 			payload:payload
// 		}
// 		return this.serverInterfaceService.executeRequest(request);
// 	}

// public submitDoc(payload){
// 	let request = {
// 		URL: 'application/files',
// 		method: requestType.POST,
// 		payload:payload
// 	}
// 	return this.serverInterfaceService.executeRequest(request);
// }

// 	public submitRegisterForm(payload){
// 		let request = {
// 			URL: 'register/register',
// 			method: requestType.POST,
// 			payload:payload
// 		}
// 		return this.serverInterfaceService.executeRequest(request);
// 	}
// 	public getPostByUrl(url){
// 		let request = {
// 			URL:'posts/'+url,
// 			method:requestType.GET,
// 		}
// 		return this.serverInterfaceService.executeRequest(request);
// 	}
// 	public getAllPosts(params){
// 		this.curentPage.data = {}
// 		this.curentPage.data.showBreadcrumb = true;
// 		let request = {
// 			URL:'posts/',
// 			method:requestType.GET,
// 			params
// 		}
// 		return this.serverInterfaceService.executeRequest(request);
// 	}
// 	public searchPosts(url){
// 		let request = {
// 			URL:'posts/search/',
// 			method:requestType.GET,
// 			params:'search='+url
// 		}
// 		return this.serverInterfaceService.executeRequest(request);
// 	}
// 	public searchKeywords(url){
// 		let request = {
// 			URL:'posts/keyWords/',
// 			method:requestType.GET,
// 			params:'type='+url
// 		}
// 		return this.serverInterfaceService.executeRequest(request);
// 	}
// 	public clap(payload){
// 		let request = {
// 			URL: 'posts/claps',
// 			method: requestType.PUT,
// 			payload:payload
// 		}
// 		return this.serverInterfaceService.executeRequest(request);
// 	}
// }
