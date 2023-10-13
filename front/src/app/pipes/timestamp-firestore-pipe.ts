import { Pipe, PipeTransform } from '@angular/core';
import { Timestamp } from 'firebase/firestore';

@Pipe({ name: 'timestampFirestorePipe' })
export class TimestampFirestorePipe implements PipeTransform {
  transform(value: any): Date {
    return new Timestamp(value.seconds, value.nanos).toDate();
  }
}
