const {
  isPrime,
  get5Posts,
  addPost,
  updatePost,
  deletePost,
} = require("./lib.js");

// first 20 primes
const primes = [
  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
];

// loop over primes and test if they are prime using jest
primes.forEach((prime) => {
  test(`${prime} is prime`, () => {
    expect(isPrime(prime)).toBe(true);
  });
});

const nonPrimes = [1, 4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20];

// loop over primes and test if they are prime using jest
nonPrimes.forEach((nonPrime) => {
  test(`${nonPrime} is not prime`, () => {
    expect(isPrime(nonPrime)).toBe(false);
  });
});

// test get5Posts using jest
test("get5Posts returns 5 posts", async () => {
  const posts = await get5Posts();
  //   console.log(posts);
  expect(posts.length).toBe(5);
});

// test addPost using jest
test("addPost adds a post", async () => {
  const post = await addPost();
  expect(post.id).toBe(101);
});

// test updatePost using jest
test("updatePost updates a post", async () => {
  const post = await updatePost();
  expect(post.title).toBe("foo");
});

// test deletePost using jest
// when a post is deleted, the response is an empty object
// so we test if the response is an empty object
test("deletePost deletes a post", async () => {
  const post = await deletePost();
  //   console.log(post);
  expect(post).toEqual({});
});

// test get5Posts using jest
// and check whether the userId is always an integer
//  and title length is greater than 5

test("get5Posts check userId and title", async () => {
  const posts = await get5Posts();
  //   console.log(posts);
  expect(posts.length).toBe(5);
  posts.forEach((post) => {
    expect(Number.isInteger(post.userId)).toBe(true);
    expect(post.title.length).toBeGreaterThan(5);
  });
});

//  test addPost function always returns an non empty object
test("addPost returns an non empty object", async () => {
  const response = await addPost();
  expect(response).not.toEqual({});
});

//  integration test

// create a new post
// update the post
// and then delete the post

test("integration test", async () => {
  const post = await addPost();
  const updatedPost = await updatePost();
  const deletedPost = await deletePost();
  expect(post).not.toEqual({});
  expect(updatedPost).not.toEqual({});
  expect(deletedPost).toEqual({});
});
