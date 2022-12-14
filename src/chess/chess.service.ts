import { Injectable } from '@nestjs/common';

@Injectable()
export class ChessService {
  create() {
    return 'This action adds a new chess';
  }

  findAll() {
    return `This action returns all chess`;
  }

  findOne(id: number) {
    return `This action returns a #${id} chess`;
  }

  update(id: number) {
    return `This action updates a #${id} chess`;
  }

  remove(id: number) {
    return `This action removes a #${id} chess`;
  }
}
