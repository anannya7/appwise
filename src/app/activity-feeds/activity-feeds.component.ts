import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity-feeds',
  templateUrl: './activity-feeds.component.html',
  styleUrls: ['./activity-feeds.component.css']
})
export class ActivityFeedsComponent implements OnInit {
	activity_list;


  constructor() { }

  ngOnInit() {
  	this.activity_list = [
	   {
	   	author: "By The Associated Press",
		title: "US immigration to close holding area under El Paso bridge",
		description: "",
		url: "https://abcnews.go.com/US/wireStory/us-immigration-close-holding-area-el-paso-bridge-62080591",
		urlToImage: null,
		publishedAt: "2019-04-01T01:22:50+00:00",
		content: "U.S. immigration officials say they will close a holding area under a bridge connecting El Paso, Texas, with Juarez, Mexico, that is just a short distance from where a senior official declared an \"operational crisis\" at the border last week.\r\nIn a statement S… [+520 chars]"

	   },
	   {
	   	author: "By The Associated Press",
		title: "US immigration to close holding area under El Paso bridge",
		description: "",
		url: "https://abcnews.go.com/US/wireStory/us-immigration-close-holding-area-el-paso-bridge-62080591",
		urlToImage: null,
		publishedAt: "2019-04-01T01:22:50+00:00",
		content: "U.S. immigration officials say they will close a holding area under a bridge connecting El Paso, Texas, with Juarez, Mexico, that is just a short distance from where a senior official declared an \"operational crisis\" at the border last week.\r\nIn a statement S… [+520 chars]"

	   },
	   {
	   	author: "By The Associated Press",
		title: "US immigration to close holding area under El Paso bridge",
		description: "",
		url: "https://abcnews.go.com/US/wireStory/us-immigration-close-holding-area-el-paso-bridge-62080591",
		urlToImage: null,
		publishedAt: "2019-04-01T01:22:50+00:00",
		content: "U.S. immigration officials say they will close a holding area under a bridge connecting El Paso, Texas, with Juarez, Mexico, that is just a short distance from where a senior official declared an \"operational crisis\" at the border last week.\r\nIn a statement S… [+520 chars]"

	   },
	   {
	   	author: "By The Associated Press",
		title: "US immigration to close holding area under El Paso bridge",
		description: "",
		url: "https://abcnews.go.com/US/wireStory/us-immigration-close-holding-area-el-paso-bridge-62080591",
		urlToImage: null,
		publishedAt: "2019-04-01T01:22:50+00:00",
		content: "U.S. immigration officials say they will close a holding area under a bridge connecting El Paso, Texas, with Juarez, Mexico, that is just a short distance from where a senior official declared an \"operational crisis\" at the border last week.\r\nIn a statement S… [+520 chars]"

	   },
	   {
	   	author: "By The Associated Press",
		title: "US immigration to close holding area under El Paso bridge",
		description: "",
		url: "https://abcnews.go.com/US/wireStory/us-immigration-close-holding-area-el-paso-bridge-62080591",
		urlToImage: null,
		publishedAt: "2019-04-01T01:22:50+00:00",
		content: "U.S. immigration officials say they will close a holding area under a bridge connecting El Paso, Texas, with Juarez, Mexico, that is just a short distance from where a senior official declared an \"operational crisis\" at the border last week.\r\nIn a statement S… [+520 chars]"

	   },
	   {
	   	author: "By The Associated Press",
		title: "US immigration to close holding area under El Paso bridge",
		description: "",
		url: "https://abcnews.go.com/US/wireStory/us-immigration-close-holding-area-el-paso-bridge-62080591",
		urlToImage: null,
		publishedAt: "2019-04-01T01:22:50+00:00",
		content: "U.S. immigration officials say they will close a holding area under a bridge connecting El Paso, Texas, with Juarez, Mexico, that is just a short distance from where a senior official declared an \"operational crisis\" at the border last week.\r\nIn a statement S… [+520 chars]"

	   }

	 ]; 
  }

}
