import { Injectable } from '@nestjs/common';
import { NotificationsService } from '../notifications/notifications.service';
import { ProductsService } from '../products/products.service';

@Injectable()
export class OrdersService {
  constructor(
    private readonly notificationsService: NotificationsService,
    private readonly productsService: ProductsService,
  ) {}

  async createOrder(user: { email: string; phone: string }, productIds: string[]) {
    // Look up products by IDs
    const products = productIds.map(id => this.productsService.findById(id));

    // Build order object (for now, just in memory)
    const order = { id: Date.now(), user, products };

    // Trigger notifications
    await this.notificationsService.sendOrderEmail(
      user.email,
     products.filter((p): p is NonNullable<typeof p> => p !== undefined).map(p => p.name)
    );
    await this.notificationsService.sendOrderSms(
      user.phone,
      products.filter((p): p is NonNullable<typeof p> => p !== undefined).map(p => p.name)
    );

    return { message: 'Order created successfully', order };
  }
}


