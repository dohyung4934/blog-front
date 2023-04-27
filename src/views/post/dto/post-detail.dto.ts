export interface PostDetailDto {
  id: string
  title: string
  contents: string
  author: string
}

export interface PostDetailResponse {
  postDetail: PostDetailDto
}
