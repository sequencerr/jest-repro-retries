import { Test, TestingModule } from '@nestjs/testing';
import { BirdsService } from './birds.service';
import { productsRepositoryMocked } from 'src/products/products.service.spec';

describe('BirdsService', () => {
	let service: BirdsService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [BirdsService, productsRepositoryMocked]
		}).compile();

		service = module.get<BirdsService>(BirdsService);
	});

	it('should be defined', () => {});

	describe('create()', () => {
		it('should successfully insert a bird', () => {
			expect(
				//
				service.create()
			).resolves.toEqual(undefined);
		});
	});
});
