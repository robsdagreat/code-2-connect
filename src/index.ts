import { BlogPost } from './models/blogPost';
import  { BlogManager }  from './managers/blogManager';

const blogManager = new BlogManager();

// Utility delay function
const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

async function runDemo() {
  console.log('\n=== Blog Manager Demo Starting ===\n');

  const post1 = new BlogPost('1', 'My First Blog', 'This is my first blog post.', 'Robert');
  const post2 = new BlogPost('2', 'Learning TypeScript', 'TypeScript makes JS safer and cleaner.', 'Robert');
  const post3 = new BlogPost('3', 'OOP in JS', 'Classes in JS help organize code better.', 'Jane');

  console.log('👉 Adding blog posts...');
  await delay(1000);
  blogManager.addPost(post1);
  await delay(1000);
  blogManager.addPost(post2);
  await delay(1000);
  blogManager.addPost(post3);

  console.log('\n📜 All Posts:');
  await delay(1000);
  blogManager.getAllPosts().forEach(post => console.log(post.getPostInfo()));

  console.log('\n🔍 Finding post with ID "2"...');
  await delay(1000);
  const found = blogManager.findPostById('2');
  if (found) console.log(found.getPostInfo());

  console.log('\n🧑 Posts by Author "Robert":');
  await delay(1000);
  blogManager.getPostsByAuthor('Robert').forEach(post => console.log(post.getPostInfo()));

  console.log('\n🔎 Posts with keyword "JS":');
  await delay(1000);
  blogManager.filterPostsByKeyword('JS').forEach(post => console.log(post.getPostInfo()));

  console.log('\n🕒 Recent Posts (limit 2):');
  await delay(1000);
  blogManager.getRecentPosts(2).forEach(post => console.log(post.getPostInfo()));

  console.log('\n✏️ Updating post with ID "1"...');
  await delay(1000);
  blogManager.updatePost('1', { content: 'Updated content for the first blog post.' });

  console.log('\n❌ Deleting post with ID "3"...');
  await delay(1000);
  blogManager.deletePost('3');

  console.log('\n📋 Final Posts:');
  await delay(1000);
  blogManager.getAllPosts().forEach(post => console.log(post.getPostInfo()));

  console.log('\n✅ Demo complete.\n');
}

runDemo();
