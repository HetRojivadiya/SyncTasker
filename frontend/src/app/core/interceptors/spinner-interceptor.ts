import { HttpContextToken } from '@angular/common/http';

export const DISABLE_SPINNER = new HttpContextToken<boolean>(() => false);
