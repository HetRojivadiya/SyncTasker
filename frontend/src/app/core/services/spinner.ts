import { Injectable, signal, computed, WritableSignal, Signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SpinnerService {

  private activeRequests: number = 0;
  private loadingSignal: WritableSignal<boolean> = signal(false);

  readonly loading$: Signal<boolean> = this.loadingSignal.asReadonly();
  readonly isLoading: Signal<boolean> = computed(() => this.loadingSignal());

  show(): void {
    this.activeRequests++;
    this.loadingSignal.set(true);
  }

  hide(): void {
    this.activeRequests = Math.max(0, this.activeRequests - 1);
    if (this.activeRequests === 0) {
      this.loadingSignal.set(false);
    }
  }
}
