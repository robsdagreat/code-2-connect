import { BlogPost } from '../models/blogPost';

export class BlogManager {
  private posts: BlogPost[] = [];

  // Add a new blog post with duplicate ID validation
  public addPost(blogPost: BlogPost): boolean {
    // Check for duplicate ID
    if (this.findPostById(blogPost.id)) {
      console.error(`Error: A post with ID "${blogPost.id}" already exists.`);
      return false;
    }

    this.posts.push(blogPost);
    console.log(`Post "${blogPost.title}" added successfully.`);
    return true;
  }

  // Retrieve all blog posts
  public getAllPosts(): BlogPost[] {
    return [...this.posts]; // Return a copy to prevent external modification
  }

  // Find and return a blog post by its ID
  public findPostById(id: string): BlogPost | undefined {
    return this.posts.find(post => post.id === id);
  }

  // Bonus: Get posts by author
  public getPostsByAuthor(author: string): BlogPost[] {
    return this.posts.filter(post => 
      post.author.toLowerCase().includes(author.toLowerCase())
    );
  }

  // Bonus: Filter posts by keyword in title or content
  public filterPostsByKeyword(keyword: string): BlogPost[] {
    const lowercaseKeyword = keyword.toLowerCase();
    return this.posts.filter(post => 
      post.title.toLowerCase().includes(lowercaseKeyword) ||
      post.content.toLowerCase().includes(lowercaseKeyword)
    );
  }

  // Bonus: Get recent posts with limit
  public getRecentPosts(limit: number = 10): BlogPost[] {
    return this.posts
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
      .slice(0, limit);
  }

  // Additional utility methods
  public getPostCount(): number {
    return this.posts.length;
  }

  public deletePost(id: string): boolean {
    const index = this.posts.findIndex(post => post.id === id);
    if (index !== -1) {
      this.posts.splice(index, 1);
      console.log(`Post with ID "${id}" deleted successfully.`);
      return true;
    }
    console.error(`Error: Post with ID "${id}" not found.`);
    return false;
  }

  public updatePost(id: string, updates: Partial<Pick<BlogPost, 'title' | 'content' | 'author'>>): boolean {
    const post = this.findPostById(id);
    if (!post) {
      console.error(`Error: Post with ID "${id}" not found.`);
      return false;
    }

    if (updates.title) post.title = updates.title;
    if (updates.content) post.content = updates.content;
    if (updates.author) post.author = updates.author;

    console.log(`Post with ID "${id}" updated successfully.`);
    return true;
  }

  public clearAllPosts(): void {
    this.posts = [];
    console.log("All posts cleared.");
  }
}