/* eslint-disable @typescript-eslint/member-ordering */
import { SystemService } from '../../services/system.service';
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
		private authService: SystemService,
		private router: Router,
		private loadingController: LoadingController
	) {}

	ngOnInit() {
		this.credentials = this.fb.group({
			email: ['jonathan@unisinos.br', [Validators.required, Validators.email]],
			password: ['abc321', [Validators.required, Validators.minLength(6)]]
		});
	}

	get email() {
		return this.credentials.get('email');
	}

	get password() {
		return this.credentials.get('password');
	}

	async login() {
		const loading = await this.loadingController.create();
		await loading.present();
		const userRole = this.authService.login( this.credentials.value );

		if ( userRole !== null ) {
			await loading.dismiss();
			if ( userRole === 'atendente' ) {
				this.router.navigateByUrl( '/atendente', { replaceUrl: true } );
			} else {
				this.router.navigateByUrl( '/hospede', { replaceUrl: true } );
			}
		}
	}
}
