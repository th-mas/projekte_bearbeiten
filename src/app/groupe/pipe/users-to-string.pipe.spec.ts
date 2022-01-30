import { UsersToStringPipe } from './users-to-string.pipe';

describe('UsersToStringPipe', () => {
  it('create an instance', () => {
    const pipe = new UsersToStringPipe();
    expect(pipe).toBeTruthy();
  });
});
