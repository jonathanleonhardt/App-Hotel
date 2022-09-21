/* eslint-disable @typescript-eslint/member-ordering */
import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.page.html',
	styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
	credentials: FormGroup;

	constructor(
		private fb: FormBuilder,
		private authService: AuthenticationService,
		private router: Router,
		private loadingController: LoadingController
	) {}

	ngOnInit() {
		this.credentials = this.fb.group({
			email: ['eve.holt@reqres.in', [Validators.required, Validators.email]],
			password: ['cityslicka', [Validators.required, Validators.minLength(6)]]
		});
	}

	// Easy access for form fields
	get email() {
		return this.credentials.get('email');
	}

	get password() {
		return this.credentials.get('password');
	}

	async login() {
		const loading = await this.loadingController.create();
		await loading.present();

		if (this.authService.login( this.credentials.value ) ) {
			await loading.dismiss();
			this.router.navigateByUrl('/home', { replaceUrl: true });
		}
	}
}
