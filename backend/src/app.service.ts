import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }


  async getTasks(): Promise<{ id: number; title: string }[]> {
   
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return [
      { id: 1, title: 'Task One' },
      { id: 2, title: 'Task Two' },
    ];
  }

}
