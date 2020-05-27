import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

let http;
@Injectable({providedIn: 'root'})
class MyService {
	constructor(private http: HttpClient) {
		http = this.http;
	}
	
	foo() {
		return this.http.get('https://jsonplaceholder.typicode.com/users/2');
		
		var url = '';
		var options = {};
		var method = '';
		var body;
		
		http.get(url, options)

		http.post(url, body, options)

		http.request(method, url, options)
		http.request('GET', 'path/to', {responseType:'json', params: {}})
	}
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
import { Component } from '@angular/core';

@Component({selector: 'app-root', template: 'hi {{name}}'})
class AppComponent {
	name = 'javad';
	constructor(public myService: MyService) {
		this.myService.foo().subscribe((r:any) => this.name = r.name);
	}
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, HttpClientModule],
	providers: [MyService],
	bootstrap: [AppComponent]
})
export class AppModule {}