import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationsService {
  async sendOrderEmail(to: string, items: string[]) {
    console.log('========== EMAIL ==========');
    console.log('To:', to);
    console.log('Items:', items);
    console.log('Email sent successfully!');
  }

  async sendOrderSms(to: string, items: string[]) {
    console.log('========== SMS ==========');
    console.log('To:', to);
    console.log('Items:', items);
    console.log('SMS sent successfully!');
  }
}