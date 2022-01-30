import { Pipe, PipeTransform } from '@angular/core';
import { User } from 'src/app/entities/group';

@Pipe({
  name: 'usersToString'
})
export class UsersToStringPipe implements PipeTransform {

  transform(users: User[], ...args: unknown[]): string {
    return users.map(user => user.user_name).join(', ');
  }

}
