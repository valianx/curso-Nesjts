import { BadRequestException, PipeTransform } from '@nestjs/common';
import { TaskStatus } from '../task.model';

export class TaskValidationPipe implements PipeTransform {
  transform(value: any) {
    value = value.toUpperCase();
    if (!(value in TaskStatus)) {
      throw new BadRequestException(`"${value}" is not a valid status`);
    }
    return value;
  }
}
