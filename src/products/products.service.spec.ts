import { getRepositoryToken } from '@nestjs/typeorm';
import { Product } from './product.entity';

jest.retryTimes(1);

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

describe('ProductsService', () => {
	it('should be defined', () => {});
});
