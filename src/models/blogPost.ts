
export class BlogPost {
    private _id: string;
    private _title: string;
    private _content: string;
    private _author: string;
    private _createdAt: Date;
  
    constructor(id: string, title: string, content: string, author: string) {
      this._id = id;
      this._title = title;
      this._content = content;
      this._author = author;
      this._createdAt = new Date();
    }
  
    // Getters
    public get id(): string {
      return this._id;
    }
  
    public get title(): string {
      return this._title;
    }
  
    public get content(): string {
      return this._content;
    }
  
    public get author(): string {
      return this._author;
    }
  
    public get createdAt(): Date {
      return this._createdAt;
    }
  
    // Setters
    public set title(value: string) {
      this._title = value;
    }
  
    public set content(value: string) {
      this._content = value;
    }
  
    public set author(value: string) {
      this._author = value;
    }
  
    // Method to display post info
    public getPostInfo(): string {
      return `ID: ${this._id}, Title: ${this._title}, Author: ${this._author}, Created: ${this._createdAt.toLocaleDateString()}`;
    }
  }