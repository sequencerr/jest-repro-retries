import { getRepositoryToken } from '@nestjs/typeorm';
import { Product } from './product.entity';

export const productsRepositoryMocked = {
	provide: getRepositoryToken(Product),
	useValue: {
		find: jest.fn().mockResolvedValue([]),
		findOneBy: jest.fn().mockResolvedValue([][0]),
		// findOneByOrFail: jest.fn().mockResolvedValue([][0]),
		save: jest.fn().mockResolvedValue([][0]),
		remove: jest.fn(),
		delete: jest.fn()
	}
};
