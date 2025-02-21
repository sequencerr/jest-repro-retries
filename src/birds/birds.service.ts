import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Product } from 'src/products/product.entity';

@Injectable()
export class BirdsService {
	constructor(
		@InjectRepository(Product)
		private readonly productsRepository: Repository<Product>
	) {}

	async create() {
		await this.productsRepository.findOneByOrFail({});
	}
}
