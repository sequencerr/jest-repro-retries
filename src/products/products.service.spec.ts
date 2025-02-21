import { getRepositoryToken } from '@nestjs/typeorm';
import { Product } from './product.entity';

export const productsRepositoryMocked = {
	provide: getRepositoryToken(Product),
	useValue: {
		find: jest.fn().mockResolvedValue([]),
		findOneBy: jest.fn().mockResolvedValue([][0]),
		// it was commented to demonstrate that it actually doesn't matter whatever it's defined or not.
		findOneByOrFail: jest.fn().mockResolvedValue([][0]),
		save: jest.fn().mockResolvedValue([][0]),
		remove: jest.fn(),
		delete: jest.fn()
	}
};

describe('ProductsService', () => {
	it('test suite must contain at least one test. should be defined', () => {});
});
