import { MovieStatusPipe } from './movie-status.pipe';

describe('MovieStatusPipe', () => {
  it('create an instance', () => {
    const pipe = new MovieStatusPipe();
    expect(pipe).toBeTruthy();
  });
});
