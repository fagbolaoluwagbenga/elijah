import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { Blog } from 'src/app/shared/interface/blog.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { BlogService } from 'src/app/shared/services/blog.service';
import { mimeType } from "./mime-type.validator";

@Component({
  selector: 'app-blog-post-create',
  templateUrl: './blog-post-create.component.html',
  styleUrls: ['./blog-post-create.component.scss']
})
export class BlogPostCreateComponent implements OnInit {

  // enteredTitle = "";
  // enteredContent = "";
  // post: Blog;
  // isLoading = false;
  // form: FormGroup;
  // imagePreview: string;
  // private mode = "create";
  // private postId: string;
  // private authStatusSub: Subscription;

  enteredTitle = "";
  enteredContent = "";
  post: Blog;
  isLoading = false;
  form: FormGroup;
  imagePreview: string;
  private mode = "create";
  private postId: string;
  private authStatusSub: Subscription;

  constructor(
    public postsService: BlogService,
    public route: ActivatedRoute,
    private authService: AuthService) {}

  ngOnInit(): void {
    this.authStatusSub = this.authService
      .getAuthStatusListener()
      .subscribe(authStatus => {
        this.isLoading = false;
      });

    this.form = new FormGroup({
      title: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      content: new FormControl(null, { validators: [Validators.required] }),
      image: new FormControl(null, {
        validators: [Validators.required],
        asyncValidators: [mimeType]
      })
    });

  }

  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({ image: file });
    this.form.get("image").updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  onSavePost() {
    if (this.form.invalid) {
      return;
    }
    this.isLoading = true;
    this.postsService.addPost(
      this.form.value.title,
      this.form.value.content,
      this.form.value.image
    );
    this.form.reset();
  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }

}
