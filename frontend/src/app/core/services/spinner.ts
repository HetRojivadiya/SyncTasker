import { Injectable, signal, computed } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SpinnerService {

  private loadingSignal = signal(false);

  readonly loading$ = this.loadingSignal.asReadonly();

  readonly isLoading = computed(() => this.loadingSignal());

  show(): void {
    this.loadingSignal.set(true);
  }

  hide(): void {
    this.loadingSignal.set(false);
  }
}
